#!/usr/bin/env node
/**
 * Build the machine-readable content registry that Phase 0 of
 * docs/ai-engineering-ecosystem-long-horizon-checklist.md requires.
 *
 *   node scripts/build-content-registry.mjs
 *
 * Sources: the seven Astro content collections, curriculum.ts, modules.ts,
 * quizzes.ts, roles.ts, fde.ts, quick-guides.ts, glossary.ts, site.ts,
 * content-dates.json, and src/pages for the static route set.
 *
 * Outputs (all under docs/registry/):
 *   content-registry.json — one record per public content item
 *   content-ids.json      — persistent path → stable-ID map. Committed, so
 *                           IDs survive regenerations and slug renames (a
 *                           renamed file keeps its ID via content fingerprint)
 *   audit-views.md        — human-readable views: by track, family, status,
 *                           freshness class, plus the missing-data queues
 *
 * Heuristics (freshness class, search intent, audience) are labelled guesses —
 * the registry records the signals that fired so a reviewer can overrule them.
 * Editorial fields (owner, reviewer, nextReview, disposition) start unset;
 * the scoring pass fills them without regenerating IDs.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const CONTENT = join(ROOT, 'src/content');
const DATA = join(ROOT, 'src/data');
const PAGES = join(ROOT, 'src/pages');
const OUT_DIR = join(ROOT, 'docs/registry');
const ID_FILE = join(OUT_DIR, 'content-ids.json');
const REGISTRY_FILE = join(OUT_DIR, 'content-registry.json');
const VIEWS_FILE = join(OUT_DIR, 'audit-views.md');

// ---------------------------------------------------------------------------
// small utilities

function* walk(dir, exts) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p, exts);
    else if (exts.test(name)) yield p;
  }
}

const unquote = (s) => s.trim().replace(/^(['"])([\s\S]*)\1$/, '$2').replace(/\\'/g, "'").replace(/\\"/g, '"');

/** YAML-lite frontmatter: scalars, inline arrays, dash lists, dash lists of
 *  single-level objects (faq:-style). Returns raw strings for everything
 *  deeper — enough for every collection schema in this repo. */
function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { fm: {}, body: src, raw: '' };
  const fm = {};
  const lines = m[1].split('\n');
  for (let i = 0; i < lines.length; i++) {
    const kv = lines[i].match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (!kv) continue;
    const key = kv[1];
    const rest = kv[2];
    if (rest === '') {
      const items = [];
      let j = i + 1;
      while (j < lines.length && /^\s+\S/.test(lines[j])) {
        const dm = lines[j].match(/^\s+-\s*(.*)$/);
        if (dm) {
          const okv = dm[1].match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
          items.push(okv ? { [okv[1]]: unquote(okv[2]) } : unquote(dm[1]));
        } else {
          const ck = lines[j].match(/^\s+([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
          const last = items[items.length - 1];
          if (ck && last && typeof last === 'object') last[ck[1]] = unquote(ck[2]);
          else break;
        }
        j++;
      }
      fm[key] = items.length ? items : '';
      i = j - 1;
    } else if (rest.startsWith('[')) {
      const inner = rest.replace(/^\[/, '').replace(/\]\s*$/, '');
      fm[key] = inner.trim() ? inner.split(',').map(unquote) : [];
    } else {
      fm[key] = unquote(rest);
    }
  }
  return { fm, body: src.slice(m[0].length), raw: m[1] };
}

const stripCode = (body) => body.replace(/^```[\s\S]*?^```/gm, '');
const fp = (body) => createHash('sha1').update(stripCode(body).replace(/\s+/g, ' ').trim()).digest('hex');

function analyzeBody(body) {
  const noCode = stripCode(body);
  const headings = [...noCode.matchAll(/^(#{2,6})\s+(.+?)\s*$/gm)]
    .map((m) => ({ depth: m[1].length, text: m[2].replace(/[#*`]/g, '').trim() }));
  const internal = new Set();
  const external = new Set();
  for (const m of body.matchAll(/\]\((\/[^)\s"#]+)/g)) internal.add(m[1]);
  for (const m of body.matchAll(/["'(]\s*(\/learn\/[^)\s"']+)/g)) internal.add(m[1]);
  for (const m of body.matchAll(/href="(\/[^"#?]*)"/g)) internal.add(m[1]);
  for (const m of body.matchAll(/\]\((https?:\/\/[^)\s]+)/g)) external.add(m[1]);
  for (const m of body.matchAll(/href="(https?:\/\/[^"]+)"/g)) external.add(m[1]);
  const imports = [];
  for (const m of body.matchAll(/import\s+([\w*{} ,]+)\s+from\s+'([^']+)'/g)) imports.push(m[2]);
  const text = noCode
    .replace(/^import .*$/gm, ' ')
    .replace(/<\/?[A-Za-z][^>]*>/g, ' ')
    .replace(/!?\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#*_`>|~-]/g, ' ');
  const wordCount = text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  // structural elements that could fulfill a numeric title promise
  // ("7 mistakes", "5 ways") — list items, numbered items, bold-led bullets
  const listItems = (noCode.match(/^\s*(?:[-*+]|\d+[.)])\s+\S/gm) || []).length;
  return {
    headings,
    internalLinks: [...internal].sort(),
    externalLinks: [...external].sort(),
    imports,
    codeBlockCount: Math.floor(((body.match(/^```/gm) || []).length) / 2),
    listItems,
    wordCount,
  };
}

// ---------------------------------------------------------------------------
// data-file extraction (regex/JSON slicing — same convention as check-content)

function sliceArrayLiteral(src, marker) {
  const start = src.indexOf(marker);
  if (start < 0) return null;
  const eq = src.indexOf('=', start);
  const open = src.indexOf('[', eq < 0 ? start : eq);
  const end = src.indexOf('\n];', open);
  if (open < 0 || end < 0) return null;
  return src.slice(open, end + 2);
}

function parseJsonArray(src, marker, fallback) {
  const text = sliceArrayLiteral(src, marker);
  if (!text) return fallback;
  try { return JSON.parse(text); } catch { return fallback; }
}

const curSrc = readFileSync(join(DATA, 'curriculum.ts'), 'utf8');
const tracks = parseJsonArray(curSrc, 'const unsortedTracks', []);

const modSrc = readFileSync(join(DATA, 'modules.ts'), 'utf8');
const moduleMap = {};
for (const m of modSrc.matchAll(/'([\w-]+)':\s*\[([\s\S]*?)\],/g)) {
  moduleMap[m[1]] = [...m[2].matchAll(/\{\s*name:\s*'([^']+)',\s*startsAt:\s*'([^']+)'\s*\}/g)]
    .map((b) => ({ name: b[1], startsAt: b[2] }));
}

const quizSrc = readFileSync(join(DATA, 'quizzes.ts'), 'utf8');
const quizTracks = [];
for (const block of quizSrc.split(/\n  \{\n/).slice(1)) {
  const id = block.match(/^\s*id:\s*'([\w-]+)'/m)?.[1];
  const name = block.match(/^\s*name:\s*'((?:[^'\\]|\\.)*)'/m)?.[1];
  const summary = block.match(/^\s*summary:\s*'((?:[^'\\]|\\.)*)'/m)?.[1];
  const qBlock = block.slice(block.indexOf('questions:'));
  const questionCount = (qBlock.match(/\n\s+q\(/g) || []).length;
  const lessonRefs = [...qBlock.matchAll(/'(\/learn\/[^']+)'/g)].map((m) => m[1]);
  if (id) quizTracks.push({ id, name: name ?? id, summary: summary ?? '', questionCount, lessonRefs });
}

const roleSrc = readFileSync(join(DATA, 'roles.ts'), 'utf8');
const roles = parseJsonArray(roleSrc, 'export const roles', []);

const fdeSrc = readFileSync(join(DATA, 'fde.ts'), 'utf8');
const fdePhases = [];
{
  let phase = null, mod = null;
  const arrText = fdeSrc.slice(fdeSrc.indexOf('export const fdePhases'));
  for (const line of arrText.split('\n')) {
    const phaseId = line.match(/^    id:\s*'([\w-]+)',?\s*$/);
    const modId = line.match(/^        id:\s*'([\w-]+)',?\s*$/);
    const node = line.match(/\{\s*slug:\s*'([^']+)',\s*title:\s*'((?:[^'\\]|\\.)*)',\s*kind:\s*'(\w+)'/);
    const phaseName = line.match(/^    name:\s*'((?:[^'\\]|\\.)*)',?\s*$/);
    const modName = line.match(/^        name:\s*'((?:[^'\\]|\\.)*)',?\s*$/);
    if (phaseId) { phase = { id: phaseId[1], name: '', modules: [] }; fdePhases.push(phase); mod = null; continue; }
    if (phase && phaseName && !phase.name) { phase.name = unquote(phaseName[1]); continue; }
    if (phase && modId) { mod = { id: modId[1], name: '', nodes: [] }; phase.modules.push(mod); continue; }
    if (mod && modName && !mod.name) { mod.name = unquote(modName[1]); continue; }
    if (phase && mod && node) mod.nodes.push({ slug: node[1], title: unquote(node[2]), kind: node[3] });
  }
}

const qgSrc = readFileSync(join(DATA, 'quick-guides.ts'), 'utf8');
const quickGuideTracks = new Set([...qgSrc.matchAll(/^  ([\w-]+):\s*\{/gm)].map((m) => m[1]));

const glossSrc = readFileSync(join(DATA, 'glossary.ts'), 'utf8');
const glossaryCount = (glossSrc.match(/\bterm:/g) || []).length;

const siteSrc = readFileSync(join(DATA, 'site.ts'), 'utf8');
const author = siteSrc.match(/author:\s*\{[^}]*name:\s*'([^']+)'/s)?.[1] ?? null;

const contentDates = JSON.parse(readFileSync(join(DATA, 'content-dates.json'), 'utf8'));

// ---------------------------------------------------------------------------
// classification

const KIND_RULES = [
  [/-quiz$/, 'quiz'],
  [/-cheatsheet$/, 'cheatsheet'],
  [/-worked-example$/, 'worked-example'],
  [/-common-mistakes$/, 'common-mistakes'],
  [/(-compared|-methods-compared)$|(^|-)vs[.-]/, 'comparison'],
  [/capstone/, 'capstone'],
  [/(^|\/)labs?\/|-lab\b|\blab\b/, 'lab'],
  [/drill/, 'drill'],
];
const kindFor = (slug, title) =>
  KIND_RULES.find(([re]) => re.test(slug) || re.test(title.toLowerCase()))?.[1] ?? 'concept';

const LESSON_FAMILY = { quiz: 'quiz', cheatsheet: 'reference', capstone: 'project', lab: 'lab' };
const FDE_FAMILY = { lesson: 'lesson', lab: 'lab', drill: 'lesson', bootcamp: 'lesson', capstone: 'project', reference: 'reference' };

const VENDOR_RE = /\b(OpenAI|ChatGPT|GPT-\d|Claude|Anthropic|Gemini|Vertex|AI Studio|Llama|Mistral|DeepSeek|Qwen|Grok|xAI|Cohere|Sarvam|AI4Bharat|Bhashini|Krutrim|Copilot|Cursor|Windsurf|Aider|Cline|Devin|Codex|Ollama|LM Studio|llama\.cpp|vLLM|SGLang|MLX|ONNX|Hugging ?Face|LangChain|LangGraph|LangSmith|LlamaIndex|Agno|PydanticAI|Semantic Kernel|AutoGen|CrewAI|Mastra|DSPy|Haystack|Instructor|Outlines|n8n|Zapier|Pipedream|Pinecone|Weaviate|Qdrant|Milvus|Zilliz|Chroma|Elasticsearch|OpenSearch|Vespa|LanceDB|Redis|pgvector|Unstructured|Docling|LlamaParse|Langfuse|Arize|Phoenix|Weave|Helicone|Braintrust|Promptfoo|DeepEval|Ragas|TruLens|OpenTelemetry|Playwright|Puppeteer|Selenium|Stagehand|Browserbase|Bedrock|SageMaker|Azure|AWS|Databricks|Snowflake|watsonx|Cloudflare|OpenRouter|Together AI|Fireworks|Groq|Cerebras|Replicate|Modal|Perplexity|NotebookLM|Model Context Protocol|MCP)\b/g;
const CERT_RE = /\b(certification|certified|credential|Applied Skills|skill badge)\b|\b(AWS|Azure|Google Cloud|NVIDIA|Databricks|Snowflake|Oracle|IBM)\b[^.\n]{0,50}\bexam\b|\bexam\b[^.\n]{0,50}\b(AWS|Azure|Google Cloud|NVIDIA|Databricks|Snowflake|Oracle|IBM)\b/i;
const PRICE_RE = /\b(pricing|prices?|\$\d|billing|free tier|paid plan|per million tokens|per (1,?000|million) requests?)\b/i;
const POLICY_RE = /\b(privacy policy|terms of (service|use)|data retention|GDPR|consent|license|licence|copyright)\b/i;
const DURABLE_TRACKS = new Set(['maths-foundations', 'classical-ai']);

function freshness(title, summary, headings, body) {
  const scope = `${title}\n${summary}\n${headings.map((h) => h.text).join('\n')}\n${body}`;
  const signals = [];
  const vendors = [...new Set([...scope.matchAll(new RegExp(VENDOR_RE, 'g'))].map((m) => m[1]))].slice(0, 12);
  if (CERT_RE.test(scope)) signals.push('certification/exam mention');
  if (PRICE_RE.test(scope)) signals.push('pricing/cost mention');
  if (POLICY_RE.test(scope)) signals.push('policy/license mention');
  if (vendors.length) signals.push(`vendor/tool mentions: ${vendors.join(', ')}`);
  if (CERT_RE.test(scope)) return { cls: 'certification-sensitive', signals };
  if (PRICE_RE.test(scope)) return { cls: 'pricing-sensitive', signals };
  if (POLICY_RE.test(scope)) return { cls: 'policy-sensitive', signals };
  if (vendors.length) return { cls: 'release-sensitive', signals };
  return { cls: null, signals }; // caller decides durable vs periodic
}

function intent(family, kind, title, slug) {
  if (kind === 'quiz' || family === 'quiz') return 'practice';
  if (family === 'interview') return 'interview-prep';
  if (kind === 'cheatsheet' || kind === 'reference' || family === 'glossary') return 'reference';
  if (kind === 'comparison' || /\bvs\.?\b|\bversus\b/i.test(title)) return 'comparison';
  if (kind === 'worked-example') return 'worked-example';
  if (kind === 'common-mistakes') return 'troubleshooting';
  if (kind === 'capstone' || kind === 'lab' || family === 'project' || family === 'lab') return 'build';
  if (family === 'guide' || /^how to\b/i.test(title)) return 'how-to';
  if (/^what (is|are|'s)\b/i.test(title)) return 'definition';
  if (family === 'answer') return 'answer';
  return 'concept';
}

const TRACK_AUDIENCE = {
  'ai-literacy': 'general',
  'ai-foundations': 'beginner-engineer',
  'maths-foundations': 'beginner-engineer',
  'classical-ai': 'beginner-engineer',
};
const audienceFor = (family, track) =>
  family === 'role' ? 'role-path'
    : family === 'interview' ? 'job-candidate'
    : TRACK_AUDIENCE[track] ?? (track ? 'ai-engineer' : 'general');

const STRUCTURED_DATA = {
  lessons: ['LearningResource', 'WebPage', 'BreadcrumbList'],
  interview: ['LearningResource', 'FAQPage', 'WebPage', 'BreadcrumbList'],
  scenario: ['LearningResource', 'WebPage', 'BreadcrumbList'],
  guide: ['Article', 'HowTo', 'FAQPage', 'WebPage', 'BreadcrumbList'],
  blog: ['Article', 'WebPage', 'BreadcrumbList'],
  answer: ['Article', 'FAQPage', 'WebPage', 'BreadcrumbList'],
  fde: ['LearningResource', 'WebPage', 'BreadcrumbList'],
  track: ['Course', 'CourseInstance', 'Syllabus', 'Offer', 'FAQPage', 'WebPage', 'BreadcrumbList'],
  'quick-guide': ['Article', 'FAQPage', 'WebPage', 'BreadcrumbList'],
  role: ['CollectionPage', 'ItemList', 'WebPage', 'BreadcrumbList'],
  'fde-course': ['Course', 'CourseInstance', 'WebPage', 'BreadcrumbList'],
  'practice-track': ['WebPage', 'BreadcrumbList'],
  page: ['WebPage', 'BreadcrumbList'],
  glossary: ['FAQPage', 'WebPage', 'BreadcrumbList'],
};

// ---------------------------------------------------------------------------
// stable content IDs (persistent map; rename detection via body fingerprint)

const idMap = existsSync(ID_FILE)
  ? JSON.parse(readFileSync(ID_FILE, 'utf8'))
  : { version: 1, next: {}, entries: {}, retired: {} };

function assignIds(pending) {
  // pending: [{key, fp}] in deterministic order
  const byFp = new Map();
  for (const [key, e] of Object.entries(idMap.entries)) if (e.fp) byFp.set(e.fp, key);
  const current = new Set(pending.map((p) => p.key));
  const orphans = new Set(Object.keys(idMap.entries).filter((k) => !current.has(k)));

  for (const p of pending) {
    if (idMap.entries[p.key]) { idMap.entries[p.key].fp = p.fp ?? idMap.entries[p.key].fp; p.id = idMap.entries[p.key].id; continue; }
    // rename: same fingerprint seen at a path that is now gone
    const oldKey = p.fp && byFp.get(p.fp);
    if (oldKey && orphans.has(oldKey)) {
      p.id = idMap.entries[oldKey].id;
      idMap.entries[p.key] = { id: p.id, fp: p.fp };
      delete idMap.entries[oldKey];
      orphans.delete(oldKey);
      continue;
    }
    const DATA_PREFIX = { track: 'trk', role: 'rol', 'quick-guide': 'qgd', 'fde-phase': 'fde', practice: 'prc', stub: 'stb' };
    const prefix = p.key.startsWith('data:')
      ? DATA_PREFIX[p.key.split(':')[1].split('/')[0]] ?? 'dat'
      : p.key.startsWith('page:') ? 'pag' : p.key.split('/')[0].slice(0, 3);
    idMap.next[prefix] = (idMap.next[prefix] ?? 0) + 1;
    p.id = `${prefix}-${String(idMap.next[prefix]).padStart(4, '0')}`;
    idMap.entries[p.key] = { id: p.id, ...(p.fp ? { fp: p.fp } : {}) };
  }
  // anything still unmatched is gone for good — retire, never reuse
  for (const key of orphans) {
    idMap.retired[key] = { ...idMap.entries[key], retiredAt: new Date().toISOString().slice(0, 10) };
    delete idMap.entries[key];
  }
}

// ---------------------------------------------------------------------------
// collect items

const items = [];
const pendingIds = [];
const trackById = new Map(tracks.map((t) => [t.id, t]));
const nodeByTrackSlug = new Map();
for (const t of tracks) for (const n of t.nodes ?? []) if (n.slug) nodeByTrackSlug.set(`${t.id}/${n.slug}`, { track: t, node: n });

const lessonIdsOnDisk = new Set();
const lessonsByTrack = new Map();

function baseRecord(o) {
  return {
    id: null,
    family: o.family, kind: o.kind ?? null,
    title: o.title ?? null, slug: o.slug ?? null, route: o.route ?? null,
    collection: o.collection ?? null, path: o.path ?? null,
    track: o.track ?? null, module: o.module ?? null,
    status: o.status ?? 'live',
    summary: o.summary ?? null,
    author,
    published: o.published ?? null, updated: o.updated ?? null, verified: o.verified ?? null,
    wordCount: o.wordCount ?? null, headings: o.headings ?? [],
    internalLinks: o.internalLinks ?? [], externalLinks: o.externalLinks ?? [],
    structuredData: o.structuredData ?? [],
    features: o.features ?? {},
    searchIntent: o.searchIntent ?? null, primaryAudience: o.primaryAudience ?? null,
    promisedOutcome: o.promisedOutcome ?? o.summary ?? null,
    jobToBeDone: o.jobToBeDone ?? null, prerequisite: o.prerequisite ?? null,
    nextAction: o.nextAction ?? null, practiceType: o.practiceType ?? null,
    freshnessClass: o.freshnessClass ?? null, freshnessSignals: o.freshnessSignals ?? [],
    owner: null, reviewer: null, nextReview: null,
    disposition: 'unscored', dispositionReason: null, blockers: [],
    analytics: null,
  };
}

function fileItem(collection, file) {
  const rel = relative(join(CONTENT, collection), file).replace(/\.(md|mdx)$/, '');
  const src = readFileSync(file, 'utf8');
  const { fm, body, raw } = parseFrontmatter(src);
  const a = analyzeBody(body);
  pendingIds.push({ key: relative(CONTENT, file), fp: fp(body) });
  return { rel, fm, body, a, raw };
}

// --- lessons ---------------------------------------------------------------
const LESSONS = join(CONTENT, 'lessons');
for (const file of [...walk(LESSONS, /\.(md|mdx)$/)].sort()) {
  const { rel, fm, body, a, raw } = fileItem('lessons', file, 'lessons');
  const [track, ...rest] = rel.split('/');
  const slug = rest.join('/');
  lessonIdsOnDisk.add(`${track}/${slug}`);
  if (!lessonsByTrack.has(track)) lessonsByTrack.set(track, []);
  lessonsByTrack.get(track).push({ rel, fm, a });

  const kind = kindFor(slug, fm.title ?? '');
  const node = nodeByTrackSlug.get(`${track}/${slug}`);
  const t = trackById.get(track);
  const modName = moduleFor(t, slug);
  const dates = contentDates[`lessons/${rel}`] ?? {};
  const fr = freshness(fm.title ?? '', fm.summary ?? '', a.headings, body);
  const diagrams = a.imports.filter((i) => i.includes('/diagrams/') || i.includes('/widgets/'));
  const next = nextLiveSlug(t, slug);
  items.push(baseRecord({
    family: LESSON_FAMILY[kind] ?? 'lesson', kind,
    title: fm.title, slug: `${track}/${slug}`, route: `/learn/${track}/${slug}`,
    collection: 'lessons', path: relative(ROOT, file),
    track, module: modName, status: fm.status || 'live',
    summary: fm.summary,
    published: fm.published || dates.published, updated: fm.updated || dates.updated,
    wordCount: a.wordCount, headings: a.headings.filter((h) => h.depth === 2).map((h) => h.text).slice(0, 50),
    internalLinks: a.internalLinks, externalLinks: a.externalLinks,
    structuredData: STRUCTURED_DATA.lessons,
    features: {
      curriculumRegistered: Boolean(node),
      curriculumStatus: node?.node.status ?? null,
      codeBlocks: a.codeBlockCount,
      interactiveCheck: a.imports.some((i) => i.includes('InlineCheck') || i.endsWith('/Quiz.astro')),
      diagram: diagrams.length > 0 || /<svg|!\[/.test(body),
      workedExample: kind === 'worked-example' || /worked example|walkthrough/i.test(a.headings.map((h) => h.text).join(' ')),
      errorCase: kind === 'common-mistakes' || /mistake|error|fail|broken|debug|goes wrong|anti-?pattern/i.test(a.headings.map((h) => h.text).join(' ')),
      sourcesSection: /sources|further reading|references/i.test(a.headings.map((h) => h.text).join(' ')),
      runnableSignals: a.codeBlockCount > 0 && /\b(npm|pip|python3?|node|curl|ollama|docker)\b/i.test(body),
      listItems: a.listItems,
      specFormat: /rubric|protocol|required artefact|submission artefact|stage gate|deliverable|acceptance criteria|checkpoint/i.test(a.headings.map((h) => h.text).join(' ')),
      mathDense: (body.match(/\$/g) ?? []).length >= 6 || /\\frac|\\nabla|\\sum|\\prod|\\beta|\\theta|\\alpha|\\partial/.test(body),
      linksToPractice: a.internalLinks.some((l) => l.startsWith('/practice')),
    },
    searchIntent: intent(LESSON_FAMILY[kind] ?? 'lesson', kind, fm.title ?? '', slug),
    primaryAudience: audienceFor('lesson', track),
    nextAction: next ? `/learn/${track}/${next}` : `/learn/${track}`,
    practiceType: kind === 'quiz' ? 'quiz-page' : a.imports.some((i) => i.includes('InlineCheck')) ? 'inline-check' : 'none',
    freshnessClass: fr.cls ?? (DURABLE_TRACKS.has(track) ? 'durable' : 'periodic'),
    freshnessSignals: fr.signals,
  }));
}

function nextLiveSlug(track, slug) {
  if (!track) return null;
  const idx = (track.nodes ?? []).findIndex((n) => n.slug === slug);
  for (let i = idx + 1; i < (track.nodes ?? []).length; i++) {
    if (track.nodes[i].slug && track.nodes[i].status !== 'coming') return track.nodes[i].slug;
  }
  return null;
}

function moduleFor(track, slug) {
  const bounds = moduleMap[track?.id];
  if (!track || !bounds) return null;
  const order = (track.nodes ?? []).map((n) => n.slug);
  const idx = order.indexOf(slug);
  let current = null;
  for (const b of bounds) {
    if (order.indexOf(b.startsAt) !== -1 && order.indexOf(b.startsAt) <= idx) current = b.name;
  }
  return current;
}

// --- interview prep (questions collection → /interview/[topic]) --------------
for (const file of [...walk(join(CONTENT, 'questions'), /\.mdx$/)].sort()) {
  const { rel, fm, body, a } = fileItem('questions', file, 'questions');
  const fr = freshness(fm.title ?? '', fm.description ?? '', a.headings, body);
  items.push(baseRecord({
    family: 'interview', kind: 'topic',
    title: fm.title, slug: rel, route: `/interview/${rel}`,
    collection: 'questions', path: relative(ROOT, file), track: fm.topic ?? null,
    summary: fm.description,
    published: contentDates[`questions/${rel}`]?.published, updated: contentDates[`questions/${rel}`]?.updated,
    wordCount: a.wordCount, headings: a.headings.filter((h) => h.depth === 2).map((h) => h.text).slice(0, 50),
    internalLinks: a.internalLinks, externalLinks: a.externalLinks,
    structuredData: STRUCTURED_DATA.interview,
    features: { questionCount: a.headings.filter((h) => h.depth === 2).length, codeBlocks: a.codeBlockCount, listItems: a.listItems },
    searchIntent: 'interview-prep', primaryAudience: 'job-candidate',
    freshnessClass: fr.cls ?? 'periodic', freshnessSignals: fr.signals,
  }));
}

// --- scenarios ---------------------------------------------------------------
for (const file of [...walk(join(CONTENT, 'scenarios'), /\.mdx$/)].sort()) {
  const { rel, fm, body, a } = fileItem('scenarios', file, 'scenarios');
  const fr = freshness(fm.title ?? '', fm.description ?? '', a.headings, body);
  items.push(baseRecord({
    family: 'scenario', kind: 'scenario',
    title: fm.title, slug: rel, route: `/scenarios/${rel}`,
    collection: 'scenarios', path: relative(ROOT, file), track: fm.scenario ?? null,
    summary: fm.description,
    published: contentDates[`scenarios/${rel}`]?.published, updated: contentDates[`scenarios/${rel}`]?.updated,
    wordCount: a.wordCount, headings: a.headings.filter((h) => h.depth === 2).map((h) => h.text).slice(0, 50),
    internalLinks: a.internalLinks, externalLinks: a.externalLinks,
    structuredData: STRUCTURED_DATA.scenario,
    features: { codeBlocks: a.codeBlockCount, sourcesSection: /sources|references/i.test(a.headings.map((h) => h.text).join(' ')), listItems: a.listItems },
    searchIntent: 'scenario', primaryAudience: 'ai-engineer',
    freshnessClass: fr.cls ?? 'periodic', freshnessSignals: fr.signals,
  }));
}

// --- blog --------------------------------------------------------------------
for (const file of [...walk(join(CONTENT, 'blog'), /\.mdx$/)].sort()) {
  const { rel, fm, body, a } = fileItem('blog', file, 'blog');
  const fr = freshness(fm.title ?? '', fm.description ?? '', a.headings, body);
  items.push(baseRecord({
    family: 'blog', kind: 'post',
    title: fm.title, slug: rel, route: `/blog/${rel}`,
    collection: 'blog', path: relative(ROOT, file),
    summary: fm.description,
    published: fm.published || contentDates[`blog/${rel}`]?.published,
    updated: fm.updated || contentDates[`blog/${rel}`]?.updated,
    wordCount: a.wordCount, headings: a.headings.filter((h) => h.depth === 2).map((h) => h.text).slice(0, 50),
    internalLinks: a.internalLinks, externalLinks: a.externalLinks,
    structuredData: STRUCTURED_DATA.blog,
    features: { tags: fm.tags ?? [], codeBlocks: a.codeBlockCount, listItems: a.listItems },
    searchIntent: 'read', primaryAudience: 'general',
    freshnessClass: fr.cls ?? 'periodic', freshnessSignals: fr.signals,
  }));
}

// --- guides ------------------------------------------------------------------
for (const file of [...walk(join(CONTENT, 'guides'), /\.(md|mdx)$/)].sort()) {
  const { rel, fm, body, a } = fileItem('guides', file, 'guides');
  const fr = freshness(fm.title ?? '', fm.description ?? '', a.headings, body);
  items.push(baseRecord({
    family: 'guide', kind: 'howto',
    title: fm.title, slug: rel, route: `/guides/${rel}`,
    collection: 'guides', path: relative(ROOT, file),
    summary: fm.description,
    published: fm.published || contentDates[`guides/${rel}`]?.published,
    updated: fm.updated || contentDates[`guides/${rel}`]?.updated,
    wordCount: a.wordCount, headings: a.headings.filter((h) => h.depth === 2).map((h) => h.text).slice(0, 50),
    internalLinks: a.internalLinks, externalLinks: a.externalLinks,
    structuredData: STRUCTURED_DATA.guide,
    features: {
      level: fm.level, duration: fm.duration, steps: Array.isArray(fm.steps) ? fm.steps.length : 0,
      relatedLessons: Array.isArray(fm.related) ? fm.related : [],
      codeBlocks: a.codeBlockCount, listItems: a.listItems, featured: fm.featured === 'true' || fm.featured === true,
    },
    searchIntent: 'how-to', primaryAudience: 'ai-engineer',
    freshnessClass: fr.cls ?? 'periodic', freshnessSignals: fr.signals,
  }));
}

// --- straight answers ---------------------------------------------------------
for (const file of [...walk(join(CONTENT, 'answers'), /\.(md|mdx)$/)].sort()) {
  const { rel, fm, body, a } = fileItem('answers', file, 'answers');
  const fr = freshness(fm.title ?? '', fm.description ?? '', a.headings, body);
  items.push(baseRecord({
    family: 'answer', kind: fm.intent || 'definition',
    title: fm.title, slug: rel, route: `/answers/${rel}`,
    collection: 'answers', path: relative(ROOT, file),
    summary: fm.description,
    published: fm.published || contentDates[`answers/${rel}`]?.published,
    updated: fm.updated || contentDates[`answers/${rel}`]?.updated,
    wordCount: a.wordCount, headings: a.headings.filter((h) => h.depth === 2).map((h) => h.text).slice(0, 50),
    internalLinks: a.internalLinks, externalLinks: a.externalLinks,
    structuredData: STRUCTURED_DATA.answer,
    features: { faqCount: Array.isArray(fm.faq) ? fm.faq.length : 0, related: Array.isArray(fm.related) ? fm.related : [], listItems: a.listItems },
    searchIntent: 'answer', primaryAudience: 'general',
    freshnessClass: fr.cls ?? 'periodic', freshnessSignals: fr.signals,
  }));
}

// --- fde path ------------------------------------------------------------------
const FDE = join(CONTENT, 'fde');
const fdeLive = new Set();
for (const file of [...walk(FDE, /\.(md|mdx)$/)].sort()) {
  const { rel, fm, body, a } = fileItem('fde', file, 'fde');
  const [phase, ...rest] = rel.split('/');
  const slug = rest.join('/');
  fdeLive.add(`${phase}/${slug}`);
  const fr = freshness(fm.title ?? '', fm.summary ?? '', a.headings, body);
  items.push(baseRecord({
    family: FDE_FAMILY[fm.kind] ?? 'lesson', kind: fm.kind ?? 'lesson',
    title: fm.title, slug: `fde/${rel}`, route: `/roles/forward-deployed-engineer/${phase}/${slug}`,
    collection: 'fde', path: relative(ROOT, file), track: 'fde', module: fm.module ?? phase,
    status: 'live', summary: fm.summary,
    published: contentDates[`fde/${rel}`]?.published,
    updated: (fm.updated instanceof Date ? fm.updated.toISOString().slice(0, 10) : fm.updated) || contentDates[`fde/${rel}`]?.updated,
    wordCount: a.wordCount, headings: a.headings.filter((h) => h.depth === 2).map((h) => h.text).slice(0, 50),
    internalLinks: a.internalLinks, externalLinks: a.externalLinks,
    structuredData: STRUCTURED_DATA.fde,
    features: {
      codeBlocks: a.codeBlockCount,
      diagram: a.imports.some((i) => i.includes('/diagrams/')) || /<svg|!\[/.test(body),
      sources: Array.isArray(fm.sources) ? fm.sources.length : 0,
      artifact: fm.artifact ?? null, outcomes: Array.isArray(fm.outcomes) ? fm.outcomes.length : 0,
      listItems: a.listItems,
      specFormat: /rubric|protocol|required artefact|submission artefact|stage gate|deliverable|acceptance criteria|checkpoint/i.test(a.headings.map((h) => h.text).join(' ')),
      mathDense: (body.match(/\$/g) ?? []).length >= 6 || /\\frac|\\nabla|\\sum|\\prod|\\beta|\\theta|\\alpha|\\partial/.test(body),
    },
    searchIntent: intent(FDE_FAMILY[fm.kind] ?? 'lesson', fm.kind ?? 'lesson', fm.title ?? '', slug),
    primaryAudience: 'forward-deployed-engineer',
    practiceType: fm.kind === 'drill' ? 'drill' : 'none',
    freshnessClass: fr.cls ?? 'periodic', freshnessSignals: fr.signals,
  }));
}

// --- tracks ------------------------------------------------------------------
for (const t of tracks) {
  pendingIds.push({ key: `data:track/${t.id}` });
  const files = lessonsByTrack.get(t.id) ?? [];
  const kinds = {};
  for (const f of files) kinds[kindFor(f.rel.split('/').slice(1).join('/'), f.fm.title ?? '')] = (kinds[kindFor(f.rel.split('/').slice(1).join('/'), f.fm.title ?? '')] ?? 0) + 1;
  const liveNodes = (t.nodes ?? []).filter((n) => n.status === 'live').length;
  const comingNodes = (t.nodes ?? []).filter((n) => n.status === 'coming').length;
  const noSlug = (t.nodes ?? []).filter((n) => !n.slug).length;
  items.push(baseRecord({
    family: 'track', kind: 'track',
    title: t.name, slug: t.id, route: `/learn/${t.id}`,
    collection: null, path: 'src/data/curriculum.ts', track: t.id,
    status: liveNodes ? 'live' : 'coming', summary: t.summary,
    structuredData: STRUCTURED_DATA.track,
    features: {
      group: t.group, declaredMeta: t.meta, nodeCount: (t.nodes ?? []).length,
      liveNodes, comingNodes, headingOnlyNodes: noSlug, fileCount: files.length,
      kinds, modules: (moduleMap[t.id] ?? []).length, quickGuide: quickGuideTracks.has(t.id),
    },
    searchIntent: 'course-hub', primaryAudience: audienceFor('track', t.id),
    freshnessClass: 'periodic',
  }));
  if (quickGuideTracks.has(t.id)) {
    pendingIds.push({ key: `data:quick-guide/${t.id}` });
    items.push(baseRecord({
      family: 'reference', kind: 'quick-guide',
      title: `${t.name} quick guide`, slug: `${t.id}/quick-guide`, route: `/learn/${t.id}/quick-guide`,
      path: 'src/data/quick-guides.ts', track: t.id,
      structuredData: STRUCTURED_DATA['quick-guide'],
      searchIntent: 'reference', primaryAudience: audienceFor('track', t.id),
      freshnessClass: 'periodic',
    }));
  }
}

// --- curriculum nodes with no file (planning stubs) ----------------------------
for (const t of tracks) {
  for (const n of t.nodes ?? []) {
    if (n.slug && !lessonIdsOnDisk.has(`${t.id}/${n.slug}`)) {
      pendingIds.push({ key: `data:stub/${t.id}/${n.slug}` });
      items.push(baseRecord({
        family: 'lesson', kind: 'stub',
        title: n.title, slug: `${t.id}/${n.slug}`, route: null,
        path: 'src/data/curriculum.ts', track: t.id,
        status: n.status === 'coming' ? 'coming' : 'missing-file',
        structuredData: [], searchIntent: 'concept', primaryAudience: audienceFor('lesson', t.id),
        freshnessClass: 'periodic',
        blockers: n.status === 'live' ? ['live node without a lesson file — check-content should fail on this'] : [],
      }));
    }
  }
}

// --- roles ---------------------------------------------------------------------
for (const r of roles) {
  pendingIds.push({ key: `data:role/${r.id}` });
  const unresolved = (r.path ?? []).filter((ref) => !lessonIdsOnDisk.has(ref));
  const stepKinds = (r.path ?? []).map((ref) => {
    const slug = ref.split('/').pop();
    return kindFor(slug, nodeByTrackSlug.get(ref)?.node.title ?? '');
  });
  const practiceSteps = stepKinds.filter((k) => ['quiz', 'lab', 'capstone', 'worked-example', 'project'].includes(k)).length;
  const careerSteps = (r.path ?? []).filter((ref) => ref.startsWith('production/')).length;
  items.push(baseRecord({
    family: 'role', kind: 'role-path',
    title: r.name, slug: r.id, route: `/roles/${r.id}`,
    path: 'src/data/roles.ts', summary: r.blurb,
    structuredData: STRUCTURED_DATA.role,
    features: { pathLength: (r.path ?? []).length, unresolvedRefs: unresolved, description: r.description, practiceSteps, careerSteps, lastKind: stepKinds[stepKinds.length - 1] ?? null },
    searchIntent: 'role-path', primaryAudience: r.id,
    freshnessClass: 'periodic',
  }));
}

// fde role hub + phases
{
  pendingIds.push({ key: 'data:role/forward-deployed-engineer' });
  const planned = fdePhases.flatMap((p) => p.modules.flatMap((m) => m.nodes.map((n) => `${p.id}/${n.slug}`)));
  items.push(baseRecord({
    family: 'role', kind: 'role-path',
    title: 'Forward Deployed Engineer', slug: 'forward-deployed-engineer', route: '/roles/forward-deployed-engineer',
    path: 'src/data/fde.ts', status: 'live',
    summary: 'Zero to a hireable Forward Deployed Engineer.',
    structuredData: STRUCTURED_DATA['fde-course'],
    features: { phases: fdePhases.length, plannedNodes: planned.length, liveNodes: planned.filter((p) => fdeLive.has(p)).length },
    searchIntent: 'role-path', primaryAudience: 'forward-deployed-engineer',
    freshnessClass: 'periodic',
  }));
  for (const p of fdePhases) {
    pendingIds.push({ key: `data:fde-phase/${p.id}` });
    const pPlanned = p.modules.flatMap((m) => m.nodes.map((n) => `${p.id}/${n.slug}`));
    items.push(baseRecord({
      family: 'track', kind: 'fde-phase',
      title: p.name || p.id, slug: `fde/${p.id}`, route: `/roles/forward-deployed-engineer/${p.id}`,
      path: 'src/data/fde.ts', track: 'fde', status: pPlanned.some((x) => fdeLive.has(x)) ? 'live' : 'coming',
      structuredData: STRUCTURED_DATA['fde-course'],
      features: { modules: p.modules.length, plannedNodes: pPlanned.length, liveNodes: pPlanned.filter((x) => fdeLive.has(x)).length },
      searchIntent: 'course-hub', primaryAudience: 'forward-deployed-engineer',
      freshnessClass: 'periodic',
    }));
  }
}

// --- centralized practice tracks ------------------------------------------------
for (const q of quizTracks) {
  pendingIds.push({ key: `data:practice/${q.id}` });
  items.push(baseRecord({
    family: 'quiz', kind: 'practice-track',
    title: q.name, slug: q.id, route: `/practice/${q.id}`,
    path: 'src/data/quizzes.ts', summary: q.summary,
    structuredData: STRUCTURED_DATA['practice-track'],
    features: { questionCount: q.questionCount, lessonRefs: q.lessonRefs },
    searchIntent: 'practice', primaryAudience: 'ai-engineer',
    practiceType: 'quiz-bank', freshnessClass: 'periodic',
  }));
}

// --- static pages and endpoints --------------------------------------------------
const STATIC_FAMILY = {
  'index.astro': { title: 'Home', kind: 'landing', route: '/' },
  'learn/index.astro': { title: 'Learn — all tracks', kind: 'hub', route: '/learn' },
  'practice/index.astro': { title: 'Practice room', kind: 'hub', route: '/practice' },
  'interview/index.astro': { title: 'Interview prep', kind: 'hub', route: '/interview' },
  'scenarios/index.astro': { title: 'Scenarios', kind: 'hub', route: '/scenarios' },
  'blog/index.astro': { title: 'Blog', kind: 'hub', route: '/blog' },
  'guides/index.astro': { title: 'Guides', kind: 'hub', route: '/guides' },
  'answers/index.astro': { title: 'Straight answers', kind: 'hub', route: '/answers' },
  'roles/index.astro': { title: 'Role paths', kind: 'hub', route: '/roles' },
  'reference/index.astro': { title: 'Reference & cheatsheets', kind: 'hub', route: '/reference' },
  'reference/glossary.astro': { title: 'Glossary', kind: 'glossary', route: '/reference/glossary', family: 'glossary' },
  'kit.astro': { title: 'Kit', kind: 'page', route: '/kit' },
  'saved.astro': { title: 'Saved items', kind: 'tool', route: '/saved' },
  'stats.astro': { title: 'Stats', kind: 'page', route: '/stats' },
  'about.astro': { title: 'About', kind: 'page', route: '/about' },
  'privacy.astro': { title: 'Privacy', kind: 'policy', route: '/privacy' },
  'terms.astro': { title: 'Terms', kind: 'policy', route: '/terms' },
  '404.astro': { title: 'Not found', kind: 'system', route: '/404' },
  'search-index.json.ts': { title: 'Search index', kind: 'endpoint', route: '/search-index.json' },
  'llms.txt.ts': { title: 'llms.txt', kind: 'endpoint', route: '/llms.txt' },
  'rss.xml.ts': { title: 'RSS feed', kind: 'endpoint', route: '/rss.xml' },
  'ads.txt.ts': { title: 'ads.txt', kind: 'endpoint', route: '/ads.txt' },
};
for (const [file, meta] of Object.entries(STATIC_FAMILY)) {
  const p = join(PAGES, file);
  if (!existsSync(p)) continue;
  pendingIds.push({ key: `page:${meta.route}` });
  const isPolicy = meta.kind === 'policy';
  items.push(baseRecord({
    family: meta.family ?? 'page', kind: meta.kind,
    title: meta.title, slug: meta.route, route: meta.route,
    path: `src/pages/${file}`,
    status: 'live',
    structuredData: meta.family === 'glossary' ? STRUCTURED_DATA.glossary : STRUCTURED_DATA.page,
    features: meta.kind === 'glossary' ? { termCount: glossaryCount } : {},
    searchIntent: meta.kind === 'glossary' ? 'reference' : meta.kind === 'hub' ? 'hub' : 'nav',
    primaryAudience: 'general',
    freshnessClass: isPolicy ? 'policy-sensitive' : 'periodic',
    freshnessSignals: isPolicy ? ['policy page'] : [],
  }));
}

// ---------------------------------------------------------------------------
// assign stable IDs, then emit

assignIds(pendingIds);
pendingIds.forEach((p, i) => { items[i].id = p.id ?? null; });

// ---------------------------------------------------------------------------
// scoring pass — mechanical proxies for the checklist's editorial dimensions.
// Scale 0 (weak) / 1 (partial) / 2 (strong); null = needs editorial judgement.
// Auto-assigned dispositions are restricted to keep/expand/refresh/investigate —
// merge, redirect, noindex, archive, replace, split all need a human reason.

const STALE_MS = 180 * 24 * 60 * 60 * 1000;
const NOW = Date.now();
const familyMedian = {};
for (const it of items) {
  if (it.wordCount == null) continue;
  (familyMedian[it.family] ??= []).push(it.wordCount);
}
for (const k of Object.keys(familyMedian)) {
  const a = familyMedian[k].sort((x, y) => x - y);
  familyMedian[k] = a[Math.floor(a.length / 2)];
}
const fdePlannedSet = new Set(fdePhases.flatMap((p) => p.modules.flatMap((m) => m.nodes.map((n) => `${p.id}/${n.slug}`))));
const LINKABLE = new Set(['lesson', 'guide', 'blog', 'answer', 'scenario', 'interview', 'fde']);
const CONTENT_FAMILY = new Set([...LINKABLE, 'quiz']);
const VOLATILE = new Set(['pricing-sensitive', 'release-sensitive', 'certification-sensitive', 'policy-sensitive']);

function scoreItem(it) {
  const f = it.features ?? {};
  const s = {};
  const isContent = CONTENT_FAMILY.has(it.family);
  const summary = it.summary ?? it.promisedOutcome;

  // intent clarity — one page, one need: title + a single complete summary line
  if (!isContent) s.intentClarity = null;
  else if (summary && it.title) s.intentClarity = summary.length <= 200 ? 2 : 1;
  else s.intentClarity = 0;

  // correctness is editorial; only the presence of sourcing is mechanical
  if (!isContent) s.correctnessSources = null;
  else if (f.sourcesSection) s.correctnessSources = 2;
  else if ((it.externalLinks ?? []).length > 0) s.correctnessSources = 1;
  else s.correctnessSources = null;

  // completeness vs family median word count
  const med = familyMedian[it.family];
  if (it.wordCount == null || !med) s.completeness = null;
  else if (it.wordCount >= med * 0.8) s.completeness = 2;
  else if (it.wordCount >= med * 0.4) s.completeness = 1;
  else s.completeness = 0;

  // prerequisite fit — sits inside a registered sequence
  if (it.collection === 'lessons')
    s.prerequisiteFit = it.status === 'coming' ? 1 : f.curriculumRegistered ? 2 : 0;
  else if (it.collection === 'fde')
    s.prerequisiteFit = fdePlannedSet.has((it.slug ?? '').replace(/^fde\//, '')) ? 2 : 0;
  else s.prerequisiteFit = null;

  // hands-on depth — code, interactive check, or worked example present
  const handsOn = f.codeBlocks > 0 || f.interactiveCheck || f.workedExample;
  if (!isContent) s.handsOn = null;
  else if (handsOn) s.handsOn = 2;
  else if (['lesson', 'guide', 'fde', 'quiz'].includes(it.family)) s.handsOn = 0;
  else s.handsOn = 1;

  // explanation quality proxy — structure depth and failure coverage
  if (!isContent) s.explanationQuality = null;
  else if ((f.errorCase || f.workedExample) && (it.headings ?? []).length >= 2) s.explanationQuality = 2;
  else if ((it.headings ?? []).length >= 3) s.explanationQuality = 2;
  else if ((it.headings ?? []).length >= 1) s.explanationQuality = 1;
  else s.explanationQuality = 0;

  // metadata — summary in meta-description range
  if (!isContent) s.metadata = null;
  else if (summary && summary.length >= 40 && summary.length <= 170) s.metadata = 2;
  else if (summary) s.metadata = 1;
  else s.metadata = 0;

  // internal linking and continuation
  const nLinks = (it.internalLinks ?? []).length;
  if (!LINKABLE.has(it.family)) s.linking = null;
  else if (nLinks >= 3) s.linking = 2;
  else if (nLinks >= 1) s.linking = 1;
  else s.linking = 0;

  // freshness health — inverted risk, minus staleness
  if (!it.freshnessClass) s.freshnessHealth = null;
  else {
    let v = VOLATILE.has(it.freshnessClass) ? 0 : it.freshnessClass === 'periodic' ? 1 : 2;
    const updated = it.updated ? Date.parse(it.updated) : NaN;
    if (!Number.isNaN(updated) && NOW - updated > STALE_MS) v = Math.max(0, v - 1);
    s.freshnessHealth = v;
  }

  // editorial-only dimensions
  s.originality = null;
  s.accessibility = null;
  s.demand = null;

  // disposition
  let disposition = 'keep', reason = null;
  if (it.status === 'coming') { disposition = 'expand'; reason = 'planned stub — no content yet'; }
  else if (isContent && !summary) { disposition = 'investigate'; reason = 'missing summary/meta description'; }
  else if (it.collection === 'lessons' && f.curriculumRegistered === false) { disposition = 'investigate'; reason = 'live lesson not registered in curriculum'; }
  else if (s.completeness === 0 && !f.specFormat && !f.mathDense && !(f.codeBlocks > 0)) { disposition = 'expand'; reason = `thin vs family median (${it.wordCount}w vs ~${Math.round(med)}w)`; }
  else if (s.linking === 0) { disposition = 'investigate'; reason = 'zero in-body internal links'; }
  else if (s.freshnessHealth === 0 && it.updated && NOW - Date.parse(it.updated) > STALE_MS) {
    disposition = 'refresh'; reason = `${it.freshnessClass} content stale (>180d since update)`;
  }
  it.scores = s;
  it.disposition = disposition;
  it.dispositionReason = reason;
}
for (const it of items) scoreItem(it);

// ---------------------------------------------------------------------------
// duplicate candidates — fuzzy title/slug similarity so the editorial pass can
// decide merge/redirect with evidence. Candidates only; nothing auto-decided.

const STOPWORDS = new Set('a an and are as at be by for from how in is it its of on or that the this to vs what when where which who why with your'.split(' '));
// kind/format and domain-generic tokens: shared occurrences are not evidence
// of duplication — a pair must share at least one token outside this set.
const GENERIC_TOKENS = new Set(('quiz quizzes cheatsheet mistakes mistake common worked example examples explained essentials compared deep dive '
  + 'overview introduction intro fundamentals basics guide lesson lessons course part questions answers '
  + 'ai ml llm llms model models agent agents tool tools prompt prompts prompting mcp rag api apis data '
  + 'system systems app apps feature features not no do does can using use used build building').split(' '));
const titleToks = (t) => new Set((t ?? '').toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, ' ').split(/\s+/).filter((w) => w.length > 1 && !STOPWORDS.has(w)));
const dupScored = items.filter((i) => i.title && ['lessons', 'fde', 'answers', 'guides', 'blog'].includes(i.collection));
const tokenIndex = new Map();
const itemToks = new Map();
dupScored.forEach((it, idx) => {
  const toks = titleToks(it.title);
  itemToks.set(idx, toks);
  for (const w of toks) {
    if (!tokenIndex.has(w)) tokenIndex.set(w, []);
    tokenIndex.get(w).push(idx);
  }
});
const pairSeen = new Set();
const duplicates = [];
for (const idxList of tokenIndex.values()) {
  if (idxList.length < 2) continue;
  for (let a = 0; a < idxList.length; a++) {
    for (let b = a + 1; b < idxList.length; b++) {
      const i = idxList[a], j = idxList[b];
      const key = i < j ? `${i}:${j}` : `${j}:${i}`;
      if (pairSeen.has(key)) continue;
      pairSeen.add(key);
      const A = dupScored[i], B = dupScored[j];
      const ta = itemToks.get(i), tb = itemToks.get(j);
      const interToks = [...ta].filter((w) => tb.has(w));
      const inter = interToks.length;
      if (inter < 2) continue;
      const union = ta.size + tb.size - inter;
      const jaccard = inter / union;
      const containment = inter / Math.min(ta.size, tb.size);
      // slug-stem containment: cosine-similarity ⊂ cosine-similarity-angular-distance-…
      const sa = (A.slug ?? '').split('/').pop(), sb = (B.slug ?? '').split('/').pop();
      const slugStem = sa !== sb && sa.length >= 8 && (sb.startsWith(sa + '-') || sa.startsWith(sb + '-'));
      // require a distinctive shared token — sibling quizzes/cheatsheets
      // sharing only "mcp" + "quiz" are not duplicate candidates
      const distinctive = interToks.some((w) => !GENERIC_TOKENS.has(w));
      if ((jaccard >= 0.5 || containment >= 0.7 || slugStem) && distinctive) {
        const linked = (A.internalLinks ?? []).includes(B.route) || (B.internalLinks ?? []).includes(A.route);
        duplicates.push({
          a: { route: A.route, slug: A.slug, title: A.title, track: A.track ?? A.collection },
          b: { route: B.route, slug: B.slug, title: B.title, track: B.track ?? B.collection },
          jaccard: +jaccard.toFixed(2), containment: +containment.toFixed(2),
          slugStem: Boolean(slugStem), alreadyLinked: linked,
          sameTrack: (A.track ?? A.collection) === (B.track ?? B.collection),
        });
      }
    }
  }
}
duplicates.sort((x, y) => y.containment - x.containment || y.jaccard - x.jaccard);

// ---------------------------------------------------------------------------
// title-overpromise candidates — titles that claim more than the body delivers.
// Two mechanical signals: (a) a scope word ("complete", "everything", "master",
// "definitive", "all", "deep dive") on a body well under the family median;
// (b) a numeric promise ("7 mistakes", "5 ways") the heading/list structure
// doesn't fulfill. Candidates only — editorial verdicts stay human.

const SCOPE_WORDS = /\b(complete|definitive|ultimate|comprehensive|everything|master(?:ing|y)?|all[- ]in[- ]one|handbook|bible|crash course|deep dive|from scratch|end[- ]to[- ]end|full guide|a to z)\b/i;
const NUMERIC_PROMISE = /\b(\d+)\s+(mistakes|ways|reasons|rules|patterns|steps|tips|signals|checks|questions|examples|levers|principles|traps|lessons)\b/i;
const NON_CONTENT = new Set(['track', 'role', 'page', 'glossary']);
const overpromise = [];
for (const it of items) {
  if (!it.title || it.wordCount == null || NON_CONTENT.has(it.family)) continue;
  const med = familyMedian[it.family];
  const scope = it.title.match(SCOPE_WORDS)?.[0];
  const num = it.title.match(NUMERIC_PROMISE);
  const signals = [];
  if (scope && med && it.wordCount < med * 0.5) signals.push(`scope word "${scope}" on ${it.wordCount}w vs ~${Math.round(med)}w median`);
  if (num) {
    const promised = +num[1];
    // count concrete structural elements that could fulfill the promise —
    // headings of any depth, or list items, whichever is larger
    const delivered = Math.max((it.headings ?? []).length, it.features?.listItems ?? 0);
    if (delivered < promised) signals.push(`title promises ${promised} ${num[2]}, structure shows ~${delivered}`);
  }
  if (signals.length) {
    overpromise.push({ route: it.route, slug: it.slug, title: it.title, family: it.family, words: it.wordCount, signals });
  }
}

const byFamily = {}, byTrack = {}, byFresh = {}, byStatus = {}, byKind = {};
for (const it of items) {
  byFamily[it.family] = (byFamily[it.family] ?? 0) + 1;
  byStatus[it.status] = (byStatus[it.status] ?? 0) + 1;
  byKind[it.kind ?? 'none'] = (byKind[it.kind ?? 'none'] ?? 0) + 1;
  if (it.track) byTrack[it.track] = (byTrack[it.track] ?? 0) + 1;
  if (it.freshnessClass) byFresh[it.freshnessClass] = (byFresh[it.freshnessClass] ?? 0) + 1;
}

const registry = {
  meta: {
    version: 1,
    generatedAt: new Date().toISOString(),
    generator: 'scripts/build-content-registry.mjs',
    itemCount: items.length,
    counts: { byFamily, byStatus, byKind, byTrack, byFreshness: byFresh },
    analyticsNote: 'Analytics fields are null until Search Console / analytics exports are wired in.',
    heuristicNote: 'searchIntent, primaryAudience and freshnessClass are heuristic; freshnessSignals records what fired so a reviewer can overrule.',
    duplicatesNote: 'duplicate candidates are fuzzy title/slug similarity only — the editorial pass decides keep/merge/redirect with a written reason.',
  },
  items,
  duplicates,
  overpromise,
};

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(REGISTRY_FILE, JSON.stringify(registry, null, 1) + '\n');
writeFileSync(ID_FILE, JSON.stringify(idMap, null, 1) + '\n');

// ---------------------------------------------------------------------------
// audit views

const lessonItems = items.filter((i) => i.collection === 'lessons');
const md = [];
md.push('# Content registry — audit views');
md.push('');
md.push(`Generated ${registry.meta.generatedAt} by \`scripts/build-content-registry.mjs\`.`);
md.push(`${items.length} public content items. Machine-readable source: \`content-registry.json\`.`);
md.push('Heuristic fields (intent, audience, freshness) record their signals in JSON — overrule during scoring.');
md.push('');
md.push('## By family');
md.push('');
for (const [f, n] of Object.entries(byFamily).sort((a, b) => b[1] - a[1])) md.push(`- ${f}: ${n}`);
md.push('');
md.push('## By status');
md.push('');
for (const [s, n] of Object.entries(byStatus).sort((a, b) => b[1] - a[1])) md.push(`- ${s}: ${n}`);
md.push('');
const byIntent = {}, byAudience = {};
for (const i of items) {
  if (i.searchIntent) byIntent[i.searchIntent] = (byIntent[i.searchIntent] ?? 0) + 1;
  if (i.primaryAudience) byAudience[i.primaryAudience] = (byAudience[i.primaryAudience] ?? 0) + 1;
}
md.push('## By search intent (heuristic)');
md.push('');
for (const [s, n] of Object.entries(byIntent).sort((a, b) => b[1] - a[1])) md.push(`- ${s}: ${n}`);
md.push('');
md.push('## By primary audience (heuristic)');
md.push('');
for (const [s, n] of Object.entries(byAudience).sort((a, b) => b[1] - a[1])) md.push(`- ${s}: ${n}`);
md.push('');
md.push('## Coverage matrix — what each live track actually ships');
md.push('');
md.push('| track | files | concept | worked ex. | mistakes | compared | cheatsheet | quiz | lab | capstone | % code | % check | % sources | med. words | quick guide | quiz bank |');
md.push('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
for (const t of tracks) {
  const files = lessonItems.filter((i) => i.track === t.id && i.status !== 'coming');
  const k = (kk) => files.filter((i) => i.kind === kk).length;
  const pct = (fn) => files.length ? Math.round(100 * files.filter(fn).length / files.length) : 0;
  const words = files.map((i) => i.wordCount ?? 0).sort((a, b) => a - b);
  const med = words.length ? words[Math.floor(words.length / 2)] : 0;
  const BANK_FOR = { 'agentic-ai': 'agents', 'evals-red-teaming': 'evals', 'llm-foundations': 'llm-basics' };
  const hasBank = quizTracks.some((q) => q.id === t.id || q.id === BANK_FOR[t.id]);
  md.push(`| ${t.id} | ${files.length} | ${k('concept')} | ${k('worked-example')} | ${k('common-mistakes')} | ${k('comparison')} | ${k('cheatsheet')} | ${k('quiz')} | ${k('lab')} | ${k('capstone')} | ${pct((i) => i.features.codeBlocks > 0)}% | ${pct((i) => i.features.interactiveCheck)}% | ${pct((i) => i.features.sourcesSection || i.externalLinks.length > 0)}% | ${med} | ${quickGuideTracks.has(t.id) ? 'yes' : '—'} | ${hasBank ? 'yes' : '—'} |`);
}
md.push('');
md.push('## Track gap briefs');
md.push('');
md.push('Mechanical per-track audit. Practice-ending = last node of a module is quiz/lab/capstone/worked-example/drill;');
md.push('dead-end = the track\'s final live node is a plain concept; orphan boundary = a module `startsAt` slug absent from the track\'s nodes.');
md.push('');
const PRACTICE_KINDS = new Set(['quiz', 'lab', 'capstone', 'worked-example', 'drill', 'project']);
const PROMISE_STOP = new Set(('the a an and or of to in for on that it its your you how what when why is are can cant '
  + 'do does not no from through into with without at by be as so if than then them they their this these those '
  + 'all any every each one two out up over under again once just only own same very too most more some such '
  + 'about between after before while during against off both few other which who will would should could has '
  + 'have had been being get make use used using work works working well actually really need needs needed know '
  + 'right way ways thing things still instead lets let makes made give gives turn turns ai ml llm llms model models '
  + 'system systems feature features app apps').split(' '));
for (const t of tracks) {
  const files = lessonItems.filter((i) => i.track === t.id && i.status !== 'coming');
  if (!files.length && !(t.nodes ?? []).length) continue;
  const order = (t.nodes ?? []).filter((n) => n.slug).map((n) => n.slug);
  const liveOrder = order.filter((s) => lessonIdsOnDisk.has(`${t.id}/${s}`));
  const bounds = moduleMap[t.id] ?? [];
  const flags = [];
  // orphan boundaries
  for (const b of bounds) if (!order.includes(b.startsAt)) flags.push(`orphan module boundary: \`${b.startsAt}\` ("${b.name}")`);
  // module-ending practice check
  const noPractice = [];
  for (let bi = 0; bi < bounds.length; bi++) {
    const start = order.indexOf(bounds[bi].startsAt);
    if (start === -1) continue;
    const end = bi + 1 < bounds.length ? order.indexOf(bounds[bi + 1].startsAt) : order.length;
    const modSlugs = order.slice(start, end === -1 ? order.length : end).filter((s) => lessonIdsOnDisk.has(`${t.id}/${s}`));
    if (!modSlugs.length) continue;
    const lastSlug = modSlugs[modSlugs.length - 1];
    const k = kindFor(lastSlug, nodeByTrackSlug.get(`${t.id}/${lastSlug}`)?.node.title ?? '');
    if (!PRACTICE_KINDS.has(k)) noPractice.push(`"${bounds[bi].name}" ends on ${lastSlug} (${k})`);
  }
  if (noPractice.length) flags.push(`modules without practice ending: ${noPractice.slice(0, 4).join('; ')}${noPractice.length > 4 ? ` +${noPractice.length - 4} more` : ''}`);
  // dead-end final lesson
  const lastLive = liveOrder[liveOrder.length - 1];
  if (lastLive) {
    const k = kindFor(lastLive, nodeByTrackSlug.get(`${t.id}/${lastLive}`)?.node.title ?? '');
    if (!PRACTICE_KINDS.has(k)) flags.push(`dead-end finish: last live lesson is ${lastLive} (${k})`);
  }
  // quiz nodes should sit after their stem lesson
  const orderIdx = new Map(liveOrder.map((s, i) => [s, i]));
  const earlyQuiz = [];
  for (const s of liveOrder) {
    if (!s.endsWith('-quiz')) continue;
    const stem = s.slice(0, -5);
    if (orderIdx.has(stem) && orderIdx.get(stem) > orderIdx.get(s)) earlyQuiz.push(s);
  }
  if (earlyQuiz.length) flags.push(`quiz before its lesson: ${earlyQuiz.slice(0, 3).join(', ')}${earlyQuiz.length > 3 ? ` +${earlyQuiz.length - 3}` : ''}`);
  // first live node should orient (concept), not drop into lab/quiz
  const firstLive = liveOrder[0];
  if (firstLive) {
    const k = kindFor(firstLive, nodeByTrackSlug.get(`${t.id}/${firstLive}`)?.node.title ?? '');
    if (['quiz', 'lab', 'capstone'].includes(k)) flags.push(`first live node is ${k}: ${firstLive}`);
  }
  // 'coming' nodes wedged before live ones break the sequence for learners
  const firstComing = order.findIndex((s) => !lessonIdsOnDisk.has(`${t.id}/${s}`));
  const lastLiveInOrder = order.indexOf(lastLive);
  if (firstComing !== -1 && lastLive && firstComing < lastLiveInOrder) {
    const wedged = order.slice(firstComing, lastLiveInOrder).filter((s) => !lessonIdsOnDisk.has(`${t.id}/${s}`));
    if (wedged.length) flags.push(`${wedged.length} 'coming' node${wedged.length === 1 ? '' : 's'} inside the live sequence (from ${wedged[0]})`);
  }
  // coverage gaps
  const kindsPresent = new Set(files.map((i) => i.kind));
  const missing = ['quiz', 'worked-example', 'common-mistakes', 'cheatsheet', 'capstone'].filter((k) => !kindsPresent.has(k));
  if (missing.length) flags.push(`missing kinds: ${missing.join(', ')}`);
  // islands / thin / dups
  const islands = files.filter((i) => i.dispositionReason === 'zero in-body internal links').length;
  if (islands) flags.push(`${islands} island lesson${islands === 1 ? '' : 's'} (no in-body links)`);
  const thin = files.filter((i) => i.disposition === 'expand' && i.status === 'live').length;
  if (thin) flags.push(`${thin} thin vs family median`);
  const dups = duplicates.filter((d) => d.sameTrack && (d.a.track === t.id)).length;
  if (dups) flags.push(`${dups} duplicate-candidate pairs in track`);
  const coming = order.filter((s) => !lessonIdsOnDisk.has(`${t.id}/${s}`)).length;
  if (coming) flags.push(`${coming} planned nodes unbuilt`);
  // promise coverage — each summary clause should have a live node whose
  // title plausibly covers it (word-stem match: first 5 chars for len>=5)
  const liveTitleText = liveOrder
    .map((s) => `${nodeByTrackSlug.get(`${t.id}/${s}`)?.node.title ?? ''} ${s}`)
    .join(' ').toLowerCase();
  const hit = (w) => liveTitleText.includes(w) || (w.length >= 5 && liveTitleText.includes(w.slice(0, 5)));
  const promiseClauses = (t.summary ?? '')
    .split(/[,—:;.]| and | or /i).map((c) => c.trim()).filter(Boolean);
  const uncovered = [];
  for (const c of liveOrder.length ? promiseClauses : []) {
    const terms = c.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/)
      .filter((w) => w.length >= 3 && !PROMISE_STOP.has(w));
    if (terms.length && !terms.some(hit)) uncovered.push(`"${c}"`);
  }
  if (uncovered.length) flags.push(`promise gap: no live node title covers ${uncovered.join('; ')}`);
  const firstTitle = firstLive ? nodeByTrackSlug.get(`${t.id}/${firstLive}`)?.node.title ?? firstLive : null;
  md.push(`### ${t.id} — ${files.length} files, ${bounds.length} modules${firstTitle ? ` — starts: "${firstTitle}"` : ''}`);
  md.push('');
  if (flags.length) for (const f of flags) md.push(`- ${f}`);
  else md.push('- clean');
  md.push('');
}
md.push('## Scores and dispositions (mechanical pass)');
md.push('');
md.push('Scale 0/1/2 per dimension; `null` = editorial judgement required. Auto-dispositions are');
md.push('limited to keep/expand/refresh/investigate — merge, redirect, noindex, archive, replace');
md.push('and split always need a written human reason (see checklist).');
md.push('');
const byDisp = {};
for (const i of items) byDisp[i.disposition] = (byDisp[i.disposition] ?? 0) + 1;
md.push('| disposition | items |');
md.push('|---|---:|');
for (const [d, n] of Object.entries(byDisp).sort((a, b) => b[1] - a[1])) md.push(`| ${d} | ${n} |`);
md.push('');
const DIMS = ['intentClarity', 'correctnessSources', 'completeness', 'prerequisiteFit', 'handsOn', 'explanationQuality', 'metadata', 'linking', 'freshnessHealth', 'originality', 'accessibility', 'demand'];
md.push('| dimension | scored | mean | 0 | 1 | 2 |');
md.push('|---|---:|---:|---:|---:|---:|');
for (const d of DIMS) {
  const vals = items.map((i) => i.scores?.[d]).filter((v) => v != null);
  if (!vals.length) { md.push(`| ${d} | 0 | — | — | — | — |`); continue; }
  const mean = (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2);
  md.push(`| ${d} | ${vals.length} | ${mean} | ${vals.filter((v) => v === 0).length} | ${vals.filter((v) => v === 1).length} | ${vals.filter((v) => v === 2).length} |`);
}
md.push('');
md.push('### Non-keep dispositions');
md.push('');
const nonKeep = items.filter((i) => i.disposition !== 'keep' && i.disposition !== 'unscored');
const dispGroups = {};
for (const i of nonKeep) (dispGroups[`${i.disposition}: ${i.dispositionReason}`] ??= []).push(i);
for (const [why, list] of Object.entries(dispGroups).sort((a, b) => b[1].length - a[1].length)) {
  md.push(`#### ${why} (${list.length})`);
  md.push('');
  for (const i of list.slice(0, 40)) md.push(`- ${i.route ?? i.slug ?? '(no route)'}${i.title ? ` — ${i.title}` : ''}`);
  if (list.length > 40) md.push(`- … ${list.length - 40} more in content-registry.json`);
  md.push('');
}
md.push('## Duplicate candidates');
md.push('');
const unlinked = duplicates.filter((d) => !d.alreadyLinked);
md.push(`${duplicates.length} pairs by title/slug similarity (${unlinked.length} not already cross-linked) — candidates for the merge/redirect editorial pass, not verdicts. Pairs where one already links to the other are marked linked — often deliberate two-part lessons.`);
md.push('');
md.push('| item A | item B | jac | contain | stem | linked | scope |');
md.push('|---|---|---:|---:|---|---|---|');
for (const d of duplicates.slice(0, 60)) {
  md.push(`| ${d.a.route ?? d.a.slug} | ${d.b.route ?? d.b.slug} | ${d.jaccard} | ${d.containment} | ${d.slugStem ? 'yes' : ''} | ${d.alreadyLinked ? 'yes' : ''} | ${d.sameTrack ? 'same track' : `${d.a.track} × ${d.b.track}`} |`);
}
if (duplicates.length > 60) md.push(`\n_… ${duplicates.length - 60} more pairs in content-registry.json (\`duplicates\`)_`);
md.push('');
md.push('## Title-overpromise candidates');
md.push('');
md.push(`${overpromise.length} items whose titles claim more than the body structure delivers — scope words on thin bodies, or numeric promises ("7 mistakes") the heading/list structure doesn't fulfill. Candidates, not verdicts.`);
md.push('');
if (overpromise.length) {
  md.push('| item | words | signals |');
  md.push('|---|---:|---|');
  for (const o of overpromise.slice(0, 60)) {
    md.push(`| ${o.route ?? o.slug} | ${o.words} | ${o.signals.join('; ')} |`);
  }
  if (overpromise.length > 60) md.push(`\n_… ${overpromise.length - 60} more in content-registry.json (\`overpromise\`)_`);
}
md.push('');
md.push('## Freshness queues');
md.push('');
for (const [c, n] of Object.entries(byFresh).sort((a, b) => b[1] - a[1])) md.push(`- ${c}: ${n}`);
md.push('');
for (const cls of ['certification-sensitive', 'pricing-sensitive', 'policy-sensitive']) {
  const list = items.filter((i) => i.freshnessClass === cls);
  if (!list.length) continue;
  md.push(`### ${cls} (${list.length})`);
  md.push('');
  for (const i of list.slice(0, 30)) md.push(`- ${i.route ?? i.slug} — ${i.title}`);
  if (list.length > 30) md.push(`- … ${list.length - 30} more in content-registry.json`);
  md.push('');
}
const release = items.filter((i) => i.freshnessClass === 'release-sensitive');
md.push(`### release-sensitive (${release.length})`);
md.push('');
md.push('Largest queue; full list in JSON. Vendor-signal sample:');
for (const i of release.slice(0, 30)) {
  const v = (i.freshnessSignals.find((s) => s.startsWith('vendor')) ?? '').replace('vendor/tool mentions: ', '');
  md.push(`- ${i.route ?? i.slug} — ${v || i.title}`);
}
if (release.length > 30) md.push(`- … ${release.length - 30} more`);
md.push('');
md.push('## Missing-data queues');
md.push('');
const queues = {
  'no summary/meta description': items.filter((i) => i.status === 'live' && i.collection && !i.summary),
  'no published or updated date': items.filter((i) => i.collection && !i.published && !i.updated),
  'zero in-body internal links (template nav still applies)': items.filter((i) => i.collection && i.internalLinks.length === 0),
  'live file not in curriculum': lessonItems.filter((i) => i.status === 'live' && !i.features.curriculumRegistered),
  'live curriculum node missing file': items.filter((i) => i.kind === 'stub' && i.status === 'missing-file'),
  'coming nodes (planned, unbuilt)': items.filter((i) => i.kind === 'stub' && i.status === 'coming'),
  'lesson files with status coming': lessonItems.filter((i) => i.status === 'coming'),
  'release-sensitive, no date at all': items.filter((i) => i.freshnessClass?.endsWith('sensitive') && !i.published && !i.updated),
};
for (const [name, list] of Object.entries(queues)) {
  md.push(`### ${name} (${list.length})`);
  md.push('');
  for (const i of list.slice(0, 40)) md.push(`- ${i.route ?? i.slug ?? '(no route)'}${i.title ? ` — ${i.title}` : ''}`);
  if (list.length > 40) md.push(`- … ${list.length - 40} more`);
  md.push('');
}
md.push('## Role paths');
md.push('');
for (const i of items.filter((x) => x.family === 'role')) {
  const f = i.features;
  const notes = [];
  if (f.unresolvedRefs?.length) notes.push(`⚠ unresolved: ${f.unresolvedRefs.join(', ')}`);
  if (f.practiceSteps === 0) notes.push('⚠ no practice/lab/capstone step');
  if (f.lastKind === 'concept') notes.push('dead-end finish');
  md.push(`- ${i.route} — ${f.pathLength ?? `${f.liveNodes}/${f.plannedNodes} live`} steps${f.practiceSteps != null ? `, ${f.practiceSteps} practice` : ''}${f.careerSteps ? `, ${f.careerSteps} production` : ''}${notes.length ? ' — ' + notes.join('; ') : ''}`);
}
md.push('');
md.push('## FDE path — plan vs on disk');
md.push('');
for (const p of fdePhases) {
  const planned = p.modules.flatMap((m) => m.nodes.map((n) => `${p.id}/${n.slug}`));
  const liveN = planned.filter((x) => fdeLive.has(x)).length;
  md.push(`- ${p.id}: ${liveN}/${planned.length} nodes live across ${p.modules.length} modules`);
}
md.push('');
md.push('## Practice banks');
md.push('');
for (const q of quizTracks) md.push(`- /practice/${q.id} — ${q.questionCount} questions, ${q.lessonRefs.length} lesson links`);
md.push('');
md.push('## Non-lesson collections');
md.push('');
for (const f of ['interview', 'scenario', 'guide', 'blog', 'answer']) {
  const list = items.filter((i) => i.family === f);
  md.push(`### ${f} (${list.length})`);
  md.push('');
  for (const i of list) md.push(`- ${i.route} — ${i.title} (${i.wordCount ?? '?'} words${i.updated ? `, updated ${i.updated}` : ''})`);
  md.push('');
}

writeFileSync(VIEWS_FILE, md.join('\n') + '\n');

console.log(`content registry: ${items.length} items → ${relative(ROOT, REGISTRY_FILE)}`);
console.log(`id map: ${Object.keys(idMap.entries).length} live, ${Object.keys(idMap.retired).length} retired → ${relative(ROOT, ID_FILE)}`);
console.log(`audit views → ${relative(ROOT, VIEWS_FILE)}`);
console.log(`families: ${Object.entries(byFamily).map(([f, n]) => `${f} ${n}`).join(', ')}`);
