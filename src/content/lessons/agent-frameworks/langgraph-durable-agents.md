---
title: "LangGraph: durable agents as state machines"
track: "agent-frameworks"
status: live
summary: "LangGraph models an agent as a graph over typed state — nodes do work, edges route, checkpointers persist every step — which buys durable execution, human interrupts, and time-travel debugging."
duration: "9 min read"
sources: ["langchain-langgraph-docs"]
---

## The short answer

LangGraph models agent execution as a **graph over shared state**: a
`StateGraph` carries a typed state object, **nodes** are functions that
read and update it, **edges** route between them (fixed or conditional),
and a **checkpointer** persists state after every step. That last piece is
the point — because each step is a committed checkpoint, a run can pause
for human approval (**interrupts**), resume after a crash (**durable
execution**), or rewind and fork (**time travel**). It's the framework for
agents that must survive longer than one process lifetime.

## The four pieces

```python
from langgraph.graph import StateGraph, START, END
from langgraph.checkpoint.memory import MemorySaver

class AgentState(TypedDict):
    messages: list
    draft: str

graph = StateGraph(AgentState)
graph.add_node("reason", reason_step)      # a node = a step of work
graph.add_node("tools", tool_step)
graph.add_conditional_edges("reason",      # routing = a function on state
    lambda s: "tools" if needs_tool(s) else END)
graph.add_edge("tools", "reason")          # the loop edge

app = graph.compile(checkpointer=MemorySaver())
app.invoke({"messages": [task]}, config={"thread_id": "run-1"})
```

- **State + reducers** — the schema declares fields and how updates merge
  (e.g., `messages` appends rather than replaces). State is the single
  source of truth, not scattered variables.
- **Nodes/edges** — nodes do work; conditional edges are routing functions.
  The agent loop is a graph you can draw — which is why LangGraph suits
  [multi-agent patterns](/learn/agentic-ai/multi-agent-patterns) where
  topology matters.
- **Checkpoints** — every super-step persists under a `thread_id`. Memory,
  SQLite, and Postgres savers exist; durable execution is resume-from-
  last-checkpoint, free.
- **Interrupts** — `interrupt()` inside a node pauses the run and waits for
  input; human-in-the-loop is a graph feature, not a bolt-on.

## What it adds over the raw loop

Exactly the gaps [the baseline](/learn/agent-frameworks/raw-sdk-agent-baseline)
named: durable execution, human interrupts, resumable multi-agent structure,
and observability hooks (LangSmith tracing is the sibling product). The raw
loop dies with the process; a LangGraph run is a persisted state machine.

## When plain code is enough

Plain code wins when runs are short and stateless — a checkpoint buys
nothing if a failed run just restarts. It's also overkill for a linear
pipeline: `Sequential`-style flows don't need a graph (see
[Google ADK](/learn/agent-frameworks/google-adk) for a lighter version of
the same idea). Reach for LangGraph when execution must be *durable or
interruptible* — long-running agents, approval gates, recoverable batch
work — or when the control flow is genuinely graph-shaped: branching,
cycles, fan-out/join. If your agent is "call tools until done" with no
persistence requirement, the raw loop is still the better answer.

## The exercise

Add `interrupt()` before the tool node and a `MemorySaver` — resume the
run with approval input. That pause/resume across process restarts is the
feature you can't get from the raw loop without building it.

## Go deeper

- [LangChain: the integration layer](/learn/agent-frameworks/langchain-agents-and-integrations) — the convenience API above this.
- [State, memory, and recovery](/learn/agentic-ai/state-memory-and-recovery) — the concepts checkpoints implement.
- [Agent orchestration frameworks](/learn/agentic-ai/agent-orchestration-frameworks) — where LangGraph sits in the landscape.
