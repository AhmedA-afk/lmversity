---
title: "Elasticsearch, OpenSearch, Vespa: the search-engine lineage"
track: "rag"
status: live
summary: "Elasticsearch, OpenSearch, and Vespa grew vector search inside mature lexical-search engines — the pick when hybrid retrieval is the default and your corpus already lives in a search index."
duration: "8 min read"
sources: ["elasticsearch-dense-vector-docs", "vespa-docs"]
---

## The short answer

The search-engine lineage added vectors to engines built for BM25:
**Elasticsearch** and **OpenSearch** (the same family, different
licenses/governance) offer `dense_vector` fields with kNN/ANN queries
alongside their lexical stack; **Vespa** is the ranking specialist —
vector + lexical + learned ranking phases in one engine. Their pitch over
dedicated vector stores: **hybrid retrieval is the native mode**, not a
feature — lexical, vector, filtering, faceting, and ranking compose in
one query engine that's been doing text search for years.

## The shapes

```json
// Elasticsearch/OpenSearch: dense_vector field + kNN query
{
  "mappings": { "properties": {
    "embedding": { "type": "dense_vector", "dims": 1536, "index": true,
                   "similarity": "cosine" } } }
}
// query: knn clause + bool filter + BM25 must-clause, one request
```

- **Elasticsearch / OpenSearch** — vectors as a field type inside the
  engine you may already run for logs/search. `knn` queries combine with
  `bool` filters and lexical clauses natively — the cleanest path to
  [hybrid search](/learn/rag/hybrid-search-lexical-and-vector) when the
  corpus already lives there. The catch is the same as pgvector's: it's
  still your general-purpose cluster, so very large vector workloads
  compete with everything else on it.
- **Vespa** — the ranking engine: multi-phase ranking (cheap ANN
  retrieval → expensive learned re-ranking), tensors as a first-class
  type, content distribution built in. It's the specialist pick for
  large-scale, latency-sensitive, ranking-heavy applications — and the
  steepest learning curve of the stores in this track. Vespa's strength
  is also its cost: you're adopting a ranking system, not bolting vectors
  onto something familiar.

## Where they fit

- **Pick the search-engine stores when** hybrid is the default (most
  production RAG is — see
  [hybrid search common mistakes](/learn/rag/hybrid-search-common-mistakes)),
  when filtering/faceting matter as much as similarity, or when the corpus
  already lives in one.
- **Pick a dedicated vector store when** retrieval is purely semantic and
  you want the store shaped around vectors
  ([managed vector databases](/learn/rag/managed-vector-databases)).
- **Vespa specifically** when learned ranking at scale is the requirement
  and you can afford the platform investment.

## Operations that matter

- **Access control**: ES/OS have mature document-level security and
  index-per-tenant patterns; verify your license/deployment actually has
  the feature — open-source tiers differ.
- **Deletion**: document deletes propagate to vector fields; ES's
  soft-delete/merge model means physical removal lags logical — know the
  difference for erasure requirements.
- **Freshness**: near-real-time indexing is the engine's design center —
  a genuine edge over batch-oriented stores.
- **Provenance**: the document model *is* your record — source fields live
  beside the vector field natively.
- **Evaluation**: hybrid pipelines have more moving parts to get wrong —
  benchmark the full pipeline on a
  [shared corpus](/learn/rag/benchmarking-retrieval-shared-corpus), not
  just the kNN clause.

## The exercise

Run one query three ways on the same corpus — pure kNN, pure BM25, and
hybrid — in an ES/OS index. Watching recall shift across query types is
why hybrid is the production default.

## Go deeper

- [Hybrid search, lexical and vector](/learn/rag/hybrid-search-lexical-and-vector) — the mode these engines make native.
- [Managed vector databases](/learn/rag/managed-vector-databases) — the vector-first alternative.
- [Reranking retrieved results](/learn/rag/reranking-retrieved-results) — Vespa's second phase as a pattern.
