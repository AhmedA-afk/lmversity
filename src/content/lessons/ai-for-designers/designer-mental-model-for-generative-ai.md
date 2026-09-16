---
title: "A designer's mental model for generative AI"
track: "ai-for-designers"
status: live
summary: "Build a working mental model of generative AI — inputs, context, generated output, and variation — that tells you what to design around."
duration: "10 min read"
---

This lesson matters whenever you catch yourself designing as if the system will do the same thing every time. Generative systems do not. They produce a likely continuation given inputs and context, and that single fact reshapes what your interface must communicate.

## The five parts

Think of every AI feature as five connected parts, not one magic box:

1. **Inputs** — what the user provides: text, files, selections, settings, prior choices.
2. **Context** — everything else the system sees: retrieved documents, conversation history, tool results, system instructions. The user often cannot see this, which is itself a design problem.
3. **Generation** — the model produces a likely continuation, one piece at a second, constrained by its training and the context above. Same inputs can yield different outputs.
4. **Variation** — rerunning the same request can produce a different answer. This is not a bug you can file away; it is the medium.
5. **Surrounding product system** — everything your team controls around the model: retrieval, filters, structured output, human review, logging, rollback. Most of what makes an AI feature trustworthy lives here, not in the model.

For the machinery underneath this picture, see [How LLMs work](/learn/ai-foundations/how-llms-work). Your job as a designer is not the machinery — it is the consequences: if output varies, the interface needs correction and regeneration. If context is invisible, the interface needs disclosure. If the system layer decides what counts as evidence, the interface needs to show it.

## What this changes about your job

Three shifts follow directly:

- **You design behavior, not just screens.** The same screen with a confident answer, an uncertain answer, and a blocked request is three different experiences. Module 2 makes this a written [behavior contract](/learn/ai-for-designers/designing-the-ai-behavior-contract) before any mockup.
- **You design for a range of outputs, not one.** Every generated surface needs a plan for too-long, too-short, off-tone, partially right, and flatly wrong output — not just the ideal response in your mockup.
- **You specify the system's honesty.** When should it hedge, cite, abstain, or escalate? Those are design decisions with wording, placement, and visual weight — covered in [Designing for uncertainty](/learn/ai-for-designers/designing-for-uncertainty).

## A small exercise

Take a feature you have designed or used — a summary box, a writing assistant, a search answer. Sketch which of the five parts the user can see and which are hidden. Mark every hidden part that affects whether the user should trust the output. Those marks are your first disclosure and evidence requirements; you will formalize them in the behavior contract.

**Related:** [A mental model for what LLMs can and can't do](/learn/ai-foundations/what-llms-can-and-cannot-do), [Why models hallucinate](/learn/hallucinations/why-models-hallucinate), [Deterministic vs probabilistic interfaces, compared](/learn/ai-for-designers/deterministic-vs-probabilistic-interfaces-compared)

## Next

Continue to [Deterministic vs probabilistic interfaces, compared](/learn/ai-for-designers/deterministic-vs-probabilistic-interfaces-compared) to see how testing, copy, and expectations change when behavior stops being repeatable.
