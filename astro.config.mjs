import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://chaoanouvongpark.com',
  output: 'static',
  i18n: {
    defaultLocale: 'lo',
    locales: ['lo', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
