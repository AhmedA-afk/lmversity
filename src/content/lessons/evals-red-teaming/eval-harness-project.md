---
title: "Project: An Evaluation Harness — Golden Set, Judge Calibration, Regression Gates"
track: "evals-red-teaming"
status: live
summary: "Build the eval loop a team can trust — a versioned golden dataset, a calibrated judge, and a gate that stops a regression from shipping."
duration: "25 min read"
---

Evals fail quietly: the golden set drifts, the judge is miscalibrated, the gate passes a regression because nobody defined what counts as one. This project builds the whole loop — a frozen dataset, a judge you measured against humans, and a CI-style gate whose thresholds you can defend.

## The brief

Build an evaluation harness for a model-backed feature (a summarizer, extractor, or support answerer — pick one): a versioned golden dataset of inputs with expected-behavior annotations, a scorer (programmatic and/or judge-model), a calibration report comparing the judge to human labels on a held-out slice, and a regression gate that compares a candidate run against the last accepted baseline with explicit thresholds.

## Prerequisites

- [Building a golden dataset](/learn/evals-red-teaming/building-a-golden-dataset) — what the fixture is for
- [LLM-as-judge](/learn/evals-red-teaming/llm-as-judge) and [judge bias and calibration](/learn/evals-red-teaming/llm-judge-bias-and-calibration) — the scorer you'll calibrate
- [Regression gates and online signals](/learn/evals-red-teaming/regression-gates-and-online-signals) — the gate design
- [Statistical rigor in evals](/learn/evals-red-teaming/statistical-rigor-in-evals) — how many items a claim needs

## Supplied assets and mock mode

Fully local and deterministic: the system under test can be a scripted model (fixture responses keyed to inputs) — the harness is what's being built. If you wire a real model, the harness must still run the golden set against canned responses for its own tests. A small judge can be a second scripted model or a real cheap model call behind an interface the tests stub.

## Acceptance criteria

- [ ] The golden set is versioned — each item has an id, input, expected behavior, and the rubric dimension it tests; a `v1`/`v2` diff is reviewable
- [ ] The scorer runs the golden set and produces a per-dimension report — not a single average
- [ ] A calibration slice exists: human labels on 30+ items compared to the judge's verdicts — agreement rate reported, disagreements listed
- [ ] The regression gate compares candidate vs baseline per dimension — a drop beyond the stated threshold fails the run and names the dimension
- [ ] Flaky items are detectable — the harness can flag items whose verdict varies across identical reruns, and a flaky item doesn't silently swing the gate
- [ ] Everything runs from one command — `run_evals` produces dataset version, candidate score, baseline score, per-dimension diff, and a PASS/FAIL with reasons

## Failure injection (required)

- [ ] A candidate that regresses one dimension while improving another — the gate catches the regressed dimension, doesn't average it away
- [ ] A judge that fails or returns malformed output on some items — those items are marked unscored, the report shows coverage, and the gate doesn't treat unscored as passed
- [ ] A golden-set item whose expected behavior changed between versions — the report names the dataset version per result, no mixing

## Milestones

1. **Golden set v1** — 50+ items, each tied to a rubric dimension, frozen.
2. **The scorer** — programmatic checks plus the judge interface; canned-response tests green.
3. **Calibration** — the human-vs-judge slice and its disagreement list; adjust the judge or the rubric until you can defend the agreement rate.
4. **The gate** — baseline vs candidate, per-dimension thresholds, the averaging-away test.
5. **The flake detector** — rerun variance measured; flaky items quarantined from gate math.

## What good looks like

The gate is trusted because its numbers are defensible: a known dataset version, a measured judge, per-dimension diffs, flaky items excluded. When it fails, the failure report tells you which dimension moved and by how much — nobody has to re-run it by hand to find out.

## For your portfolio

Show the calibration report — agreement rate and the disagreement list — plus one gate failure it caught. "Built an eval harness" is a claim; "here's the judge agreement and a regression it caught" is evidence.

## Defend this build

1. Show a gate failure — which dimension moved, and was it the model or the judge?
2. Your judge agrees with humans at some rate — what is it, on which slice, and which disagreement worried you most?
3. A flaky item swings the gate either way depending on the rerun — how does your harness handle it?
4. What would Goodharting this eval look like, and does your design resist it?

The pass bar: answers cite dataset versions, agreement numbers, and gate thresholds — not the concept of evaluation.

**Related:** [Building a regression suite](/learn/evals-red-teaming/building-a-regression-suite), [Flaky eval mitigation](/learn/evals-red-teaming/flaky-eval-mitigation), [Goodharting your benchmark](/learn/evals-red-teaming/goodharting-your-benchmark), [Eval-driven iteration](/learn/evals-red-teaming/eval-driven-iteration)
