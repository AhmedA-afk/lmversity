---
title: "Document AI pipelines: PDFs, layouts, and tables — the highest-value multimodal surface"
track: "multimodal-ai"
status: live
summary: "Document understanding end to end: parsing vs native-vision strategies, layout and table extraction, OCR quality tiers, and building document pipelines that survive real-world PDFs."
duration: "10 min read"
sources: ["unstructured-docs", "openai-vision-docs", "anthropic-vision-docs"]
---

## The short answer

Document AI is the multimodal surface with the most production value and
the least glamour: contracts, invoices, research papers, forms — the
world's data is in PDFs and nobody designed them for machines. The real
work is a *pipeline* (ingest → parse → structure → reason), and the
strategic choice is where the vision model sits in it versus dedicated
parsers.

## The pipeline shape

```
documents → ingest/classify → parse (extract structure) →
normalize → reason (LLM over content) → validate → store
```

Three architectural patterns for the parse stage: **native vision**
(send page images to a vision model — handles layout implicitly, best
for variable/mixed documents), **parser-plus-LLM** (a document parser —
Unstructured-class — extracts elements: text, tables, headers, images;
the LLM reasons over structured output — better control and scale), and
**hybrid** (parser for the bulk, vision model for the pages that break
parsing — the production answer for diverse corpora).

## Layout and tables — where documents fight back

Text extraction is easy; **structure** is the product. Tables are the
canonical trap: naive extraction scrambles cell relationships (merged
cells, multi-page tables, nested headers destroy text-order assumptions).
The discipline: extract tables as *structure* (HTML/markdown cells with
coordinates) not text streams; keep **bounding-box provenance** (which
page/region each extraction came from — your audit trail and the only
way to verify); and treat headers/footers/reading-order as first-class
problems — multi-column layouts read wrong if you naively serialize.

## OCR quality tiers

Not all OCR is equal: digital-native PDFs have embedded text (no OCR
needed — extract directly); clean scans need good OCR; degraded scans
(faxes, photos, handwriting) need the vision-model path or specialized
handwriting models. Detect which tier each document is *before* choosing
the parse strategy — sending a digital-native PDF through OCR is wasted
cost; sending a handwritten form to a text extractor returns garbage.

## The accuracy contract

Document pipelines fail silently — a mis-extracted field propagates as
confident wrongness downstream. The contract: **extraction accuracy is
testable** (golden documents with verified field values — assert, don't
eyeball), **provenance is mandatory** (every extracted claim traces to
page+region), **confidence is surfaced** (low-confidence extractions go
to human review, not into the data). This is the RAG-over-documents
reality: your retrieval is only as good as your parse — the rag track's
chunking work presumes this layer is sound.
