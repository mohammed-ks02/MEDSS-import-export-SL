// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// This configuration is updated for deployment to GitHub Pages.
export default defineConfig({
  site: 'https://www.medss.net', // 👉 use your custom domain here
  // base: '/MEDSS-import-export-SL/',
  integrations: [
    tailwind(),
    react(),
    sitemap()
  ],
  image: {
    domains: ['www.medss.net'] // fix your image domain list (no protocol, no extra .com)
  },
  build: {
    format: 'directory'
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
