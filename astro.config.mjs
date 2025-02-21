import paraglide from "@inlang/paraglide-astro";
import icon from "astro-icon";

export default {
  base: "/",
  integrations: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    icon(),
  ],
  i18n: {
    defaultLocale: "ge",
    locales: ["ge", "en", "ru"],
    localeDetection: false,
  },
};
