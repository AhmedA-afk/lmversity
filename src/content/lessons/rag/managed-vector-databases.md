---
title: "Pinecone, Weaviate, Qdrant, Milvus: the dedicated vector databases"
track: "rag"
status: live
summary: "The dedicated vector stores compared by what actually differs — deployment model, filtering, hybrid search, and ops burden — because index benchmarks from vendors are not a basis for choosing."
duration: "9 min read"
sources: ["pinecone-docs", "weaviate-docs", "qdrant-docs", "milvus-docs"]
---

## The short answer

Four dedicated vector databases cover most "we outgrew
[pgvector](/learn/rag/pgvector-in-postgres)" conversations: **Pinecone**
(fully managed, SaaS-only), **Weaviate** (open-source, managed or
self-hosted, module-rich), **Qdrant** (Rust, self-host or cloud,
payload-filtering focus), **Milvus** (the scale specialist, self-host or
Zilliz Cloud). They differ less on "can it do ANN" — all can — and more on
*who runs it, how filtering works, and what surrounds the index*.

## The honest comparison axes

- **Pinecone** — the least-ops option: serverless pricing, namespaces for
  multi-tenancy, metadata filters, and nothing to host. The trade: SaaS-only,
  proprietary, and your vectors live in someone else's infrastructure —
  a real consideration for [privacy-sensitive corpora](/learn/rag/access-controlled-retrieval).
- **Weaviate** — the batteries-included open-source store: built-in
  vectorizer modules (embed on ingest via provider integrations), hybrid
  BM25+vector search native to the query language, GraphQL/REST surface.
  More features mean more system to learn — and to operate if self-hosted.
- **Qdrant** — the pragmatic middle: Rust engine, strong
  payload/filtering model (filters are first-class, evaluated during ANN
  traversal), simple Docker self-hosting, a managed cloud, and a clean
  API. Often the pick when you want dedicated-store filtering without a
  heavy platform.
- **Milvus / Zilliz** — the scale answer: built for very large corpora and
  distributed deployments, GPU-aware indexing, multiple index types.
  Self-hosting is the heaviest of the four (real distributed system);
  Zilliz Cloud is the managed path.

## What they share

All four give you: HNSW-class ANN indexes, metadata filtering, namespaces/
collections for tenant separation, upsert/delete APIs, and hybrid-search
support (native or via companion retrieval). None of them chooses your
chunking, your embedding model, or your eval — those decisions move with
you across stores, which is why the
[shared-corpus benchmark](/learn/rag/benchmarking-retrieval-shared-corpus)
matters more than vendor benchmarks.

## Operations that matter

- **Access control**: namespaces/collections + filtered queries are the
  mechanism; dedicated stores approximate Postgres RLS, they don't replace
  it. Test tenant isolation, don't assume it.
- **Deletion**: all support per-ID deletes; check *consistency timing* —
  some stores make deleted vectors invisible to queries before the index
  physically removes them, which is what erasure compliance actually needs.
- **Freshness**: upserts are the unit; watch for eventually-consistent
  index visibility windows (a write that's not yet searchable).
- **Provenance**: store `doc_id`/source URIs as payload fields from day
  one — retrofitting lineage into a vector DB is painful.
- **Evaluation**: swap the store, keep the benchmark — retrieval quality
  is measurable on your corpus regardless of backend.

## The exercise

Load the same labeled corpus into two of these (or one vs pgvector) and
run the [shared-corpus benchmark](/learn/rag/benchmarking-retrieval-shared-corpus) —
the measured recall/latency diff on *your* data is the only comparison that
isn't marketing.

## Go deeper

- [pgvector in Postgres](/learn/rag/pgvector-in-postgres) — what these replace and when not to.
- [Embedded and local vector stores](/learn/rag/embedded-vector-stores) — the other end of the spectrum.
- [Hybrid search, lexical and vector](/learn/rag/hybrid-search-lexical-and-vector) — the retrieval mode several of these build in.
