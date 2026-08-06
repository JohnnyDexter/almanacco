import { defineCollection, z } from 'astro:content';

const localizedBase = z.object({
  title: z.string(),
  description: z.string(),
  lang: z.enum(['ja', 'en', 'it']).default('ja'),
  pubDate: z.date(),
  draft: z.boolean().default(false),
});

const journal = defineCollection({
  type: 'content',
  schema: localizedBase.extend({
    category: z.string().optional(),
    image: z.string().optional(),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: localizedBase.extend({
    price: z.string().optional(),
    origin: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: localizedBase.extend({
    eventDate: z.date(),
    location: z.string(),
    reservationUrl: z.string().url().optional(),
  }),
});

export const collections = { journal, products, events };
