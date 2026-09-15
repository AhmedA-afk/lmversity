---
title: "OpenAI Agents SDK: agents, handoffs, and guardrails"
track: "agent-frameworks"
status: live
summary: "OpenAI's Agents SDK wraps the raw agent loop in four primitives — agents, handoffs, guardrails, and sessions — plus built-in tracing and hosted tools."
duration: "8 min read"
sources: ["openai-agents-sdk-docs"]
---

## The short answer

The OpenAI Agents SDK (Python, with a TypeScript sibling) is OpenAI's
lightweight agent framework — the productionized successor to the Swarm
experiment. It wraps [the raw agent loop](/learn/agent-frameworks/raw-sdk-agent-baseline)
in four primitives: **Agent** (instructions + tools + model), **handoffs**
(one agent delegating to another mid-run), **guardrails** (input/output
validation that can trip and abort), and **sessions** (server-managed
conversation memory). `Runner.run()` executes the loop; tracing to the
OpenAI platform is built in.

## The four primitives

```python
from agents import Agent, Runner

triage = Agent(
    name="triage",
    instructions="Route billing questions to billing, else answer.",
    tools=[lookup_order],
    handoffs=[billing_agent],      # delegation as a first-class edge
)
result = Runner.run_sync(triage, "Where's my refund?")
```

- **Agent** — instructions, tools (plain Python functions with typed
  signatures become tool schemas), `output_type` for structured results,
  and a list of `handoffs`.
- **Handoff** — transfer of control *and* context to another agent. It's
  the SDK's answer to multi-agent structure: a triage specialist routes
  instead of one mega-prompt doing everything.
- **Guardrails** — input guardrails check the user's message before the
  agent runs; output guardrails check the result. A tripped guardrail
  raises and aborts — validation as a tripwire, not an `if` you forgot.
- **Session** — conversation state persisted across `Runner.run` calls so
  each run doesn't restart from an empty `messages` list.

## What it adds over the raw loop

Guardrails and handoffs are the honest answer — the raw loop gives you
neither without real work. Tracing is the third: runs stream to OpenAI's
trace viewer, which makes debugging a multi-handoff run legible in a way
`print(messages)` isn't. Hosted tools (web search, file search, computer
use) and MCP server support come along because the SDK rides the
Responses API.

## When plain code is enough

Skip the SDK when your agent is one agent with a few tools — the raw loop
is then *shorter* than the framework's concepts. It's also the wrong
dependency when you need provider portability: `Runner` speaks OpenAI's
API natively, and while LiteLLM-style adapters exist, the hosted tools,
tracing, and sessions are OpenAI-side. Reach for it when you'll use at
least two of its four primitives — typically handoffs or guardrails —
or when you want OpenAI's hosted tools and tracing as the point.

## The exercise

Rebuild the [raw-loop exercise](/learn/agent-frameworks/raw-sdk-agent-baseline)
as two Agents with a handoff — a triager and a specialist. Watch the trace:
the thing the SDK bought you is legibility of *who* ran *what*.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — what this wraps.
- [Multi-agent patterns](/learn/agentic-ai/multi-agent-patterns) — handoffs are one pattern of several.
- [Agent permissions and authorization](/learn/agentic-ai/agent-permissions-and-authorization) — guardrails' policy sibling.
