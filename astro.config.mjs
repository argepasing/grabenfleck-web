import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    define: {
      "import.meta.env.PACKAGE_VERSION": JSON.stringify(`v${process.env.npm_package_version}`),
    },
  },
});
