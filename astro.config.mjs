import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const base = "/almanacco";

export default defineConfig({
  site: "https://johnnydexter.github.io",
  base,
  redirects: {
    "/": `${base}/ja/`,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
