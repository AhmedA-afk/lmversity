---
title: "Cross-lingual retrieval and multilingual embeddings"
track: "multilingual-ai"
status: live
summary: "Build retrieval that works when queries and documents are in different languages — multilingual embeddings, query translation, document translation, and hybrid scoring."
duration: "12 min read"
sources:
  - mteb-leaderboard
---

Your knowledge base is in English; your users ask in Tamil. Or your documents span five languages and queries come in a sixth. Cross-lingual information retrieval (CLIR) is the RAG problem where language, not just relevance, determines what gets found.

## The four architectures

**1. Multilingual embedding space.** Encode queries and documents with a single multilingual embedding model; related text lands nearby regardless of language. The clean path — one index, one retrieval call. Check per-language performance on the [MTEB leaderboard](https://huggingface.co/spaces/mteb/leaderboard) before choosing; "multilingual" models vary enormously between high-resource and low-resource languages, and English scores do not transfer.

**2. Query translation.** Translate the incoming query to the document language, retrieve with a strong monolingual system. Works well when documents are one language and the translator is reliable — but a bad translation of the query poisons retrieval silently, and you pay a translation call per query.

**3. Document translation.** Pre-translate the corpus into each query language (or one pivot). Best recall quality per language; worst storage and freshness cost — every document update re-fans out across languages.

**4. Hybrid.** Multilingual-embed everything *and* keep a translated English copy of each document; merge candidates from both indexes, then let a multilingual-aware reranker (see [Rerankers in practice](/learn/rag/rerankers-in-practice)) decide. More moving parts, best recall — worth it when retrieval quality is the product bottleneck.

## Failure modes to test

- **Named entities.** Proper nouns transliterate unpredictably — a Tamil query for a Bangalore street name may not match its English spelling. Entity-aware indexing (store multiple script/romanization forms) often matters more than the embedding model.
- **Code-mixed queries.** "Mutual fund mein tax benefit" needs retrieval over both English and Hindi vocabulary. Multilingual embedding spaces handle this naturally; translation pipelines break on it.
- **Asymmetric quality.** A multilingual embedder may be excellent Hindi→English but weak Marathi→English. Test each language pair you serve, not "multilingual" as a whole.

## The generation side

Retrieval solved, the generator still has to answer in the user's language while grounding in source-language documents. Cite the original document, not a translation of it, and instruct the model to preserve source-language entities rather than anglicizing them. If your evals only test English retrieval, you have tested half the system — see [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design).

**Related:** [Rerankers in practice](/learn/rag/rerankers-in-practice), [Multilingual documents and OCR](/learn/multilingual-ai/multilingual-documents-and-ocr), [Multilingual model landscape](/learn/multilingual-ai/multilingual-model-landscape)
