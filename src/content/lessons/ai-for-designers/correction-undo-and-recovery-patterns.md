---
title: "Correction, undo, and recovery patterns"
track: "ai-for-designers"
status: live
summary: "Make wrong AI output repairable with correction flows, undo for actions, and recovery paths that preserve user work."
duration: "9 min read"
---

This lesson matters because wrong output is routine, not exceptional — and the product that makes repair easy earns more trust than the product that pretends to be right. Recovery is a core flow; design it like one.

## Correction flows for generated content

Every generated surface needs at least three affordances: point at the wrong part (not just "bad output" globally), say what is wrong in the user's own terms, and see the fix incorporated visibly. Inline correction beats global regeneration: let users edit the output directly, flag a span, or pick from alternatives, then re-run narrowly around the fix rather than discarding everything. Record corrections — with consent and within retention policy — because they are the highest-value signal for your evaluation set.

## Undo for actions

Anything the system changes outside the conversation — files, records, messages sent, settings — needs undo with a stated window, or explicit confirmation before it happens. The rule: reversible actions may run with clear announcement and undo; irreversible or high-stakes actions require confirmation first. This pairs directly with the [approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries): correction handles wrong content, approval prevents wrong actions.

## Recovery that preserves work

Failures must never cost users their own words. Preserve input across failure, cancellation, and retry; make retry a single action that reuses context rather than a demand to start over. Escalation is part of recovery: when the AI cannot complete the task, hand the user to a person, a doc, or a narrower tool with context carried along — not a dead end. For the engineering patterns behind stop and retry, see [Designing chat UX that doesn't feel broken](/learn/genai-app-dev/designing-chat-ux).

## Exercise

Walk your feature's three most failure-prone outputs and write the correction, undo, and escalation path for each. Any output with no path is a Module 3 artifact gap — close it before prototyping.

**Related:** [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries), [Trust patterns: a redesign worked example](/learn/ai-for-designers/trust-patterns-worked-example), [AI interaction states cheatsheet](/learn/ai-for-designers/ai-interaction-state-cheatsheet)
