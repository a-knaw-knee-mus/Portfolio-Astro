import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
            tags: z.array(z.string()).optional(),
            github: z.string().url().optional(),
            gif: z.string().url().optional(),
            youtube: z.string().url().optional(),
            playstore: z.string().url().optional(),
            index: z.number(),
    }),
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
            company: z.string(),
            position: z.string(),
            link: z.string(),
            accentColor: z.string(),
            startDate: z.string(),
            endDate: z.string().optional(),
            index: z.number(),
    }),
});

export const collections = {
  projects: projectsCollection,
  experience: experienceCollection,
};