/**
 * Cloudinary helper functions voor optimale image delivery
 */

interface CloudinaryImage {
    cloudinary?: {
        secure_url: string;
        public_id: string;
        format: string;
        width: number;
        height: number;
    };
}

/**
 * Genereer geoptimaliseerde Cloudinary URL met transformaties
 * @param image - Payload media object met Cloudinary data
 * @param options - Transformatie opties
 */
export function getCloudinaryUrl(
    image: CloudinaryImage | null | undefined,
    options: {
        width?: number;
        height?: number;
        quality?: 'auto' | number;
        format?: 'auto' | 'webp' | 'jpg' | 'png';
        crop?: 'fill' | 'fit' | 'scale' | 'limit';
        gravity?: 'auto' | 'face' | 'center';
    } = {}
): string | null {
    if (!image?.cloudinary?.public_id) return null;

    const {
        width,
        height,
        quality = 'auto',
        format = 'auto',
        crop = 'limit',
        gravity = 'auto',
    } = options;

    const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || 'dgf7hospk';
    const transformations: string[] = [];

    // Quality
    transformations.push(`q_${quality}`);

    // Format
    transformations.push(`f_${format}`);

    // Dimensions
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    if (width || height) {
        transformations.push(`c_${crop}`);
        if (crop === 'fill') transformations.push(`g_${gravity}`);
    }

    // Lazy loading optimization
    transformations.push('fl_progressive');

    const transformString = transformations.join(',');
    return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}/${image.cloudinary.public_id}.${format === 'auto' ? image.cloudinary.format : format}`;
}

/**
 * Genereer responsive srcset voor Cloudinary image
 */
export function getCloudinarySrcSet(
    image: CloudinaryImage | null | undefined,
    widths: number[] = [640, 768, 1024, 1280, 1536, 1920]
): string | null {
    if (!image?.cloudinary?.public_id) return null;

    return widths
        .map((width) => {
            const url = getCloudinaryUrl(image, { width, quality: 'auto', format: 'auto' });
            return `${url} ${width}w`;
        })
        .join(', ');
}

/**
 * Helper om image URL te krijgen (Cloudinary of fallback)
 */
export function getImageUrl(
    image: CloudinaryImage | null | undefined,
    fallbackUrl?: string,
    options?: Parameters<typeof getCloudinaryUrl>[1]
): string {
    const cloudinaryUrl = getCloudinaryUrl(image, options);
    return cloudinaryUrl || fallbackUrl || '';
}
