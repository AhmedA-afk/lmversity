---
title: "Practice maths by drawing it and breaking it"
track: "maths-foundations"
status: live
summary: "Two under-used practice modes: visualization practice that builds geometric intuition before symbols, and error-analysis practice that trains you to find exactly where a derivation went wrong."
duration: "7 min read"
---

## The short answer

Most maths practice means "compute the answer." Two other modes build deeper skill with less time: **visualization practice** — sketch the geometric object before touching symbols — and **error analysis** — take a broken derivation and find the exact line where it dies. Both are practiced deliberately, and this track is thinner on them than on calculation, so this lesson gives you the exercises directly.

## Visualization practice

For each concept below, sketch *before* computing. The sketch is the answer's sanity check.

- **Dot product:** draw two vectors; shade the projection of one on the other. Predict the sign before computing. If your sketch says "nearly orthogonal" and the number comes out large, one of them is wrong — find which.
- **Matrix multiplication:** draw the unit square, apply the matrix, draw the result. The determinant is how much the square's area changed — verify yours agrees.
- **Gradient:** sketch a contour map of a simple surface (a bowl, a saddle). At three points, draw the gradient direction as an arrow — it must be perpendicular to the contour and point uphill.
- **Bayes:** draw a 1000-person box, partition it by base rate first, *then* shade the test-positive region. Most intuition errors in Bayes come from skipping the base-rate partition.

The discipline: never compute what you haven't sketched. A wrong sketch is a wrong mental model — fix the picture and the arithmetic usually follows.

## Error-analysis practice

Instead of solving, debug. Each worked line below contains exactly one error — find it before reading on.

**Derivation 1:**
`d/dx [x² · sin(x)] = 2x · cos(x)` — the product rule vanished; the answer needs both terms.

**Derivation 2:**
`(AB)⁻¹ = A⁻¹B⁻¹` — the inverse reverses order: it's `B⁻¹A⁻¹`. (Check: `(AB)(B⁻¹A⁻¹) = I` works; the other order doesn't.)

**Derivation 3:**
`P(A|B) = P(B|A) · P(A) / P(B)` is *correct* — but in a worked solution it was applied with `P(A)` where `P(B)` belonged. Same-formula errors are the commonest kind: right shape, wrong slot.

The exercise format that trains this: take any worked example in this track, corrupt one step deliberately, swap papers with yourself a day later, and find it. If you can't spot your own planted error quickly, you don't yet read derivations — you skim them.

## Why these modes transfer

Downstream — ML debugging, eval analysis, tuning — you rarely compute fresh derivations. You *read* a model's behavior and localize what's broken. That is error analysis. And every "why did the embedding space do that" question is answered faster with a sketch than a symbol push.

**Related:** [Machine Learning track](/learn/machine-learning), [Choose your maths path](/learn/maths-foundations/choose-your-maths-path-by-background)
