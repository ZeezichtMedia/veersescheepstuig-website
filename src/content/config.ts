import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }).passthrough(), // Allow any additional fields
});

const settingsCollection = defineCollection({
  type: 'data',
});

export const collections = {
  pages: pagesCollection,
  settings: settingsCollection,
};
