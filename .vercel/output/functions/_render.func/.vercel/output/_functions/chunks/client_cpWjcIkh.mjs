import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: "ac66g3f5",
  dataset: "production",
  useCdn: false,
  // Set to false to ensure we always get fresh data since SSR is used
  apiVersion: "2024-03-01"
});

export { sanityClient as s };
