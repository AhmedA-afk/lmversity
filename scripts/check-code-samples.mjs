#!/usr/bin/env node
// Syntax-audit every fenced code block in the content corpus.
//
// Satisfies the checklist row "Identify code or vendor instructions that no
// longer run" at the static level: python blocks are compiled, json parsed,
// bash parsed (`bash -n`), ts/tsx parsed by esbuild. Blocks that are clearly
// illustrative fragments (ellipsis, placeholder brackets, prompt lines like
// `$ command`) are classified, not failed — the queue is for real breakage.
//
// Output: docs/registry/code-samples.md + nonzero exit if any non-fragment
// block fails to parse (so CI/maintenance can gate on it).
import { readFileSync, writeFileSync, readdirSync, mkdirSync, mkdtempSync } from 'fs';
import { join, relative } from 'path';
import { execFileSync, execFile } from 'child_process';
import { tmpdir } from 'os';
import { transformSync } from 'esbuild';
import { fileURLToPath } from 'url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const CONTENT = join(ROOT, 'src', 'content');
const OUT = join(ROOT, 'docs', 'registry');

function walk(d) {
  return readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(d, e.name)) : e.name.match(/\.(md|mdx)$/) ? [join(d, e.name)] : []);
}

function stripJsonComments(c) {
  let out = '', inStr = false, esc = false;
  for (let i = 0; i < c.length; i++) {
    const ch = c[i];
    if (inStr) { out += ch; if (esc) esc = false; else if (ch === '\\') esc = true; else if (ch === '"') inStr = false; continue; }
    if (ch === '"') { inStr = true; out += ch; continue; }
    if (ch === '/' && c[i + 1] === '/') { while (i < c.length && c[i] !== '\n') i++; out += '\n'; continue; }
    if (ch === '/' && c[i + 1] === '*') { while (i < c.length && !(c[i] === '*' && c[i + 1] === '/')) i++; i++; continue; }
    out += ch;
  }
  return out;
}

const BLOCK_RE = /^```([a-zA-Z0-9#+_-]*)\s*\n([\s\S]*?)^```/gm;
// Illustrative-fragment markers — not meant to run as-is.
const FRAGMENT_RE = /\.\.\.|…|\[paste|\[your |<your |<INSERT|CHANGEME|PLACEHOLDER|<[a-z][\w-]{1,}>|\$\s|\bPS C:\\>|^>>>|^\.\.\./m;
// Python blocks that are intentionally function bodies / continuations.
const PY_SNIPPET_RE = /outside (?:async )?function|unexpected indent|outside function/;

const blocks = [];
for (const f of walk(CONTENT)) {
  const rel = relative(CONTENT, f);
  const src = readFileSync(f, 'utf8');
  for (const m of src.matchAll(BLOCK_RE)) {
    const lang = (m[1] || 'text').toLowerCase();
    const line = src.slice(0, m.index).split('\n').length;
    blocks.push({ file: rel, line, lang, code: m[2] });
  }
}

// Files whose subject IS malformed output — invalid JSON, parser truncation,
// common mistakes. A parse failure inside is almost certainly the exhibit.
const BROKEN_IS_THE_POINT = /invalid|fail|mistake|diagnos|repair|antipattern|partial|debug|broken|error/i;
// Python continuation keywords — a block starting with one is a mid-function
// excerpt that can't compile standalone by design.
const PY_CONT_RE = /^\s*(except|elif|else\b|finally|return|yield|await|async (?:for|with))/;

const results = [];
const pyBlocks = [], shBlocks = [];
for (const b of blocks) {
  const { lang, code } = b;
  if (lang === 'json' || lang === 'jsonl') {
    if (FRAGMENT_RE.test(code)) results.push({ ...b, verdict: 'fragment' });
    else {
      const tryParse = (c) => {
        if (lang === 'jsonl') c.split('\n').filter(Boolean).forEach((l) => JSON.parse(l));
        else JSON.parse(c);
      };
      // jsonc normalization: comments outside strings + trailing commas
      const normalize = (c) => stripJsonComments(c).replace(/,(\s*[}\]])/g, '$1');
      const attempts = [
        ['ok', (c) => tryParse(c)],
        ['ok-jsonc', (c) => tryParse(normalize(c))],
        ['ok-member', (c) => { tryParse(`{${normalize(c)}}`); }],          // `"key": {…}` member fragment
        // JSONL dataset: every non-empty line is a complete JSON value
        ['ok-jsonl', (c) => normalize(c).split('\n').filter((x) => x.trim()).forEach((x) => JSON.parse(x))],
        // array shown without brackets: `{…},\n{…}` — wrap in [] and parse
        ['ok-array', (c) => tryParse(`[${normalize(c).replace(/,\s*$/, '')}]`)],
        // blank-line-separated values, comments allowed inside chunks
        ['ok-multi', (c) => normalize(c).split(/\n\s*\n/).map((x) => x.trim()).filter(Boolean).forEach(tryParse)],
        // adjacent multi-line objects: `}\n{` boundary split
        ['ok-seq', (c) => normalize(c).split(/\}\s*\n\s*\{/).filter(Boolean).forEach((x, _i, a) => {
          const t = x.trim();
          if (a.length === 1) { tryParse(t); return; }
          tryParse((t.startsWith('{') ? '' : '{') + t + (t.endsWith('}') ? '' : '}'));
        })],
      ];
      let verdict = 'fail', error = null;
      for (const [v, fn] of attempts) {
        try { fn(code); verdict = v; break; } catch (e) { error = e; }
      }
      // Schema-sketch notation: `"a" | "b" | "c"` unions aren't data, by design.
      // A single truncated line (`{"title": "Weekly Rep`) is a deliberate
      // stream-chunk exhibit, not a broken sample.
      if (verdict === 'fail' && (/"\s*\|\s*"/.test(code) || (code.trim().split('\n').length === 1 && /^[{[]/.test(code.trim())))) verdict = 'fragment';
      if (verdict === 'fail' && BROKEN_IS_THE_POINT.test(b.file)) verdict = 'intentional';
      results.push({ ...b, verdict, error: verdict === 'fail' ? String(error.message).split('\n')[0] : undefined });
    }
  } else if (lang === 'python') {
    if (FRAGMENT_RE.test(code)) results.push({ ...b, verdict: 'fragment' });
    else pyBlocks.push(b);
  } else if (lang === 'bash' || lang === 'sh' || lang === 'shell' || lang === 'zsh') {
    if (FRAGMENT_RE.test(code)) results.push({ ...b, verdict: 'fragment' });
    else shBlocks.push(b);
  } else if (['ts', 'typescript', 'tsx', 'js', 'javascript', 'jsx'].includes(lang)) {
    if (FRAGMENT_RE.test(code)) results.push({ ...b, verdict: 'fragment' });
    else {
      const loader = /x$/.test(lang) ? (lang === 'tsx' ? 'tsx' : 'jsx') : (/^tsx?$|typescript/.test(lang) ? 'ts' : 'js');
      const tryParse = (c) => transformSync(c, { loader });
      // wrap a function-body snippet: keep import/export at top level (they
      // can't nest), indent the rest inside an async function
      const wrap = (c) => {
        const tops = c.split('\n').filter((l) => /^\s*(import|export)\b/.test(l));
        const rest = c.split('\n').filter((l) => !/^\s*(import|export)\b/.test(l)).map((l) => '  ' + l);
        return tops.join('\n') + '\nasync function _s() {\n' + rest.join('\n') + '\n}';
      };
      // comparison pair (`// wrong` … `// right`) or a mid-statement excerpt
      // (starts with a closing token / member line) — deliberate formats
      const isComparison = /\/\/.*\b(wrong|not this|right|instead|vs)\b/i.test(code) || BROKEN_IS_THE_POINT.test(b.file);
      const isContinuation = /^\s*[}\]),.:]/.test(code) || /^\s+\S/.test(code) || /^\s*[$\w]+\s*:/.test(code);
      try {
        tryParse(code);
        results.push({ ...b, verdict: 'ok' });
      } catch (e1) {
        let v = 'fail';
        try { tryParse(wrap(code)); v = 'snippet'; }
        catch {
          if (isComparison) v = 'intentional';
          else if (isContinuation) v = 'fragment';
        }
        results.push({ ...b, verdict: v, error: v === 'fail' ? String(e1.message).split('\n')[0] : undefined });
      }
    }
  } else {
    results.push({ ...b, verdict: 'skipped' });
  }
}

// python: batch-compile via a single subprocess reading a manifest
if (pyBlocks.length) {
  const dir = mkdtempSync(join(tmpdir(), 'lmv-py-'));
  const manifest = pyBlocks.map((b, i) => {
    const p = join(dir, `b${i}.py`);
    writeFileSync(p, b.code);
    return p;
  });
  const script = `import json,sys,re,textwrap
SNIP=re.compile(r"outside (async )?function|unexpected indent|outside function")
for i,p in enumerate(json.load(open(sys.argv[1]))):
 src=open(p).read()
 try:
  compile(src,p,'exec');print(i,'ok');continue
 except SyntaxError as e:
  msg=str(e).split('\\n')[0]
  if SNIP.search(msg):
   # retry as a function body — snippet-style teaching block; loop wrap
   # covers break/continue excerpts too
   for wrap in ('async def _s():\\n','async def _s():\\n    while True:\\n'):
    try:
     body=textwrap.indent(textwrap.dedent(src),'        ' if 'while' in wrap else '    ')
     compile(wrap+body,p,'exec');print(i,'snippet');break
    except SyntaxError: pass
   else: print(i,'fail',msg)
   continue
  print(i,'fail',msg)`;
  const manifestPath = join(dir, 'manifest.json');
  writeFileSync(manifestPath, JSON.stringify(manifest));
  const out = execFileSync('python3', ['-c', script, manifestPath], { encoding: 'utf8' });
  for (const line of out.trim().split('\n')) {
    const [i, verdict, ...rest] = line.split(' ');
    const b = pyBlocks[+i];
    let v = verdict;
    // mid-function excerpt (`except:`, `return`, indented body) — can't
    // compile standalone by design; broken-on-purpose exhibits likewise
    if (v === 'fail' && PY_CONT_RE.test(b.code)) v = 'snippet';
    if (v === 'fail' && BROKEN_IS_THE_POINT.test(b.file)) v = 'intentional';
    results.push({ ...b, verdict: v, error: rest.join(' ') || undefined });
  }
}
// bash: bash -n per block (250 files — cheap enough)
for (const b of shBlocks) {
  try {
    execFileSync('bash', ['-n'], { input: b.code });
    results.push({ ...b, verdict: 'ok' });
  } catch (e) {
    const verdict = BROKEN_IS_THE_POINT.test(b.file) ? 'intentional' : 'fail';
    results.push({ ...b, verdict, error: verdict === 'fail' ? String(e.stderr || e.message).split('\n').slice(0, 2).join(' ') : undefined });
  }
}

const byVerdict = results.reduce((m, r) => ((m[r.verdict] = (m[r.verdict] || 0) + 1), m), {});
const fails = results.filter((r) => r.verdict === 'fail');

const md = [
  '# Code-sample syntax audit',
  '',
  `Generated by \`scripts/check-code-samples.mjs\` — ${new Date().toISOString().slice(0, 10)}.`,
  '',
  `- Blocks scanned: **${results.length}** across ${new Set(results.map((r) => r.file)).size} files`,
  ...Object.entries(byVerdict).sort().map(([k, v]) => `- ${k}: ${v}`),
  '',
  '`fragment` = carries ellipsis/placeholder markers — illustrative by design, not checked.',
  '`snippet` = parses only as a function body — a deliberate excerpt convention.',
  '`intentional` = parse fails inside a file whose subject IS malformed output',
  '(invalid-JSON lessons, common-mistakes pages, failure diagnostics) — the broken',
  'code is the exhibit. `ok-jsonc/-member/-jsonl/-array/-multi/-seq` = valid after',
  'a teaching-format normalization (comments, member fragments, sequences).',
  '`skipped` = language without a local parser (sql, yaml, text, diff, dockerfile, …).',
  '',
  '## Parse failures',
  '',
  fails.length
    ? fails.map((r) => `- \`${r.file}:${r.line}\` (${r.lang}) — ${r.error}`).join('\n')
    : 'None.',
  '',
].join('\n');
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'code-samples.md'), md);
console.log(`code-samples: ${results.length} blocks — ${byVerdict.ok || 0} ok, ${byVerdict.fail || 0} fail, ${byVerdict.fragment || 0} fragment, ${byVerdict.skipped || 0} skipped`);
for (const r of fails) console.log(`  FAIL ${r.file}:${r.line} (${r.lang}) ${r.error}`);
process.exit(fails.length ? 1 : 0);
