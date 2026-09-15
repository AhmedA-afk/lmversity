---
title: "Audit logs, approval records, and data deletion: the accountability layer"
track: "llm-security"
status: live
summary: "Security operations for AI systems need an evidence trail — tamper-resistant audit logs of model calls and tool actions, recorded human approvals, incident handling, and deletion paths that actually delete."
duration: "8 min read"
---

## The short answer

The layers so far prevent and contain — this one answers "how do you
prove what happened." AI systems need an **audit trail** that
reconstructs decisions: which model/version answered, with what prompt
version, which tools it invoked and what they did, which guardrails
fired, which human approved. Combined with **approval records**,
**incident handling**, and **deletion paths** that genuinely delete —
from primary stores *and* from logs, traces, and fine-tuning corpora —
it's the difference between a system you operate and a system you can
account for.

## What goes in the audit log

Not every request — the *decision events*:

- **Model calls** — model+version, prompt version, input/output hashes
  (not necessarily full text — retention policy decides), latency.
- **Tool invocations** — what was called, with what arguments, under
  whose authority, and the result — the execution record a
  [confused-deputy](/learn/tools-function-calling/the-authority-problem)
  investigation needs.
- **Policy decisions** — moderation flags, guardrail blocks,
  [approval-gate](/learn/tools-function-calling/approval-gates-design)
  grants and denials: *who or what allowed this action*.
- **Administrative events** — config changes, prompt deploys, permission
  grants — the changes that alter future behavior.

Two properties make a log an *audit* log: **tamper-resistance** (append-only
or integrity-checked — a log the admin can quietly edit is a diary, not
evidence) and **retention by policy** (kept long enough for
investigations and compliance, deleted on schedule — see
[data retention](/learn/production/data-retention-and-privacy-policy)).

## Approval records

When a human gate approves a consequential action — a refund, a send, a
deployment — the approval is itself a record: who, when, on what
evidence (the model's reasoning summary, the proposed action), and with
what scope. "Approved by ops" without the *what they saw* is worthless
in a dispute; the record has to reconstruct the approver's view at
decision time, not the action's aftermath.

## Incidents and deletion

- **Incident handling** — AI incidents have their own shape: a model
  update quietly degraded quality, an injected document drove tool
  calls, an eval regression shipped. The
  [postmortem practice](/learn/production/incident-postmortems-for-ai)
  plus an audit trail that can answer "when did behavior change and what
  changed it" is the difference between a two-hour investigation and a
  two-week one.
- **Deletion that deletes** — user data lives in more places than the
  database: logs, [observability traces](/learn/production/llm-observability-foundations),
  eval datasets promoted from production, caches, backups, and
  fine-tuning corpora. A deletion request that only hits the primary
  store is a compliance story, not a deletion. The audit trail should
  record deletion events too — proof the policy ran.

## The honest limits

Logging decisions is cheap; making them *investigable* is the real cost —
an audit log nobody can query, or one that logs hashes where the
investigation needed content, is a checkbox. And retention cuts both
ways: every log you keep is data you must protect and eventually delete,
so the audit surface itself needs a data policy.

## The exercise

Pick one past production action and try to reconstruct it from your logs:
model version, prompt version, tool calls, approvals, outcome. Every
question you can't answer is a missing audit event.

## Go deeper

- [Incident postmortems for AI](/learn/production/incident-postmortems-for-ai) — the investigation practice.
- [Data retention and privacy policy](/learn/production/data-retention-and-privacy-policy) — retention and deletion policy.
- [LLM observability foundations](/learn/production/llm-observability-foundations) — traces as operational records.
