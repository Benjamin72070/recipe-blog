import { defineCollection, z } from "astro:content";

//Define the rulebook for the recipes collection
const recipesCollection = defineCollection({
    type: 'content', // Specifies that this collection reads Markdown/MDX files
    schema: z.object({
        title: z.string(),
        description: z.string(),
        prepTime: z.string(),
        cookTime: z.string(),
        servings: z.string(),
        sodiumContent: z.number().int().nonnegative(),
        potassiumContent: z.number().int().nonnegative(),
        fatContent: z.number().int().nonnegative(),
        ingredients: z.array(z.string()),

    })
});

// Export your collection name so Astro recognizes the folder mapping
export const collections = {
    'recipes': recipesCollection,
}