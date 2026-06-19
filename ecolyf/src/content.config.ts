// src/content.config.ts
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const resourcesCollection = defineCollection({
  // The new loader API replaces `type: 'content'`
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string().max(70, "Title must be under 70 characters for SEO"),
    description: z.string().max(160, "Description must be under 160 characters for SEO"),
    publishDate: z.coerce.date(),
    author: z.string().default('EcoLyf Engineering & Compliance Team'),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  })
});

export const collections = {
  'resources': resourcesCollection,
};