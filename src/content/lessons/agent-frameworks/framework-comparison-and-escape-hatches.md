---
title: "Comparing frameworks — and the escape hatches that matter"
track: "agent-frameworks"
status: live
summary: "A systematic comparison of the agent frameworks in this track across control flow, state, persistence, tools, evaluation, observability, deployment, maintenance, and the escape hatches that decide real migrations."
duration: "10 min read"
---

## The short answer

Feature matrices go stale; **dimensions don't**. This capstone compares
the frameworks in this track along nine axes that stay stable — control
flow, state, persistence, tool interfaces, evaluation, observability,
deployment, maintenance, and escape hatches — because those are what a
migration decision actually turns on. For mental models (agent-as-graph
vs agent-as-role), see
[choosing an agent framework](/learn/agentic-ai/choosing-an-agent-framework);
this is the engineering version.

## The nine dimensions

| Dimension | The question it answers |
|---|---|
| Control flow | Can you see the loop — graph, code, conversation, or hidden? |
| State | Is state a typed object, a messages list, or implicit? |
| Persistence | Does a run survive process death? Where's the checkpoint? |
| Tool interfaces | How do functions become tools — decorators, schemas, MCP? |
| Evaluation | Does the framework help you *measure*, or just run? |
| Observability | What's the trace story — first-party, OTel, or DIY logging? |
| Deployment | What does "ship it" mean — library, server, managed runtime? |
| Maintenance | How much API churn has this framework inflicted? |
| Escape hatches | When the abstraction leaks, can you drop to the loop? |

## The comparison

| Framework | Control flow | Persistence | Deployment | Escape hatch |
|---|---|---|---|---|
| Raw SDK | Your `while` loop | None — serialize `messages` yourself | Your code | N/A — it *is* the hatch |
| OpenAI Agents SDK | Runner + handoffs | Sessions (OpenAI-side) | Library + hosted tracing | Drop to Responses API calls |
| Claude Agent SDK | Harness-owned loop | Sessions, resumable | Library harness | Permission hooks; raw API |
| Google ADK | Workflow agents (explicit) | Session/state service | Vertex AI path | Call LlmAgents directly |
| LangGraph | Explicit graph, you draw it | Checkpointers — best in class | Library; LangGraph Platform | Node functions are plain code |
| LlamaIndex | Workflows + agent | Index/session stores | Library | Query engines without agents |
| PydanticAI | Loop + typed graphs | Via deps you own | Library | It's thin — raw call is close |
| Agno | Agent/Team/Workflow | Built-in memory/knowledge | AgentOS server | Agents callable without OS |
| CrewAI | Process over tasks | Crew memory | Library | Custom tools; task-level code |
| Mastra | Typed workflow graphs | Suspend/resume state | Node server/serverless | Plain TS at the step level |
| Haystack | Pipeline DAG | Document stores | Library/YAML pipelines | Components are plain classes |
| DSPy | Module composition | Compiled artifacts | Library | dspy.Predict ≈ raw call |
| Vercel AI SDK | Your route handler | None (transport layer) | Next.js/Node routes | It's plumbing — hatch is built in |

## The honest patterns

- **Persistence is the sharpest divider.** LangGraph's checkpointers and
  durable execution are genuinely differentiated; most frameworks' "memory"
  is a convenience, not survival. If a run must outlive the process, the
  shortlist is short.
- **The provider SDKs trade lock-in for polish.** OpenAI Agents SDK and
  Claude Agent SDK are the smoothest experiences *inside* their providers
  — hosted tools, tracing, sessions — and the worst choices if portability
  is a requirement.
- **Abstraction distance predicts migration pain.** CrewAI, Agno, and ADK
  put framework vocabulary between you and the loop; PydanticAI, the AI
  SDK, and Haystack sit close enough that "escape" is nearly free. Pick
  deep abstractions only when their features are the point.
- **Maintenance is a real cost.** LangChain's API has been rebuilt
  repeatedly; Microsoft's lane is mid-convergence; AutoGen was redesigned
  from scratch. Framework age and churn rate belong in the decision —
  a framework that rewrites its API annually is a recurring tax.
- **The loop is always underneath.** Every framework here wraps
  [the same while-loop](/learn/agent-frameworks/raw-sdk-agent-baseline).
  If you can't name which named gap — durability, handoffs, guardrails,
  data plumbing, observability — you're buying, plain code is the honest
  answer.

## The exercise

Score your actual project on the nine dimensions — write the requirements
*first*, then the framework. If "persistence" and "escape hatch" aren't on
your list, the exercise probably just argued for the raw loop.

## Go deeper

- [Choosing an agent framework](/learn/agentic-ai/choosing-an-agent-framework) — the mental-model comparison.
- [Agent orchestration frameworks](/learn/agentic-ai/agent-orchestration-frameworks) — the landscape-level survey.
- [When not to use an agent](/learn/agentic-ai/when-not-to-use-an-agent) — the zeroth dimension.
