---
title: "Image understanding in production: vision APIs that actually work"
track: "multimodal-ai"
status: live
summary: "Vision-capable LLMs in production: what image understanding can and can't do, resolution and token economics, when OCR-plus-LLM beats native vision, and the accuracy traps of visual QA."
duration: "10 min read"
sources: ["openai-vision-docs", "anthropic-vision-docs", "google-vision-docs"]
---

## The short answer

Vision-capable LLMs turned "understand this image" into an API call — but
production image understanding is a different animal than the demo. The
real work: knowing what vision models are actually good at (and not),
managing the resolution-vs-cost tradeoff, and choosing between native
vision, OCR-plus-LLM, and dedicated tools per task.

## What vision models do well — and where they break

**Strong**: scene description, document/screenshot understanding,
chart/diagram reading at the gist level, UI comprehension, extracting
structure from messy images (forms, receipts, whiteboards), visual
reasoning for a text answer. **Weak**: precise counting, fine spatial
measurement, small text at distance, dense tables read cell-perfectly,
faces/identity (correctly restricted), and anything requiring pixel-level
ground truth. The failure mode that matters: **confident wrongness on
details** — the model reads a chart and reports a plausible number that
isn't there. Visual QA evals must test extraction accuracy, not vibe.

## Resolution, tiling, and token economics

Vision APIs meter images as tokens — the resolution you send is the cost
you pay. The levers: **detail tiers** (low-res for gist, high-res for
detail reading — per-image control on most APIs), **tiling/cropping**
(preprocess large images into regions rather than one expensive
high-detail pass), and **preprocessing** (resize/compress to the fidelity
the task actually needs — a thumbnail for classification, full-res only
where fine text matters). Sending every image at max detail is the most
common multimodal cost bug.

## Native vision vs OCR-plus-LLM vs dedicated tools

Three paths for "read this document": **native vision** (send the image —
the model handles layout implicitly; best for messy/mixed content),
**OCR-plus-LLM** (extract text with a dedicated OCR, feed text — better
for dense documents where OCR is more accurate than vision attention,
and cheaper per page at scale), **dedicated tools** (form extractors,
table parsers — best for high-volume fixed-format documents). The
decision axis: layout complexity × accuracy requirement × volume. Native
vision for variable layouts and moderate volume; OCR-pipeline for dense
text docs at scale; dedicated parsers for fixed formats at production
volume.

## The accuracy discipline

Build a golden image set early — real inputs with verified expected
outputs, including the adversarial cases (handwriting, rotated scans,
low-quality photos, your actual domain's imagery). Test extraction as
assertions (field X = value Y), not "looks right" reviews. And verify
before trusting: vision models will answer questions about an image
they misread with perfect confidence — the evaluation lesson covers
catching that systematically.
