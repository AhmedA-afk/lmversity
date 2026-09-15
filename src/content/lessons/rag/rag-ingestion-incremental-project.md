---
title: "Project: RAG Ingestion With Incremental Updates and Access Control"
track: "rag"
status: live
summary: "Build the ingestion side nobody demos: incremental re-indexing without downtime, and retrieval that respects who may see what."
duration: "25 min read"
---

Every RAG tutorial indexes a folder once. Production ingestion is a different problem: documents change, deletions must propagate, reindexing cannot take search down, and some users may not see some documents. This project builds that pipeline — the part that determines whether your RAG system stays correct next month.

## The brief

Build an ingestion service that maintains a searchable index over a mutable document set: it accepts new, changed, and deleted documents; applies incremental updates without a full rebuild; and enforces per-document access control at retrieval time — not just at query time filtering, but index-level scoping where the threat model needs it.

## Prerequisites

- [Building a RAG pipeline end to end](/learn/rag/building-a-rag-pipeline-end-to-end) — the happy path this project hardens
- [Incremental indexing and freshness](/learn/rag/incremental-indexing-freshness) — the update strategies
- [Access-controlled retrieval](/learn/rag/access-controlled-retrieval) — the permission models

## Supplied assets and mock mode

Run entirely local: SQLite/Postgres + pgvector, an embedded store, or even a flat-file index — the design is what matters. A "document set" is a directory of markdown you mutate between runs. No paid API is required: deterministic fake embeddings (hashing, TF-IDF) make every test reproducible. If you use a real embedding provider, abstract it behind a function so tests never call it.

## Acceptance criteria

- [ ] Adding a document makes it searchable without reindexing the corpus — measured, not assumed (log the number of embeddings written on an incremental run vs a full rebuild)
- [ ] Editing a document removes the old chunks — a query that matched the old content stops matching after update
- [ ] Deleting a document removes it from results within a stated freshness bound, and a test proves it
- [ ] Reindexing runs alongside the live index — queries during a rebuild return results from the previous generation, never a partial index
- [ ] Two users with different document scopes get different results on the same query — access control is exercised in a test, not described in a comment
- [ ] A malformed document (binary junk, encoding garbage) fails ingestion loudly and is quarantined — it does not silently skip or silently index garbage

## Failure injection (required)

- [ ] Kill the process mid-reindex; the old index keeps serving and the rebuild resumes or restarts cleanly
- [ ] Feed a document that embeds to NaN / fails embedding; it lands in a dead-letter path with an alert, not a half-indexed state
- [ ] Replay a duplicate "document updated" event; the index converges to the same state (idempotent upsert)

## Milestones

1. **One-shot indexing** — the tutorial version, working end to end.
2. **Change detection** — content-hash the documents; only changed files re-embed. Show the skip count.
3. **Generational rebuild** — two index generations with an atomic pointer flip; the old generation serves until the new one is complete.
4. **Access scoping** — per-document ACLs joined at query time, with the two-user test.
5. **The failure matrix** — the three injected failures, each with a log line proving the system noticed.

## What good looks like

The runbook answers "a document was deleted an hour ago, why can search still see it?" with the freshness bound and where to look. The index rebuild is boring — it runs next to production and flips a pointer. Access control has a test that would fail if you removed it, and the eval fixture from [the embedding-search lab](/learn/rag/embedding-search-eval-lab) still passes after every change.

## For your portfolio

Show the incremental-vs-full rebuild log lines and the two-user test — those two artifacts demonstrate the production instinct. Never present "it indexes files" as the achievement.

## Defend this build

1. A deleted document stayed searchable for 40 minutes — walk your system's path for that deletion and say whether it met your stated bound.
2. Your access control is enforced at which layer — and what query would bypass it?
3. Mid-rebuild, a user queries and a document changed during the run — which generation answers, and is that acceptable?
4. What breaks first at 10× document count, and how would you know before users do?

The pass bar: each answer names a mechanism in your pipeline — the hash, the generation pointer, the ACL join — not a promise about how it should behave.

**Related:** [Incremental indexing and freshness](/learn/rag/incremental-indexing-freshness), [Access-controlled retrieval](/learn/rag/access-controlled-retrieval), [Diagnosing RAG failures end to end](/learn/rag/diagnosing-rag-failures-end-to-end)
