import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://leozhang-signal.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  output: 'static',
});



// // @ts-check
// import { defineConfig } from 'astro/config';

// import sitemap from '@astrojs/sitemap';
// import mdx from '@astrojs/mdx';

// // https://astro.build/config
// export default defineConfig({
//   integrations: [sitemap(), mdx()]
// });