---
title: "The multimodal model landscape: native vs adapter, and what the matrix actually looks like"
track: "multimodal-ai"
status: live
summary: "What 'multimodal' actually means — natively multimodal models vs modality adapters — and the input/output matrix that determines what your product can build."
duration: "9 min read"
sources: ["openai-vision-docs", "anthropic-vision-docs", "google-vision-docs"]
---

## The short answer

"Multimodal" is a marketing word over two real architectures: **natively
multimodal models** (trained across modalities — text/image/audio in and
out through one model) and **adapter pipelines** (a text LLM fronted by
modality encoders — vision encoder, ASR — feeding it tokens). The
distinction decides capability: native models handle cross-modal reasoning
and audio nuance adapters throw away; adapters let you compose
best-of-breed per modality. Most "multimodal" products today are the
adapter kind wearing the native label.

## The modality matrix — what actually exists

| Direction | What it means | State of the art |
|---|---|---|
| text→text | the baseline | every model |
| image→text | vision understanding | mature across major providers |
| audio→text | speech/audio understanding | mature (ASR), growing (native audio) |
| video→text | frame+temporal understanding | viable, cost-heavy |
| text→image | generation | mature |
| text→audio | TTS | mature |
| text→video | video generation | frontier, expensive |
| audio→audio | speech-to-speech | frontier — the realtime/voice models |
| docs→text | layout/table understanding | the adapter-hybrid sweet spot |

The matrix is asymmetric: **understanding** (→text) is far ahead of
**generation** (text→) across modalities. Most production multimodal work
is the left column — images, audio, video, documents *into* a text-reasoning
model — not generation out.

## Native vs adapter — when it matters

The adapter pipeline loses information at every boundary: ASR strips
prosody, a vision captioner flattens the image to description before the
LLM sees it. Native multimodal keeps the raw signal — the model can hear
hesitation, see the chart's visual structure, reason over pixels not
captions. It matters when: the task needs cross-modal reasoning (is the
speaker's tone sarcastic about this image?), non-text features carry
signal (layout, audio affect), or latency demands one model hop. Adapters
suffice when: the modality reduces cleanly to text (transcripts, OCR'd
docs), you need per-modality best-of-breed (your OCR is special), or
cost forces the cheaper per-stage path.

## The practical read

Build the modality matrix for *your* product first: which in/out pairs
you actually need, at what fidelity. "Multimodal" as a checkbox means
nothing; "images+documents→text for our intake pipeline, audio→audio for
the voice lane" is a real requirement. Then per cell: native model vs
adapter pipeline vs dedicated tool (OCR, ASR) — decided by whether the
modality's signal survives the adapter boundary.
