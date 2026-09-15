---
title: "Common Mistakes: The ML Pipeline Errors That Inflate Your Metrics"
track: "machine-learning"
status: live
summary: "The eight pipeline errors that make a model look better than it is — leakage, bad splits, and the metric that lied."
duration: "8 min read"
---

These mistakes produce models that score well and deploy badly. Each names the error and the habit that catches it before it ships.

## 1. Fitting the preprocessor on the full dataset

**Wrong:** `scaler.fit(X)` before the train/test split — the scaler has already seen the test distribution, and every test score is inflated by it.
**Right:** Fit every transformer on the training split only, inside the CV fold. The test set must be unseen in every sense, including its statistics.

## 2. Splitting rows that share a group

**Wrong:** Random row splits on data where multiple rows come from the same user, patient, or store — the model memorizes the entity, and "test" rows are near-copies of training ones.
**Right:** Split by group, not row — `GroupKFold` or an entity-level split. If the same entity appears in both splits, the score measures memorization.

## 3. Choosing the metric that flatters the model

**Wrong:** Accuracy on a 95%-majority dataset — the model predicts the majority class, scores 95%, and catches zero of the cases it exists to catch.
**Right:** Pick the metric the problem actually rewards — recall, precision at a fixed false-positive rate, AUC. A metric that can't fail is a metric that can't measure.

## 4. Tuning on the test set

**Wrong:** "Just checking" the test score after every change, iterating until it improves — the test set became a training signal, one fit at a time.
**Right:** The test set is touched once, at the end. Tune on a validation split or CV; a test set queried repeatedly is a training set wearing a costume.

## 5. Deploying a train-time feature that doesn't exist at inference

**Wrong:** A feature computed from the full row — including the label-adjacent column — gets used in production where that column doesn't exist yet, and the model's real accuracy collapses.
**Right:** For every feature, ask: "does this value exist at prediction time?" Anything derived from the outcome or the future is leakage dressed as a feature.

## 6. Believing the validation score on a small split

**Wrong:** A 200-row validation set reports 91% — the confidence interval is ±4 points, and the "improvement" between two models is inside the noise.
**Right:** Report the interval, not just the point. On a small set, most "improvements" are sampling luck; if the intervals overlap, the models are tied.

## 7. Treating class imbalance as a number to fix

**Wrong:** SMOTE or class weights applied because the ratio "should" be balanced — when the imbalance was the honest distribution and the fix just inflated the positive rate.
**Right:** Imbalance is information, not a defect. Fix it only if the deployment threshold or asymmetric costs justify it — and re-check the metric that matters after rebalancing, not just accuracy.

## 8. Assuming a stale model is still good

**Wrong:** A model trained last year keeps running — the world moved, the inputs drifted, and the score nobody is measuring decayed silently.
**Right:** A model is a depreciating asset. Monitor the input distribution and the outcome metric; a score you aren't re-measuring is a score you're hoping still holds.

## If you take one habit

Ask where the test set leaked. Most inflated scores trace to leakage — a preprocessor fit on everything, a group that spans the split, a feature from the future — and the fix is always the same: the test set must be truly unseen.

**Related:** [Data splits and leakage](/learn/ai-foundations/data-splits-and-leakage-worked-example), [Bias-variance worked example](/learn/ai-foundations/bias-variance-worked-example), [ML diagnosis practice](/practice/ml-diagnosis)
