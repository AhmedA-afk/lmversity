---
title: "LangChain: the integration layer, then agents"
track: "agent-frameworks"
status: live
summary: "LangChain's real product is breadth — a provider-agnostic model interface and hundreds of tool/data integrations — with create_agent on top of LangGraph for the agent loop."
duration: "8 min read"
sources: ["langchain-docs"]
---

## The short answer

LangChain is the ecosystem framework: a provider-agnostic model interface
(`init_chat_model` swaps OpenAI/Anthropic/Google/local behind one call
shape), a large catalog of integrations (vector stores, document loaders,
tools, retrievers), and `create_agent` for the agent loop — which under the
hood builds a [LangGraph](/learn/agent-frameworks/langgraph-durable-agents)
graph. Its center of gravity isn't a novel agent model; it's that the
integration you need probably already exists here.

## The three layers

- **Model interface** — `init_chat_model("anthropic:...")` returns a chat
  model with a uniform `.invoke`/`.stream`/`.bind_tools` surface. Provider
  swap is a string change, not a rewrite — the cheapest portability layer
  in the track.
- **Integrations** — retrievers, vector stores, document loaders, toolkits.
  For a [RAG pipeline](/learn/rag/ingestion-chunking-and-retrieval) the
  loader+splitter+store plumbing is largely pre-built.
- **`create_agent`** — a high-level agent constructor: model + tools +
  optional structured output + middleware hooks, compiled to a LangGraph
  graph underneath.

```python
from langchain.chat_models import init_chat_model
from langchain.agents import create_agent

model = init_chat_model("anthropic:claude-sonnet-4-5")
agent = create_agent(model=model, tools=[search_docs])
agent.invoke({"messages": [{"role": "user", "content": "..."}]})
```

## What it adds over the raw loop

Integrations and portability — not loop structure. The
[raw baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) with a
provider SDK gives you the loop; LangChain gives you the loop *plus* the
plumbing to reach a hundred external systems and swap providers mid-build.
The honest cost: abstraction churn. LangChain's agent API has been rebuilt
more than once (the legacy `AgentExecutor` gave way to `create_agent` on
LangGraph), so tutorials from different years describe different APIs —
check the docs version before copying code.

## When plain code is enough

Plain code wins when you use one provider and a small tool set — the
interface's value is *swapping*, and if you never swap you never collect on
it. LangChain earns the dependency when your stack is genuinely mixed —
this provider's model, that vector store, a third-party toolkit — or when
`create_agent`+LangGraph persistence is the shape you wanted anyway. If
your need is the durable-execution half, go straight to
[LangGraph](/learn/agent-frameworks/langgraph-durable-agents); `create_agent`
is a convenience over it, not a substitute.

## The exercise

Take the raw-loop exercise and rebuild it with `init_chat_model` +
`create_agent`, then swap the model string to a second provider. The
five-minute provider swap is the feature; everything else is decoration.

## Go deeper

- [LangGraph: durable agents as graphs](/learn/agent-frameworks/langgraph-durable-agents) — what create_agent compiles to.
- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — what the integrations wrap.
- [Choosing an agent framework](/learn/agentic-ai/choosing-an-agent-framework) — the survey-level criteria.
