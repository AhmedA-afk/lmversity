---
title: "Classical AI Cheatsheet"
track: "classical-ai"
status: live
summary: "The search, planning, and logic toolbox — which algorithm for which problem, and the invariant each one relies on."
duration: "6 min read"
---

The classical-AI toolbox compressed to the algorithm picks and the invariants that decide whether they work.

## Which search for which problem

| Problem shape | The algorithm | The invariant it needs |
|---|---|---|
| Uniform cost, shallow goal | BFS | Frontier fits in memory |
| Deep, narrow space | DFS | You accept "a" solution, not the shortest |
| Path cost matters | A* | Admissible heuristic — never overestimates |
| Two endpoints known | Bidirectional | Both frontiers meet in the middle |
| Huge space, local moves | Local search / hill-climbing | The landscape has few local optima |

## The three invariants to check before trusting a search

- **Admissibility** — `h(n) ≤ true cost` for every node; break it and A* returns a plausible non-optimal path.
- **Completeness** — will it find a solution if one exists? (DFS on an infinite space won't; BFS will.)
- **The closed list** — without it, the same states re-expand and the frontier explodes.

## Logic and rules, in one line each

- **Forward chaining** — facts → rules → new facts; data-driven, good for "what follows from this."
- **Backward chaining** — goal → needed facts → check them; goal-driven, good for "is this provable."
- **Unification** — pattern-matching logical terms; the mechanism that lets a rule fire on a specific case.
- **The frame problem** — what stays true when something changes; the reason naive planning is harder than it looks.

## Planning, in one line each

- **STRIPS-style operators** — preconditions + effects; the classical way to say "what an action does."
- **Plan ≠ policy** — a plan is a fixed sequence; a policy handles the world answering back.
- **Replanning** — when the environment is dynamic, the plan is a suggestion that gets revised.

## The mistakes to not make

- An inadmissible heuristic — A* silently returns suboptimal paths.
- Uninformed search on an exponential space — the frontier explodes before the goal.
- A rule that fires on correlation — "IF fever THEN flu" fires on any fever, including the wrong cause.
- A plan run in a responsive world — the first unexpected state breaks it.

## Which lesson for which question

- "Why did A* return the wrong path?" → the admissibility invariant, above
- "When does search become planning?" → when actions have preconditions and effects
- "Why did my expert system fire wrong?" → correlation vs mechanism, above

**Related:** [Classical AI mistakes](/learn/classical-ai/classical-ai-mistakes), [Classical AI practice](/practice/classical-ai), [Planning and task decomposition](/learn/agentic-ai/planning-and-task-decomposition)
