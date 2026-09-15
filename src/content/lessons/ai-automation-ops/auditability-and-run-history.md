---
title: "Auditability and run history"
track: "ai-automation-ops"
status: live
summary: "Make automations auditable — run logs that answer 'what happened and why', replayability, idempotent design, and the records an AI-assisted workflow must keep."
duration: "10 min read"
sources: []
---

"Why did the system do that?" is the question every automation eventually faces — from an auditor, a customer, or your own team at 2am. An automation you cannot answer for is an automation you don't control. Auditability is a design property, not a logging afterthought.

## What an auditable run records

Per run, per step:

- **Inputs** — the trigger payload and each step's input, verbatim. For LLM steps: the exact prompt (resolved, not the template) and the model identifier.
- **Outputs** — what each step produced, including invalid LLM output that validation rejected — the rejected values are often the diagnostic gold.
- **Decisions** — which branch ran and why (the rule that fired, the validation that passed or failed, the confidence threshold applied).
- **Human actions** — approvals, rejections, edits, with identity and timestamp — see [Approvals and human-in-the-loop](/learn/ai-automation-ops/approvals-and-human-in-the-loop).
- **Versions** — which workflow version, which prompt version, which model. "It behaved differently last month" is unanswerable without these.

The platforms provide run history natively — one of the genuine reasons to use n8n/Zapier/Make/Pipedream over hand-rolled glue (see [Workflow platforms compared](/learn/ai-automation-ops/workflow-platforms-compared)). Verify retention limits and export options: a run history you can't export is a run history you'll lose.

## Idempotency: the property that makes reruns safe

A step is idempotent when running it twice has the same effect as running it once. Workflows get retried — by the platform, by you debugging, by a trigger that fires twice. Non-idempotent steps (create invoice, send email, post message) turn retries into duplicates. The discipline: dedupe on a stable key (message ID, document hash, invoice number) before any create/send step; design actions as upserts where possible. The deeper treatment is in [Webhooks, idempotency, and retries](/roles/forward-deployed-engineer/foundations/webhooks-idempotency-and-retries).

## Replay: the audit superpower

If every input is recorded, a past run can be replayed — against the same versions (to reproduce a bug) or new ones (to test a fix). This is the practical difference between "we think the new prompt is better" and "the new prompt fixed 11 of the 14 failures." Automations with LLM steps need replay more than most, because the model itself changes underneath you — a provider's model update can shift behavior with no change on your side, and replay over logged inputs is how you detect it.

## The minimum bar

If you do nothing else: log every LLM step's input and output, record the workflow and prompt versions, and keep run history exportable. Those three make every other audit question answerable.

**Related:** [LLM steps in automation](/learn/ai-automation-ops/llm-steps-in-automation), [Maintaining automations](/learn/ai-automation-ops/maintaining-automations), [Approvals and human-in-the-loop](/learn/ai-automation-ops/approvals-and-human-in-the-loop)
