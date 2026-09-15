/**
 * Two mechanical frontmatter/body repairs on lesson files:
 *
 *  1. Delete a top-level `# ` heading sitting right after the frontmatter —
 *     the page template renders the frontmatter `title` as the H1, so an
 *     in-body one is a duplicate (126 files from a content batch).
 *  2. Backfill `summary:` from the first sentence of the first body
 *     paragraph when the frontmatter has none (the ai-systems batch).
 *     Text is taken verbatim from the lesson — nothing is invented.
 *
 * Idempotent: files already clean are untouched. Run: node scripts/fix-lesson-heads.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/lessons';

const files = [];
const walk = (d) => {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(md|mdx)$/.test(e.name)) files.push(p);
  }
};
walk(DIR);

let h1Removed = 0;
let summariesAdded = 0;

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  const fmMatch = src.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) continue;
  const frontmatter = fmMatch[1];
  let body = src.slice(fmMatch[0].length);
  let changed = false;

  // 1. Drop a duplicate in-body H1 (top-level heading directly after the
  //    frontmatter, before any other content besides blank lines).
  const h1 = body.match(/^\s*# [^\n]+\n/);
  if (h1) {
    body = body.slice(0, h1.index).replace(/\s+$/, '') + '\n\n' + body.slice(h1.index + h1[0].length).replace(/^\s+/, '');
    changed = true;
    h1Removed++;
  }

  // 2. Backfill summary from the first real paragraph's first sentence.
  if (!/^summary:|^description:/m.test(frontmatter)) {
    const para = body
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .find((p) => p && !p.startsWith('#') && !p.startsWith('import ') && !p.startsWith('<') && !p.startsWith('```'));
    if (para) {
      const sentence = para.replace(/\s+/g, ' ').match(/^(.{40,300}?[.!?])(\s|$)/)?.[1];
      if (sentence) {
        const safe = sentence.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        const newFm = frontmatter + `\nsummary: "${safe}"\n`;
        const newSrc = `---\n${newFm}---\n${body}`;
        writeFileSync(file, newSrc);
        summariesAdded++;
        continue; // body already written with H1 removal included
      }
    }
  }
  if (changed) writeFileSync(file, `---\n${frontmatter}\n---\n${body}`);
}

console.log(`h1 removed: ${h1Removed}, summaries added: ${summariesAdded}`);
