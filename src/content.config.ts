import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";

import { z } from "astro/zod";

const datetime = z.string().datetime({ local: true });
const formats = ["keynote", "qa", "performance", "workshop"] as const;

const happenings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/happenings" }),
  schema: z.object({
    lang: z.enum(["en", "fr"]),
    happeningLang: z.enum(["en", "fr"]),
    name: z.string(),
    punchline: z.string().optional(),
    imagePath: z.string(),
    titleImagePath: z.string(),
    formats: z.array(z.enum(formats)),
    datetime: z.date(),
    place: reference("places"),
    website: z.string().url().optional(),
    instagram: z.string().url().optional(),
  }),
});

const places = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/places" }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    address: z.string().optional(),
    googleMaps: z.string().url().optional(),
    website: z.string().url().optional(),
  }),
});

const globals = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/globals" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    punchline: z.string(),
    dateText: z.string(),
    addressText: z.string(),
    orgName: z.string(),
    orgAbbrev: z.string(),
    orgHref: z.string(),
  }),
})

export const collections = { happenings, places, globals };
