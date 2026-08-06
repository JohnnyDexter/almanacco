import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://johnnydexter.github.io/almanacco';

export default defineConfig({
  site,
  base: '/almanacco',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
