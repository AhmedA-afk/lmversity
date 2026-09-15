---
title: "Chroma, LanceDB, Redis: embedded and in-process vector stores"
track: "rag"
status: live
summary: "Embedded vector stores run inside your process — Chroma for local learning, LanceDB for columnar files on disk, Redis for vectors beside your cache — no server to deploy, different ops surface entirely."
duration: "8 min read"
sources: ["chroma-docs", "lancedb-docs"]
---

## The short answer

Not every vector store is a server. **Chroma** runs embedded or as a light
local service — the friendly first store for learning RAG. **LanceDB**
stores vectors in the Lance columnar format on disk or object storage —
embedded, file-based, and strong for analytics-shaped workloads.
**Redis** adds vector search to the cache you may already run — vectors
beside your existing data plane. The pitch of all three is the same: the
index lives where your code lives, so there's nothing to deploy, nothing
to network to, and (mostly) nothing new to operate.

## The three shapes

```python
# Chroma — embedded or local server; the learning-first store
import chromadb
client = chromadb.PersistentClient(path="./chroma_db")
coll = client.get_or_create_collection("docs")
coll.add(ids=ids, embeddings=embs, documents=docs)
coll.query(query_embeddings=[q], n_results=8)

# LanceDB — embedded, columnar files; scales to object storage
import lancedb
db = lancedb.connect("./lancedb")
table = db.create_table("docs", data=[{"vector": v, "text": t} for v, t in rows])
table.search(query_vec).limit(8).to_list()
```

- **Chroma** — the teaching store: persistent or in-memory, simple API,
  the default in a thousand tutorials. Honest scope: learning and small
  apps, not a production-scale answer.
- **LanceDB** — the file-format store: vectors+payload in Lance columnar
  files; embedded in-process or on S3-compatible storage, with
  vector+full-text+SQL-style filtering. Fits analytics and
  embedded-in-app deployments where a server is wrong.
- **Redis** — the "already there" store: `FT.SEARCH` with vector similarity
  (HNSW/flat) on hashes/JSON next to your cache data. Wins when Redis is
  already deployed and the corpus is modest; loses when the workload is
  retrieval-first at scale.

## Where embedded stores fit

- **Chroma/LanceDB** — local development, notebooks, desktop apps, edge
  deployments, small-to-mid corpora where a server is overkill. LanceDB
  stretches further: columnar storage + object-store backends scale
  without a running DB.
- **Redis** — when the store you already operate should also answer
  "nearest neighbors," not when retrieval is the product.
- **None of these** — high-QPS multi-tenant serving, which is the
  [managed stores](/learn/rag/managed-vector-databases)' job.

## Operations that matter

- **Access control**: embedded = your app's problem — there's no store-
  level ACL, so row/tenant scoping is a metadata filter you enforce
  ([access-controlled retrieval](/learn/rag/access-controlled-retrieval)).
- **Deletion**: file/embedded stores delete when you say so — but check
  compaction semantics (LanceDB) and memory persistence (Redis snapshots)
  before promising erasure.
- **Freshness**: embedded writes are immediately visible — no replication
  lag, which is a real advantage over distributed stores.
- **Provenance**: same rule as everywhere — source URIs in payload from
  day one.
- **Evaluation**: the [shared-corpus benchmark](/learn/rag/benchmarking-retrieval-shared-corpus)
  works identically — embedded stores are the easiest to benchmark
  because the corpus sits next to the index.

## The exercise

Run the same corpus through Chroma embedded and a server-backed store —
the lesson is noticing the API barely changes while the operational
surface (deploy, secure, monitor, upgrade) disappears entirely.

## Go deeper

- [pgvector in Postgres](/learn/rag/pgvector-in-postgres) — the other "don't add infrastructure" answer.
- [Managed vector databases](/learn/rag/managed-vector-databases) — what serving real traffic takes.
- [Choosing a vector database](/learn/rag/choosing-a-vector-database) — the decision framework.
