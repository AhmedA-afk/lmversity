---
title: "Maths Foundations Cheatsheet"
track: "maths-foundations"
status: live
summary: "The formulas and intuitions that show up in every ML conversation — vectors, gradients, probabilities, and the checks that catch the common slips."
duration: "6 min read"
---

The maths that matters for ML, compressed to the card you keep open while reading a paper or debugging a shape error. Each row is the intuition, not the derivation — the derivations live in the lessons.

## Linear algebra, the five that matter

| Object | What it is | The check |
|---|---|---|
| Vector | A point or a direction in space | Is it a position or a displacement? |
| Matrix × vector | A transformation applied to a point | Does the output shape match what you meant? |
| Dot product | Similarity — how much two vectors align | Zero means orthogonal, not "no relation" |
| Norm | Length — distance from origin | Zero vector → don't divide by it |
| Eigendecomposition | The directions a matrix doesn't rotate | Where the transformation is pure stretch |

## Calculus, the three that matter

| Concept | What it computes | The slip to avoid |
|---|---|---|
| Derivative | Local rate of change | It's local — a derivative at one point isn't a global slope |
| Chain rule | How changes compose through functions | Only composes differentiable steps — an argmax has no gradient |
| Gradient | Direction of steepest ascent | It's a vector of per-parameter rates, not a single number |

## Probability, the four that matter

| Formula | What it says | The mistake |
|---|---|---|
| P(A\|B) = P(A∩B)/P(B) | Conditioning rescales to the world where B happened | Conditioning on the effect, not the cause |
| Bayes | P(cause\|evidence) ∝ P(evidence\|cause)·P(cause) | Ignoring the base rate — the prior dominates more often than the test does |
| Expectation | The long-run average | A mean of probabilities across different conditions isn't a probability you can act on |
| Independence | P(A∩B) = P(A)·P(B) | Assuming it when the variables share a cause |

## The two checks that catch most errors

- **Shape check** — write the expected dimensions next to every operation before running it. A shape that fits but means the wrong thing passes silently.
- **Condition check** — write "given X" in words before computing a conditional. The wrong condition flips the answer, and the wrong answer still computes.

## Which lesson for which question

- "Why do dot products measure similarity?" → the embeddings lessons in [AI Foundations](/learn/ai-foundations/what-embeddings-are)
- "Where does backprop come from?" → [Backprop worked example](/learn/ai-foundations/backprop-worked-example)
- "Why does my model collapse to the mean?" → [Loss functions worked example](/learn/ai-foundations/loss-functions-worked-examples)

**Related:** [Maths mistakes](/learn/maths-foundations/maths-mistakes), [Maths derivations practice](/practice/maths-derivations)
