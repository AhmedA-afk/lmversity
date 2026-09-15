---
title: "Deep Learning Cheatsheet"
track: "deep-learning"
status: live
summary: "The training decisions and diagnostics that matter — which hyperparameter first, what the loss curve is telling you, and the checks that catch silent failure."
duration: "6 min read"
---

The deep-learning training loop compressed to the decisions that matter and the diagnostics that catch what the loss curve hides.

## The hyperparameters in order of leverage

| Hyperparameter | Move it when… | The default to distrust |
|---|---|---|
| Learning rate | Always — first thing you sweep | 0.001 because it was already there |
| Batch size | When you change hardware or want different generalization | Coupled to LR — change one, scale the other |
| Weight decay | When the val gap grows and it's actually overfitting | Excluding biases/norms, or it wrecks calibration |
| Warmup | When the start of training is unstable | Skipping it on a large batch |

## What the loss curve is telling you

- **Flat at a high value** — LR too low, or a bug (dead activations, wrong loss).
- **Diverging** — LR too high, or a numerical instability (check for NaN/Inf first).
- **Train ↓, val ↑** — overfitting or a train/val distribution mismatch; they're different problems.
- **Noisy spikes that recover** — batch-size noise or a data pipeline feeding outliers.
- **Smooth plateau** — could be LR settling into a minimum, could be the smoothing hiding divergence.

## The silent failures to instrument

- **Dead ReLUs** — count activation means; a neuron that never fires doesn't exist.
- **NaN/Inf in the gradient** — log it per step; one bad batch poisons the weights.
- **Val computed on leaked data** — shared statistics, shared feature selection.
- **The metric that improved because the test set changed** — a different distribution wearing the same name.

## Which architecture instinct, one line each

- **Tabular** — start with a tree ensemble; reach for a net only when you've beaten the baseline.
- **Image** — a pretrained backbone + fine-tune; training from scratch is a research problem.
- **Sequence** — attention-based; LSTM is legacy except in specific niches.
- **Small data** — pretrained + fine-tune; a from-scratch net needs data you don't have.

## The checks before you call a training run done

1. Did the eval see data the training didn't?
2. Did the val set participate in any fitting or selection?
3. Did you sweep LR, or accept the default?
4. Is the reported score on a truly held-out test set?
5. Can you reproduce the run from the recorded config?

**Related:** [Deep learning mistakes](/learn/deep-learning/deep-learning-mistakes), [Deep learning practice](/practice/deep-learning), [ML diagnosis practice](/practice/ml-diagnosis)
