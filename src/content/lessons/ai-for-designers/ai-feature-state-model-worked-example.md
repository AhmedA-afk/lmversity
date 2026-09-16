---
title: "AI feature state model: a worked example"
track: "ai-for-designers"
status: live
summary: "Model ten AI interaction states — idle through corrected — on an illustrative document Q&A feature, then apply the model to your own feature."
duration: "11 min read"
---

This worked example matters because happy-path mockups hide nine-tenths of the experience. Model the states first and every screen becomes a rendering of a known state rather than an improvisation.

## Setup: the illustrative feature

The scenario below is illustrative. A document Q&A box answers employee questions from the company handbook. Constraints: handbook updates monthly, some questions have no answer in the handbook, wrong answers about leave policy carry real cost. The state model must cover all ten states: idle, collecting input, working, partial output, complete, uncertain, blocked, failed, cancelled, corrected.

## Walking the ten states

- **Idle** — the box states its scope ("Answers from the employee handbook, updated monthly") and shows two example questions. Scope stated up front prevents the magic-box failure.
- **Collecting input** — as the user types, the interface suggests which handbook sections look relevant and warns when a question seems out of scope before generation starts. Cheap to show, expensive to omit.
- **Working** — a truthful status names the actual step ("Searching handbook sections…"), with cancellation available from the first moment. No generic spinner across a multi-step process.
- **Partial output** — streamed text arrives with stable layout: the answer area reserves space, sources accrue in a margin, and nothing jumps as tokens arrive. Streaming UX detail lives in [Streaming responses to the UI](/learn/genai-app-dev/streaming-responses-to-the-ui).
- **Complete** — the answer carries inline citations to handbook sections, a visible update date, and actions: copy, retry, correct, escalate.
- **Uncertain** — when retrieval finds weak matches, the answer says so, shows the competing passages, and offers alternatives instead of picking confidently. Wording patterns are Module 3's subject; see [Designing for uncertainty](/learn/ai-for-designers/designing-for-uncertainty).
- **Blocked** — a question about a topic outside the handbook gets a designed refusal: what is out of scope, why, and where to go instead (HR contact, specific policy page).
- **Failed** — a retrieval outage produces a plain-language explanation, preserves the user's question, and offers retry without retyping.
- **Cancelled** — stopping mid-stream keeps the partial answer marked as partial, with resume or discard as explicit choices.
- **Corrected** — when the user flags an error or edits the answer, the correction is acknowledged, recorded, and visibly incorporated — the loop [Correction, undo, and recovery patterns](/learn/ai-for-designers/correction-undo-and-recovery-patterns) details.

## Your turn

Draw the same ten-state diagram for your capstone feature. For each state, write the user-visible copy in draft form and name the event or signal that moves the feature into and out of it. States with no exit path are design bugs — fix them on paper now.

**Related:** [AI interaction states cheatsheet](/learn/ai-for-designers/ai-interaction-state-cheatsheet), [Designing chat UX that doesn't feel broken](/learn/genai-app-dev/designing-chat-ux), [Correction, undo, and recovery patterns](/learn/ai-for-designers/correction-undo-and-recovery-patterns)
