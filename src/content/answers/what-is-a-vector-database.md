---
title: "What is a vector database, and do you need one?"
description: "A vector database stores data as numeric vectors and finds items by meaning, not exact match; you need one mainly for semantic search or RAG at real scale."
intent: definition
updated: "2026-09-08"
featured: false
faq:
  - q: "How is a vector database different from a normal database?"
    a: "A normal database is optimized for exact lookups and filters, like finding a row where an ID matches. A vector database is optimized for similarity search: given a query vector, find the stored vectors that are closest to it in meaning, using distance metrics rather than exact matches."
  - q: "Do I need a vector database for a small project?"
    a: "Often not. For a small, static set of documents, a simple in-memory similarity search or even keyword search can work fine without the operational overhead of running a dedicated database. Vector databases earn their cost at larger scale or when you need persistence, filtering, and fast queries in production."
  - q: "What's the difference between an embedding and a vector?"
    a: "An embedding is a vector produced specifically by an embedding model to represent the meaning of a piece of text, image, or other data. Every embedding is a vector, but a vector database can technically store and search any numeric vectors, not only embeddings."
  - q: "Can a vector database do exact keyword search too?"
    a: "Many modern vector databases support hybrid search, combining vector similarity with traditional keyword or lexical search, since pure vector search alone can miss queries where an exact term match matters, like a product code or a proper noun."
related:
  - /learn/rag/choosing-a-vector-database
  - /learn/rag/embeddings-and-semantic-similarity
  - /learn/rag/hybrid-search-lexical-and-vector
  - /learn/rag/vector-db-cheatsheet
  - /learn/ai-foundations/what-embeddings-are
  - /learn/rag
---

A vector database is a database built to store numeric vectors, usually embeddings produced by a machine learning model, and to quickly find the vectors most similar to a given query vector. Instead of matching exact values like a traditional database, it finds items that are close in meaning, which is what makes it useful for semantic search and for supplying an LLM with relevant context in a RAG pipeline.

## The short version

- A vector database stores embeddings: lists of numbers that represent the meaning of a piece of text, image, or other content.
- Its core operation is similarity search: given a query vector, find the k stored vectors closest to it by some distance metric, commonly cosine similarity.
- This lets you search by meaning, not just exact words, so a query like "cancel my order" can retrieve a document about "return a purchase" even without shared keywords.
- Vector databases use approximate nearest-neighbor algorithms to make this search fast at scale, trading a small amount of accuracy for large speed gains.
- You don't always need one: for small, static datasets, simpler in-memory search or plain keyword search can do the job without the extra infrastructure.
- Most production RAG systems that operate at real scale, many documents, many users, need one; the question is which one and how to size it, not whether the general approach is useful.

## Why "search by meaning" needs a different kind of database

A traditional database (relational or document-based) is built around exact or range-based matching: find the row where `user_id = 42`, or where `price < 100`. That works when you know precisely what you're filtering for. It doesn't work for "find documents about this topic," because two relevant documents might not share a single word in common; a passage about "revenue growth" and one about "sales increased" are related in meaning but would fail any keyword match looking for one exact term.

Embeddings solve this by representing meaning as geometry: an embedding model converts a piece of text into a vector such that texts with similar meaning end up as vectors that are close together in that high-dimensional space. A vector database is purpose-built to store large numbers of these vectors and answer the question "which stored vectors are closest to this new vector" quickly, even across millions of entries. Our [Embeddings and Semantic Similarity](/learn/rag/embeddings-and-semantic-similarity) lesson and [What Embeddings Are](/learn/ai-foundations/what-embeddings-are) cover the underlying representation this all depends on.

## How the search actually works

At query time, the incoming query (a user's question, for instance) is converted into a vector using the same embedding model used to index the stored data. The database then computes how close that query vector is to the stored vectors, typically using cosine similarity or a related distance metric, and returns the top-k closest matches. Because computing exact distance to every stored vector becomes slow at large scale, most vector databases use approximate nearest-neighbor (ANN) algorithms, which trade a small amount of retrieval accuracy for a large improvement in speed, so a search over millions of vectors still returns in milliseconds.

Beyond raw similarity search, most real systems also need metadata filtering (only search within documents from a specific user or date range), and often hybrid search, combining vector similarity with traditional keyword matching, since pure semantic search can miss queries that depend on an exact term, like a product SKU or a person's name. Our [Hybrid Search: Lexical and Vector Combined](/learn/rag/hybrid-search-lexical-and-vector) lesson covers why relying on vector search alone is a common and costly mistake.

## Do you actually need one

You probably need a dedicated vector database if you're building semantic search or RAG over a document set that's large, changes frequently, or needs to support many concurrent users with fast query latency and access controls. At that point, the operational features a vector database provides, persistence, indexing, filtering, scaling, and access control, are worth the added infrastructure.

You probably don't need one if your document set is small and mostly static, in which case computing similarity in memory at query time, or even just using keyword search, is simpler and has far less operational overhead. Standing up and maintaining a vector database for a handful of documents is usually solving a problem you don't have yet. Our [Choosing a Vector Database](/learn/rag/choosing-a-vector-database) lesson and its accompanying [Vector DB Cheatsheet](/learn/rag/vector-db-cheatsheet) go through this decision along with the practical tradeoffs (managed versus self-hosted, cost at different scales, feature differences) between specific options, and the [Common Mistakes](/learn/rag/vector-db-common-mistakes) lesson covers the ways teams get this decision wrong in both directions.

## Where LMVersity fits

Vector databases are covered as part of LMVersity's [RAG track](/learn/rag), alongside embeddings, chunking, hybrid search, and evaluation, since a vector database is rarely used in isolation, it's one component of a retrieval pipeline. The track includes a worked example on [sizing a vector DB for 5 million vectors](/learn/rag/vector-db-worked-example) if you want the concrete arithmetic behind a real sizing decision. It's free and self-paced, with no certificate attached.

## Go deeper

- [Choosing a Vector Database](/learn/rag/choosing-a-vector-database) — the practical decision, with real tradeoffs named.
- [Embeddings and Semantic Similarity](/learn/rag/embeddings-and-semantic-similarity) — the representation a vector database searches over.
- [Hybrid Search: Lexical and Vector Combined](/learn/rag/hybrid-search-lexical-and-vector) — why pure vector search often isn't enough on its own.
- [Vector DB Cheatsheet](/learn/rag/vector-db-cheatsheet) — a quick reference for the decision and the terminology.
- [What Embeddings Are](/learn/ai-foundations/what-embeddings-are) — the foundational concept a vector database is built around.
- [RAG track](/learn/rag) — the full track this fits into, from ingestion to evaluation.
