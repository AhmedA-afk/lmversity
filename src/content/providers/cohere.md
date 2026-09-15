---
title: "Cohere"
description: "Cohere's surface mapped: the Command model family, Rerank, Embed, Parse, Transcribe, Aya multilingual, North enterprise line — across its own platform plus Bedrock/Azure/Oracle — with when-to-choose guidance."
vendor: cohere
covers: ["api", "cloud-platform"]
verifiedAt: "2026-09-15"
related:
  - /learn/rag
  - /learn/genai-app-dev/provider-layer-cheatsheet
sources:
  - cohere-model-docs
  - cohere-rerank-docs
  - cohere-pricing
  - cohere-status
---

## What this page covers

Cohere is enterprise-first: one API surface covering generation, retrieval, and document AI, distributed across **its own platform plus Amazon SageMaker, Bedrock, Microsoft Azure, and Oracle GenAI**. No consumer app, no coding-agent product — this is a B2B provider. Verified against official docs on 2026-09-15.

## Product map

**Command family** (text generation, `/chat` endpoint): Command A+ (Mixture-of-Experts flagship — vision input, agentic, reasoning, translation in one model; fits on 1×B200 or 2×H100), Command A, Command A Reasoning, Command A Vision, Command A Translate (23 languages), Command R7B (small/fast), plus the older R+/R line. Date-versioned IDs (`command-a-plus-05-2026`).

**Retrieval and document AI** — where Cohere is genuinely differentiated:

- **Rerank** — reranks existing search results through the `/rerank` endpoint; the classic "improve search without re-platforming" product.
- **Embed** — embeddings for search, classification, clustering, RAG.
- **Parse** — structured extraction from enterprise documents (forms, PDFs).
- **Transcribe** — ASR, with a dedicated Arabic-optimized variant.

**Aya family** — the multilingual bet: Aya Expanse (23 languages) and Aya Vision (multimodal). If your workload is non-English-first, Aya is the reason Cohere is on your shortlist.

**North family** — purpose-built enterprise models (North Small Translate, North Mini Code) with "Model Vault" production deployment framing — the private-deployment story.

## Official links

- Docs: `docs.cohere.com` (`llms.txt` index + an MCP server for doc-aware agents published)
- Pricing: `cohere.com/pricing` · Status: `status.cohere.com`
- Platform: `dashboard.cohere.com` · Cloud distribution: SageMaker, Bedrock, Azure, Oracle GenAI marketplaces

## Getting started shape

API key + `/chat` (or `/v2/chat`) endpoint; SDKs wrap it. The retrieval stack is the usual entry point — Rerank bolts onto an existing search index in an afternoon; the Command models follow when generation is needed. Platform-specific call details per model are documented at the end of each docs section (SageMaker/Bedrock/Azure/Oracle all differ slightly).

## Naming, aliases, deprecation

Date-versioned IDs throughout (`command-a-03-2025`, `command-r7b-12-2024`) — explicit pinning is the convention, and per-model status fields (`Live`) appear in the models table. Watch the changelog for retirement notices.

## Data policy and enterprise controls

Enterprise posture is the pitch: multi-cloud distribution means your cloud provider's data boundary can be the operative one (Bedrock/Azure/Oracle paths each carry that cloud's governance), plus private deployment via the North line. Cohere's terms cover its own platform; for cloud-distributed calls, read the marketplace terms too.

## Minimal lab

The honest lab here isn't chat — it's retrieval: take a search result set, rerank it, compare ordering. Then one Command completion and one Parse call on a real PDF. Provider-neutral equivalent: rerank vs your current ranking signal, A/B'd — that's a measurable improvement claim you can actually verify.

## When to choose it

**Choose Cohere when** retrieval quality is the bottleneck (Rerank is the best-scoped product in the category), when multilingual is a core requirement (Aya's 23-language focus is real engineering, not a checkbox), when document AI (Parse) or Arabic ASR fills a gap, or when procurement needs the model inside your existing cloud boundary.

**When not to choose it.** If you want a consumer ecosystem, realtime voice, or a coding-agent product — none exist. The Command line competes with frontier models on some workloads and loses on others; eval your mix. And Rerank+Embed can be adopted without Command at all — pick components, not the whole platform, if that's all you need.

**Migration considerations.** The multi-cloud story is the migration story: leave Cohere's platform for Bedrock-hosted Cohere (or vice versa) without changing model IDs semantics. Leaving Cohere entirely is easy for generation (proprietary `/chat` but nothing exotic) and harder for Rerank — there's no drop-in equivalent; plan for re-tuning if you swap it.
