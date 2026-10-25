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
        servings: z.number().int().nonnegative(),
        sodiumContent: z.number().int().nonnegative(),
        potassiumContent: z.number().int().nonnegative(),
        fatContent: z.number().nonnegative(),
        ingredients: z.array(
                        z.object({
                            name: z.string(),
                            quantity: z.number().nonnegative(),
                            unit: z.enum([
                                "tsp", "tbsp", "cup", "fl oz",
                                "pint", "quart", "gallon",
                                "oz", "lb", "each"
            ]),
                preparation: z.string().optional(),
            })
        ).min(1, { message: "At least one ingredient is required." }),
    })
});

// Export your collection name so Astro recognizes the folder mapping
export const collections = {
    'recipes': recipesCollection,
}