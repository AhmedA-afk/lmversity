---
title: "What is RAG (retrieval-augmented generation)?"
description: "RAG (retrieval-augmented generation) retrieves relevant documents at query time and feeds them into an LLM's prompt so it can answer with current information."
intent: definition
updated: "2026-09-08"
featured: true
faq:
  - q: "Does RAG stop an LLM from hallucinating?"
    a: "It reduces but does not eliminate hallucination. RAG gives the model relevant text to ground its answer in, but the model can still ignore that text, misread it, or blend it with unsupported claims, so RAG systems still need evaluation and grounding checks."
  - q: "Is RAG the same as fine-tuning?"
    a: "No. Fine-tuning changes the model's weights using additional training; RAG leaves the model unchanged and instead supplies relevant information in the prompt at answer time. They solve different problems and can be combined."
  - q: "Do I need a vector database to build RAG?"
    a: "Not always. A vector database is the common choice for finding relevant documents by meaning rather than exact keywords, but simpler approaches like keyword search or filtering a small dataset can work for smaller or well-structured document sets."
  - q: "When is RAG the wrong tool?"
    a: "RAG adds complexity that isn't worth it for small, static amounts of context that fit directly in a prompt, for tasks that don't depend on external documents at all, or in some cases where a long context window can hold everything the model needs already."
related:
  - /learn/rag
  - /learn/rag/quick-guide
  - /learn/rag/what-is-rag-and-when-to-use-it
  - /learn/rag/building-a-rag-pipeline-end-to-end
  - /learn/rag/choosing-a-vector-database
  - /guides/build-a-rag-pipeline-over-your-own-documents
---

Retrieval-augmented generation (RAG) is a technique where, before an LLM answers a question, a system first retrieves relevant documents or passages from an external source, then inserts that retrieved text into the model's prompt. The model then generates its answer grounded in that retrieved material, instead of relying only on what it memorized during training.

## The short version

- RAG has two stages: retrieval (find relevant text) and generation (have the LLM answer using that text).
- It lets an LLM answer questions about information it was never trained on: private company documents, information published after training, or anything too specific to have been memorized.
- Retrieval commonly uses a vector database and semantic search, finding passages that are conceptually similar to the question, not just ones sharing exact keywords.
- RAG does not change the model itself; the same base model is reused, only the prompt content changes per query.
- It reduces hallucination by giving the model something concrete to ground its answer in, but it does not guarantee the model uses that grounding correctly.
- RAG is one of three main options for adapting an LLM's behavior to your data, alongside a longer prompt and fine-tuning; which one fits depends on the situation.

## Why RAG exists

An LLM's knowledge is frozen at whatever point its training data was collected, and it has no access to anything outside that training data unless the information is provided directly. That's a problem for two very common needs: answering questions about information that changes constantly (a company's current policies, prices, or product catalog) and answering questions about information that was never public (internal documents, a specific codebase, a customer's own files). Fine-tuning the model on this information is one option, but it's expensive, has to be redone every time the underlying information changes, and doesn't reliably teach a model new facts the way it teaches style or format. RAG sidesteps this: instead of baking information into the model's weights, it fetches the relevant information fresh, every time a question is asked, and hands it to the model as part of the prompt.

## How a RAG pipeline actually works

A typical RAG system has these stages:

1. **Ingestion**: source documents (PDFs, web pages, internal wikis, support tickets) are split into smaller chunks, since a whole document is usually too long to search or retrieve efficiently.
2. **Embedding**: each chunk is converted into a vector, a list of numbers capturing its meaning, using an embedding model.
3. **Indexing**: these vectors are stored in a vector database (or a hybrid index combining vector and keyword search), built for fast similarity search.
4. **Retrieval**: when a user asks a question, the question itself is embedded the same way, and the system finds the chunks whose vectors are most similar, meaning most semantically related to the question.
5. **Augmentation**: the retrieved chunks are inserted into the prompt sent to the LLM, along with the original question and instructions on how to use the retrieved material.
6. **Generation**: the LLM produces an answer using both its general language ability and the specific retrieved content.

Our [Building a RAG Pipeline End to End](/learn/rag/building-a-rag-pipeline-end-to-end) lesson walks through all six stages with a concrete worked example, and [RAG, End to End: The Whole Game](/learn/rag/rag-whole-game) ties the whole pipeline together as a single system rather than isolated steps.

## What RAG solves, and what it doesn't

RAG is well-suited to question answering over a specific corpus, customer support over a knowledge base, search over internal documentation, and chatbots that need to cite current or private information. It's usually cheaper and faster to update than fine-tuning, since adding new information just means adding new documents to the index, not retraining anything.

RAG does not automatically make an LLM's answers correct. The model can still misread retrieved text, blend it with unsupported claims, or ignore it entirely and answer from its own prior knowledge instead, a failure that's sometimes worse than not having RAG at all because the answer looks well-sourced when it isn't. Retrieval itself can also fail: it might miss the actually relevant passage, or return several passages, none of which contain the answer. Our [Why RAG Still Hallucinates](/learn/hallucinations/why-rag-still-hallucinates) lesson covers this failure mode directly, and [RAG Is Not a Truth Machine](/blog/rag-is-not-a-truth-machine) makes the same point in plainer terms. Evaluating a RAG system, not just building one, is its own skill; see [Evaluating RAG Quality](/learn/rag/evaluating-rag-quality) for how that's actually done.

RAG is also not always the right tool. For small amounts of static reference material, it's often simpler to put the material directly in the prompt. For behavior changes, like getting a model to consistently write in a specific style or follow a specific output format, fine-tuning or careful prompting usually works better than RAG, since RAG is aimed at supplying facts, not shaping style. Our [Fine-Tune, Prompt, or RAG?](/guides/rag-fine-tuning-or-a-longer-prompt) guide and [When RAG Is the Wrong Tool](/learn/rag/when-rag-is-the-wrong-tool) lesson both cover this decision directly, and [When Long Context Beats RAG](/learn/context-engineering/when-long-context-beats-rag) covers the case where a large context window can substitute for retrieval altogether.

## Where LMVersity fits

RAG is a full track on LMVersity, not a single lesson: the [RAG track](/learn/rag) covers embeddings and similarity, choosing and sizing a vector database, chunking and ingestion, hybrid search, evaluation, and more advanced patterns like agentic and corrective RAG, each with worked examples and a cheatsheet. It's free, hands-on, and self-paced, with no certificate attached; if you'd rather build first and read theory second, the [Build a RAG Pipeline Over Your Own Documents](/guides/build-a-rag-pipeline-over-your-own-documents) guide is the direct, practical entry point.

## Go deeper

- [RAG track](/learn/rag) — the full track, from embeddings to evaluation to advanced retrieval patterns.
- [RAG in 10 minutes](/learn/rag/quick-guide) — a fast overview of the whole pipeline.
- [What Is RAG and When to Use It](/learn/rag/what-is-rag-and-when-to-use-it) — a longer treatment of the decision to use RAG at all.
- [Building a RAG Pipeline End to End](/learn/rag/building-a-rag-pipeline-end-to-end) — the concrete, worked build.
- [Choosing a Vector Database](/learn/rag/choosing-a-vector-database) — the retrieval infrastructure decision most teams face next.
- [Build a RAG Pipeline Over Your Own Documents](/guides/build-a-rag-pipeline-over-your-own-documents) — a hands-on guide for building one yourself.
