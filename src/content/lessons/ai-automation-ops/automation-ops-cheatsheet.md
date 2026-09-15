---
title: "AI Automation for Ops Cheatsheet"
track: "ai-automation-ops"
status: live
summary: "The ops-automation reference — where AI belongs in a workflow, which approval goes where, and the audit trail every run needs."
duration: "6 min read"
---

The ops-automation track compressed to the placement decision and the controls every automated run needs.

## Where AI belongs in a workflow

| The step is… | Automate with | Why |
|---|---|---|
| Deterministic, rule-expressible | A rule / script | LLMs are expensive and nondeterministic — don't spend them on `if` |
| Judgment on unstructured input | An LLM step | Classification, extraction, summarization — the actual fit |
| Irreversible / external-effect | Human approval gate | The blast radius exceeds the model's error budget |
| High-volume, low-stakes | Full automation | Errors are cheap and reviewable |
| Low-volume, high-stakes | AI drafts, human decides | The assist pattern, not autonomy |

## The controls every run needs

- **Approval gates** — named, durable, blocking; "notify" is not "approve."
- **Run history** — every execution logged with inputs, outputs, decisions, and duration.
- **Idempotent side effects** — a retried run doesn't double-send the email or double-file the ticket.
- **Rollback path** — the automation can be disabled without a deploy, and its effects are attributable.
- **An owner** — every automation names a team or person; unowned automation rots silently.

## The failure modes in one line each

- **AI step on structured data** — the LLM parses what a schema could, at 100× the cost and nonzero error.
- **No audit trail** — "the automation did it" with no record of what "it" was.
- **Approval fatigue** — gates on every step until the operator approves reflexively; the gate exists but the judgment doesn't.
- **Silent drift** — the workflow kept running while the upstream data shape changed; outputs degrade with no alarm.
- **Prompt change without a test** — the AI step's instructions edited in the platform UI, shipped without an eval.

## The decision rules

- If a rule expresses it, a rule runs it — LLMs for judgment, not plumbing.
- Every external effect passes a gate sized to its blast radius.
- Every run is reconstructable from the log — inputs, outputs, model decisions.
- Every automation degrades loudly — a monitor on output shape, not just uptime.

**Related:** [Where AI belongs in a workflow](/learn/ai-automation-ops/where-ai-belongs-in-a-workflow), [Approvals and human-in-the-loop](/learn/ai-automation-ops/approvals-and-human-in-the-loop), [Auditability and run history](/learn/ai-automation-ops/auditability-and-run-history), [Automation design lab](/learn/ai-automation-ops/automation-design-lab)
