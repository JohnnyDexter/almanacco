import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://johnnydexter.github.io/almanacco';

export default defineConfig({
  site,
  base: '/almanacco',
  trailingSlash: 'always',
});
