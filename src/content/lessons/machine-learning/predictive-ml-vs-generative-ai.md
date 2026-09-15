---
title: "Separate predictive-ML choices from generative-AI choices"
track: "machine-learning"
status: live
summary: "Predictive ML scores a defined outcome on your data; generative AI produces open-ended content — the two fail differently, are evaluated differently, and are owned differently."
duration: "8 min read"
---

## The short answer

Predictive ML answers a fixed question about a row of your data — will this loan default, is this part failing — and is judged on calibration and error cost. Generative AI produces open-ended output — text, code, images — and is judged on usefulness, faithfulness, and review cost. They share the word "model" and almost nothing else: different data, different failure shapes, different evaluation, different owners. Choosing between them is a problem-framing decision, not a model preference.

## Why this matters

Teams regularly reach for a generative model for what is actually a scoring problem — "predict which tickets escalate" — because the interface is friendly and no training pipeline is needed. The result is a costly, inconsistent scorer that resists calibration. The opposite mistake is rarer but real: building a supervised classifier for what is really a drafting task. Both errors come from treating "AI" as one toolbox.

## The two choice frames

Ask which question you are actually answering:

| | Predictive ML | Generative AI |
| --- | --- | --- |
| Output | A score, class, or number over a defined label space | Open-ended content with no fixed label space |
| Data | Your labeled or logged examples | Pretraining corpus + your context at call time |
| Correct answer | Exists and is checkable in principle | Often no single correct answer — quality is judged |
| Failure shape | Systematic error you can measure per subgroup | Fluent, plausible, wrong — varies per call |
| Evaluation | Held-out metrics: calibration, PR, cost-weighted error | Task evals, human review, regression suites |
| Owner | ML/data team with a metrics contract | Product + engineering with a review loop |

## The practical test

Three questions separate the frames:

1. **Is there a label?** If the "right answer" is a value you can collect or define per row — default, churn, failure, price — it is a predictive problem even if a chat model could phrase a guess.
2. **Would you rather have a probability than a paragraph?** If downstream code needs a comparable score — to rank, threshold, or abstain — you want the predictive frame. A paragraph cannot be calibrated.
3. **Who checks the output?** Predictive systems are checked in aggregate, on held-out data, before launch and on a schedule after. Generative outputs are checked per-item or sampled — the review loop is part of the design, not an afterthought.

When the task is genuinely generative — drafting, summarizing, transforming, conversing — the generative frame is right and the [choosing rules, classical ML, deep learning, or an LLM](/learn/ai-foundations/applied-ai/302-choosing-rules-classical-ml-deep-learning-or-llm) lesson carries the full selection table. When it is predictive, this track's path — [baseline](/learn/machine-learning/ml-110-baselines-rules-and-human-performance), [split discipline](/learn/machine-learning/ml-104-data-splitting-by-dependency), [calibration and thresholds](/learn/machine-learning/classifiers-thresholds-and-calibration), [monitoring](/learn/machine-learning/drift-and-monitoring) — is the discipline that makes the score trustworthy.

## Continue, go deeper, apply it

- Continue: [Data-generating processes: model the world before the model](/learn/machine-learning/ml-101-data-generating-processes)
- Go deeper: [Choosing rules, classical ML, deep learning, or an LLM](/learn/ai-foundations/applied-ai/302-choosing-rules-classical-ml-deep-learning-or-llm)
- Apply it: [Assignment 1: frame a decision and ship a reproducible baseline](/learn/machine-learning/assessments/ml-842-assignment-01-reproducible-baseline)
