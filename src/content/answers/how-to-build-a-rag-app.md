---
title: "How to build a RAG app, step by step (and where it breaks)"
description: "How to build a RAG app: chunk and embed documents, retrieve with vector or hybrid search, ground generation, evaluate it, and where RAG commonly breaks."
intent: howto
updated: "2026-09-08"
featured: false
faq:
  - q: "What does RAG stand for and what does it do?"
    a: "RAG stands for retrieval-augmented generation. Instead of relying only on what a model learned during training, it retrieves relevant text from your own documents at query time and includes it in the prompt so the model can ground its answer in that evidence."
  - q: "Do I need a vector database to build a RAG app?"
    a: "Not always. A vector database helps once you have enough documents that brute-force search is too slow, or you need filtering and metadata at scale. Small corpora can start with a simple in-memory or keyword search and add vector search later."
  - q: "Why does my RAG app still hallucinate?"
    a: "Usually because retrieval returned the wrong or incomplete evidence, the prompt didn't force the model to stick to that evidence, or the question needs reasoning across multiple documents that simple top-k retrieval doesn't support. Retrieval quality, not the generation model, is the most common cause."
  - q: "What is the difference between RAG and fine-tuning?"
    a: "RAG adds external knowledge at query time without changing the model's weights, which suits fast-changing or large knowledge bases. Fine-tuning changes the model's behavior or style through training examples. Many production systems that need current facts use RAG, or RAG and fine-tuning together."
  - q: "How do I evaluate a RAG app?"
    a: "Build a golden set of questions with known correct answers or source passages, then measure retrieval quality, whether it fetched the right chunks, separately from generation quality, whether it answered faithfully to what was retrieved, rather than judging the final answer alone."
related:
  - /learn/rag
  - /learn/rag/what-is-rag-and-when-to-use-it
  - /learn/rag/building-a-rag-pipeline-end-to-end
  - /learn/rag/evaluating-rag-quality
  - /guides/build-a-rag-pipeline-over-your-own-documents
  - /interview/rag
---

A RAG app retrieves relevant passages from your own documents at query time and feeds them to an LLM alongside the user's question, so the answer is grounded in real evidence instead of only what the model memorized. Build it by chunking documents, embedding and indexing them, retrieving the top matches per query, and prompting the model to answer using only that retrieved context.

## The short version

- RAG has two halves that fail differently: retrieval, whether you fetched the right evidence, and generation, whether the model used it faithfully. Diagnose them separately.
- Chunk documents to a size that keeps ideas intact. Too small loses context; too large dilutes relevance and wastes tokens.
- Start with a simple pipeline, chunk, embed, vector search, prompt with results, before adding hybrid search, reranking, or multi-hop retrieval.
- A vector database is a scaling decision, not a starting requirement. Small corpora don't need one on day one.
- Build a golden evaluation set before you ship, and re-run it every time you change chunking, the embedding model, or the prompt.
- RAG is not a truth machine. It reduces hallucination on facts present in your corpus; it does not eliminate it.

## The pipeline, end to end

A RAG pipeline has seven steps in practice. First, ingest and parse your documents, whether PDF, HTML, or plain text; parsing quality is an underrated failure point, especially for tables and scanned files. Second, chunk the parsed text into passages sized to hold one coherent idea, usually with some overlap between chunks so an idea split across a boundary isn't lost entirely. Third, embed each chunk into a vector using an embedding model. Fourth, index the vectors, along with the raw text and any metadata you'll want to filter on, so they can be searched. Fifth, at query time, embed the user's question and retrieve the top-k most similar chunks, either through vector search alone or combined with lexical search. Sixth, assemble a prompt that includes the retrieved chunks and instructs the model to answer from them, ideally with citations back to the source. Seventh, generate the answer, and for higher-stakes use cases, check the answer against the retrieved evidence before showing it to the user.

## Chunking and embeddings, practically

Chunk size is a real trade-off, not a detail to skip past. Chunks that are too short lose surrounding context that would help the model interpret them correctly; chunks that are too long dilute the specific passage that answers the question and waste context budget on irrelevant text. A common starting point is chunking by semantic unit, such as a paragraph or section, with a small overlap between consecutive chunks, then adjusting based on what your evaluation set shows. Choose an embedding model based on your domain and the length of text you're embedding; a model tuned for short queries and passages behaves differently from one built for long documents.

## Retrieval: vector, hybrid, and beyond

Vector search alone captures semantic similarity well but misses exact terms, such as product codes, names, or acronyms, that a user's query and the right document both contain verbatim. Hybrid search, combining lexical (keyword) search with vector search, catches these cases that pure vector similarity misses. Beyond that, reranking a larger initial candidate set down to the final top-k with a more expensive model can meaningfully improve precision, and metadata filtering lets you scope retrieval by things like document date, source, or the requesting user's permissions. Questions that require synthesizing information across several documents need more than a single top-k retrieval step; agentic or multi-hop retrieval patterns, where the system retrieves, reasons, and retrieves again, exist for exactly this case.

## Grounding the generation step

Retrieval alone doesn't guarantee a faithful answer. The prompt has to instruct the model explicitly to answer only using the provided context, to cite which passage supports each claim, and to say it doesn't know rather than guess when the retrieved context doesn't contain the answer. More advanced patterns grade the retrieved evidence before generating, checking whether what was retrieved is actually relevant and sufficient, and re-retrieving or falling back to a different strategy when it isn't.

## Where RAG breaks

The most common failure points, in rough order of how often they show up: chunking that splits an idea mid-sentence or mid-table; retrieval that misses the right passage because the embedding model doesn't capture domain vocabulary well, or because top-k is set too small; a stale index, where source documents changed but the index wasn't rebuilt; access control that isn't enforced at retrieval time, so a user can see passages from documents they shouldn't; and questions that need multi-document synthesis that simple top-k retrieval structurally cannot provide. The broader mistake underneath many of these is treating RAG as a hallucination cure rather than a way to reduce it for facts that are actually present in your corpus and correctly retrieved.

## Cost, caching, and structured or multimodal sources

Once a RAG app has real traffic, the cost and latency of embedding, retrieving, and generating on every query becomes its own design problem. Caching retrieval results and generations for repeated or similar queries can cut both cost and latency meaningfully, especially for common questions in a support or documentation setting. Not every corpus is plain text either: tables, spreadsheets, and structured data need their own retrieval approach rather than being force-fit into the same chunk-and-embed pipeline built for prose, and scanned documents or images need parsing and, for genuinely visual content, multimodal retrieval rather than text-only embeddings.

## Evaluating before you ship

Build a golden set of realistic questions, each with a known correct answer or the specific source passage that should have been retrieved. Score retrieval and generation as separate numbers: retrieval precision and recall measure whether the right chunks came back at all, and faithfulness and correctness measure whether the generated answer actually reflects what was retrieved. Re-run this evaluation every time you change chunking strategy, the embedding model, the retrieval method, or the prompt, since any of those can move the numbers in either direction without it being obvious from a handful of manual checks.

## A note on access control

If your documents don't all belong to the same audience, retrieval has to respect that from the start rather than being bolted on afterward. A system that retrieves across an entire corpus and only checks permissions when displaying the final answer can still leak information through the retrieved context itself, since a model can reference or paraphrase a passage it was never supposed to see. Filtering by the requesting user's permissions at retrieval time, not just at display time, is the safer default for any document Q&A system with more than one class of user.

## Where LMVersity fits

LMVersity's free RAG track walks through the whole pipeline in the order above, from ingestion through evaluation, including hybrid search, reranking, and the failure modes covered here, alongside a hands-on guide to building a RAG pipeline over your own documents. It's free, structured, and has no certificate.

## Go deeper

- [/learn/rag](/learn/rag) — the RAG track overview
- [/learn/rag/what-is-rag-and-when-to-use-it](/learn/rag/what-is-rag-and-when-to-use-it) — when RAG is, and isn't, the right tool
- [/learn/rag/building-a-rag-pipeline-end-to-end](/learn/rag/building-a-rag-pipeline-end-to-end) — the full pipeline in one lesson
- [/learn/rag/hybrid-search-lexical-and-vector](/learn/rag/hybrid-search-lexical-and-vector) — combining lexical and vector search
- [/learn/rag/evaluating-rag-quality](/learn/rag/evaluating-rag-quality) — building the evaluation half of the system
- [/guides/build-a-rag-pipeline-over-your-own-documents](/guides/build-a-rag-pipeline-over-your-own-documents) — a hands-on guide
- [/blog/rag-is-not-a-truth-machine](/blog/rag-is-not-a-truth-machine) — why RAG reduces but doesn't eliminate hallucination
- [/interview/rag](/interview/rag) — RAG interview questions if you're prepping to discuss this
