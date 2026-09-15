---
title: "Common Mistakes: Evaluation and Model Claims"
track: "ai-foundations"
status: live
summary: "The eight ways model evaluation and model claims go wrong — leaked test sets, benchmark over-reading, and the demo that wasn't evidence."
duration: "8 min read"
---

Most wrong beliefs about models come from evaluation mistakes — some made by the people testing, some by the people reading the results. Each entry names the mistake and the habit that fixes it.

## 1. Evaluating on training data

**Wrong:** The test set overlaps the training set — sometimes literally (the same rows), sometimes subtly (near-duplicates, same-source scrapes) — so the score measures memorization, not generalization.
**Right:** Split before you touch anything, check for leakage across the split, and treat any overlap as contamination that invalidates the number. [Data splits and leakage](/learn/ai-foundations/data-splits-and-leakage-worked-example) walks through a real one.

## 2. Trusting the demo as evidence

**Wrong:** Three impressive outputs in a video get treated as a quality measurement — when they were the best of a hundred, chosen to impress.
**Right:** A demo is a sample of one, selected. The question is the distribution: run a fixed eval set, count failures, report the rate, not the highlight.

## 3. Reading a benchmark as a capability claim

**Wrong:** "Scored 87% on benchmark X" becomes "is good at X" — when the benchmark measured a narrow format, was saturated, or was partially in the training data.
**Right:** A benchmark score is evidence about that benchmark. Before citing it, ask: what did it measure, was the data contaminated, and does the task transfer to your use? Treat any score without a stated eval set as marketing.

## 4. Confusing the benchmark with the capability

**Wrong:** Improving the score becomes the goal — prompt-tuning to the test, training on near-duplicates, selecting the model that games the format.
**Right:** Goodhart applies: when the measure becomes the target, it stops measuring. Hold out a second eval the optimization never saw.

## 5. Averaging away the failure modes

**Wrong:** A single accuracy number hides that the model is perfect on common cases and wrong on every hard or rare one — the cases that matter.
**Right:** Report per-slice results. The average is the least interesting number in the report; the failure distribution is where the model actually lives.

## 6. Testing only what you can measure cheaply

**Wrong:** The eval measures what's easy to score (exact match, format compliance) and ignores what's hard (is it actually helpful, is it honest).
**Right:** Cheap metrics are proxies. Pair them with a smaller human-reviewed slice on the qualities that don't reduce to a string match.

## 7. Believing stated confidence

**Wrong:** The model says "I'm confident" or emits a self-rated score, and it's treated as calibration.
**Right:** Self-reported confidence is text, not measurement. Calibration is measured externally — predicted probability vs actual correctness across many cases — not asked for.

## 8. Upgrading the model when the eval was wrong

**Wrong:** The new model "scores higher," so it ships — when the gain was an eval artifact (format match, leaked items, a judge that preferred longer answers).
**Right:** Before crediting a model improvement, re-check the eval: did the measurement change, or the capability? A score delta is only as trustworthy as the eval that produced it.

## If you take one habit

Ask what the number actually measured. Every impressive score rests on an eval set, a metric, and a judge — the score is only as honest as the weakest of the three.

**Related:** [Building an eval set](/learn/ai-foundations/building-an-eval-set-worked-example), [Bias-variance worked example](/learn/ai-foundations/bias-variance-worked-example), [Supervised learning worked example](/learn/ai-foundations/supervised-learning-worked-example)
