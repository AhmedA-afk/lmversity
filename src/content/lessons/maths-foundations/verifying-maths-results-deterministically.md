---
title: "Check every maths answer deterministically"
track: "maths-foundations"
status: live
summary: "A practice discipline: for every result you derive by hand, write a deterministic check — code, a parity test, or an independent method — so you know it right, not feel it right."
duration: "6 min read"
---

## The short answer

In this track the same answer should be reachable two ways — by hand and by a check that can't be argued with. A deterministic check is code or a second method whose output is a single yes/no: either your derivation survives it or it doesn't. Practicing this way builds the muscle that matters downstream, where nobody hands you the answer key.

## The three check types

**1. Compute it.** If you derived something, evaluate it:

```python
import numpy as np

# claim: the eigenvalues of [[2,1],[1,2]] are 3 and 1
w, _ = np.linalg.eig([[2,1],[1,2]])
assert sorted(np.round(w, 6)) == [1.0, 3.0]
```

The check isn't the learning — it's the referee. If it fails, your derivation has a bug and now you get the *real* exercise: finding where.

**2. Test the invariant.** Many results imply a conserved quantity you can check without re-deriving:

- After normalizing a vector: `||v|| == 1`
- After a probability calculation: all outcomes sum to 1
- After orthonormalization (Gram–Schmidt): `QᵀQ == I`
- After a determinant claim: `det(AB) == det(A)·det(B)` on random matrices

Invariants catch errors even when you can't compute the full answer.

**3. Re-derive by another route.** Bayes by tree diagram *and* by formula; the gradient by limit *and* by autodiff; the inverse by elimination *and* by `A·A⁻¹ == I`. Two independent routes to the same number is stronger than one route twice-checked.

## The discipline

For any exercise in this track:

1. Derive the answer by hand — that's the learning.
2. Write the check *before* looking at any provided solution.
3. If the check fails, find the broken line before retrying — that's the error-analysis mode working.
4. Keep the checks. A file of `check_*.py` scripts per module becomes your regression suite when you revisit the material months later.

This is the same posture as [verification habits](/learn/ai-literacy) elsewhere on the site: don't trust a result because it looks right — check it because it's cheap to check.

**Related:** [Practice maths by drawing it and breaking it](/learn/maths-foundations/visualization-and-error-analysis-practice), [Choose your maths path](/learn/maths-foundations/choose-your-maths-path-by-background)
