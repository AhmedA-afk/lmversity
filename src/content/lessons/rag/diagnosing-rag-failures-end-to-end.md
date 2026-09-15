---
title: "Diagnose a RAG failure from ingestion to synthesis"
track: "rag"
status: live
summary: "Trace a wrong RAG answer backward through synthesis, retrieval, chunking, and ingestion to find which stage actually failed — most 'RAG bugs' are diagnosed at the wrong stage."
duration: "12 min read"
---

## The short answer

A wrong RAG answer has four candidate culprits — synthesis, retrieval, chunking, ingestion — and they fail differently. The diagnostic method is to work backward from the answer, checking each stage's actual output, not assuming. Most "the model hallucinated" reports turn out to be "the right chunk was never retrieved" — a retrieval bug wearing a generation costume.

## Why this matters

Teams debug the visible failure — the bad answer — by editing the prompt or swapping the model, when the actual fault is three stages upstream: the source document never made it into the index, or got chunked mid-table. Working backward with evidence at each stage is faster than fixing the wrong stage repeatedly.

## The pipeline, as places to look

```text
Ingestion → Chunking → Retrieval → Synthesis → Answer
(what's in    (how it's      (what comes    (what the model   (what the
 the index)    split)         back)          sees + writes)    user gets)
```

## The backward trace

**1. Start at the answer.** Get the exact wrong answer and the exact retrieved context that produced it — not a similar query, the actual recorded call. If you can't replay the call, you can't diagnose it.

**2. Check synthesis.** Read the retrieved chunks. If the correct answer is *in* them and the model still answered wrong, you have a synthesis problem — the fix is the prompt, the grounding instruction, or the model. This is the only stage where "the model hallucinated" is the true diagnosis.

**3. Check retrieval.** The right information exists in your corpus but wasn't in the returned chunks — a retrieval failure. Now ask *why*: wrong query formulation, missing keywords, embedding mismatch, a filter that excluded the document? Check whether the chunk containing the answer would have ranked if retrieved — query it directly.

**4. Check chunking.** The document is in the index, but the answer is split across a chunk boundary — a table cut in half, a definition severed from its qualifier. Reconstruct the source text and look at how it was split. A chunk that can't answer the question alone can't be retrieved meaningfully either.

**5. Check ingestion.** The document never made it in — a parse failure, a skipped file type, a permission filter, a stale index. The corpus simply doesn't contain the answer. Verify the document exists in the index and its text extracted cleanly.

## The tell-tale at each stage

| Stage | The tell | First fix |
| --- | --- | --- |
| Synthesis | Answer is in retrieved chunks, model ignored it | Grounding prompt / model choice |
| Retrieval | Right chunk exists in corpus, wasn't returned | Query rewriting, hybrid search, rerank |
| Chunking | Answer is split across a boundary | Chunk size/overlap, structure-aware splitting |
| Ingestion | Document isn't in the index at all | Parse coverage, freshness, permissions |

## The instrumentation that makes this possible

You can only run this trace if each stage logs its output: what was ingested and when, how each document chunked, what retrieval returned with scores, what the model received and wrote. A RAG system without stage-level logging is not debuggable — it is a black box that occasionally lies.

## The lab version

Take one real wrong answer from your logs. Run the trace. Write down which stage failed and the evidence that proves it — "the retrieved chunks never contained the figure" is a finding; "the model is bad" is not.

## Go deeper

- [Evaluating RAG, worked](/learn/rag/rag-eval-worked-example) — building the golden set that catches these failures systematically.
- [Chunking strategies compared](/learn/rag/chunking-strategies-compared) — the stage where a wrong answer is often born.
- [Incremental indexing and freshness](/learn/rag/incremental-indexing-freshness) — when the cause is "the index is just old".
