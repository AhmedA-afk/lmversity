---
title: "Where AI belongs in a workflow"
track: "ai-automation-ops"
status: live
summary: "Decide step by step which parts of an operations process need a model and which need a rule — the judgment test applied to real workflows."
duration: "10 min read"
sources: []
---

Take any operations process — invoice triage, ticket routing, onboarding paperwork, weekly reporting — and decompose it into steps. For each step, one question decides the implementation: **does this step require judgment, or just execution?**

## The judgment test

| Step type | Signal | Implementation |
|---|---|---|
| Deterministic | "If amount > X, route to Y" | Code/rule — never a model |
| Judgment | "Is this complaint actually about billing?" | Model step, with validation |
| Hybrid | "Extract the amount, then apply the limit" | Model extracts, code decides |

The hybrid case is the important one. Most "AI steps" are really a judgment-shaped kernel (read the document, find the amount) wrapped in deterministic checks (is it a number? is it plausible? does it match the PO?). Build it that way: model for the reading, code for the checking. The pattern is identical to [Output validation and moderation](/learn/genai-app-dev/output-validation-and-moderation) — the model proposes, deterministic code disposes.

## Where models earn their place

- **Classification** — route tickets, tag documents, triage inbound email. Cheap, fast, and the failure mode (a miscategorized item a human corrects) is recoverable.
- **Extraction** — pull structured fields from unstructured documents into a schema. Validate every extracted field downstream.
- **Drafting** — first drafts of replies, summaries, status updates that a human approves or edits. Never send unreviewed.
- **Routing by meaning** — "which of these twelve queues does this belong in" when keyword rules drown in synonyms.

## Where models don't belong

- **The decision to act** on money, access, or communication — a model may recommend; a rule or a human must approve.
- **Arithmetic and lookups** — anything a database query or a line of code does exactly.
- **Orchestration** — the model should not decide which steps run next in a process that has a correct order (see the [landscape lesson](/learn/ai-automation-ops/automation-landscape-deterministic-to-agentic)).

## The exercise

Take one real process you own. List every step. Mark each: rule, model, or hybrid. If you marked the whole process "AI," redo it — you've described a hope, not a design. The lab at the end of this track runs exactly this exercise: [Automation design lab](/learn/ai-automation-ops/automation-design-lab).

**Related:** [The automation landscape](/learn/ai-automation-ops/automation-landscape-deterministic-to-agentic), [LLM steps in automation](/learn/ai-automation-ops/llm-steps-in-automation), [Output validation and moderation](/learn/genai-app-dev/output-validation-and-moderation)
