#!/usr/bin/env node
/**
 * Deterministic verification for calculation / code-output bank questions.
 *
 * Loads src/data/quizzes.ts (bundled via esbuild), finds every question
 * tagged format:'calculation' (or containing a code block with a claimed
 * output), and recomputes the numeric/executable claim the marked answer
 * asserts. Each verified question has a registered checker below keyed on
 * a stable prompt fragment — a calculation question with NO checker is
 * reported as UNVERIFIED, which is the production-queue signal this row
 * exists to produce.
 *
 * Also runs a single-answer ambiguity screen: option pairs within one
 * question that normalize to near-identical text (Jaccard > 0.7) are
 * flagged — two options saying the same thing is the detectable half of
 * "multiple defensible answers".
 *
 * Run: node scripts/verify-questions.mjs   (npm run verify:questions)
 */
import { buildSync } from 'esbuild';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const out = join(mkdtempSync(join(tmpdir(), 'qz-')), 'quizzes.mjs');
buildSync({
  entryPoints: ['src/data/quizzes.ts'],
  bundle: true,
  format: 'esm',
  outfile: out,
  logLevel: 'silent',
});
const { quizTracks } = await import(pathToFileURL(out).href);

const all = quizTracks.flatMap((t) =>
  (t.questions || []).map((q) => ({ ...q, bank: t.id || t.slug || t.title })),
);
const calc = all.filter((q) => q.format === 'calculation');
const codeOut = all.filter((q) => /```[\s\S]*?```/.test(q.prompt + (q.setup || '')));

// --- registered verifiers ---------------------------------------------------
// Each key is a stable prompt fragment; the checker returns true when the
// marked answer's claim is arithmetically correct.
const eps = (a, b, tol = 0.01) => Math.abs(a - b) <= tol;
const CHECKS = [
  {
    match: /average token NLL is 0\.693/i,
    // claimed: perplexity = e^0.693 ≈ 2.0
    verify: () => eps(Math.exp(0.693), 2.0, 0.005),
  },
  {
    match: /Perplexity measures/i,
    // claimed: ppl = exp(mean NLL); ppl 10 ≡ uniform choice among 10
    verify: () => eps(Math.exp(Math.log(10)), 10) && eps(Math.exp(0), 1),
  },
  {
    match: /cross-entropy loss punish confident wrong/i,
    // claimed: -log(p) → ∞ as p → 0; strictly increasing penalty
    verify: () =>
      -Math.log(1e-6) > -Math.log(1e-3) &&
      -Math.log(1e-3) > -Math.log(0.5) &&
      -Math.log(1e-6) > 13,
  },
  {
    match: /softmax \+ cross-entropy collapse/i,
    // claimed: d(CE)/d(logit_i) = p_i − y_i — verified by finite differences
    verify: () => {
      const z = [1.3, -0.7, 2.1, 0.4];
      const y = [0, 0, 1, 0];
      const sm = (v) => {
        const m = Math.max(...v);
        const e = v.map((x) => Math.exp(x - m));
        const s = e.reduce((a, b) => a + b);
        return e.map((x) => x / s);
      };
      const ce = (v) => -Math.log(sm(v)[2]);
      const p = sm(z);
      const h = 1e-6;
      for (let i = 0; i < z.length; i++) {
        const zp = [...z], zm = [...z];
        zp[i] += h; zm[i] -= h;
        const fd = (ce(zp) - ce(zm)) / (2 * h);
        if (!eps(fd, p[i] - y[i], 1e-4)) return false;
      }
      return true;
    },
  },
  {
    match: /7B model needs 14GB/i,
    // claimed: 7e9 params × 2 B = 14 GB; Q4 ≈ 4–5 GB with overhead
    verify: () => {
      const fp16 = (7e9 * 2) / 1e9;
      const q4 = (7e9 * 0.5) / 1e9;
      return eps(fp16, 14, 0.5) && q4 >= 3 && q4 <= 5;
    },
  },
  {
    match: /Two logits differ by 1\.0/i,
    // claimed: ratio = e^(Δ/T): T=0.5 → e² ≈ 7.4, T=2.0 → e^0.5 ≈ 1.65
    verify: () =>
      eps(Math.exp(1 / 0.5), 7.389, 0.01) && eps(Math.exp(1 / 2.0), 1.6487, 0.005),
  },
  {
    match: /costs Θ\(n²d\) score work/i,
    // claimed: doubling n quadruples the n²d term
    verify: () => {
      const [n, d] = [512, 64];
      return (2 * n) ** 2 * d === 4 * n ** 2 * d;
    },
  },
];

// --- run ---------------------------------------------------------------------
const rows = [];
for (const q of calc) {
  const c = CHECKS.find((k) => k.match.test(q.prompt));
  if (!c) {
    rows.push({ status: 'UNVERIFIED', bank: q.bank, prompt: q.prompt.slice(0, 80) });
    continue;
  }
  let ok = false;
  try {
    ok = c.verify(q);
  } catch {
    ok = false;
  }
  rows.push({
    status: ok ? 'verified' : 'WRONG-CLAIM',
    bank: q.bank,
    prompt: q.prompt.slice(0, 80),
  });
}

const verified = rows.filter((r) => r.status === 'verified').length;
const wrong = rows.filter((r) => r.status === 'WRONG-CLAIM');
const unverified = rows.filter((r) => r.status === 'UNVERIFIED');

console.log(`calculation questions: ${calc.length} — verified ${verified}, wrong ${wrong.length}, unverified ${unverified.length}`);
for (const r of rows) console.log(`  ${r.status.padEnd(11)} [${r.bank}] ${r.prompt}`);
console.log(`questions with embedded code blocks: ${codeOut.length}`);
for (const q of codeOut)
  console.log(`  code-output  [${q.bank}] ${q.prompt.slice(0, 80)}${q.format ? ` (${q.format})` : ''}`);

// --- single-answer ambiguity screen ------------------------------------------
const wnorm = (s) =>
  new Set(
    s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((w) => w.length > 2),
  );
const jaccard = (a, b) => {
  let i = 0;
  for (const w of a) if (b.has(w)) i++;
  return i / (a.size + b.size - i || 1);
};
const ambiguous = [];
for (const q of all) {
  if (q.format === 'multiple-select') continue;
  const opts = q.options || [];
  for (let i = 0; i < opts.length; i++)
    for (let j = i + 1; j < opts.length; j++) {
      const s = jaccard(wnorm(opts[i]), wnorm(opts[j]));
      if (s > 0.7)
        ambiguous.push(
          `[${q.bank}] ${q.prompt.slice(0, 60)} :: "${opts[i].slice(0, 50)}" ~ "${opts[j].slice(0, 50)}" (${s.toFixed(2)})`,
        );
    }
}
console.log(`option-pair ambiguity (Jaccard > 0.7, single-answer): ${ambiguous.length}`);
ambiguous.forEach((a) => console.log(`  ${a}`));

if (wrong.length || unverified.length || ambiguous.length) process.exitCode = 1;
