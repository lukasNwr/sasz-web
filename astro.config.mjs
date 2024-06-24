import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sasz.sk",
  integrations: [
    mdx(),
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
      serialize(item) {
        if (item.url === "/") {
          return { ...item, priority: 1.0 };
        }
        return item;
      },
    }),
  ],
  components: {
    "@astro-components/embed-youtube": "astro-embed-youtube",
  },
});
