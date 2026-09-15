---
title: "Common Mistakes: The Maths Errors That Break ML Intuition"
track: "maths-foundations"
status: live
summary: "The eight calculation and reasoning errors that quietly produce wrong models — dimension slips, conditioning gaps, and the chain rule applied where it isn't."
duration: "8 min read"
---

These mistakes don't crash — they produce plausible wrong answers, which is why they survive. Each entry names the slip and the check that catches it.

## 1. Broadcasting a shape that shouldn't fit

**Wrong:** `X @ W` runs without error because broadcasting silently aligned the wrong axes — the output shape looks plausible and every value is wrong.
**Right:** Write the expected shape next to every operation before running it. If the result's shape is right but the semantics are wrong, no test will catch it — only the shape annotation will.

## 2. Applying the chain rule where the derivative doesn't exist

**Wrong:** Backpropagating through a non-differentiable step — an argmax, a quantization, a discrete lookup — as if the gradient flowed through it.
**Right:** Mark every non-differentiable step before writing the loss. The chain rule composes smooth functions; a discrete step needs an estimator (straight-through, REINFORCE, a relaxation), not a derivative that doesn't exist.

## 3. Conditioning on the wrong variable

**Wrong:** P(A|B) computed as P(A∩B)/P(B) with the wrong B — usually conditioning on the observed outcome instead of the cause, which flips the answer entirely.
**Right:** Write the condition in words first: "given that B happened" — then check the denominator is the probability of that B. Base rates decide the answer more often than the test's accuracy does.

## 4. Confusing correlation with a coefficient's meaning

**Wrong:** "The coefficient on X is large, so X drives Y" — in a model where X is correlated with the omitted variable actually doing the work.
**Right:** A coefficient measures association conditional on the other features, not causation. Check what's omitted before interpreting magnitude.

## 5. Averaging probabilities across different conditions

**Wrong:** "The model is 90% accurate" averages over slices where it's 99% and slices where it's 40% — then deployed where the 40% cases dominate.
**Right:** Probabilities are conditional. Report per-slice accuracy and check which slice your deployment actually draws from.

## 6. Treating a probability as a certainty

**Wrong:** "The model output 0.9, so it's right 9 times in 10" — when the score was never calibrated and 0.9 means "confidently worded," not a measured frequency.
**Right:** A probability is a claim about long-run frequency — verify it against held-out outcomes before treating it as one. Uncalibrated scores are ranks, not probabilities.

## 7. Losing a factor of two (or n) in the gradient

**Wrong:** The loss has a `1/2` or `1/n` term and the gradient code drops or doubles it — the model still trains, just at a different effective learning rate, and nobody notices until it matters.
**Right:** Differentiate the scalar loss by hand once and compare against the code on a tiny input. A factor of two in the gradient is invisible in a training curve.

## 8. Normalizing a vector that might be zero

**Wrong:** `v / ||v||` on a vector that can be all-zeros produces NaN — silently, in one batch out of a thousand.
**Right:** Check for the zero norm before dividing, or add an epsilon and know it changes the result. The NaN that only appears in production is always the edge case you skipped.

## If you take one habit

Annotate shapes and conditions before you compute. Most of these errors are invisible in the output — they live in the gap between what the code computed and what you thought it computed.

**Related:** [Maths derivations practice](/practice/maths-derivations), [Loss functions worked example](/learn/ai-foundations/loss-functions-worked-examples)
