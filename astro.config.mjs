// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  site: "https://www.oxbridge.at/",
  base: isProd ? "/website/" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
