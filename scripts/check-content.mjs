#!/usr/bin/env node
/**
 * Content regression check — enforces the editorial rules in AGENTS.md that a
 * build cannot catch:
 *
 *   node scripts/check-content.mjs
 *
 * 1. Every lesson has a `summary:` — it is the page's meta description (rule 13).
 * 2. No lesson uses a frontmatter key the schema silently drops (e.g. the
 *    `description:` → `summary:` bug found in the 2026 SEO audit).
 * 3. No body-level `# ` H1 outside code fences — the lesson template already
 *    emits one; a second is a duplicate-title SEO bug.
 * 4. Curriculum parity (rule 14): every live lesson file has a node in
 *    src/data/curriculum.ts, and every live node resolves to a file.
 *
 * Exits non-zero and prints every violation if any fail.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const LESSONS_DIR = join(ROOT, 'src/content/lessons');
const CURRICULUM = join(ROOT, 'src/data/curriculum.ts');

const KNOWN_FRONTMATTER_KEYS = new Set([
  'title', 'track', 'order', 'status', 'summary', 'duration', 'updated', 'published',
  // legacy keys present on some older .md files; harmless but tracked so new
  // unknown keys still fail loudly
  'tags', 'draft',
]);

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (/\.(md|mdx)$/.test(name)) yield p;
  }
}

function parseFrontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { fm: {}, body: src, raw: '' };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
  }
  return { fm, body: src.slice(m[0].length), raw: m[1] };
}

function bodyH1s(body) {
  // Strip fenced code so `# comment` inside a sample doesn't count.
  const noCode = body.replace(/^```[\s\S]*?^```/gm, '');
  return noCode.split('\n').filter((l) => /^#\s/.test(l)).length;
}

// --- collect curriculum nodes per track ------------------------------------
// The file is machine-generated with a stable `"id": "track"` / `"slug": "x"`
// shape, so regex extraction is reliable enough for a lint gate.
const curSrc = readFileSync(CURRICULUM, 'utf8');
const trackNodes = new Map(); // trackId -> Map(slug -> status)
let curTrack = null;
for (const line of curSrc.split('\n')) {
  const t = line.match(/^\s*"id":\s*"([\w-]+)",\s*$/);
  if (t) { curTrack = t[1]; if (!trackNodes.has(curTrack)) trackNodes.set(curTrack, new Map()); continue; }
  const s = line.match(/"slug":\s*"([^"]+)"/);
  if (s && curTrack) {
    const st = line.match(/"status":\s*"(\w+)"/);
    trackNodes.get(curTrack).set(s[1], st ? st[1] : 'live');
  }
}

const problems = [];
const seenNodes = new Set(); // "track/slug" covered by a real file

for (const file of walk(LESSONS_DIR)) {
  const rel = relative(LESSONS_DIR, file).replace(/\.(md|mdx)$/, '');
  const [track, ...rest] = rel.split('/');
  const slug = rest.join('/');
  const src = readFileSync(file, 'utf8');
  const { fm, body, raw } = parseFrontmatter(src);

  if (!raw) { problems.push(`${rel}: no frontmatter`); continue; }

  for (const key of Object.keys(fm)) {
    if (!KNOWN_FRONTMATTER_KEYS.has(key)) {
      problems.push(`${rel}: unknown frontmatter key "${key}" (schema silently drops it — use "summary" for the meta description)`);
    }
  }

  if (fm.status === 'live' || fm.status === undefined) {
    if (!fm.summary || !/[.!?]["']?$/.test(fm.summary.trim())) {
      problems.push(`${rel}: missing or incomplete "summary:" — it is the meta description (rule 13)`);
    }
  }

  const h1 = bodyH1s(body);
  if (h1 > 0) problems.push(`${rel}: ${h1} body-level H1 outside code — the template already emits the title`);

  const node = trackNodes.get(track)?.get(slug);
  if (node) seenNodes.add(`${track}/${slug}`);
  else if (fm.status !== 'coming') {
    problems.push(`${rel}: file has no curriculum node — it builds a route but is invisible in nav (rule 14)`);
  }
}

// live curriculum nodes that resolve to no file → dead nav links
for (const [track, nodes] of trackNodes) {
  for (const [slug, status] of nodes) {
    if (status === 'live' && !seenNodes.has(`${track}/${slug}`)) {
      const exists = existsSync(join(LESSONS_DIR, track, `${slug}.md`)) || existsSync(join(LESSONS_DIR, track, `${slug}.mdx`));
      if (!exists) problems.push(`${track}/${slug}: live curriculum node has no lesson file — dead nav link`);
    }
  }
}

if (problems.length) {
  console.error(`check-content: ${problems.length} problem${problems.length === 1 ? '' : 's'}\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
console.log(`check-content: clean — ${seenNodes.size} lesson files matched to curriculum nodes`);
