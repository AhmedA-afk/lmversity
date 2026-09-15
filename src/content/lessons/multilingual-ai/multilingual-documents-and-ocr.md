---
title: "Multilingual documents and OCR"
track: "multilingual-ai"
status: live
summary: "Process documents across scripts — OCR quality variance, mixed-script pages, right-to-left text, digitized archives, and where multilingual vision models help."
duration: "11 min read"
sources:
  - ai4bharat-indicnlp
  - openai-vision-docs
---

Multilingual document processing fails at a different layer than multilingual text processing: often the text never survives digitization cleanly enough for your LLM to see it. A Hindi government form scanned at 150 DPI, a bilingual contract, an Arabic ledger photographed at an angle — the pipeline's first job is getting usable text at all.

## OCR quality is per-script, not per-engine

OCR accuracy varies enormously by script and document quality. Clean printed Latin text is a solved problem; the same engine can degrade sharply on connected scripts, conjunct characters (Devanagari's half-forms and ligatures), Dravidian scripts' dense glyph clusters, handwritten text, and degraded scans. Before committing to an OCR stack, run your actual documents through it and score character-level errors — vendor benchmarks use clean samples you don't have.

**Mixed-script pages need explicit handling.** Indian official documents routinely mix Devanagari body text with English field labels, numbers, and stamps. An OCR pass configured for one language silently mangles the other. Prefer engines that auto-detect per-block, and inspect output for script-tagging artifacts (English words rendered in Devanagari-shaped garbage is the signature failure).

**Right-to-left and bidirectional text.** Arabic and Hebrew embed numbers, dates, and Latin terms left-to-right inside right-to-left flow. Naive text extraction scrambles token order; keep the engine's reading-order metadata rather than re-sorting yourself.

## Vision models as the OCR layer

Multimodal models increasingly read documents directly — skip the OCR-then-LLM chain and hand the model the image. This handles degraded scans, complex layouts, and mixed scripts in one step, and it preserves layout meaning (tables, form field relationships) that flat OCR text destroys. The trade-offs — cost per page, latency, hallucinated characters on truly illegible input — are covered in [Document AI pipelines](/learn/multimodal-ai/document-ai-pipelines). The pattern that survives contact with production: vision model for extraction, deterministic checks for validation, human review for the fields that fail checks.

## After extraction

- **Segmentation rules differ per script.** Sentence boundary detection and tokenization trained on English misfire elsewhere — see [Building for Indic scripts and segmentation](/learn/genai-app-dev/building-for-indic-scripts-and-segmentation).
- **Normalize before indexing.** Unicode normalization (NFC), consistent digit handling (Devanagari digits vs ASCII), and whitespace cleanup matter more when downstream steps are multilingual.
- **Keep provenance.** Store the source script, detected language(s), and OCR confidence per chunk — retrieval and eval stages will need them.

**Related:** [Document AI pipelines](/learn/multimodal-ai/document-ai-pipelines), [Cross-lingual retrieval](/learn/multilingual-ai/cross-lingual-retrieval), [Building for Indic scripts and segmentation](/learn/genai-app-dev/building-for-indic-scripts-and-segmentation)
