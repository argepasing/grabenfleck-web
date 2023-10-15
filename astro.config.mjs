import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/ueber_uns': '/ueber-uns'
  },
  vite: {
    define: {
      "import.meta.env.PACKAGE_VERSION": JSON.stringify(`v${process.env.npm_package_version}`),
    },
  }
});
