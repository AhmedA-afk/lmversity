---
title: "Designing the AI behavior contract"
track: "ai-for-designers"
status: live
summary: "Write a behavior contract for an AI feature covering purpose, inputs, outputs, boundaries, tone, evidence, permissions, and escalation."
duration: "10 min read"
---

This lesson matters because mockups cannot answer the questions engineers will actually ask: what may this feature do, what must it never do, and what happens in every state that is not success. The behavior contract answers them in writing, before screens.

## The contract's eight clauses

Write one short paragraph per clause for your feature. Keep each clause falsifiable — a reviewer should be able to point at behavior and say it violates the contract.

1. **Purpose** — the user job in one sentence, plus what success looks like from the user's side.
2. **Inputs** — what the user provides, what the system adds (retrieved docs, history, tool data), and what good input looks like. Constrain inputs early: examples, attachments, and progressive disclosure beat a blank box; see [Mapping AI capabilities to user tasks](/learn/ai-for-designers/mapping-ai-capabilities-to-user-tasks).
3. **Outputs** — the shape of results (prose, structured data, components), length expectations, and what "done" means.
4. **Boundaries** — what the feature refuses, redirects, or escalates. Write refusals as designed behavior with wording and next steps, not as dead ends.
5. **Tone** — the voice the feature speaks in, with examples of in-tone and out-of-tone output. Tone is a behavior control, not decoration.
6. **Evidence** — what the feature shows for why an answer should be believed: sources, citations, alternatives considered. Default to showing evidence for consequential claims.
7. **Permissions** — what the feature may do without asking, what needs confirmation, and what it may never do. This clause pairs with [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries).
8. **Escalation** — where the user goes when the AI cannot help: a person, a different tool, documentation. Every boundary needs a named destination.

## Why behavior before interface

The contract is where model behavior and product behavior get separated deliberately. The model proposes text; the product decides what to show, what to check, what to block, and what to log. Most trust failures are product-layer omissions — no evidence shown, no undo offered, no escalation path — and writing the contract surfaces them while they are still cheap to fix.

## Exercise

Draft all eight clauses for your capstone feature in under two pages. Mark every clause you cannot yet write with the question that would unblock it and who can answer it. Those marks are your research plan; unresolved questions travel into the handoff spec rather than disappearing.

**Related:** [AI feature state model: a worked example](/learn/ai-for-designers/ai-feature-state-model-worked-example), [System prompts vs user prompts](/learn/prompt-engineering/system-vs-user-prompts), [Prompts as interaction specs](/learn/ai-for-designers/prompt-as-interaction-spec)

## Next

Continue to [Mapping AI capabilities to user tasks](/learn/ai-for-designers/mapping-ai-capabilities-to-user-tasks) to keep the contract's AI role honest about what each capability can actually carry.
