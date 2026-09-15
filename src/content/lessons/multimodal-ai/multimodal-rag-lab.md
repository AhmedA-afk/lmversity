---
title: "Lab: retrieval over mixed documents (multimodal RAG)"
track: "multimodal-ai"
status: live
summary: "A hands-on lab building retrieval over documents containing text, tables, and images — where naive text-only RAG loses the information and structure-aware retrieval wins."
duration: "12 min read"
sources: ["unstructured-docs", "openai-vision-docs"]
---

## What you'll build

A document-ingestion + retrieval pipeline over a mixed corpus: PDFs with
text, tables, and figures. The point: naive text-only RAG loses tables
and figures entirely — this lab builds the structure-aware version that
doesn't, and evaluates the difference on real questions.

## The corpus and the failure to fix

Take a small set of real documents — a research paper, a financial report
with tables, a manual with diagrams. The failure to demonstrate: ask a
question answerable only from a *table* or *figure* ("what was Q3
revenue", "what does the architecture diagram show") — a text-only
pipeline returns garbage because the table serialized as scrambled
numbers and the figure was never indexed at all.

## The pipeline stages

**1. Structure-aware ingest.** Parse each document into *elements*:
paragraphs, tables (as structured cells, not text), figures (as image
references), headers — keeping bounding-box provenance. A document
parser (Unstructured-class) or a vision-model parse pass both work; the
element typing is what matters.

**2. Modality-appropriate indexing.** Text elements → text embeddings as
usual. Tables → serialize to a queryable representation (markdown table,
or row-descriptions) *and* embed. Figures → a vision model writes a
description/caption → embed *that* (the figure is searchable through its
description — the standard figure-RAG pattern).

**3. Retrieval + assembly.** Retrieve across the mixed index; the context
assembly keeps tables as structure (not re-flattened text) and figure
descriptions with their provenance. Answer grounded in retrieved
elements, citing the source region.

**4. The comparison eval.** Run the same question set through your
structure-aware pipeline and a naive text-only baseline. The table/
figure questions are where the difference shows: assert the correct
answer is retrieved *and* used — this is the eval that proves the
architecture.

## Acceptance criteria

- Table questions answered correctly from structured extraction, with
  cell-level provenance (which table, which row).
- Figure questions answered via descriptions — the figure is findable
  even though no text described it in the source.
- The naive baseline fails the same questions visibly (the eval makes
  the case, not the narrative).
- Every answer cites page + region — provenance is the audit trail.

## Where this bites in production

This is the pattern behind every "chat with your documents" product that
actually works: contracts with clause tables, financial reports, research
corpora, manuals with diagrams. The naive version demos fine and fails
in production exactly where documents get complex — which is the
production case, not the edge case. The document-ai lesson covers the
parsing depth; the rag track covers the retrieval system this plugs into.
