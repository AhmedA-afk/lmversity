---
title: "Worked Example: Gradient Descent, One Step at a Time"
track: "maths-foundations"
status: live
summary: "One linear-regression problem worked by hand — the loss, the gradient, and three descent steps with the arithmetic shown."
duration: "10 min read"
---

The point of this example is to see gradient descent as arithmetic, not a black box. One tiny problem, every number shown, and the intuition each step builds.

## The problem

Fit `y = wx` (no bias — simplest possible case) to three points:

- (1, 2), (2, 4), (3, 5)

The "true" slope is close to 2 but not exact — the last point pulls it down slightly. That's deliberate: it makes the gradient non-trivial.

## The loss

Mean squared error: `L(w) = (1/3) Σ (wxᵢ - yᵢ)²`

Expand it:

```
L(w) = (1/3)[ (w·1 - 2)² + (w·2 - 4)² + (w·3 - 5)² ]
     = (1/3)[ (w-2)² + (2w-4)² + (3w-5)² ]
```

## The gradient

Differentiate with respect to `w`:

```
dL/dw = (2/3)[ (w-2)·1 + (2w-4)·2 + (3w-5)·3 ]
      = (2/3)[ (w-2) + (4w-8) + (9w-15) ]
      = (2/3)(14w - 25)
```

Set it to zero to find the minimum analytically (for checking):

```
14w - 25 = 0  →  w = 25/14 ≈ 1.786
```

So the best slope is ≈1.786 — pulled below 2 by the third point, exactly as expected.

## Three descent steps

Start at `w₀ = 0`, learning rate `η = 0.1`:

**Step 1.** `w = 0`:
```
dL/dw = (2/3)(0 - 25) = -50/3 ≈ -16.67
w₁ = 0 - 0.1·(-16.67) = 1.667
```

**Step 2.** `w = 1.667`:
```
dL/dw = (2/3)(14·1.667 - 25) = (2/3)(-1.667) ≈ -1.111
w₂ = 1.667 - 0.1·(-1.111) ≈ 1.778
```

**Step 3.** `w = 1.778`:
```
dL/dw = (2/3)(14·1.778 - 25) = (2/3)(-0.108) ≈ -0.072
w₃ = 1.778 - 0.1·(-0.072) ≈ 1.785
```

Three steps took `w` from 0 to 1.785 — within 0.001 of the analytic answer 1.786. The gradient shrank from -16.67 to -0.072: the steps get smaller as you approach the minimum, which is the whole point.

## What each step teaches

- **The gradient points uphill.** We subtract it — descent means moving opposite the slope.
- **The step size is η·gradient.** Near the minimum the gradient is small, so steps shrink automatically; you don't anneal the LR on a quadratic.
- **The loss is convex here** — one minimum, no surprises. The arithmetic is only this clean because the problem is; real losses aren't.

## The check

Differentiate `L(w)` symbolically once, then verify your gradient code against it on one value of `w`. If they disagree, the code is wrong — not the math.

**Related:** [Maths mistakes](/learn/maths-foundations/maths-mistakes), [Maths derivations practice](/practice/maths-derivations), [Loss functions worked example](/learn/ai-foundations/loss-functions-worked-examples)
