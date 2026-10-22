import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

import partytown from "@astrojs/partytown";

export default defineConfig({
  // ตั้งค่า SITE_URL ได้ผ่าน env; ค่าเริ่มต้นคือ Vercel production URL
  site: process.env.SITE_URL || 'https://warongkon-blog.vercel.app',
  outDir: './dist',  // ตรวจสอบว่าใช้ ./dist
  integrations: [mdx(), sitemap(), tailwind(), partytown()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: 'localhost:4321'
    }]]
  }
});