---
title: "Google ADK: workflow agents and multi-agent teams"
track: "agent-frameworks"
status: live
summary: "Google's Agent Development Kit builds multi-agent systems from LlmAgents plus deterministic workflow agents — Sequential, Parallel, Loop — with sessions, state, and deployment to Vertex AI."
duration: "8 min read"
sources: ["google-adk-docs"]
---

## The short answer

ADK (Agent Development Kit) is Google's open-source Python framework for
multi-agent systems — model-agnostic but Gemini-optimized, and the same
tooling behind agents Google deploys on Vertex AI. Its distinctive idea:
multi-agent structure is **explicit**. `LlmAgent` is the reasoning unit;
**workflow agents** (`SequentialAgent`, `ParallelAgent`, `LoopAgent`) are
deterministic containers that run their sub-agents in a fixed pattern —
the model decides *what to say*, your code decides *who runs when*.

## The two kinds of agents

```python
from google.adk.agents import LlmAgent, SequentialAgent

researcher = LlmAgent(
    name="researcher", model="gemini-2.0-flash",
    instruction="Gather facts; write findings to state['findings'].",
    tools=[search_tool],
)
writer = LlmAgent(
    name="writer", model="gemini-2.0-flash",
    instruction="Turn state['findings'] into the report.",
)

pipeline = SequentialAgent(
    name="report-pipeline", sub_agents=[researcher, writer])
```

- **LlmAgent** — instructions + tools + model; the LLM-driven unit, same
  role as an OpenAI Agents SDK `Agent`.
- **Workflow agents** — `Sequential` runs children in order, `Parallel`
  runs them concurrently, `Loop` repeats until a condition. No model in
  the container — control flow is code, not prompt.
- **Sub-agents and agent-as-tool** — agents nest: a parent can delegate to
  a sub-agent (transfer of control) or invoke one as a tool (call and
  return). That's the same delegation spectrum as
  [multi-agent patterns](/learn/agentic-ai/multi-agent-patterns).
- **Session and state** — a `state` dict shared across agents in a run is
  the data bus; sessions persist conversation state across invocations.

## What it adds over the raw loop

Structure and runtime. The [raw loop](/learn/agent-frameworks/raw-sdk-agent-baseline)
grows multi-agent behavior as nested function calls with shared variables;
ADK makes the topology declarative and gives you the execution substrate —
sessions, state scoping, built-in tools (Google Search, code execution),
evaluation tooling, and a deployment path to Vertex AI Agent Engine. It's
also the most explicit about the
[agents-vs-workflows](/learn/agentic-ai/agents-vs-workflows) split of any
framework here: workflow agents *are* the workflow, LlmAgents are the
agents.

## When plain code is enough

Plain code wins for single-agent tasks and fixed two-step pipelines —
`SequentialAgent` of two LlmAgents is honest overkill when a function call
per step does the same thing. ADK earns its place when the topology is
genuinely multi-agent — fan-out/fan-in parallelism, iterative loops,
delegation trees — or when you're deploying into Google Cloud and want the
managed-agent path. Note the ecosystem bet: it's strongest with Gemini and
Vertex; the model-agnostic claim is real but the polish is Google-shaped.

## The exercise

Build the two-agent `SequentialAgent` above, then replace it with 15 lines
of raw SDK calls — same outcome. The comparison *is* the lesson: you're not
paying for sequencing, you're paying for what sequencing composes into.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — the loop ADK orchestrates.
- [Agents vs workflows](/learn/agentic-ai/agents-vs-workflows) — the split ADK makes literal.
- [Hierarchical task decomposition](/learn/agentic-ai/hierarchical-task-decomposition) — the pattern Sequential/Parallel encode.
