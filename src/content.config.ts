// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({  // ← 改成 postCollection
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    coverImage: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

const podcastCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    duration: z.string(),
    episodeNumber: z.number(),
    coverImage: z.string().optional(),
    audioUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    pdfUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  post: postCollection,      // ← 改成 postCollection
  podcast: podcastCollection,
  research: researchCollection,
};