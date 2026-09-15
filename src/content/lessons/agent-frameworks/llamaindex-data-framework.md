---
title: "LlamaIndex: the data framework that grew agents"
track: "agent-frameworks"
status: live
summary: "LlamaIndex started as the RAG data framework — loaders, indexes, query engines — and grew Workflows and agents on top; its center of gravity is still data-to-answer, not general orchestration."
duration: "8 min read"
sources: ["llamaindex-docs"]
---

## The short answer

LlamaIndex is the data framework: its core is the path from documents to
answers — **readers/loaders** ingest, **indexes** structure the data for
retrieval, **query engines** answer over an index. Agents and **Workflows**
(event-driven orchestration) sit on top of that data layer, which makes
LlamaIndex the natural pick when the agent's job *is* retrieval —
[agentic RAG](/learn/rag/agentic-rag) — and a sideways pick for
general-purpose orchestration.

## The stack, bottom to top

```python
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader

docs = SimpleDirectoryReader("./data").load_data()     # loaders
index = VectorStoreIndex.from_documents(docs)          # index
engine = index.as_query_engine()                       # query engine
print(engine.query("What does the policy say about refunds?"))
```

- **Loaders/readers** — hundreds of connectors (files, APIs, databases,
  SaaS) plus parsing/chunking. This is the same ingestion stage as
  [RAG ingestion](/learn/rag/ingestion-chunking-and-retrieval), pre-built.
- **Indexes** — `VectorStoreIndex` is the default; summary, knowledge-graph,
  and composable indexes exist for other retrieval shapes.
- **Query engines & retrievers** — retrieval plus response synthesis over
  an index; sub-engines route across multiple indexes.
- **Workflows** — an event-driven orchestration layer: steps emit/consume
  typed events, loops and branches are explicit. It's LlamaIndex's answer
  to graph-style control flow without adopting someone else's graph.
- **Agents** — `FunctionAgent`/`ReActAgent` over tools; **agentic RAG** is
  the canonical use — an agent whose tools are retrievers decides what to
  fetch and when, instead of a fixed retrieve-then-answer pipeline.

## What it adds over the raw loop

Data plumbing, mostly. The [raw baseline](/learn/agent-frameworks/raw-sdk-agent-baseline)
gives you a loop with no data layer; LlamaIndex gives you ingestion,
indexing, and retrieval as the substrate, with the agent loop arriving on
top of it. For a knowledge-grounded agent — "answer over *these* documents"
— the gap between raw loop and working system is precisely the data half,
and that's the half this framework already built.

## When plain code is enough

Plain code wins when there's no retrieval workload — an agent over a few
function tools gains nothing from an indexing framework. And when retrieval
is trivial (one small doc set, one embedding search), a direct
`embed + vector-search` call beats adopting the framework's object model.
Reach for LlamaIndex when the *data path is the product*: many sources,
non-trivial indexing choices, retrieval quality you need to tune — or when
"the agent should decide what to retrieve" is literally the requirement.
For orchestration-first work without a data core,
[LangGraph](/learn/agent-frameworks/langgraph-durable-agents) or the
provider SDKs fit better.

## The exercise

Build the three-line `VectorStoreIndex` pipeline above, then promote it:
swap the query engine for an agent whose tool is the retriever, and watch
it choose *when* to search — that promotion is agentic RAG in one step.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — the loop the data layer serves.
- [What makes RAG agentic](/learn/rag/agentic-rag) — the pattern LlamaIndex's agents encode.
- [LangGraph: durable agents as graphs](/learn/agent-frameworks/langgraph-durable-agents) — the orchestration-first alternative.
