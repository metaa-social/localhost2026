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
    website2: z.string().url().optional(),
    instagram2: z.string().url().optional(),
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
    description: z.string(),
    aboutTitle: z.string(),
    punchline: z.string(),
    dateText: z.string(),
    addressText: z.string(),
    orgName: z.string(),
    orgAbbrev: z.string(),
    orgHref: z.string(),
    metaaAboutTitle: z.string(),
    metaaAboutHeading: z.string(),
    metaaAboutText: z.string(),
  }),
});

const timetable = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/timetable" }),
  schema: z.object({
    slug: z.string(),
    items: z.array(
      z.object({
        datetime: z.date(),
        place: reference("places"),
        label: z.string(),
      }),
    ),
  }),
});

const tickets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tickets" }),
  schema: z.object({
    slug: z.string(),
    tickets: z.array(
      z.object({
        label: z.string(),
        price: z.number(),
        type: z.enum(["workshop", "event"]),
      }),
    ),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/partners" }),
  schema: z.object({
    slug: z.string(),
    partners: z.array(
      z.object({
        label: z.string(),
        imagePath: z.string(),
        href: z.string().url().optional(),
        type: z.array(z.enum(["sponsor", "support", "partner", "school"])),
      }),
    ),
  }),
});

const credits = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/credits" }),
  schema: z.object({
    slug: z.string(),
    credits: z.array(
      z.object({
        name: z.string(),
        type: z.enum(["organization", "identity"]),
        role: z.string().optional(),
        href: z.string().url().optional(),
      }),
    ),
  }),
});

export const collections = {
  happenings,
  places,
  globals,
  timetable,
  tickets,
  partners,
  credits,
};
