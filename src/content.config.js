import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders'; // 1. Import the modern file locator tool

//Define the rulebook for the recipes collection
const recipesCollection = defineCollection({
      // 2. Tell Astro to hunt for markdown files inside your folder
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/recipes' }),
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