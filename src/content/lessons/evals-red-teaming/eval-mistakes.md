---
title: "Common Mistakes: Evaluation and Red Teaming"
track: "evals-red-teaming"
status: live
summary: "The eight ways evals and red teams produce false confidence — the golden set that leaked, the judge that wasn't calibrated, and the red team that found nothing."
duration: "8 min read"
---

A bad eval is worse than no eval — it produces confidence you haven't earned. These are the mistakes that make a passing eval meaningless.

## 1. The golden set that leaked into training

**Wrong:** The eval set contains items the model saw in training — near-duplicates, same-source scrapes — and the score measures memorization, not capability.
**Right:** Decontaminate against the training corpus and keep the golden set held out by construction. An eval the model has memorized isn't measuring what you think it is.

## 2. A judge that was never calibrated

**Wrong:** The LLM judge's verdicts are trusted because they sound reasonable — no agreement rate against human labels was ever measured.
**Right:** Calibrate the judge on a labeled slice before trusting it. An uncalibrated judge is a coin flip with a confident voice — measure agreement, list disagreements, and only then let it grade.

## 3. One number where a distribution was needed

**Wrong:** "The model scored 82%" — a single aggregate that hides perfect-on-easy and wrong-on-every-hard-case.
**Right:** Report per-slice and per-dimension. The average is the least informative number in the report; the failure distribution is the finding.

## 4. A regression gate that averages away the failure

**Wrong:** The candidate drops one dimension 20% but the overall score improves, so the gate passes — the regression shipped because the aggregate hid it.
**Right:** Gate per-dimension, not on the mean. A regression in one axis that another axis masks is a regression that shipped.

## 5. The red team that found nothing

**Wrong:** The red-team exercise reports zero findings — taken as proof of safety, when it actually means the exercise didn't try hard enough or the scope was too narrow.
**Right:** A red team that finds nothing didn't finish. "No findings" is a scope or effort result, not a security result — the report should say what wasn't tried, not just what was.

## 6. Evaluating on the prompt you shipped, not the distribution you serve

**Wrong:** The eval tests the exact prompt template in the code — and production prompts, assembled at runtime with real user data, behave differently.
**Right:** Eval against the production-shaped input — the assembled prompt, the real context distribution, the actual tool outputs — not the template string that looks clean in the repo.

## 7. Flaky items treated as signal

**Wrong:** An eval item that passes half the time on identical reruns swings the gate — pass or fail decided by which run happened to execute.
**Right:** Detect flaky items by rerunning and quarantine them from gate math. An item that can't decide isn't measuring the model — it's measuring noise.

## 8. The eval that tests what the model can't do

**Wrong:** The eval demands a capability the model doesn't have — then the failure is treated as a model bug when it was an eval-design bug.
**Right:** Check the eval is testing the thing you mean to test. A failure on an impossible item measures the eval's design, not the model's quality — the item needs fixing before the model is judged.

## If you take one habit

Distrust a number you didn't earn. Every eval result rests on a dataset that wasn't leaked, a judge that was calibrated, and a gate that can't be averaged past — the score is only as honest as the weakest of those.

**Related:** [Building a golden dataset](/learn/evals-red-teaming/building-a-golden-dataset), [LLM judge bias and calibration](/learn/evals-red-teaming/llm-judge-bias-and-calibration), [Eval harness project](/learn/evals-red-teaming/eval-harness-project), [Goodharting your benchmark](/learn/evals-red-teaming/goodharting-your-benchmark)
