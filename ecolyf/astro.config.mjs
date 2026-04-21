// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      tsconfigPaths: true 
    },
    // @ts-expect-error - Bypassing Vite plugin type mismatch between Astro's internal Vite and Tailwind
    plugins: [tailwindcss()]
  },
  site: 'https://eco-lyf.com',
  integrations: [sitemap()],
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'ta', 'fr', 'es'],
  //   routing: {
  //     // 'false' means English stays at /products. Tamil goes to /ta/products.
  //     // This is a strict requirement to protect your existing SEO rankings.
  //     prefixDefaultLocale: false, 
  //     redirectToDefaultLocale: true
  //   }
  // }
});