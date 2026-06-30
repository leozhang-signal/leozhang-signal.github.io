// src/content.config.ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const postCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/post' }),
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
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/podcast' }),
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
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
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
  post: postCollection,
  podcast: podcastCollection,
  research: researchCollection,
};