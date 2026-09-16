---
title: "Multimodal AI: Common Mistakes"
track: "multimodal-ai"
status: live
summary: "The eight multimodal mistakes that turn a working demo into an expensive or wrong production system — and the fix for each."
updated: "2026-09-16"
duration: "8 min read"
---

The multimodal mistakes that don't show up in a demo — each with the fix that makes it production-grade.

## 1. OCR-ing a born-digital document

**The mistake.** The pipeline rasterizes every PDF and runs OCR — adding errors to a document whose text layer was already clean.

**The fix.** Check for a text layer first; extract it directly. OCR is for scans and images of text, not for documents that are already text.

## 2. Sending full-resolution images

**The mistake.** Every image goes to the model at camera resolution — thousands of tokens per image at vision prices.

**The fix.** Downsample until the eval degrades, then stop. The resolution the task needs is a measured floor, not the camera's ceiling.

## 3. Processing every frame of video

**The mistake.** Video input sampled at the full frame rate — 30 frames a second of largely identical images.

**The fix.** Sample at the rate the eval requires — usually 1fps or scene-change detection — and transcribe the audio track separately.

## 4. Trusting the transcript

**The mistake.** Speech-to-text output is treated as ground truth; a transcription error ("15" heard as "50") silently becomes the answer's premise.

**The fix.** Eval the transcription stage separately, and propagate uncertainty — a low-confidence transcript should reach the downstream stage as low-confidence, not as fact.

## 5. One pipeline for all modalities

**The mistake.** A single "multimodal" pipeline handles documents, photos, audio, and video — each at the quality of the worst-fitting approach.

**The fix.** Per-modality preprocessing into a unified representation — each modality gets the pipeline that fits it.

## 6. Evaluating with a text benchmark

**The mistake.** The model's multimodal quality is measured on a text eval — which can't see whether it read the chart correctly.

**The fix.** Modality-specific eval items: does it extract the table, read the chart, describe the image? The metric must be able to see the failure.

## 7. Assuming modality coverage is uniform

**The mistake.** The model handles photos well, so it's assumed to handle charts, handwriting, and screenshots — each a different capability.

**The fix.** Eval per sub-type. "Vision" isn't one capability — document extraction, chart reading, and photo description are different skills with different quality.

## 8. No cost model for the modality

**The mistake.** Text-cost intuition applied to vision/audio workloads — and the invoice is a surprise.

**The fix.** Per-modality token telemetry. Image tokens, audio seconds, video frames are each a different unit cost — measure them separately.

**Related:** [Multimodal cheatsheet](/learn/multimodal-ai/multimodal-cheatsheet), [Multimodal evaluation](/learn/multimodal-ai/multimodal-evaluation), [Multimodal cost and latency](/learn/multimodal-ai/multimodal-cost-and-latency)
