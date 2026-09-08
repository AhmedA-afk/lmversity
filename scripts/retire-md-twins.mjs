#!/usr/bin/env node
/** Delete lesson .md files that have a retrofitted .mdx twin, after the .mdx
 *  passed check-mdx. Usage: node scripts/retire-md-twins.mjs src/content/lessons/rag [--dry] */
import { readdirSync, unlinkSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const dry = process.argv.includes('--dry');
const dirs = process.argv.slice(2).filter((a) => !a.startsWith('--'));
let n = 0;
for (const dir of dirs) for (const f of readdirSync(dir)) {
  if (!f.endsWith('.mdx')) continue;
  const twin = join(dir, f.replace(/\.mdx$/, '.md'));
  if (existsSync(twin)) { n++; console.log(`${dry ? 'would remove' : 'removed'} ${twin}`); if (!dry) unlinkSync(twin); }
}
console.log(`${n} twins`);
