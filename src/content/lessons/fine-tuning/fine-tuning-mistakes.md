---
title: "Common Mistakes: Fine-Tuning"
track: "fine-tuning"
status: live
summary: "The eight fine-tuning errors that produce a worse model confidently — eval leakage, a dataset that taught the wrong thing, and the adapter that overwrote the base."
duration: "8 min read"
---

Fine-tuning fails by producing a model that's worse than the base and harder to debug. These are the errors that do it — each with the check that catches it.

## 1. The eval set leaked into the training data

**Wrong:** Eval items appear in the training set — same prompts, same targets — so the eval score measures memorization and the deployed model is worse than it looked.
**Right:** Decontaminate before training and prove the eval set is disjoint. A leaked eval item isn't a metric — it's a memorization test you already passed.

## 2. The dataset taught the wrong behavior

**Wrong:** The training examples contain the failure you're trying to remove — inconsistent formatting, wrong answers labeled correct, an assistant style you're trying to change — so the model learns the bug.
**Right:** Audit the dataset, not just its size. Fifty bad examples teach the bug; five thousand of them teach it thoroughly.

## 3. Catastrophic forgetting measured as a feature

**Wrong:** The tuned model nails the target task and lost everything else — general capability collapsed, and the win on the narrow metric hid the loss.
**Right:** Eval on both the target task and a general slice. Forgetting is a cost, not a side effect — if the model got narrower than intended, the trade wasn't worth it.

## 4. A LoRA rank chosen by default

**Wrong:** `r=16` because that's what the tutorial used — on a task that needed more capacity or would have overfit less at a lower rank.
**Right:** Rank is a capacity knob. Too low and the adapter can't express the change; too high and it overfits or destabilizes. Sweep it — the default was chosen for a different problem.

## 5. The adapter merged over a base you don't control

**Wrong:** The adapter is merged into a base model that isn't pinned — a base-model update or a different checkpoint produces a merged model nobody trained.
**Right:** Pin the base checkpoint and record it in the lineage. Merging is a build step, not a detail — the same adapter on a different base is a different model.

## 6. Hyperparameters copied from a different scale

**Wrong:** The LR, warmup, and schedule came from a paper that trained 100× larger or on 100× more data — the config doesn't transfer and the run diverges or undertrains.
**Right:** Hyperparameters don't port across scale. A config that worked elsewhere is a starting point, not an answer — sweep on your data and your model size.

## 7. No held-out set that wasn't used for early stopping

**Wrong:** The eval that picked the best checkpoint is also the eval reported as the final score — the model was selected on it, so the score is optimistic.
**Right:** A test set touched by selection is a validation set. Keep a third split — truly held out — for the reported number, or report it as validation and be honest about which it was.

## 8. A model registry entry that doesn't explain the artifact

**Wrong:** The registry has a checkpoint and a name — no data version, no config, no eval report — so in six months nobody can say what it is or whether it should still ship.
**Right:** Every artifact carries lineage: data version, base model, config, eval result, decision. A registry entry that can't answer "what is this" isn't a registry — it's a file cabinet.

## If you take one habit

Version the data, not just the model. Most fine-tuning bugs trace to the dataset — leaked eval items, examples that taught the bug, a merge that quietly changed the base — and the fix is always the same: lineage you can audit.

**Related:** [Building a fine-tuning dataset](/learn/fine-tuning/building-a-fine-tuning-dataset), [Dataset decontamination](/learn/fine-tuning/dataset-decontamination-and-deduplication), [Fine-tuning pipeline project](/learn/fine-tuning/fine-tuning-pipeline-project), [Evaluating a fine-tuned model](/learn/fine-tuning/evaluating-a-fine-tuned-model)
