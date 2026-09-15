---
title: "Evaluating multimodal systems: accuracy you can't eyeball"
track: "multimodal-ai"
status: live
summary: "Evaluating non-text outputs and inputs: extraction assertions, golden sets for vision/documents/audio, judging generated images, and the regression discipline for modality pipelines."
duration: "9 min read"
sources: ["openai-vision-docs", "anthropic-vision-docs"]
---

## The short answer

Text evals assume you can diff outputs; multimodal evals can't — the
answer might be an image, a bounding box, an extraction that varies in
format but not content. The discipline: evaluate *claims about the
output* (extraction assertions, perceptual judgments) rather than the
output's surface, and build golden sets per modality on real inputs.

## Understanding-side evals (modality→text)

The tractable half: vision/audio/document understanding produces text
you can assert on. The methods: **extraction assertions** (field X must
equal value Y — golden documents with verified answers, scored
automatically), **grounded correctness** (does the answer cite what's
actually in the image — the hallucination check: models describe
plausible-but-absent details confidently), and **coverage evals** (did
it find all the items, not just some — tables, line items, chart series).
Build the golden set adversarially: handwriting, rotations, poor scans,
your domain's actual imagery — the cases the demo set hides.

## Generation-side evals (text→modality)

Generated images/audio can't diff — you evaluate *properties*: **prompt
adherence** (did it produce what was asked — human or model-judged
against a rubric), **quality metrics** (perceptual quality, artifact
rates — human eval is still the gold standard; automated image-quality
proxies exist but are weak), **constraint checks** (no text in image,
no factual content — rule-checkable), and **preference ranking**
(A/B generated outputs against each other — relative quality is easier
to judge than absolute). Model-graded evals (a vision model scoring a
generated image against the prompt) scale the loop — with the caveat
that the judge shares the generators' failure modes.

## The per-stage and end-to-end split

Multimodal pipelines have more failure surfaces than text: each modality
adapter (OCR, ASR, frame-sampler) is a failure point before the model
even sees input. Evaluate **per-stage** (did the OCR extract correctly —
don't blame the LLM for the parser's error) and **end-to-end** (the
full pipeline's answer on the real input). The OCR lesson's extraction
assertions are the stage gate; the E2E eval tells you the system works
as a whole.

## Regression discipline

Modality pipelines regress in ways text doesn't: provider model updates
shift vision behavior silently; a TTS voice drifts; an ASR's
endpointing changes feel different. Pin versions where possible, keep
the golden set as the regression gate on every change (model, prompt,
pipeline config), and log the modality inputs (within consent bounds) —
when evals regress, the input is how you tell whether the world changed
or the model did.
