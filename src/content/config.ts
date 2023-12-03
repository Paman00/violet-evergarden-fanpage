import { z, defineCollection } from 'astro:content';

const seeMoreCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        label: z.string(),
        image: z.object({
            src: image(),
            alt: z.string(),
        }),
    }),
});

export const collections = {
    'see-more': seeMoreCollection,
};
