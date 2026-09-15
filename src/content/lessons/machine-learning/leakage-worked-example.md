---
title: "Worked Example: Finding the Leakage in a 97% Model"
track: "machine-learning"
status: live
summary: "A fraud model scores 97% — walk through the three leaks that produced it and the split that fixes them."
duration: "10 min read"
---

A 97% fraud-detection model that collapses to 61% in production is the classic leakage story. This example constructs it and finds each leak.

## The setup

Transaction data: 100,000 rows, 2% fraud. Features include amount, merchant, hour, and `account_age_days` — the number of days between account creation and the transaction. The model is a gradient-boosted tree. Validation score: 97%.

## Leak 1: the feature that knows the answer

`account_age_days` looks innocent. But the feature pipeline computed it as "days between account creation and the *investigation date*" for flagged accounts — and flagged accounts are disproportionately fraud. The feature is correlated with the label because the label caused the investigation.

The check: for every feature, ask "does this value exist at prediction time, before the outcome?" A feature computed from the flagging process doesn't exist until after the decision it's supposed to predict.

## Leak 2: the shared entity across the split

Multiple rows per account. A random row split puts the same account in train and test — the model learns "account 4821 is fraud" from a training row, then gets the "test" row for the same account right by lookup, not generalization.

The check: group-split by the entity. If the same account appears in both splits, the score measures memory, not pattern.

## Leak 3: the scaler that saw the test set

`StandardScaler` was fit on all 100,000 rows before splitting. The test set's mean and variance influenced the scaling — a subtle leak, but on a 2%-fraud problem where the signal is thin, it matters.

The check: fit every preprocessor on the training fold only. The test set must be unseen in every sense, including its statistics.

## The fix and the honest number

Re-split by account (no entity shared across folds), compute `account_age_days` only from information available at transaction time, and fit the scaler inside the CV loop. The honest validation score: 78% — lower, real, and what production actually saw.

## What each leak teaches

- **Leakage isn't a bug, it's a category.** Any path from the future or the label into a feature is leakage — the three here are the commonest but not the only ones.
- **A high score is a question, not an answer.** 97% on a 2%-fraud problem should trigger the leakage hunt, not the launch.
- **The split is the contract.** Group splits, temporal splits, and fold-internal preprocessing are how the contract is enforced — not a detail.

## The check

Before trusting any score: list every feature's provenance (does it exist at prediction time?), every entity's split (is it in both?), and every transformer's fit set. The leak is always in one of those three.

**Related:** [ML pipeline mistakes](/learn/machine-learning/ml-pipeline-mistakes), [Data splits and leakage](/learn/ai-foundations/data-splits-and-leakage-worked-example), [ML diagnosis practice](/practice/ml-diagnosis)
