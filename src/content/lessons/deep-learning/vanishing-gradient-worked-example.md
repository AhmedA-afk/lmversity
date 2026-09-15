---
title: "Worked Example: A Vanishing Gradient, Caught in the Weights"
track: "deep-learning"
status: live
summary: "A deep sigmoid network where the early layers stop learning — the activation statistics and gradient norms that show exactly where the signal dies."
duration: "10 min read"
---

A vanishing gradient doesn't crash — it produces a network that trains, converges, and quietly doesn't use its early layers. This example constructs one and finds the signal dying in the weights.

## The setup

A 6-layer MLP with sigmoid activations, trained on a simple classification task. The loss goes down, accuracy reaches 72%, and stops. Deeper layers changed nothing — the network behaves like a 2-layer model wearing a 6-layer costume.

## The diagnosis: look at the gradients, not the loss

Log the gradient norm per layer at a mid-training step:

| Layer | ‖∇W‖ (gradient norm) |
|---|---|
| 6 (output) | 0.82 |
| 5 | 0.31 |
| 4 | 0.11 |
| 3 | 0.04 |
| 2 | 0.008 |
| 1 (input) | 0.001 |

The gradient norm decays roughly 3–4× per layer going backward. By layer 1 the gradient is 1/800th the output layer's — those weights are effectively not training. The "6-layer" network is a 2-layer network with four layers of dead weight.

## Why sigmoid does this

The sigmoid's maximum derivative is 0.25 (at the center); in the saturated tails it approaches 0. Backprop multiplies these per-layer derivatives — six layers of factors ≤0.25 compounds to ~0.25⁶ ≈ 0.00024. The early-layer gradient is structurally tiny, not just unlucky.

## The fix and the check

Swap sigmoid for ReLU (or a variant) — ReLU's derivative is 1 on the active side, so the product doesn't decay. Rerun and the gradient norms are roughly uniform across layers: the early layers now train, and the same network reaches 89% — the capacity that was there all along, finally used.

## What the example teaches

- **The loss going down isn't evidence the model is learning everywhere.** A vanishing gradient produces a model that trains — just not the layers that matter.
- **Activation choice is a gradient-flow decision.** Sigmoid's bounded derivative is the bug here; ReLU's unbounded-on-active-side is the fix.
- **Instrument the gradient, not just the loss.** Per-layer gradient norms are where a dead-network bug is visible; the loss curve is where it hides.

## The check

Log per-layer gradient norms once per epoch. A monotonic decay by orders of magnitude is the vanishing-gradient signature — the fix is usually activation or normalization, not a bigger model.

**Related:** [Deep learning mistakes](/learn/deep-learning/deep-learning-mistakes), [Deep learning practice](/practice/deep-learning), [ML diagnosis practice](/practice/ml-diagnosis)
