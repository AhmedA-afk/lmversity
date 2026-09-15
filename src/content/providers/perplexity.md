---
title: "Perplexity"
description: "Perplexity mapped: the answer-engine model — source-grounded answers with citations, Pro search, Spaces, and the model-agnostic backend — plus what 'research product' means when the product is the citations."
vendor: perplexity
covers: ["consumer-app", "consumer-product"]
verifiedAt: "2026-09-15"
related:
  - /providers/notebooklm
  - /providers/openrouter
  - /answers/how-to-choose-an-ai-chat-product
sources:
  - perplexity-help
---

## What this page covers

**Perplexity** — the answer engine: a research product built around *cited* answers rather than general chat. Verified 2026-09-15 (its help center is bot-protected — HTTP 403 to automated fetch — feature specifics carry this date).

## Product map

- **The answer engine** — every response is synthesized from live web retrieval with inline citations to sources — the product's entire premise: "search that reads the pages for you."
- **Pro Search** — the deeper research tier: multi-step investigation, follow-up clarification, more retrieval depth than the quick answer.
- **Spaces** — organized collections of threads/files around a research topic with shared context — the project-workflow layer.
- **Model choice** — Pro tiers let you pick the underlying model (Perplexity is a *research product over other vendors' models*, not a model vendor — the architectural point).
- **Files** — upload documents to ground answers in your sources alongside the web.
- **Comet/API** — the browser play and developer API extend the surface beyond the app.

## The positioning point — and the honest limits

Perplexity is the only major consumer product whose value proposition *is* source-grounding: the citations are the product, and research-review workflows (check the claim against the source) are native to it. The honest limits for teaching: retrieval quality bounds answer quality (it can't cite what it didn't find); citation ≠ verification (readers still must check whether the source actually supports the claim — the core research-literacy point); and it's an aggregator over vendors' models, so "Perplexity's answer" is really "model X over retrieval Y."

## When to choose it

**Choose Perplexity when** source-grounded research is the task (the citation-first UX is genuinely differentiated for "show me where this came from"), when quick multi-source synthesis beats doing N searches yourself, or when model choice inside one research product matters.

**When not to choose it.** For bounded synthesis over *your own* documents, NotebookLM's design (only-your-sources) is stricter about grounding; for deep document work or artifact production, the chat products' project/artifact surfaces are better; for privacy-sensitive queries, an answer-engine is a third party seeing your research trail.

**Migration considerations.** Spaces/threads are Perplexity containers; the underlying models are swappable inside the product — the research workflow is what you'd take elsewhere.
