---
title: "Project: A Multi-Agent Workflow With Explicit Delegation and Shared-State Limits"
track: "agentic-ai"
status: live
summary: "Build a small multi-agent system where delegation is a contract, shared state has owners, and the run can't ping-pong forever."
duration: "25 min read"
---

Multi-agent demos look impressive and fail in a specific way: agents delegate in circles, share state through a bag everyone writes to, and nobody can say why the run ended. This project builds the bounded version — delegation with a contract, shared state with owners, and termination conditions that exist before the run starts.

## The brief

Build a three-agent workflow (e.g. researcher → analyst → writer on a report task) where: delegation is a typed message with a task contract and an acceptance check; shared state is a document with declared writers, not a free-for-all scratchpad; and the orchestration enforces a delegation depth limit and a cost ceiling that can actually fire.

## Prerequisites

- [Multi-agent patterns](/learn/agentic-ai/multi-agent-patterns) — the delegation topologies
- [Agent task contracts](/learn/agentic-ai/agent-task-contracts) — what a handoff must specify
- [Hierarchical task decomposition](/learn/agentic-ai/hierarchical-task-decomposition) — how work splits

## Supplied assets and mock mode

Runs fully local: the "agents" can be scripted functions or real model calls behind an interface. The orchestrator, contracts, and shared-state store are the deliverable — mock agents are not a shortcut, they are the correct test fixture.

## Acceptance criteria

- [ ] A delegation is a structured message — task, inputs, acceptance criteria, caller identity — validated before dispatch, not a string passed between agents
- [ ] Delegation depth is bounded — the workflow refuses a handoff past a stated limit and the refusal is logged
- [ ] Shared state has declared writers — agent B cannot overwrite agent A's section; a test proves the write is rejected or versioned
- [ ] The run terminates on any of: acceptance check passed, depth limit, cost ceiling — each reachable and each tested
- [ ] A run record shows the delegation graph — who delegated what to whom — not just a transcript
- [ ] Total cost is priced per delegation and the ceiling is enforced mid-run, not discovered at invoice

## Failure injection (required)

- [ ] Agent B's output fails A's acceptance check — the workflow retries, escalates, or fails with a named reason, not silent acceptance
- [ ] Two agents attempt to write the same shared-state key — the second write is rejected or namespaced, provably
- [ ] A delegates to B who delegates back to A — the depth limit fires and the cycle is visible in the run record

## Milestones

1. **Sequential pipeline** — A → B → C with no shared state; contracts only.
2. **The delegation contract** — typed handoff with acceptance check; a failing check blocks the pipeline.
3. **Bounded delegation** — depth limit and the ping-pong test.
4. **Owned shared state** — the write-permission test.
5. **The cost ledger** — per-delegation pricing and a ceiling that actually fires.

## What good looks like

The run record answers "why did this cost $4" and "why did B do that" without reading model outputs — the delegation graph and ledger are the explanation. Termination is a property of the orchestrator, not the agents' goodwill: remove the depth limit and the ping-pong test fails loudly.

## For your portfolio

Show the run record from the ping-pong test — a delegation cycle being caught by the depth limit is the artifact that proves the system understands its own failure modes. Do not present "three agents talked to each other" as the achievement.

## Defend this build

1. Show a delegation message — what does the acceptance check actually verify?
2. Two agents disagree in shared state — what does the record show, and who wins?
3. Your depth limit is 3 — what task legitimately needs more, and what would you change instead of raising it?
4. What does the workflow do when the cost ceiling fires mid-run — and what does the caller see?

The pass bar: answers reference the contract schema, the write rules, and a run record — not the agents' intentions.

**Related:** [Multi-agent patterns](/learn/agentic-ai/multi-agent-patterns), [Agent task contracts](/learn/agentic-ai/agent-task-contracts), [Cost-aware agent loops](/learn/agentic-ai/cost-aware-agent-loops), [When not to use an agent](/learn/agentic-ai/when-not-to-use-an-agent)
