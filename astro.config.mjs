// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// This configuration is updated for deployment to GitHub Pages.
export default defineConfig({
  outDir: 'docs',
  site: 'https://mohammed-ks02.github.io/MEDSS-import-export-SL/',
  base: '/MEDSS-import-export-SL/',
  integrations: [
    tailwind(),
    react(),
    sitemap()
  ],
  image: {
    domains: ['your-cms-domain.com'] // Add your CMS domain here
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
