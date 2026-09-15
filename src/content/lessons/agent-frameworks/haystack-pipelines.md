---
title: "Haystack: explicit pipelines for retrieval and agents"
track: "agent-frameworks"
status: live
summary: "Haystack builds LLM apps as explicit pipelines — components with declared inputs and outputs wired into a graph — covering retrieval, generation, and agents with the same composable model."
duration: "7 min read"
sources: ["haystack-docs"]
---

## The short answer

Haystack (deepset's open-source framework) builds LLM applications as
**pipelines**: reusable **components** — retrievers, embedders, generators,
converters, routers — each declaring typed inputs and outputs, wired into
an explicit graph. Agents exist too, but they're *components in the same
model*: an agent is a component that loops tools until done. The philosophy
is closest to classical data-engineering DAGs — you can read the topology
off the pipeline definition.

## The model

```python
from haystack import Pipeline
from haystack.components.retrievers import InMemoryBM25Retriever
from haystack.components.generators import OpenAIGenerator
from haystack.components.builders import ChatPromptBuilder

pipe = Pipeline()
pipe.add_component("retrieve", InMemoryBM25Retriever(document_store=store))
pipe.add_component("prompt", ChatPromptBuilder(template=..., required_variables=["docs"]))
pipe.add_component("generate", OpenAIGenerator())
pipe.connect("retrieve.documents", "prompt.documents")
pipe.connect("prompt.prompt", "generate.prompt")
pipe.run({"retrieve": {"query": q}, "prompt": {"query": q}})
```

- **Component** — a class with declared `run()` inputs/outputs; write your
  own the same way. The contract is the type signature.
- **Pipeline** — the wiring: `connect()` maps one component's output to
  another's input; branches, loops, and conditional routers are explicit.
  Serialization to YAML makes pipelines version-controllable artifacts.
- **Retrieval stack** — document stores (in-memory, OpenSearch,
  Elasticsearch, pgvector and friends), embedders, retrievers, rankers —
  the same stages as
  [RAG ingestion](/learn/rag/ingestion-chunking-and-retrieval) as first-class
  pipeline components.
- **Agents** — `Agent` components run tool-calling loops *inside* a
  pipeline: the agent is a node, and its surroundings stay deterministic.

## What it adds over the raw loop

Composable plumbing with a DAG mindset. The
[raw baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) hardcodes
retrieve→prompt→generate as statements; Haystack makes each stage a
swappable component with visible wiring — so "swap BM25 for embeddings" is
a component change, not a rewrite. Compared to LlamaIndex it's less
data-framework and more *pipeline engineering*; compared to LangGraph it's
less about agent state machines and more about legible data flow.

## When plain code is enough

Plain code wins for a single retrieve-generate call — a three-step
pipeline is overhead until the fourth step arrives. Haystack earns the
dependency when the topology grows — multiple retrieval branches,
routing, hybrid search, agents as one stage among several — or when you
want pipelines as serialized artifacts (reviewable YAML, testable
components). For agent-first work where the loop is the product, the
provider SDKs or LangGraph fit better; Haystack's strength is that the
agent *isn't* the architecture.

## The exercise

Build the three-component RAG pipeline above, then add a `Router` that
sends keyword-y questions to BM25 and semantic questions to an embedding
retriever — the exercise is noticing the branch is *wiring*, not prompt
engineering.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — the loop that becomes one component.
- [LlamaIndex: the data framework](/learn/agent-frameworks/llamaindex-data-framework) — the data-centric alternative.
- [RAG ingestion, chunking, and retrieval](/learn/rag/ingestion-chunking-and-retrieval) — the stages Haystack componentizes.
