---
title: "Multimodal AI Cheatsheet"
track: "multimodal-ai"
status: live
summary: "The multimodal decision table — which modality pipeline for which job, and the cost/latency/eval checks that differ from text."
duration: "6 min read"
---

The multimodal track compressed to the pipeline pick and the checks that differ from text-only work.

## Which pipeline for which job

| The input… | The pipeline | The failure it prevents |
|---|---|---|
| Document images / scans | OCR + layout extraction, then text pipeline | Treating a document as a photo |
| Photos / screenshots | Vision model, or vision-to-text then text model | Paying vision cost for a caption |
| Audio | Speech-to-text, then text pipeline | Sending raw audio where a transcript suffices |
| Video | Frame sampling + audio track transcription | Processing every frame at full cost |
| Mixed (doc + image + text) | Per-modality preprocessing → unified representation | One pipeline doing all modalities badly |

## The checks that differ from text

- **Resolution is a cost knob** — image tokens scale with resolution; downsample until the eval degrades, not before.
- **Frame rate is a cost knob** — video cost scales with frames sampled; the eval sets the floor.
- **Transcription errors cascade** — a speech-to-text error becomes a wrong answer downstream; eval the transcript quality separately.
- **Modality-specific evals** — a text benchmark says nothing about whether the model read the chart correctly.

## The failure modes in one line each

- **OCR-first on a born-digital PDF** — the text layer was already there; OCR added errors to data that was clean.
- **Full-res images to the model** — tokens nobody needed, at vision prices.
- **Every frame of video** — 30fps sampled at 30fps; the eval needed 1.
- **The transcript treated as ground truth** — a speech-to-text error silently became the answer's premise.
- **A text eval on a vision task** — the metric can't see the failure it's supposed to catch.

## The decision rules

- Prefer the cheapest modality pipeline that passes the eval — a transcript is usually cheaper than raw audio.
- Downsample resolution/frame-rate until the eval degrades — that's the floor.
- Eval each stage separately — a pipeline's error can live in any stage.
- When the input is born-digital, use its text layer — don't OCR what isn't an image.

**Related:** [Multimodal model landscape](/learn/multimodal-ai/multimodal-model-landscape), [Multimodal cost and latency](/learn/multimodal-ai/multimodal-cost-and-latency), [Multimodal evaluation](/learn/multimodal-ai/multimodal-evaluation), [Multimodal RAG lab](/learn/multimodal-ai/multimodal-rag-lab)
