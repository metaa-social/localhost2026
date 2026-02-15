// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

// https://astro.build/config
export default defineConfig({
  site: "https://www.localhost-festival.ch",
  server: {
    allowedHosts: true,
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss(),
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
      })
    ],
  },
});

