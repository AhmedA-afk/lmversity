---
title: "Evals and Red Teaming Cheatsheet"
track: "evals-red-teaming"
status: live
summary: "The eval-design decision table — which artifact answers which question, and the gates that keep a passing score honest."
duration: "6 min read"
---

The evals track compressed to the artifact you reach for and the check that keeps it honest.

## Which artifact answers which question

| The question | The artifact | The failure it prevents |
|---|---|---|
| "Is the model good at this task?" | Golden dataset + scorer | A demo passed off as evidence |
| "Did the change make it worse?" | Regression gate (baseline vs candidate) | A silent regression shipped on an average |
| "Can I trust the judge?" | Calibration report (judge vs human labels) | An uncalibrated judge grading itself |
| "Is this item flaky?" | Rerun variance | A gate decided by which run happened to execute |
| "Did someone game the eval?" | A held-out second eval | Goodharting the metric you optimized |

## The gates that keep a score honest

- **Decontamination** — the eval set is disjoint from training data, proven.
- **Per-dimension reporting** — a regression on one axis can't hide behind another's gain.
- **Judge calibration** — measured agreement with humans on a labeled slice before the judge grades anything.
- **Flake quarantine** — items whose verdict varies on identical reruns don't count toward the gate.
- **Versioned dataset** — every result names which golden-set version produced it.

## The scorers in one line each

- **Programmatic** — exact match, schema validation, deterministic checks; the ground truth where it exists.
- **LLM-as-judge** — a model grading outputs; powerful and uncalibrated until you measure it.
- **Pairwise** — A vs B comparisons; more reliable than absolute scores for subjective quality.
- **Human** — the reference the others calibrate to; expensive, so use it on a slice.

## The red-team outputs in one line each

- **Adversarial suite** — the scripted attack prompts (injection, extraction, off-policy).
- **Findings with dispositions** — fixed / accepted / mitigated, with reasons; "found nothing" is a scope result.
- **The change it caused** — the guardrail or delay the red team actually produced; the proof the process had teeth.

## The mistakes to not make

- A golden set that leaked into training.
- A judge trusted because it sounds reasonable.
- An average that hides a failing slice.
- A red-team report that changed nothing.

**Related:** [Eval mistakes](/learn/evals-red-teaming/eval-mistakes), [Eval harness project](/learn/evals-red-teaming/eval-harness-project), [Evals practice](/practice/evals)
