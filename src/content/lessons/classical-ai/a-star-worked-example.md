---
title: "Worked Example: A* on a Grid — Where the Heuristic Matters"
track: "classical-ai"
status: live
summary: "A* worked node by node on a 5×5 grid — the open list, the f-scores, and the point where an inadmissible heuristic breaks optimality."
duration: "10 min read"
---

A* is the algorithm everyone thinks they understand until it returns a suboptimal path. This example works it on a small grid — open list, f-scores, and the moment the heuristic decides correctness.

## The problem

A 5×5 grid, start at (0,0), goal at (4,4), moves are 4-directional with cost 1, and cells (1,1), (2,1), (3,1) are blocked — a wall the path must route around.

## The heuristic

Manhattan distance: `h(n) = |x-4| + |y-4|` — the cost if the wall weren't there. It's admissible (never overestimates) because the wall can only add cost, never remove it.

## The trace

**Start:** open = [(0,0), g=0, h=8, f=8]. Expand it — neighbors (0,1) [g=1,h=7,f=8] and (1,0) [g=1,h=7,f=8]. (1,1) is blocked.

**Next:** both f=8 — tie-break, say (0,1). Expand: (0,2) [g=2,h=6,f=8]. Open now: (1,0)[f=8], (0,2)[f=8].

**Next:** expand (0,2): (0,3) [g=3,h=5,f=8]. Open: (1,0)[8], (0,3)[8].

The f=8 plateau continues — A* is exploring the "east wall" path. Eventually (0,4) [g=4,h=4,f=8] is reached, then down the right edge: (1,4)[g=5,h=3,f=8], (2,4)[6,2,8], (3,4)[7,1,8], (4,4)[8,0,8]. Goal at f=8 — the true shortest path, length 8.

**But notice:** the f=8 plateau meant A* expanded every f=8 node — including the dead end at (1,0),(2,0),(3,0) before discovering the wall forced a longer path. The heuristic guided, but the wall made it wrong about how wrong the dead-end cells were.

## Where it breaks

Now use an *inadmissible* heuristic — say `h(n) = Manhattan + 2` for cells near the wall (as if the wall weren't there but the cells are "closer than they look"). The f-scores for the dead-end path drop artificially, A* commits to it early, and returns the path through the cells that turn out to be walled off — or, worse, returns a longer path because the inflated-f cells weren't expanded when they should have been.

The check: admissibility is the contract. If `h(n)` can exceed the true cost, A*'s optimality guarantee is void — the path it returns might be right, but you're relying on luck, not the invariant.

## What the trace teaches

- **The open list is the frontier.** A* is only as smart as the order the f-scores impose.
- **The plateau is where the work happens.** Ties are where the heuristic's quality decides efficiency.
- **Admissibility is the guarantee.** Break it and the algorithm still runs — it just stops being right.

## The check

Prove `h(n) ≤ true cost` for every node before trusting the path. An inadmissible heuristic doesn't crash — it returns a confident, plausible, suboptimal answer.

**Related:** [Classical AI mistakes](/learn/classical-ai/classical-ai-mistakes), [Classical AI practice](/practice/classical-ai), [Planning and task decomposition](/learn/agentic-ai/planning-and-task-decomposition)
