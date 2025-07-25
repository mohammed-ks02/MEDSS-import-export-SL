import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  outDir: 'dist',
  site: 'https://mohammed-ks02.github.io/MEDSS-import-export-SL/',
  base: '/MEDSS-import-export-SL/', // <--- ADD THIS LINE
  integrations: [
    tailwind(),
    react(),
    sitemap()
  ],
  image: {
    domains: ['your-cms-domain.com'] // Add your CMS domain here
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});

export function withBase(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
