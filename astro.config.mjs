// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [{
        provider: fontProviders.google(),
        name: 'Yantramanav',
        cssVariable: '--font-yantramanav',
    }]
  },

  site: 'https://muhammad-mehdi-ali.github.io',
});