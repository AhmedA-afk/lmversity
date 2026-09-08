#!/usr/bin/env node
/**
 * Fast validity check for MDX lessons, without a full site build.
 *
 *   node scripts/check-mdx.mjs src/content/lessons/rag            # a directory
 *   node scripts/check-mdx.mjs src/content/lessons/rag/foo.mdx    # files
 *
 * Compiles every .mdx with the same remark-math setup the site uses, so a
 * stray "{" or "<" in prose fails here instead of in the build; confirms each
 * imported component file exists; checks InlineCheck answers are in range;
 * and warns on an .md twin (the .md would shadow or duplicate the route).
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve, extname } from 'node:path';
import { compile } from '@mdx-js/mdx';
import remarkMath from 'remark-math';

const args = process.argv.slice(2);
if (!args.length) { console.error('usage: check-mdx.mjs <dir|file>…'); process.exit(2); }
const files = [];
for (const a of args) {
  if (statSync(a).isDirectory()) for (const f of readdirSync(a)) { if (f.endsWith('.mdx')) files.push(join(a, f)); }
  else files.push(a);
}
let bad = 0;
for (const file of files) {
  const src = readFileSync(file, 'utf8');
  const problems = [];
  if (!src.startsWith('---')) problems.push('no frontmatter');
  const body = src.replace(/^---[\s\S]*?---\s*/, '');
  try { await compile(body, { remarkPlugins: [remarkMath], format: 'mdx' }); }
  catch (e) { problems.push(`mdx: ${e.reason || e.message}${e.line ? ` (line ~${e.line + (src.length - body.length ? src.slice(0, src.length - body.length).split('\n').length - 1 : 0)})` : ''}`); }
  for (const m of body.matchAll(/^import\s+\w+\s+from\s+['"]([^'"]+)['"]/gm)) {
    const target = resolve(dirname(file), m[1]);
    if (!existsSync(target)) problems.push(`import not found: ${m[1]}`);
  }
  for (const m of body.matchAll(/<InlineCheck[\s\S]*?\/>/g)) {
    const opts = (m[0].match(/options=\{\[([\s\S]*?)\]\}/) || [])[1];
    const ans = Number((m[0].match(/answer=\{(\d+)\}/) || [])[1]);
    if (!opts) problems.push('InlineCheck without options array');
    else { const n = (opts.match(/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g) || []).length; if (!(ans >= 0 && ans < n)) problems.push(`InlineCheck answer ${ans} out of range for ${n} options`); }
    if (!/explanation=/.test(m[0])) problems.push('InlineCheck without explanation');
  }
  const noCode = body.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  const used = new Set([...noCode.matchAll(/<([A-Z]\w+)/g)].map((m) => m[1]));
  const imported = new Set([...body.matchAll(/^import\s+(\w+)/gm)].map((m) => m[1]));
  for (const u of used) if (!imported.has(u)) problems.push(`<${u}> used but not imported`);
  const twin = file.replace(/\.mdx$/, '.md');
  if (extname(file) === '.mdx' && existsSync(twin)) problems.push('an .md twin still exists; delete it');
  if (problems.length) { bad++; console.log(`✗ ${file}\n  ${problems.join('\n  ')}`); }
}
console.log(`${files.length} files, ${bad} with problems`);
process.exit(bad ? 1 : 0);
