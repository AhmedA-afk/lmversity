---
title: "pgvector: vector search inside the Postgres you already run"
track: "rag"
status: live
summary: "pgvector adds embedding columns and ANN indexes to ordinary PostgreSQL — the right answer when your vectors should live next to the data they describe, with real SQL around them."
duration: "8 min read"
sources: ["pgvector-repo"]
---

## The short answer

pgvector is a Postgres extension that adds a `vector` column type, distance
operators (`<->` L2, `<=>` cosine, `<#>` inner product), and approximate
indexes (HNSW, IVFFlat). Its pitch isn't performance leadership — it's
*colocation*: embeddings live in the same rows as the documents they
describe, queried with the same SQL, backed up with the same tooling,
and access-controlled with the same grants. For most teams the first
vector store shouldn't be a new database — it should be the database
they already run.

## The shape

```sql
CREATE EXTENSION vector;

CREATE TABLE chunks (
  id bigint PRIMARY KEY,
  doc_id text,
  content text,
  embedding vector(1536)
);

CREATE INDEX ON chunks USING hnsw (embedding vector_cosine_ops);

-- hybrid filter: ANN over a scoped subset — the pgvector sweet spot
SELECT content FROM chunks
WHERE doc_id = 'manual-2024'                -- ordinary SQL filter
ORDER BY embedding <=> $1                    -- cosine distance
LIMIT 8;
```

That `WHERE`-then-`ORDER BY embedding` pattern is the whole pitch:
metadata filtering isn't a separate API — it's just SQL.

## Where it wins and where it stops

- **Wins**: vectors beside their source data (one backup, one ACL, one
  transaction boundary), hybrid queries in plain SQL, zero new
  infrastructure, HNSW indexes good to low-millions of vectors on normal
  hardware.
- **Stops**: at scale it's still Postgres — very large corpora, very high
  QPS, or write-heavy embedding churn push toward dedicated stores (see
  [managed vector databases](/learn/rag/managed-vector-databases)).
  Filtering can also degrade ANN recall if the filter is applied after
  the index scan — scoped indexes (`CREATE INDEX ... WHERE tenant = ...`)
  are the fix for hot multi-tenant filters.

## Operations that matter

- **Access control**: it's Postgres — row-level security gives per-tenant
  retrieval scoping that dedicated stores often approximate with metadata
  filters alone. See [access-controlled retrieval](/learn/rag/access-controlled-retrieval).
- **Deletion**: `DELETE` actually deletes — important when GDPR-style
  erasure must remove embeddings, not just documents.
- **Freshness**: embeddings update in the same transaction as the content —
  no dual-write drift between your DB and your vector store
  ([incremental indexing](/learn/rag/incremental-indexing-freshness)).
- **Provenance**: `doc_id` foreign keys to source tables keep lineage in
  the same schema.
- **Evaluation**: retrieval quality doesn't change because the store is
  Postgres — the [shared-corpus benchmark](/learn/rag/benchmarking-retrieval-shared-corpus)
  still applies.

## The exercise

Index a small corpus in a `vector` column, then compare
`ORDER BY embedding <=> $1` with and without an HNSW index on explain —
seeing the index switch from seq-scan to ANN is the lesson.

## Go deeper

- [Choosing a vector database](/learn/rag/choosing-a-vector-database) — where pgvector sits in the landscape.
- [Managed vector databases](/learn/rag/managed-vector-databases) — what you graduate to.
- [Similarity search and ANN indexes](/learn/rag/similarity-search-and-ann-indexes) — the index mechanics pgvector implements.
