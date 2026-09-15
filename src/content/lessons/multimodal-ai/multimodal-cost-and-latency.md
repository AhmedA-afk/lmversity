---
title: "Multimodal cost and latency: the economics of non-text tokens"
track: "multimodal-ai"
status: live
summary: "Managing the real economics of multimodal: image/video token costs, resolution tiers, caching strategies, and the latency profile of modality pipelines."
duration: "8 min read"
sources: ["openai-vision-docs", "google-vision-docs"]
---

## The short answer

Non-text inputs cost more than they look. An image is hundreds-to-thousands
of tokens; a video is that per sampled frame; audio streams at a steady
token rate. The teams that get surprised are the ones who priced the demo
(one image) not the product (a corpus). The discipline: right-size
resolution to the task, cache derived artifacts, and measure the
per-document cost, not the per-call.

## The token math

- **Images**: metered as tokens scaled by resolution/detail — a
  high-detail image can cost more tokens than several pages of text.
  The detail tier is your lever: classification/gist = low; fine text/
  measurement = high.
- **Video**: frames×rate×length — a 10-minute video naively sampled is a
  textbook's worth of tokens. Sampling strategy is the cost control.
- **Audio**: per-second token cost compounds over long inputs;
  transcript-first is the cheaper path when the signal survives.
- **Documents**: N pages × per-page cost — corpus-scale document AI is a
  throughput/cost engineering problem before it's a quality one.

## The cost-control levers

**Right-size fidelity**: send the minimum resolution the task needs —
thumbnail for "is there a person", full-res only where fine detail
matters. **Preprocess**: crop, resize, tile — pay for pixels that carry
signal. **Sample deliberately**: adaptive/keyframes for video; segment,
don't dump. **Cache artifacts**: per-image descriptions, transcripts,
frame analyses — derived once, reused many times; the single biggest
cost lever at scale. **Tier the model**: gist tasks don't need the
frontier vision model.

## Latency: the pipeline compounds

Multimodal latency is additive per stage: preprocess + vision encoding +
LLM + (optional) TTS/render. Vision tokens also slow first-token latency
broadly — big context is big compute. The patterns: preprocess
concurrently with upload, right-size the image before it hits the model
(the biggest latency lever), stream the text response while modality
processing continues, and keep heavy multimodal turns out of latency-
critical paths — a chatbot that analyzes an image per turn is a latency
budget you designed badly.

## The honest bill

Multimodal cost surprises come from scale, not per-call price: the
document pipeline over a million pages, the video feature at real usage,
the vision call inside a high-frequency loop. Price it per document/
second-of-media at realistic volume before committing the architecture —
the "cheap" vision call is cheap at demo scale and material at product
scale.
