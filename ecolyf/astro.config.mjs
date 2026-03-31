// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-expect-error - Bypassing Vite plugin type mismatch between Astro's internal Vite and Tailwind
    plugins: [tailwindcss()]
  }
});