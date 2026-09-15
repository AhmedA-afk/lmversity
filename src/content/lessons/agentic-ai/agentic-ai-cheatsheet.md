---
title: "Agentic AI Cheatsheet"
track: "agentic-ai"
status: live
summary: "The agent-design decision table — when a workflow is enough, when an agent earns its cost, and the bounds every loop needs."
duration: "6 min read"
---

The agentic track compressed to the decisions and the bounds — when to reach for an agent at all, and what every loop needs before it runs.

## Workflow or agent — the decision

| The task… | Reach for… | Why |
|---|---|---|
| Fixed steps, known order | A workflow | Deterministic, testable, cheap |
| Steps chosen by the situation | An agent | The model decides the path |
| Side effects, irreversible | A workflow with gates | You want a human or a rule in the loop |
| Exploration, tool discovery | An agent | The space isn't enumerable in advance |
| Anything with a fixed shape | A workflow | An agent is the expensive way to do a pipeline |

## The bounds every loop needs

- **Step cap** — the loop can't run forever; a max-iteration bound that can fire.
- **Cost ceiling** — tokens or dollars, enforced mid-run, not at the invoice.
- **Retry cap** — per-tool-call attempts, with backoff; a deterministic failure retried forever is a hang with a bill.
- **Delegation depth** — in multi-agent, a handoff limit that prevents ping-pong.
- **Termination condition** — a checkable definition of done, not the model's say-so.

## The state that must survive

- **Checkpoints** — every step's inputs, outputs, decisions; resume must not re-execute effects.
- **Idempotency keys** — a retried effectful call effects once.
- **The pending-approval record** — an approval gate that survives a crash, not one that crashes past.

## The failure modes in one line each

- **Infinite loop** — no step cap, or a stopping condition the model never meets.
- **Error swallowed** — the tool error never reaches the model, so it retries the same bad call.
- **State lost** — progress in process memory, gone on restart.
- **Cost runaway** — no ceiling, or a retry storm multiplying spend.
- **Delegation cycle** — A hands to B hands to A, no depth limit.

## Which lesson for which question

- "What is an agent?" → [What is an agent](/learn/agentic-ai/what-is-an-agent)
- "How does the loop work?" → [The agent loop](/learn/agentic-ai/the-agent-loop)
- "When is a workflow enough?" → [Agents vs workflows](/learn/agentic-ai/agents-vs-workflows) and [When not to use an agent](/learn/agentic-ai/when-not-to-use-an-agent)
- "How do I bound it?" → [Cost-aware agent loops](/learn/agentic-ai/cost-aware-agent-loops)

**Related:** [Agent loop mistakes](/learn/agentic-ai/agent-loop-mistakes), [Agentic AI practice](/practice/agentic-ai), [Stateful agent project](/learn/agentic-ai/stateful-agent-checkpoints-project)
