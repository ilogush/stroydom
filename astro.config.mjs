import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost:3000',
  publicDir: 'public', // Явно указываем, что Astro должен использовать public/
});