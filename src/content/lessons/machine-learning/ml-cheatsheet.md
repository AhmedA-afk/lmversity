---
title: "Machine Learning Cheatsheet"
track: "machine-learning"
status: live
summary: "The decisions and diagnostics for a classical ML pipeline — split, metric, model class, and the leakage checks that decide whether the score is real."
duration: "6 min read"
---

The classical-ML pipeline compressed to the decisions that matter and the checks that catch the silent failures.

## The pipeline in one line each

- **Split first** — before any fitting, before any feature selection; everything downstream trusts that split.
- **Fit on train only** — scaler, encoder, feature selection: all of it sees only the training fold.
- **Metric matches the cost** — the metric that can't fail on your problem isn't measuring it.
- **Validate the split, not just the score** — leakage into val inflates everything downstream.

## Which split for which data

| Data shape | The split | The trap |
|---|---|---|
| IID rows | Random train/test | Fine — the easy case |
| Repeated entities (same user/patient/store) | Group split (`GroupKFold`) | Random split = memorization measured as skill |
| Time-ordered | Temporal split — train on past, test on future | Random split = the future leaked into the past |
| Tiny dataset | Cross-validation | One small test set = the score is noise ±4 points |

## Which metric when

- **Accuracy** — only when classes are balanced and errors cost the same.
- **Precision** — when a false positive is expensive (spam, fraud alerts).
- **Recall** — when a false negative is expensive (medical, safety).
- **AUC** — when you care about ranking quality across thresholds.
- **Calibration / Brier** — when the score itself will be acted on as a probability.

## Which model family, one line each

- **Linear / logistic** — interpretable, fast, the baseline everything else must beat.
- **Tree ensemble (GBDT, random forest)** — the tabular default; handles non-linearity and interactions without tuning hell.
- **SVM / kernel** — when the boundary is smooth and the dataset isn't huge.
- **k-NN** — when "similar to" is the actual logic and you can afford the lookup cost.
- **Neural net** — when the data is unstructured (images, text, audio) or the dataset is large; overkill for most tabular.

## The five leakage checks before you trust a score

1. Is any feature derived from the label or the future?
2. Do any entities appear in both train and test?
3. Was the preprocessor fit on the full dataset?
4. Was the model selected on the test set?
5. Does the val distribution match the deployment distribution?

**Related:** [ML pipeline mistakes](/learn/machine-learning/ml-pipeline-mistakes), [ML diagnosis practice](/practice/ml-diagnosis), [Data splits and leakage](/learn/ai-foundations/data-splits-and-leakage-worked-example)
