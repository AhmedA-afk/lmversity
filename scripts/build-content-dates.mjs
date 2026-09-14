/**
 * Builds src/data/content-dates.json — real dates from git history, so every
 * page can emit datePublished/dateModified without fabricating frontmatter.
 *
 *   first appearance in `git log --diff-filter=A` → published
 *   newest commit touching the file               → updated
 *
 * Frontmatter always wins — this file is the fallback, not the override.
 * Re-run after adding or renaming content: `node scripts/build-content-dates.mjs`
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const ROOTS = [
  'src/content/lessons',
  'src/content/answers',
  // Data files that back whole page types — their mtime is the honest date.
  'src/data/quick-guides.ts',
  'src/data/glossary.ts',
  'src/data/curriculum.ts',
];

const slugFor = (path) =>
  path
    .replace(/^src\/content\//, '')
    .replace(/^src\/data\//, 'data/')
    .replace(/\.(md|mdx|ts)$/, '');

const git = (args) => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

/** Oldest `--diff-filter=A` commit per file = when it was first published. */
const published = {};
{
  const out = git(['log', '--diff-filter=A', '--format====%aI', '--name-only', '--', ...ROOTS]);
  let date = '';
  for (const line of out.split('\n')) {
    if (line.startsWith('===')) date = line.slice(3);
    // log runs newest→oldest, so the last write for a file is its oldest add
    else if (line.trim()) published[slugFor(line)] = date;
  }
}

/** Newest commit per file = when it was last modified. */
const updated = {};
{
  const out = git(['log', '--format====%aI', '--name-only', '--', ...ROOTS]);
  let date = '';
  for (const line of out.split('\n')) {
    if (line.startsWith('===')) date = line.slice(3);
    else if (line.trim() && !(slugFor(line) in updated)) updated[slugFor(line)] = date;
  }
}

const dates = {};
for (const id of new Set([...Object.keys(published), ...Object.keys(updated)])) {
  dates[id] = {
    ...(published[id] ? { published: published[id].slice(0, 10) } : {}),
    ...(updated[id] ? { updated: updated[id].slice(0, 10) } : {}),
  };
}

writeFileSync(
  'src/data/content-dates.json',
  JSON.stringify(dates, null, 0) + '\n',
);
console.log(`content-dates.json: ${Object.keys(dates).length} entries`);
