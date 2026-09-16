---
title: "Mapping AI capabilities to user tasks"
track: "ai-for-designers"
status: live
summary: "Separate retrieval, transformation, generation, prediction, and action so each subtask gets the AI role — or non-AI baseline — it can actually carry."
duration: "9 min read"
---

This lesson matters whenever a feature asks one AI call to do five different jobs. Split the job first; assign capability second; keep what does not need AI out of the AI entirely.

## The five capabilities

- **Retrieval** — finding relevant material from sources the team controls. Strength: grounding answers in checkable evidence. Design duty: show sources, handle empty and stale results.
- **Transformation** — restating, summarizing, reformatting, translating given material. Strength: fast, low-uncertainty work on supplied input. Design duty: preserve meaning visibly; let users compare source and result.
- **Generation** — producing new material from a brief: drafts, ideas, variations. Strength: breadth and speed. Design duty: correction, selection, and regeneration flows — generation without curation is a wish, not a feature.
- **Prediction** — estimating, classifying, ranking, flagging. Strength: triage at scale. Design duty: calibrated confidence, error costs stated, human review where stakes are high.
- **Action** — changing state: sending, filing, booking, deleting. Strength: completing work. Design duty: the strictest boundary — confirmation, reversibility, audit. Most action subtasks should start as recommendations, not executions.

## The mapping method

List your feature's subtasks down the left of a table. For each, assign one capability or mark it non-AI (rules, templates, human judgment). Then, for each AI-assigned row, write the uncertainty level and the recovery path. Any row with high uncertainty and no recovery path gets redesigned: narrower scope, added confirmation, or removal from the AI. This table becomes the appendix of your behavior contract.

Illustrative example: a meeting-notes feature splits into retrieval (fetch the transcript), transformation (summarize decisions), generation (draft follow-up tasks), and action (file tasks to the tracker). The first three ship as AI with review; the action ships as a confirmed proposal the user approves — never a silent write.

## What stays non-AI

Deterministic work with fixed rules — formatting against a template, validating required fields, routing by explicit category — usually belongs in code, not in a model call. Saying so in the mapping is a design decision to defend, and reviewers respect it; see [When a workflow beats an agent](/learn/agentic-ai/when-not-to-use-an-agent).

**Related:** [Designing the AI behavior contract](/learn/ai-for-designers/designing-the-ai-behavior-contract), [AI feature state model: a worked example](/learn/ai-for-designers/ai-feature-state-model-worked-example)

## Next

Turn the mapping into states in [AI feature state model: a worked example](/learn/ai-for-designers/ai-feature-state-model-worked-example).
