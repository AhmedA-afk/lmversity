---
title: "AI interaction states cheatsheet"
track: "ai-for-designers"
status: live
summary: "A scannable inventory of the ten AI interaction states with the copy, controls, and exit paths each one must carry."
duration: "5 min read"
---

Keep this page open while designing. Every AI surface in your feature should map to one of these states, and every state ships with its listed minimum — a state without its minimum is a known bug.

## The inventory

- **Idle** — scope statement, two example inputs, what the feature will not do. No blank box without guidance.
- **Collecting input** — live scope hints, attachment/context visibility, submit enabled only when input is sufficient.
- **Working** — truthful step status, elapsed-time tolerance wording, cancel always available. Never a bare spinner over multi-step work.
- **Partial output** — stable layout, progressive content, sources accruing, cancel and wait-for-full as choices.
- **Complete** — answer plus evidence, date or version where relevant, copy/retry/correct/escalate actions.
- **Uncertain** — calibrated wording, competing evidence shown, alternatives offered, abstention where stakes exceed evidence.
- **Blocked** — what is out of scope and why, plus a named destination (person, page, tool).
- **Failed** — plain-language cause, user input preserved, retry without retyping, escalation path.
- **Cancelled** — partial output marked partial, resume or discard explicit, no silent loss of work.
- **Corrected** — acknowledgement of the correction, visible incorporation, what happens next (re-run, human review, logged for eval).

## Accessibility notes

Status changes must be announced to assistive technology without overwhelming it: a single polite live region for working-to-complete transitions, assertive only for blocked and failed states. Streaming text should not announce token by token. Motion for progress and transitions must honor reduced-motion preferences — a static status line is always an acceptable fallback.

## How to use it

During critique, point at each screen and name its state. Any screen that serves two states needs splitting; any state from your [state model](/learn/ai-for-designers/ai-feature-state-model-worked-example) with no screen is missing UI. When the mapping is complete, the cheatsheet becomes the QA checklist for prototype testing.

**Related:** [AI feature state model: a worked example](/learn/ai-for-designers/ai-feature-state-model-worked-example), [Prompts as interaction specs](/learn/ai-for-designers/prompt-as-interaction-spec), [Designing chat UX that doesn't feel broken](/learn/genai-app-dev/designing-chat-ux)
