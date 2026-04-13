import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = [
  'best-wines',
  'pairing',
  'grapes',
  'wine-basics',
  'regions',
  'wine-tools',
  'types-of-wine',
  'compare',
  'gift-guides',
  'food-wine-pairing',
  'products',
  'wine-glossary',
] as const;

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(155),
    category: z.enum(categories),
    funnelStage: z.enum(['BOFU', 'MOFU', 'TOFU']),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    publishDate: z.coerce.date(),
    modifiedDate: z.coerce.date().optional(),
    ogImage: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
    relatedArticles: z.array(z.string()).default([]),
    affiliateDisclosure: z.boolean().default(false),
    templateType: z.enum(['article', 'pillar', 'comparison', 'listicle', 'glossary']).default('article'),
    priority: z.number().int().min(1).max(4).default(3),
  }),
});

export const collections = { articles };
