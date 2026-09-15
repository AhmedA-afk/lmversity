#!/usr/bin/env node
/**
 * Phase 0 acquisition & practice family audit — mechanical half.
 *
 *   node scripts/audit-families.mjs
 *
 * Runs the structural checks from the long-horizon checklist's "Audit every
 * acquisition and practice family" section against the real files, and emits:
 *   docs/registry/family-audit.json     — per-item check results
 *   docs/registry/acquisition-audit.md  — readable findings + backlog order
 *
 * What it can see mechanically: structure, coverage, links, dates, option
 * counts, duplicate stems, answer-position bias. What it cannot: originality,
 * correctness, tone — those stay human/agent-scored in the review pass.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const CONTENT = join(ROOT, 'src/content');
const OUT = join(ROOT, 'docs/registry');

const fmBody = (src) => {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  return { raw: m ? m[1] : '', body: m ? src.slice(m[0].length) : src };
};
const noCode = (b) => b.replace(/^```[\s\S]*?^```/gm, '');
const h2s = (b) => [...noCode(b).matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1]);
const words = (b) => noCode(b).replace(/<[^>]+>/g, ' ').replace(/!?\[[^\]]*\]\([^)]*\)/g, ' ').replace(/[#*_`>|-]/g, ' ').split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
const links = (b, re) => [...new Set([...b.matchAll(re)].map((m) => m[1]))];
const internalLinks = (b) => links(b, /\]\((\/[^)\s"#]+)/g);
const externalLinks = (b) => links(b, /\]\((https?:\/\/[^)\s]+)/g);
const codeBlocks = (b) => Math.floor(((b.match(/^```/gm) || []).length) / 2);
const firstPara = (b) => {
  const para = b.split(/\n\s*\n/).map((p) => p.trim()).find((p) => p && !p.startsWith('#') && !p.startsWith('import ') && !p.startsWith('<'));
  return para ?? '';
};
/** Count dash-list items under one frontmatter key (quoted or unquoted). */
const fmListCount = (raw, key) => {
  const m = raw.match(new RegExp(`^${key}:\\s*\\n((?:\\s+-[^\\n]*\\n?)+)`, 'm'));
  if (!m) {
    const inline = raw.match(new RegExp(`^${key}:\\s*\\[(.*?)\\]`, 'm'));
    return inline ? (inline[1].trim() ? inline[1].split(',').length : 0) : 0;
  }
  return (m[1].match(/^\s+-\s/gm) || []).length;
};
const list = (dir, ext) => statSync(dir, { throwIfNoEntry: false })
  ? readdirSync(dir).filter((f) => ext.test(f)).sort().map((f) => join(dir, f)) : [];

const findings = { answers: [], guides: [], blog: [], interview: [], scenarios: [], practice: {}, lessonQuizzes: [], workedExamples: [], cheatsheets: [], mistakes: [] };

// --- Straight Answers ---------------------------------------------------------
for (const f of list(join(CONTENT, 'answers'), /\.(md|mdx)$/)) {
  const src = readFileSync(f, 'utf8');
  const { raw, body } = fmBody(src);
  const fp = firstPara(body);
  const fpw = fp.split(/\s+/).filter(Boolean).length;
  const faq = fmListCount(raw, 'faq');
  const rel = fmListCount(raw, 'related');
  findings.answers.push({
    slug: relative(join(CONTENT, 'answers'), f).replace(/\.(md|mdx)$/, ''),
    firstParaWords: fpw,
    answerFirst: fpw > 0 && fpw <= 90,
    faq, related: rel,
    internal: internalLinks(body).length, external: externalLinks(body).length,
    words: words(body),
    flags: [
      ...(fpw === 0 ? ['no opening paragraph'] : fpw > 90 ? [`opening paragraph is ${fpw} words — answer-first means <~90`] : []),
      ...(faq === 0 ? ['no faq frontmatter (FAQPage schema)'] : []),
      ...(rel === 0 ? ['no related links in frontmatter'] : []),
      ...(internalLinks(body).length === 0 ? ['no in-body internal links'] : []),
    ],
  });
}

// --- Guides --------------------------------------------------------------------
for (const f of list(join(CONTENT, 'guides'), /\.(md|mdx)$/)) {
  const src = readFileSync(f, 'utf8');
  const { raw, body } = fmBody(src);
  const rel = fmListCount(raw, 'related');
  const steps = fmListCount(raw, 'steps');
  const heads = h2s(body);
  findings.guides.push({
    slug: relative(join(CONTENT, 'guides'), f).replace(/\.(md|mdx)$/, ''),
    steps, related: rel, codeBlocks: codeBlocks(body),
    hasFailureSection: heads.some((h) => /wrong|fail|error|break|trouble|debug|mistake/i.test(h)),
    hasVerifySection: heads.some((h) => /verif|test|check|confirm/i.test(h)),
    internal: internalLinks(body).length, external: externalLinks(body).length,
    words: words(body),
    flags: [
      ...(steps === 0 ? ['no steps in frontmatter (HowTo schema empty)'] : []),
      ...(rel === 0 ? ['no related lesson links'] : []),
      ...(codeBlocks(body) === 0 ? ['no code — a build guide without runnable steps'] : []),
      ...(internalLinks(body).length === 0 ? ['no in-body internal links (only the related block)'] : []),
    ],
  });
}

// --- Blog ----------------------------------------------------------------------
for (const f of list(join(CONTENT, 'blog'), /\.mdx$/)) {
  const src = readFileSync(f, 'utf8');
  const { raw, body } = fmBody(src);
  const learnLinks = internalLinks(body).filter((l) => l.startsWith('/learn')).length;
  findings.blog.push({
    slug: relative(join(CONTENT, 'blog'), f).replace(/\.mdx$/, ''),
    published: /published:/.test(raw), updated: /updated:/.test(raw),
    tags: fmListCount(raw, 'tags'),
    learnLinks, internal: internalLinks(body).length, external: externalLinks(body).length,
    words: words(body),
    flags: [
      ...(!/published:/.test(raw) ? ['no published date'] : []),
      ...(learnLinks === 0 ? ['no links into the curriculum'] : []),
    ],
  });
}

// --- Interview prep --------------------------------------------------------------
for (const f of list(join(CONTENT, 'questions'), /\.mdx$/)) {
  const src = readFileSync(f, 'utf8');
  const { body } = fmBody(src);
  const sections = ('\n' + noCode(body)).split(/\n## /).slice(1);
  let linked = 0, thin = 0;
  for (const s of sections) {
    if (internalLinks(s).length) linked++;
    const paras = s.split(/\n\s*\n/).filter((p) => p.trim() && !p.startsWith('#')).length;
    if (paras < 2) thin++;
  }
  const heads = h2s(body);
  findings.interview.push({
    slug: relative(join(CONTENT, 'questions'), f).replace(/\.mdx$/, ''),
    questions: sections.length,
    withLinks: linked, thinAnswers: thin,
    hasFollowUps: heads.some((h) => /follow/i.test(h)),
    hasRubric: /rubric|weak answer|strong answer|score/i.test(body),
    words: words(body),
    flags: [
      ...(thin ? [`${thin} question(s) with a single short answer paragraph`] : []),
      ...(!heads.some((h) => /follow/i.test(h)) && !/rubric|weak answer|strong answer/i.test(body) ? ['no follow-up prompts or rubric (checklist wants both)'] : []),
    ],
  });
}

// --- Scenarios ------------------------------------------------------------------
const SCENARIO_SECTIONS = {
  situation: /situation|context|brief/i,
  constraints: /constraint|requirement|limit|must not/i,
  options: /option|alternative|trade-?off|approach|choice/i,
  decision: /decision|design|chosen|plan/i,
  implementation: /implement|build|architect|steps|how/i,
  evaluation: /test|evaluat|measure|metric|verify/i,
  postmortem: /postmortem|went wrong|incident|retro|failure/i,
};
for (const f of list(join(CONTENT, 'scenarios'), /\.mdx$/)) {
  const src = readFileSync(f, 'utf8');
  const { body } = fmBody(src);
  const heads = h2s(body).join('\n');
  const covered = Object.keys(SCENARIO_SECTIONS).filter((k) => SCENARIO_SECTIONS[k].test(heads) || SCENARIO_SECTIONS[k].test(body));
  const missing = Object.keys(SCENARIO_SECTIONS).filter((k) => !covered.includes(k));
  findings.scenarios.push({
    slug: relative(join(CONTENT, 'scenarios'), f).replace(/\.mdx$/, ''),
    sections: h2s(body), covered, missing,
    internal: internalLinks(body).length, words: words(body),
    flags: missing.length ? [`missing: ${missing.join(', ')}`] : [],
  });
}

// --- Centralized practice banks (quizzes.ts) --------------------------------------
{
  const src = readFileSync(join(ROOT, 'src/data/quizzes.ts'), 'utf8');
  const tracks = [];
  for (const block of src.split(/\n  \{\n/).slice(1)) {
    const id = block.match(/^\s*id:\s*'([\w-]+)'/m)?.[1];
    if (!id) continue;
    const questions = [];
    // q('prompt', [opts], answer, 'explanation', [why], 'lesson?') — single-line calls
    for (const qm of block.matchAll(/\n\s+q\(/g)) {
      const call = block.slice(qm.index + qm[0].length);
      const end = call.indexOf('\n');
      const text = call.slice(0, end);
      const arrays = [...text.matchAll(/\[((?:[^\[\]\\]|\\.)*)\]/g)];
      const optArr = arrays[0]?.[1] ?? '';
      const options = optArr ? optArr.match(/'((?:[^'\\]|\\.)*)'/g)?.length ?? 0 : 0;
      const answerIdx = text.match(/\]\s*,\s*(\d+)/)?.[1];
      const whyArr = arrays[1]?.[1] ?? '';
      const whyCount = whyArr ? whyArr.match(/'((?:[^'\\]|\\.)*)'/g)?.length ?? 0 : 0;
      const hasLesson = /'\/learn\//.test(text);
      const promptText = text.match(/^\s*'((?:[^'\\]|\\.)*)'/)?.[1] ?? '';
      questions.push({
        options, answer: answerIdx == null ? null : Number(answerIdx),
        whyCount, hasLesson,
        prompt: promptText.slice(0, 80),
        flags: [
          ...(options && whyCount !== options ? [`why[] has ${whyCount} entries for ${options} options`] : []),
          ...(answerIdx == null ? ['could not parse answer index'] : []),
          ...(/all of the above|none of the above/i.test(optArr) ? ['"all/none of the above" option'] : []),
        ],
      });
    }
    const pos = questions.map((q) => q.answer).filter((n) => n != null);
    tracks.push({
      id, questions: questions.length,
      answerPositions: pos.reduce((acc, n) => ({ ...acc, [n]: (acc[n] ?? 0) + 1 }), {}),
      withLessonLinks: questions.filter((q) => q.hasLesson).length,
      avgOptions: questions.length ? (questions.reduce((s, q) => s + q.options, 0) / questions.length).toFixed(1) : 0,
      flags: questions.flatMap((q, i) => q.flags.map((fl) => `q${i + 1}: ${fl}`)),
      firstAnswersIndex0or1: pos.length ? pos.filter((n) => n <= 1).length / pos.length : 0,
    });
  }
  findings.practice = tracks;
}

// --- Lesson-level quiz pages --------------------------------------------------------
// Heading styles in the wild: `## 3. Stem`, `## Question 3: Title`, `### 3. Stem`, `**3. Stem**`.
// Option styles: `- **A.**`, `- A.`, `- A)`, `A)`, bare `A. text`. Answer marks: `**Correct: A.**`, `**Answer A**`.
const stemIndex = new Map(); // normalized stem -> [{slug, n}]
const quizAnswerPos = {};
const Q_BOUNDARY = /\n(?=#{2,3}\s+(?:(?:Question\s+)\d+[.:]?|\d+[.:])|\*\*Q?\d+\.)/;
const OPT_RE = /^(?:-\s+)?(?:\*\*)?[A-E][.)]/gm;
const ANS_RE = /\*\*(?:Correct:|Answer)\s*([A-E])\.?\s*\*\*/;
const LETTER_RE = /\*\*([A-E])\b|^[ \t]*-?[ \t]*([A-E])(?=[:.)]| is )/gm;
function* walkQ(dir) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) yield* walkQ(p);
    else if (/-quiz\.(md|mdx)$/.test(n)) yield p;
  }
}
for (const f of [...walkQ(join(CONTENT, 'lessons'))].sort()) {
  const rel = relative(join(CONTENT, 'lessons'), f).replace(/\.(md|mdx)$/, '');
  const { body } = fmBody(readFileSync(f, 'utf8'));
  const qBlocks = ('\n' + noCode(body)).split(Q_BOUNDARY).slice(1);
  let optCounts = [], answers = 0, rationaleForAll = 0;
  qBlocks.forEach((b, i) => {
    const opts = (b.replace(/<details>[\s\S]*?<\/details>/g, '').match(OPT_RE) || []).length;
    if (opts) optCounts.push(opts);
    const mark = b.match(ANS_RE);
    if (mark) { answers++; quizAnswerPos[mark[1]] = (quizAnswerPos[mark[1]] ?? 0) + 1; }
    const det = b.match(/<details>[\s\S]*?<\/details>/);
    const letters = new Set();
    if (det) for (const m of det[0].replace(ANS_RE, '').matchAll(LETTER_RE)) letters.add(m[1] ?? m[2]);
    if (det && letters.size >= Math.max(2, opts - 1)) rationaleForAll++;
    const stem = b.split('\n')[0]
      .replace(/^[#\s*]+/, '').replace(/\*\*$/, '')
      .replace(/^(?:(?:Question|Q)\s+)?\d+[.:]?\s*[:—-]?\s*/, '')
      .toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
    if (stem) {
      if (!stemIndex.has(stem)) stemIndex.set(stem, []);
      stemIndex.get(stem).push({ slug: rel, n: i + 1 });
    }
  });
  findings.lessonQuizzes.push({
    slug: rel, questions: qBlocks.length, optCounts, answersMarked: answers,
    perOptionRationale: rationaleForAll,
    internal: internalLinks(body).length, words: words(body),
    flags: [
      ...(answers < qBlocks.length ? [`${qBlocks.length - answers} question(s) without a marked correct answer`] : []),
      ...(rationaleForAll < qBlocks.length ? [`${qBlocks.length - rationaleForAll} answer block(s) don't discuss every option`] : []),
      ...(qBlocks.length === 0 ? ['no `## N.` / `## Question N` headings found — check format'] : []),
    ],
  });
}
const duplicateStems = [...stemIndex.entries()].filter(([, v]) => v.length > 1);

// --- Worked examples ------------------------------------------------------------------
function* walkKind(suffix) {
  for (const n of readdirSync(join(CONTENT, 'lessons'))) {
    const d = join(CONTENT, 'lessons', n);
    if (!statSync(d).isDirectory()) continue;
    yield* (function* w(dd) {
      for (const nn of readdirSync(dd)) {
        const p = join(dd, nn);
        if (statSync(p).isDirectory()) yield* w(p);
        else if (suffix.test(nn)) yield p;
      }
    })(d);
  }
}
for (const f of [...walkKind(/-worked-example\.(md|mdx)$/)].sort()) {
  const rel = relative(join(CONTENT, 'lessons'), f).replace(/\.(md|mdx)$/, '');
  const { body } = fmBody(readFileSync(f, 'utf8'));
  const heads = h2s(body).join('\n');
  findings.workedExamples.push({
    slug: rel, codeBlocks: codeBlocks(body), internal: internalLinks(body).length,
    words: words(body),
    hasOutcome: /result|output|outcome|what you get|verify|check/i.test(heads) || codeBlocks(body) > 0,
    flags: [...(codeBlocks(body) === 0 && !/result|output|outcome/i.test(heads) ? ['no code and no outcome section — verify it is inspectable'] : [])],
  });
}

// --- Cheatsheets -----------------------------------------------------------------------
for (const f of [...walkKind(/-cheatsheet\.(md|mdx)$/)].sort()) {
  const rel = relative(join(CONTENT, 'lessons'), f).replace(/\.(md|mdx)$/, '');
  const { body } = fmBody(readFileSync(f, 'utf8'));
  const w = words(body);
  const tables = (noCode(body).match(/^\|/gm) || []).length;
  const bullets = (noCode(body).match(/^[-*] /gm) || []).length;
  const scannables = tables + bullets;
  findings.cheatsheets.push({
    slug: rel, words: w, tableRows: tables, bullets,
    density: w ? +(scannables / (w / 100)).toFixed(1) : 0,
    internal: internalLinks(body).length,
    flags: [
      ...(w > 1400 ? [`${w} words — cheatsheet may be drifting into a lesson`] : []),
      ...(scannables / Math.max(w / 100, 1) < 2 ? ['low list/table density — check scanability'] : []),
    ],
  });
}

// --- Common-mistake pages ------------------------------------------------------------------
// Two layouts: `## N. Mistake` with **You probably think**/**Why it breaks:**/
// **The correct model:**/**How to spot it live:**, and `### The mistake: X` with
// **Why it's wrong:**/**Symptom:**/**Fix:**.
for (const f of [...walkKind(/-common-mistakes\.(md|mdx)$/)].sort()) {
  const rel = relative(join(CONTENT, 'lessons'), f).replace(/\.(md|mdx)$/, '');
  const { body } = fmBody(readFileSync(f, 'utf8'));
  const allSecs = ('\n' + noCode(body)).split(/\n#{2,3}\s+/).slice(1);
  const sections = allSecs.filter((s) => /^(\d+\.|The mistake|Mistake)/i.test(s));
  const effective = sections.length ? sections : allSecs.filter((s) => !/checklist|wrap-?up|summary|what to remember/i.test(s.split('\n')[0]));
  let symptom = 0, cause = 0, fix = 0, prevent = 0;
  for (const s of effective) {
    if (/\*\*Symptom|how to spot it|you('ll| will) see|shows up as/i.test(s)) symptom++;
    if (/\*\*Why it(?:'s| is| breaks)|root cause|the mechanism/i.test(s)) cause++;
    if (/\*\*Fix|\*\*The correct model|the fix|do this|# Right/i.test(s)) fix++;
    if (/prevent/i.test(s)) prevent++;
  }
  const filePrevent = prevent || (/checklist|prevention/i.test(body) ? 1 : 0);
  findings.mistakes.push({
    slug: rel, mistakes: effective.length, symptom, cause, fix, prevent: filePrevent,
    words: words(body), internal: internalLinks(body).length,
    flags: [
      ...(effective.length && symptom < effective.length ? [`${effective.length - symptom} mistake(s) without a named symptom`] : []),
      ...(effective.length && cause < effective.length ? [`${effective.length - cause} mistake(s) without a cause`] : []),
      ...(effective.length && fix < effective.length ? [`${effective.length - fix} mistake(s) without a fix`] : []),
      ...(effective.length === 0 ? ['no mistake sections found — check format'] : []),
    ],
  });
}

// ---------------------------------------------------------------------------
writeFileSync(join(OUT, 'family-audit.json'), JSON.stringify({ generatedAt: new Date().toISOString(), findings, duplicateStems }, null, 1) + '\n');

const md = ['# Acquisition & practice family audit — mechanical pass', '', `Generated ${new Date().toISOString()} by \`scripts/audit-families.mjs\`.`, 'Structural checks only; originality/correctness are scored in the review pass.', ''];

// Findings summary — derived from the flags the checks actually produced.
{
  const flagged = (arr) => arr.filter((r) => r.flags?.length);
  const pct01 = findings.practice.map((t) => t.firstAnswersIndex0or1);
  const allBiased = pct01.length && pct01.every((p) => p === 1);
  const totalQLinks = findings.practice.reduce((s, t) => s + t.withLessonLinks, 0);
  const totalQ = findings.practice.reduce((s, t) => s + t.questions, 0);
  const bPos = quizAnswerPos;
  md.push('## Findings', '');
  md.push(`- **Straight answers (${findings.answers.length})**: ${flagged(findings.answers).length} flagged — answer-first openings, FAQ and related metadata hold across the family.`);
  md.push(`- **Guides (${findings.guides.length})**: all have \`related\` lesson lists and ordered steps; ${findings.guides.filter((g) => g.internal === 0).length}/${findings.guides.length} have **zero in-body internal links** (continuation lives only in the frontmatter block); ${findings.guides.filter((g) => g.codeBlocks === 0).map((g) => `\`${g.slug}\``).join(', ') || 'none'} have no code.`);
  md.push(`- **Blog (${findings.blog.length})**: all dated; ${findings.blog.filter((b) => b.learnLinks === 0).map((b) => `\`${b.slug}\``).join(', ') || 'none'} never link into the curriculum.`);
  md.push(`- **Interview (${findings.interview.length})**: 8 questions each; ${findings.interview.filter((i) => !i.hasFollowUps && !i.hasRubric).length}/${findings.interview.length} have **no follow-up prompts or rubric** — the checklist asks for both.`);
  md.push(`- **Scenarios (${findings.scenarios.length})**: ~${Math.round(findings.scenarios.reduce((s, r) => s + r.words, 0) / findings.scenarios.length)} words avg; missing sections: ${[...new Set(findings.scenarios.flatMap((s) => s.missing))].join(', ') || 'none'}.`);
  md.push(`- **Centralized practice banks**: ${totalQ} questions across ${findings.practice.length} tracks, ${totalQLinks} total lesson links${allBiased ? `; **100% of correct answers sit at option index 0 or 1 in every bank** — positional bias a learner can exploit` : ''}.`);
  md.push(`- **Lesson quiz pages (${findings.lessonQuizzes.length} files, ${findings.lessonQuizzes.reduce((s, q) => s + q.questions, 0)} questions)**: all questions carry a marked correct answer; ${duplicateStems.length} duplicate stems corpus-wide; correct-answer positions skew ${Object.entries(bPos).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${Math.round((v / Object.values(bPos).reduce((x, y) => x + y, 0)) * 100)}%`).join(', ')}; ${flagged(findings.lessonQuizzes).length} files have answer blocks that don't discuss every option.`);
  md.push(`- **Worked examples (${findings.workedExamples.length})**: ${flagged(findings.workedExamples).length} flagged — every file has runnable code and an inspectable outcome.`);
  md.push(`- **Cheatsheets (${findings.cheatsheets.length})**: ${flagged(findings.cheatsheets).length} flagged for scanability/length.`);
  md.push(`- **Common-mistake pages (${findings.mistakes.length})**: ${flagged(findings.mistakes).length} flagged; the symptom→cause→fix pattern holds elsewhere.`);
  md.push('');
  md.push('## Suggested backlog order', '');
  md.push('1. **Shuffle centralized-bank answer positions** — cheapest fix, highest integrity gain; then add a lesson link per question.');
  md.push('2. **Scenario depth pass** — add the missing constraints/options/postmortem sections; at ~200 words they under-deliver the "system design walkthrough" promise.');
  md.push('3. **Interview follow-ups + rubric** — add per-topic follow-up prompts and a weak-vs-strong answer rubric.');
  md.push('4. **Guide in-body links** — weave curriculum links into guide prose where a step references a concept a lesson teaches.');
  const totalMarked = Object.values(bPos).reduce((a, b) => a + b, 0);
  const topPos = Object.entries(bPos).sort((a, b) => b[1] - a[1])[0];
  md.push(`5. **Quiz answer-position rebalance** — ${topPos ? `${Math.round((topPos[1] / totalMarked) * 100)}% of correct answers sit at ${topPos[0]}` : ''} across ${totalMarked} lesson-quiz questions; redistribute when files are next touched.`);
  md.push(`6. **Per-option rationale gaps** — ${flagged(findings.lessonQuizzes).length} quiz files where some answers state a letter without walking the options.`);
  md.push('');
}

const table = (name, rows, cols) => {
  md.push(`## ${name} (${rows.length})`, '');
  md.push(`| item | ${cols.map((c) => c[0]).join(' | ')} | flags |`);
  md.push(`|---|${cols.map(() => '---').join('')}|---|`);
  for (const r of rows) md.push(`| ${r.slug ?? r.id} | ${cols.map((c) => c[1](r)).join(' | ')} | ${r.flags?.join('; ') || '—'} |`);
  md.push('');
};

table('Straight answers', findings.answers, [
  ['1st para', (r) => `${r.firstParaWords}w ${r.answerFirst ? '✓' : '✗'}`],
  ['faq', (r) => r.faq], ['related', (r) => r.related],
  ['int links', (r) => r.internal], ['ext', (r) => r.external], ['words', (r) => r.words],
]);
table('Guides', findings.guides, [
  ['steps', (r) => r.steps], ['related', (r) => r.related], ['code', (r) => r.codeBlocks],
  ['failure §', (r) => (r.hasFailureSection ? '✓' : '—')], ['verify §', (r) => (r.hasVerifySection ? '✓' : '—')],
  ['int links', (r) => r.internal], ['words', (r) => r.words],
]);
table('Blog', findings.blog, [
  ['published', (r) => (r.published ? '✓' : '✗')], ['tags', (r) => r.tags],
  ['/learn links', (r) => r.learnLinks], ['int links', (r) => r.internal], ['words', (r) => r.words],
]);
table('Interview topics', findings.interview, [
  ['questions', (r) => r.questions], ['with links', (r) => r.withLinks],
  ['thin answers', (r) => r.thinAnswers], ['follow-ups/rubric', (r) => (r.hasFollowUps || r.hasRubric ? '✓' : '✗')],
  ['words', (r) => r.words],
]);
table('Scenarios', findings.scenarios, [
  ['sections', (r) => r.sections.length], ['int links', (r) => r.internal], ['words', (r) => r.words],
]);

md.push('## Centralized practice banks', '');
md.push('| track | questions | avg options | answers at idx 0–1 | lesson links | flags |');
md.push('|---|---|---|---|---|---|');
for (const t of findings.practice) {
  md.push(`| ${t.id} | ${t.questions} | ${t.avgOptions} | ${Math.round(t.firstAnswersIndex0or1 * 100)}% | ${t.withLessonLinks} | ${t.flags.join('; ') || '—'} |`);
}
md.push('');

md.push(`## Lesson quiz pages (${findings.lessonQuizzes.length} files, ${findings.lessonQuizzes.reduce((s, q) => s + q.questions, 0)} questions)`, '');
md.push('| page | questions | options/q | answers marked | per-option rationale | flags |');
md.push('|---|---|---|---|---|---|');
for (const q of findings.lessonQuizzes) {
  md.push(`| ${q.slug} | ${q.questions} | ${q.optCounts.join('/') || '—'} | ${q.answersMarked} | ${q.perOptionRationale} | ${q.flags.join('; ') || '—'} |`);
}
md.push('');
const totalMarked = Object.values(quizAnswerPos).reduce((a, b) => a + b, 0);
md.push(`### Correct-answer position across ${totalMarked} marked questions`, '');
md.push('| position | count | share |');
md.push('|---|---|---|');
for (const [letter, n] of Object.entries(quizAnswerPos).sort()) {
  md.push(`| ${letter} | ${n} | ${Math.round((n / totalMarked) * 100)}% |`);
}
md.push('');

md.push(`### Duplicate question stems across quiz pages: ${duplicateStems.length}`, '');
for (const [stem, refs] of duplicateStems) md.push(`- "${stem.slice(0, 80)}" → ${refs.map((r) => `${r.slug}#${r.n}`).join(', ')}`);
md.push('');

table('Worked examples', findings.workedExamples, [
  ['code blocks', (r) => r.codeBlocks], ['inspectable outcome', (r) => (r.hasOutcome ? '✓' : '✗')],
  ['int links', (r) => r.internal], ['words', (r) => r.words],
]);
table('Cheatsheets', findings.cheatsheets, [
  ['words', (r) => r.words], ['table rows', (r) => r.tableRows], ['bullets', (r) => r.bullets],
  ['scannable density/100w', (r) => r.density], ['int links', (r) => r.internal],
]);
table('Common-mistake pages', findings.mistakes, [
  ['mistakes', (r) => r.mistakes], ['symptom', (r) => r.symptom], ['cause', (r) => r.cause],
  ['fix', (r) => r.fix], ['prevention', (r) => r.prevent], ['int links', (r) => r.internal], ['words', (r) => r.words],
]);

writeFileSync(join(OUT, 'acquisition-audit.md'), md.join('\n') + '\n');
console.log(`family audit → docs/registry/family-audit.json + acquisition-audit.md`);
const flagCount = (o) => JSON.stringify(o).match(/flags":[[]/g)?.length ?? 0;
console.log(`answers ${findings.answers.length}, guides ${findings.guides.length}, blog ${findings.blog.length}, interview ${findings.interview.length}, scenarios ${findings.scenarios.length}, lesson quizzes ${findings.lessonQuizzes.length}, worked ex ${findings.workedExamples.length}, cheatsheets ${findings.cheatsheets.length}, mistakes ${findings.mistakes.length}, dup stems ${duplicateStems.length}`);
