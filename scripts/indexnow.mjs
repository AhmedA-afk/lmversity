#!/usr/bin/env node
/**
 * Tell Bing (and every IndexNow participant) about the site's URLs.
 *   node scripts/indexnow.mjs                      # every URL in the built sitemap
 *   node scripts/indexnow.mjs /answers/what-is-rag # just these paths
 * The key file is served from the site root, which is how IndexNow proves the
 * submission comes from the owner. Google ignores IndexNow; it reads the
 * sitemap from Search Console.
 */
import { readFileSync, existsSync } from 'node:fs';
const HOST = 'lmversity.com';
const KEY = 'a309d58471bd2ead3919c4e3ad25254c';
const args = process.argv.slice(2);
let urls;
if (args.length) urls = args.map((p) => `https://${HOST}${p}`);
else {
  const file = 'dist/sitemap-0.xml';
  if (!existsSync(file)) { console.error('build first: dist/sitemap-0.xml missing'); process.exit(1); }
  urls = [...readFileSync(file, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
for (let i = 0; i < urls.length; i += 10000) {
  const batch = urls.slice(i, i + 10000);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: batch }),
  });
  console.log(`submitted ${batch.length} urls → HTTP ${res.status}`);
}
