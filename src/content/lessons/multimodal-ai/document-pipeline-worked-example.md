---
title: "Worked Example: A Document Pipeline That Costs 10× What It Should"
track: "multimodal-ai"
status: live
summary: "An invoice-processing pipeline walked end to end — the OCR-on-digital bug, the full-res images, and the per-stage eval that finds each waste."
updated: "2026-09-16"
duration: "10 min read"
---

A document pipeline processing invoices costs 10× what it should and still misses fields. This example finds the three wastes and the per-stage eval that exposes each.

## The setup

An invoice-extraction pipeline: PDF in → structured fields out (vendor, date, line items, total). It works — accuracy is acceptable — but the cost is 10× the estimate and a class of invoices keeps failing.

## Waste 1: OCR on born-digital PDFs

The pipeline rasterizes every PDF page to an image and runs the vision model on it. But 80% of the invoices are born-digital — they have a clean text layer. The rasterize-and-vision path adds OCR-class errors to data that was already clean, at vision-model prices.

The fix: check for a text layer first. Born-digital → extract text directly, send text to a text model. Scans → the vision path. The 80% that were digital now cost text prices and gain accuracy.

## Waste 2: full-resolution images on the vision path

The 20% that are scans go through at 300 DPI — thousands of tokens per page. The eval shows the model extracts the fields correctly at 100 DPI — the resolution floor is far below the scan's ceiling.

The fix: downsample until the eval degrades. At 100 DPI the vision path's cost drops ~8× with no accuracy loss.

## The failing class: multi-page totals

A subset of invoices span multiple pages — the total is on the last page, the line items across the first three. The pipeline processed each page independently; the "total" extraction failed whenever it wasn't on the page being processed.

The fix: the pipeline's unit is the document, not the page — pages are inputs to a single extraction, not independent extractions.

## The per-stage eval that found each

| Stage | The check | What it caught |
|---|---|---|
| Input classification | % born-digital vs scan | The OCR-on-digital waste |
| Vision extraction | Accuracy vs resolution curve | The 100-DPI floor |
| Field extraction | Per-field accuracy, per document | The multi-page total failures |

Each stage eval'd separately — the pipeline's problems lived in different stages, and only per-stage measurement localized them.

## What the example teaches

- **The unit cost is a design decision.** OCR-everything, full-res, per-page processing were all defaults, not requirements.
- **Born-digital vs scan is the first classification.** The cheapest, most accurate path for digital is the one that doesn't touch vision at all.
- **Eval per stage.** A pipeline's aggregate accuracy hides which stage is failing — the per-stage breakdown is where each waste was visible.

## The check

For any document pipeline: which fraction is born-digital, what's the resolution floor, and is the unit the page or the document? The defaults are usually the expensive answer.

**Related:** [Document AI pipelines](/learn/multimodal-ai/document-ai-pipelines), [Multimodal mistakes](/learn/multimodal-ai/multimodal-mistakes), [Multimodal cost and latency](/learn/multimodal-ai/multimodal-cost-and-latency)
