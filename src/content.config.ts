import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const builds = defineCollection({
	loader: glob({ base: './src/content/builds', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			badgeType: z
				.enum(['log', 'experiment', 'shipped', 'discovery'])
				.default('log'),
		}),
});

export const collections = { builds };
