import { createClient } from '@sanity/client';

export const sanityClient = createClient({
    projectId: 'ac66g3f5',
    dataset: 'production',
    useCdn: false, // Set to false to ensure we always get fresh data since SSR is used
    apiVersion: '2024-03-01',
});

// Helper interfaces for TypeScript
export interface SanityConcert {
    _id: string;
    title: string;
    date: string;
    time?: string;
    location: string;
    info?: string;
}

export interface SanityGallery {
    _id: string;
    draft: boolean;
    date: string;
    title: string;
    description?: string;
    url?: string;
    thumbnailUrl?: string; // We'll resolve the image URL in the query
}
