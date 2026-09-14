import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { statSync, existsSync } from 'node:fs';

const BUILD_TIME = new Date().toISOString();

/** Newest mtime among the candidate source files for a route, else build time. */
function lastModified(path) {
  const parts = path.replace(/^\/|\/$/g, '').split('/');
  const candidates = [];
  if (parts[0] === 'learn' && parts.length >= 3) {
    const slug = parts.slice(1).join('/');
    candidates.push(`src/content/lessons/${slug}.md`, `src/content/lessons/${slug}.mdx`);
  } else if (['guides', 'blog', 'scenarios', 'answers'].includes(parts[0]) && parts.length === 2) {
    candidates.push(`src/content/${parts[0]}/${parts[1]}.md`, `src/content/${parts[0]}/${parts[1]}.mdx`);
  } else if (parts[0] === 'interview' && parts.length === 2) {
    candidates.push(`src/content/questions/${parts[1]}.mdx`);
  } else if (parts[0] === 'roles' && parts[1] === 'forward-deployed-engineer' && parts.length === 4) {
    candidates.push(`src/content/fde/${parts[2]}/${parts[3]}.md`, `src/content/fde/${parts[2]}/${parts[3]}.mdx`);
  } else if (parts[0] === 'roles' && parts[1] === 'forward-deployed-engineer') {
    candidates.push('src/data/fde.ts');
  } else if (parts[0] === 'learn' && parts.length === 2) {
    candidates.push('src/data/curriculum.ts');
  } else if (parts.length === 1) {
    candidates.push(`src/pages/${parts[0]}.astro`, `src/pages/${parts[0]}/index.astro`);
  }
  let newest = 0;
  for (const file of candidates) {
    if (existsSync(file)) newest = Math.max(newest, statSync(file).mtimeMs);
  }
  return newest ? new Date(newest).toISOString() : BUILD_TIME;
}
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://lmversity.com',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      // Keep noindex routes out of the sitemap — the two signals contradict.
      filter: (page) => !['/kit', '/saved'].includes(new URL(page).pathname.replace(/\/$/, '')),
      // Hub pages and guides are the entry points worth crawling most often;
      // lessons are stable reference material.
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (/^\/(learn|guides|reference|practice|interview|scenarios|blog|roles|answers)\/?$/.test(path)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/guides/') || path.startsWith('/blog/') || path.startsWith('/answers/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/learn/') && path.split('/').length === 3) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // A build timestamp on every URL tells crawlers the whole site changed,
        // which is both untrue and a weak signal. Use the source file's own
        // modification time where we can resolve one.
        item.lastmod = item.lastmod ?? lastModified(path);
        return item;
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // Two themes so code blocks follow the site's light/dark.
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
});
