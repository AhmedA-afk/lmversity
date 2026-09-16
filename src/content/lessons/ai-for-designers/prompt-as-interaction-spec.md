---
title: "Prompts as interaction specs"
track: "ai-for-designers"
status: live
summary: "Treat the prompt layer as part of system behavior by specifying role, constraints, evidence rules, and refusal shapes designers can review."
duration: "9 min read"
---

This lesson matters when engineers ask you to "just write the prompt" as if wording were decoration. The prompt layer sets behavior — what the system attempts, what it cites, when it refuses — so designers need a reviewable spec for it, not just a text field.

## What designers own in the prompt

You do not need to engineer the model, but you do own four decisions that live in or beside the prompt, and each must be visible to engineering and policy reviewers:

1. **Role and scope** — what the system claims to be and what it will not attempt. This wording surfaces in refusals and greetings, so it is interface copy with system consequences.
2. **Constraints** — length, format, tone, forbidden content classes. Constraints you specify here must match what the interface promises; a UI that invites open-ended input while the prompt demands a narrow shape is a contradiction users pay for.
3. **Evidence rules** — when the system must cite, what counts as a citable source, and what happens when sources are weak or absent. These rules are the contract behind every citation component you design.
4. **Refusal and escalation shapes** — the exact situations that trigger "I can't help with that" versus "here is a partial answer plus where to go next," with draft wording for each. Blocked states designed in Module 2 need these shapes to render.

For the engineering side of prompt structure, see [System prompts vs user prompts](/learn/prompt-engineering/system-vs-user-prompts). Your spec references that structure; it does not duplicate the engineering tutorial.

## Keeping policy constraints visible

Policy rules — privacy limits, retention, content boundaries — often arrive as prose documents and vanish into a prompt nobody reviews. Your spec keeps them visible: each constraint names its source (policy name, owner, date), so a reviewer can trace any behavior to the rule that required it. When policy changes, the spec shows which clauses and screens change with it.

## Exercise

Write a one-page prompt spec for your feature: role, five or fewer hard constraints, evidence rules, and three refusal/escalation shapes with draft copy. Review it against your behavior contract — every boundary in the contract needs a matching shape here, and every shape here needs a rendering in your state model.

**Related:** [Designing the AI behavior contract](/learn/ai-for-designers/designing-the-ai-behavior-contract), [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries), [System prompts vs user prompts](/learn/prompt-engineering/system-vs-user-prompts)

## Next

Test your Module 2 work in [Quiz: behavior before interface](/learn/ai-for-designers/behavior-before-interface-quiz).
