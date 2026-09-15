---
title: "Common Mistakes: Classical AI and Search"
track: "classical-ai"
status: live
summary: "The eight reasoning errors in search, planning, and logic — the inadmissible heuristic, the uninformed search that explodes, and the rule that fired on a coincidence."
duration: "8 min read"
---

Classical AI fails differently from learned systems: the errors are structural — a heuristic that overestimates, a search space that explodes, a rule that fired on the wrong premise. Each entry names the error and the check that catches it.

## 1. An inadmissible heuristic in A*

**Wrong:** The heuristic overestimates the true cost to goal — admissibility is violated, and A* returns a path that isn't optimal, or a "no path" verdict that's wrong.
**Right:** A* is optimal only if the heuristic never overestimates. Check admissibility on paper — prove `h(n) ≤ true cost` for every node — before trusting the path.

## 2. Uninformed search on an exponential space

**Wrong:** BFS or DFS on a space with branching factor b and depth d — the frontier is O(b^d), and the search runs out of memory before it finds anything.
**Right:** Count the branching factor and depth before choosing the algorithm. A space that fits in a textbook diagram explodes at real scale; pick informed search, bidirectional, or pruning before the frontier explodes.

## 3. Treating the closed list as optional

**Wrong:** A* or graph search without a proper closed list — the same states get expanded repeatedly, the frontier grows with duplicates, and the search either loops or wastes orders of magnitude of work.
**Right:** The closed list is the correctness invariant, not an optimization. Without it, revisits multiply; with it, each state expands once.

## 4. A rule that fires on a coincidence

**Wrong:** An expert-system rule triggers on a feature that correlates with the condition in the training examples but isn't the cause — "IF fever THEN flu" fires on a fever from a different cause entirely.
**Right:** A rule encodes a judgment about mechanism, not correlation. Check whether the antecedent actually causes the conclusion — a coincidentally-true antecedent produces a confidently-wrong rule.

## 5. Confusing a plan with a policy

**Wrong:** A plan generated for a fixed sequence of states gets run in a world that responds — the first unexpected state breaks the plan and there's no recovery.
**Right:** A plan assumes the world does what you expected. If the environment can respond or fail, you need a policy or replanning — a plan is a schedule for a world that doesn't talk back.

## 6. Constraint propagation that stops early

**Wrong:** A CSP solver prunes on one consistency check and declares the problem solved — when the constraints interact, and arc-consistency alone doesn't detect the global conflict.
**Right:** Local consistency is necessary, not sufficient. Check whether the constraints interact — a locally-consistent partial assignment can still be globally unsatisfiable, and the solver should find that before committing.

## 7. A minimax horizon that misses the threat

**Wrong:** The evaluation is computed at depth 4 — and the decisive threat sits at depth 5, invisible to the horizon, so the engine walks into it confidently.
**Right:** The horizon is a blind spot, not a limit — a static evaluation at the cutoff can be catastrophically wrong. Use quiescence or iterative deepening and treat the horizon cutoff as a place where the evaluation is least trustworthy.

## 8. Believing the formalism solves the problem

**Wrong:** The problem is encoded perfectly in first-order logic or a planning language — and the encoding is right but the world doesn't work that way, so the correct answer to the wrong problem is useless.
**Right:** The formalism is a model of the world, not the world. Validate the encoding against reality — a perfectly-solved incorrect formalization is a confident wrong answer with extra steps.

## If you take one habit

Check the invariant, not just the output. Classical systems fail by violating a property — admissibility, termination, completeness — that the code never enforced. The bug isn't in the result; it's in the assumption.

**Related:** [Classical AI practice](/practice/classical-ai), [Planning and task decomposition](/learn/agentic-ai/planning-and-task-decomposition)
