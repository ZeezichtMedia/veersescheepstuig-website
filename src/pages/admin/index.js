export const prerender = false;

export async function GET({ redirect }) {
    // Use a reliable server-side 301 redirect to the external Sanity CMS URL
    return redirect('https://veersesveersescheepstuigcms.sanity.studio/', 301);
}
