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

const problems = [];

const KNOWN_FRONTMATTER_KEYS = new Set([
  'title', 'track', 'order', 'status', 'summary', 'duration', 'updated', 'published',
  'sources', 'reviewStatus',
  // legacy keys present on some older .md files; harmless but tracked so new
  // unknown keys still fail loudly
  'tags', 'draft',
]);

// --- source registry --------------------------------------------------------
// src/data/sources.json is the single source of truth for external citations;
// lessons reference entries by id in `sources:` frontmatter.
const SOURCES_FILE = join(ROOT, 'src/data/sources.json');
const SOURCE_TYPES = new Set([
  'official-docs', 'spec', 'model-card', 'system-card', 'paper',
  'certification-guide', 'repo', 'changelog', 'independent', 'article',
  'dataset',
]);
const SOURCE_STATUS = new Set(['current', 'superseded', 'dead']);
const sourceRegistry = new Map();
if (existsSync(SOURCES_FILE)) {
  const raw = JSON.parse(readFileSync(SOURCES_FILE, 'utf8'));
  for (const [id, s] of Object.entries(raw)) {
    if (id.startsWith('$')) continue; // $schema comment key
    sourceRegistry.set(id, s);
    const miss = ['title', 'publisher', 'url', 'type', 'status', 'accessedAt']
      .filter((k) => !s[k]);
    if (miss.length) problems.push(`sources.json "${id}": missing ${miss.join(', ')}`);
    if (s.type && !SOURCE_TYPES.has(s.type)) problems.push(`sources.json "${id}": unknown type "${s.type}"`);
    if (s.status && !SOURCE_STATUS.has(s.status)) problems.push(`sources.json "${id}": unknown status "${s.status}"`);
    if (s.url && !/^https:\/\//.test(s.url)) problems.push(`sources.json "${id}": url must be https`);
  }
}

// --- entity registry --------------------------------------------------------
// src/data/entities.json is the shared record for vendors, models, tools,
// certifications, and standards — volatile facts live there so a correction
// propagates. `officialSources` must resolve to sources.json ids.
const ENTITIES_FILE = join(ROOT, 'src/data/entities.json');
const ENTITY_KINDS = new Set([
  'vendor', 'model-family', 'tool', 'framework',
  'certification-program', 'standard', 'dataset',
]);
const ENTITY_STATUS = new Set(['current', 'deprecated', 'superseded', 'retired']);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const entityRegistry = new Set();
if (existsSync(ENTITIES_FILE)) {
  const raw = JSON.parse(readFileSync(ENTITIES_FILE, 'utf8'));
  for (const [id, e] of Object.entries(raw)) {
    if (id.startsWith('$')) continue;
    entityRegistry.add(id);
    const miss = ['name', 'kind', 'status', 'verifiedAt', 'officialSources']
      .filter((k) => !e[k]);
    if (miss.length) problems.push(`entities.json "${id}": missing ${miss.join(', ')}`);
    if (e.kind && !ENTITY_KINDS.has(e.kind)) problems.push(`entities.json "${id}": unknown kind "${e.kind}"`);
    if (e.status && !ENTITY_STATUS.has(e.status)) problems.push(`entities.json "${id}": unknown status "${e.status}"`);
    if (e.verifiedAt && !DATE_RE.test(e.verifiedAt)) problems.push(`entities.json "${id}": verifiedAt must be YYYY-MM-DD`);
    if (e.changeNote && typeof e.changeNote !== 'string') problems.push(`entities.json "${id}": changeNote must be a string`);
    for (const sid of e.officialSources ?? []) {
      if (!sourceRegistry.has(sid)) problems.push(`entities.json "${id}": officialSources references unknown source "${sid}"`);
    }
  }
}

// --- certification + external-course registries -----------------------------
// Same volatile-fact discipline as entities: every record must cite an official
// source id so a credential/course page change is one record edit.
const REGISTRIES = [
  {
    file: 'src/data/certifications.json', label: 'certifications.json',
    required: ['name', 'org', 'status', 'officialSource', 'verifiedAt'],
    statusEnum: new Set(['current', 'beta', 'retiring', 'retired', 'unverified']),
  },
  {
    file: 'src/data/external-courses.json', label: 'external-courses.json',
    required: ['provider', 'title', 'officialSource', 'costModel', 'verifiedAt'],
    statusEnum: null,
  },
];
for (const reg of REGISTRIES) {
  const p = join(ROOT, reg.file);
  if (!existsSync(p)) continue;
  const raw = JSON.parse(readFileSync(p, 'utf8'));
  for (const [id, e] of Object.entries(raw)) {
    if (id.startsWith('$')) continue;
    const miss = reg.required.filter((k) => !e[k]);
    if (miss.length) problems.push(`${reg.label} "${id}": missing ${miss.join(', ')}`);
    if (reg.statusEnum && e.status && !reg.statusEnum.has(e.status))
      problems.push(`${reg.label} "${id}": unknown status "${e.status}"`);
    if (e.verifiedAt && !DATE_RE.test(e.verifiedAt)) problems.push(`${reg.label} "${id}": verifiedAt must be YYYY-MM-DD`);
    if (e.officialSource && !sourceRegistry.has(e.officialSource))
      problems.push(`${reg.label} "${id}": officialSource references unknown source "${e.officialSource}"`);
  }
}

// editorial pipeline stages — `status` is nav visibility, `reviewStatus` is the
// editorial record; a live page must have passed review, a coming page must not
// claim it has
const PRE_LIVE_STAGES = new Set(['proposed', 'researched', 'drafted', 'technically-reviewed', 'copy-reviewed', 'browser-verified']);
const REVIEW_STAGES = new Set([...PRE_LIVE_STAGES, 'live', 'refresh-due', 'retired']);

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
  let lastKey = null;
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (kv) {
      lastKey = kv[1];
      fm[lastKey] = kv[2].replace(/^["']|["']$/g, '');
    } else if (lastKey && /^\s*-\s*/.test(line)) {
      // YAML block list: `key:` followed by `  - item` lines
      const item = line.replace(/^\s*-\s*/, '').replace(/^["']|["']$/g, '');
      const prev = fm[lastKey];
      fm[lastKey] = prev === '' ? item : `${prev},${item}`;
    }
  }
  return { fm, body: src.slice(m[0].length), raw: m[1] };
}

// `sources` may be inline `["a", "b"]` or a block list (normalized to
// comma-joined by parseFrontmatter); return clean id array either way
function fmList(v) {
  if (!v) return [];
  return v.replace(/^\[|\]$/g, '').split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
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
const trackOrder = new Map(); // trackId -> slug[] in declared order
const nodePrereq = new Map(); // "track/slug" -> prereq slugs
// locate each track's block by its `"id":` line position, then parse node
// objects inside that span — order is the declaration order
const trackSpans = [...curSrc.matchAll(/^\s*"id":\s*"([\w-]+)",\s*$/gm)]
  .map((m, i, arr) => ({ id: m[1], from: m.index, to: arr[i + 1]?.index ?? curSrc.length }));
for (const { id, from, to } of trackSpans) {
  const seg = curSrc.slice(from, to);
  if (!trackNodes.has(id)) trackNodes.set(id, new Map());
  const order = [];
  for (const nb of seg.matchAll(/\{[^{}]*?"slug":\s*"([^"]+)"[^{}]*?\}/gs)) {
    const block = nb[0], slug = nb[1];
    const status = block.match(/"status":\s*"(\w+)"/)?.[1] ?? 'live';
    trackNodes.get(id).set(slug, status);
    order.push(slug);
    const pr = block.match(/"prereq":\s*\[([^\]]*)\]/);
    if (pr) {
      nodePrereq.set(`${id}/${slug}`,
        [...pr[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]));
    }
  }
  trackOrder.set(id, order);
}

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

  // dates must not be in the future — a future "updated" is a freshness lie
  for (const dk of ['updated', 'published']) {
    const v = fm[dk];
    if (!v) continue;
    const t = Date.parse(v);
    if (Number.isNaN(t)) problems.push(`${rel}: unparseable "${dk}:" date "${v}"`);
    else if (t > Date.now() + 86400000) problems.push(`${rel}: "${dk}:" is in the future (${v})`);
  }

  // bare internal paths render as literal text, not links — must be [title](/learn/x)
  const unfenced = body.replace(/```[\s\S]*?```/g, '');
  const barePaths = unfenced.match(/[^\w`(\["']\/(?:learn|interview|scenarios|guides|answers|practice|fde)\/[a-z0-9-]+(\/[a-z0-9-]+)*/g);
  if (barePaths) problems.push(`${rel}: ${barePaths.length} bare internal path(s) outside link syntax — they render as plain text, wrap them as [title](path)`);

  const node = trackNodes.get(track)?.get(slug);
  if (node) seenNodes.add(`${track}/${slug}`);
  else if (fm.status !== 'coming') {
    problems.push(`${rel}: file has no curriculum node — it builds a route but is invisible in nav (rule 14)`);
  }

  // `sources:` ids must resolve to registry entries — a dangling id is a
  // citation to nothing; the required-source side (which classes must cite)
  // is the sourcingFlags queue in the registry until backfill lands
  for (const sid of fmList(fm.sources)) {
    if (!sourceRegistry.has(sid)) problems.push(`${rel}: sources[] id "${sid}" is not in src/data/sources.json`);
  }

  // editorial workflow: nav status and reviewStatus must agree
  if (fm.reviewStatus !== undefined && !REVIEW_STAGES.has(fm.reviewStatus)) {
    problems.push(`${rel}: unknown reviewStatus "${fm.reviewStatus}"`);
  }
  const stage = fm.reviewStatus ?? 'live';
  const nav = fm.status ?? 'live';
  if (nav === 'live' && PRE_LIVE_STAGES.has(stage)) {
    problems.push(`${rel}: status is live but reviewStatus is "${stage}" — a live page must have passed review`);
  }
  if (nav === 'coming' && (stage === 'live' || stage === 'retired')) {
    problems.push(`${rel}: status is coming but reviewStatus is "${stage}"`);
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

// prerequisite edges: the prereq slug must exist in the same track and be
// declared earlier — a later or unknown prereq is unreachable or circular
for (const [key, prereqs] of nodePrereq) {
  const [track, slug] = key.split('/');
  const order = trackOrder.get(track) ?? [];
  const idx = order.indexOf(slug);
  for (const p of prereqs) {
    const pi = order.indexOf(p);
    if (pi === -1) problems.push(`${key}: prereq "${p}" is not a node in ${track}`);
    else if (pi >= idx) problems.push(`${key}: prereq "${p}" is declared after it — ordering must put prerequisites first`);
  }
}

// duplicate normalized answer titles — two pages competing for one intent
const ANSWERS_DIR = join(ROOT, 'src/content/answers');
const ANSWER_STOP = new Set('a an and are as at be by can could do does for from how i in is it its of on or should that the this to vs what when where which who why will with would you your'.split(' '));
const intentSeen = new Map();
if (existsSync(ANSWERS_DIR)) {
  for (const file of walk(ANSWERS_DIR)) {
    const { fm } = parseFrontmatter(readFileSync(file, 'utf8'));
    const norm = (fm.title ?? '').toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, ' ')
      .split(/\s+/).filter((w) => w && !ANSWER_STOP.has(w)).sort().join(' ');
    if (!norm) continue;
    const rel = relative(ANSWERS_DIR, file);
    if (intentSeen.has(norm)) problems.push(`answers: "${fm.title}" duplicates the normalized intent of ${intentSeen.get(norm)}`);
    else intentSeen.set(norm, rel);
  }
}

// source-ref validation for the other collections that can declare `sources:`
for (const dirName of ['questions', 'scenarios', 'answers', 'guides', 'blog', 'providers']) {
  const dir = join(ROOT, 'src/content', dirName);
  if (!existsSync(dir)) continue;
  for (const file of walk(dir)) {
    const { fm } = parseFrontmatter(readFileSync(file, 'utf8'));
    for (const sid of fmList(fm.sources)) {
      if (!sourceRegistry.has(sid)) {
        problems.push(`${dirName}/${relative(dir, file)}: sources[] id "${sid}" is not in src/data/sources.json`);
      }
    }
    // providers: vendor must resolve to entities.json; verifiedAt must be a date.
    if (dirName === 'providers') {
      if (fm.vendor && !entityRegistry.has(fm.vendor)) {
        problems.push(`providers/${relative(dir, file)}: vendor "${fm.vendor}" is not in src/data/entities.json`);
      }
      if (fm.verifiedAt && !/^\d{4}-\d{2}-\d{2}$/.test(fm.verifiedAt)) {
        problems.push(`providers/${relative(dir, file)}: verifiedAt "${fm.verifiedAt}" is not YYYY-MM-DD`);
      }
    }
  }
}

// --- question bank validation ------------------------------------------------
// src/data/quizzes.ts is the bank. Each q(...) call is one line; the regex
// mirrors the file's stable shape rather than importing TS.
const QUIZZES = join(ROOT, 'src/data/quizzes.ts');
if (existsSync(QUIZZES)) {
  const qsrc = readFileSync(QUIZZES, 'utf8');
  const STR = /'(?:[^'\\]|\\.)*'/g;
  const VALID = {
    difficulty: new Set(['beginner', 'intermediate', 'advanced', 'synthesis']),
    kind: new Set(['conceptual', 'code-reading', 'output-reading', 'architecture', 'operational']),
    case: new Set(['normal', 'boundary', 'failure', 'adversarial', 'production']),
    format: new Set(['multiple-choice', 'multiple-select', 'ordering', 'matching', 'short-answer', 'code-reading', 'debugging', 'scenario', 'design-critique', 'calculation']),
    status: new Set(['draft', 'review', 'live', 'retired']),
  };
  const qTrackSpans = [...qsrc.matchAll(/id:\s*'([\w-]+)',\s*\n\s*name:/g)]
    .map((m, i, arr) => ({ id: m[1], from: m.index, to: arr[i + 1]?.index ?? qsrc.indexOf('];', m.index) }));
  // Bank ids that map to a differently-named curriculum track.
  const BANK_TO_TRACK = { evals: 'evals-red-teaming', agents: 'agentic-ai' };
  const seenPrompts = new Map();
  for (const { id, from, to } of qTrackSpans) {
    const seg = qsrc.slice(from, to);
    for (const line of seg.split('\n')) {
      const qs = line.indexOf('q(');
      if (qs === -1) continue;
      const call = line.slice(qs);
      const strings = [...call.matchAll(STR)].map((m) => m[0]);
      // q('prompt', [opts], N, 'expl', [why], 'lesson', {meta})
      const prompt = strings[0];
      const optBlock = call.match(/,\s*\[((?:'(?:[^'\\]|\\.)*'\s*,?\s*)+)\]\s*,\s*(\d+)/);
      if (!optBlock) { problems.push(`quizzes/${id}: malformed q() call — ${call.slice(0, 60)}`); continue; }
      const nOpts = (optBlock[1].match(STR) || []).length;
      const answer = Number(optBlock[2]);
      if (answer >= nOpts) problems.push(`quizzes/${id}: answer index ${answer} out of range (${nOpts} options) — ${call.slice(0, 60)}`);
      // the why[] array is the second bracketed string-list after the answer
      const whyBlock = call.slice(optBlock.index + optBlock[0].length).match(/,\s*\[((?:'(?:[^'\\]|\\.)*'\s*,?\s*)+)\]/);
      if (whyBlock) {
        const nWhy = (whyBlock[1].match(STR) || []).length;
        if (nWhy !== nOpts) problems.push(`quizzes/${id}: why[] has ${nWhy} entries for ${nOpts} options — every option needs a rationale`);
      } else {
        problems.push(`quizzes/${id}: missing why[] rationale array`);
      }
      // metadata enums + module resolution into curriculum nodes
      for (const key of Object.keys(VALID)) {
        const v = call.match(new RegExp(`${key}:\\s*'(\\w[\\w-]*)'`))?.[1];
        if (v && !VALID[key].has(v)) problems.push(`quizzes/${id}: invalid ${key} "${v}"`);
      }
      const mod = call.match(/module:\s*'([^']+)'/)?.[1];
      const curriculumTrack = BANK_TO_TRACK[id] ?? id;
      if (mod && !trackNodes.get(curriculumTrack)?.has(mod)) {
        problems.push(`quizzes/${id}: module "${mod}" is not a curriculum node in ${curriculumTrack}`);
      }
      // duplicate detection on the normalized prompt
      const norm = prompt.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
      if (seenPrompts.has(norm)) problems.push(`quizzes/${id}: duplicate prompt of ${seenPrompts.get(norm)}`);
      else seenPrompts.set(norm, `${id}`);
      // banned option patterns — wording tricks that test reading, not knowledge
      if (/all of the above|none of the above/i.test(call)) {
        problems.push(`quizzes/${id}: "all/none of the above" option — banned distractor pattern`);
      }
    }
  }
}

if (problems.length) {
  console.error(`check-content: ${problems.length} problem${problems.length === 1 ? '' : 's'}\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
console.log(`check-content: clean — ${seenNodes.size} lesson files matched to curriculum nodes`);
