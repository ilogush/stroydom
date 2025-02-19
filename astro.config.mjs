import { defineConfig } from "astro/config";
import paraglide from "@inlang/paraglide-astro";
import cloudflare from '@astro/cloudflare';

// export default defineConfig({
//   site: "http://localhost:3000",
//   publicDir: "public", // Явно указываем, что Astro должен использовать public/
//   i18n: {
//     defaultLocale: "ge", // the default locale
//     locales: ["en", "ru"], // the locales you want to support
//   },
// });

export default {
  base: '/',
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
  ],
  i18n: {
    defaultLocale: "ge",
    locales: ["ge", "en", "ru"],
    localeDetection: false,
  },
};
