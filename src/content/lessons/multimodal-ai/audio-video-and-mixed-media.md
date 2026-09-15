---
title: "Audio and video understanding: beyond the transcript"
track: "multimodal-ai"
status: live
summary: "Audio and video inputs for LLM systems: native audio understanding vs ASR transcripts, video frame sampling strategies, the cost scaling that bites, and when mixed-media input earns its complexity."
duration: "9 min read"
sources: ["google-vision-docs", "openai-vision-docs"]
---

## The short answer

Audio and video are the modalities where "just use the transcript" is
usually right and sometimes exactly wrong. The decision: whether the
signal you need survives flattening to text (speech content → transcript
fine; tone, music, ambient audio → lost), and whether video needs
temporal reasoning or just representative frames. Both are cost-heavy —
the discipline is sampling deliberately, not dumping media at the model.

## Audio: transcript vs native understanding

**ASR→text** covers most needs: the content of speech, searchable and
cheap — the voice-ai track covers production ASR. **Native audio
understanding** (audio into a multimodal model) adds what text drops:
prosody/emotion, speaker identification, music, ambient sound,
non-speech events. Pick native when the question is *about the audio
itself* ("does the caller sound frustrated?", "what's playing in the
background?"); pick the transcript when the question is about *what was
said*. Cost-wise, transcripts win at scale — audio tokens are expensive
relative to text.

## Video: the frame-sampling decision

Video understanding = frames + optional audio track, and "send the whole
video" is never the answer at scale. The strategies: **uniform sampling**
(every N seconds — cheap baseline, misses action), **keyframes/scene
detection** (sample at content changes — better coverage per frame),
**adaptive sampling** (dense where things happen, sparse in static
stretches), and **hybrid** (keyframes for structure + dense sampling for
the segment that matters). Match sampling to the question: "what
happened" needs coverage; "read this screen" needs the right frame at
high fidelity.

## The cost reality

Video is the most expensive modality per second of input: frames×tokens
×length adds up fast, and video-capable APIs meter accordingly. The
levers: sample sparsely, cap resolution to the needed fidelity, process
segments not wholes, and cache derived artifacts (per-frame
descriptions, transcripts) so re-asking doesn't re-process. A
video-understanding feature that doesn't engineer its sampling strategy
is a bill waiting to happen.

## Mixed-input: when it earns its complexity

Mixed-media input (image+audio+text in one call) is the native-multimodal
advantage — "describe what you see and hear" is one model turn, not three
pipelines. It earns the complexity when the task is inherently
cross-modal (a video's visuals + its audio commentary, a screenshot +
the error readout); it's overkill when each modality answers separately —
compose the pipeline per modality instead and save the cost.
