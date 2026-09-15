---
title: "Approvals and human-in-the-loop"
track: "ai-automation-ops"
status: live
summary: "Design approval gates that actually gate — when automation must pause for a human, how to build the pause, and how to keep approvals from becoming rubber stamps."
duration: "10 min read"
sources: []
---

Every automation has an act boundary: the point where the system stops preparing and starts doing — sending the email, moving the money, changing the record. On the near side of that boundary, automation is safe to optimize; across it, you need a decision about who approves.

## Classify actions by reversibility and blast radius

| Action class | Examples | Approval posture |
|---|---|---|
| Internal, reversible | Tag a ticket, file a document, update a dashboard | Automate freely, sample-audit |
| External, reversible | Draft sent to a colleague's queue | Automate with review on exception |
| External, irreversible | Send to customer, post publicly, change a record of authority | Human approval gate |
| Irreversible + high blast | Payments, access grants, deletions, legal comms | Human approval + explicit policy |

The mistake is picking the posture once for the whole workflow. Per-step posture is the correct granularity: the same flow can auto-classify, auto-draft, and *require* approval to send.

## Building the pause

An approval gate is a workflow primitive, not a feature request: pause execution, present the artifact and its context to a human, wait for a decision, resume or branch on it. All the major platforms support this — a Slack message with approve/reject buttons, an email reply, a task in a queue. The requirements that matter:

- **Show the evidence.** The approver sees the model's output *and* what it was based on — the source document, the extracted fields, the confidence signal. An approve button next to a bare draft trains rubber-stamping.
- **Timeout with a safe default.** If nobody approves in N hours, what happens? "Do nothing and alert" is usually right; "send anyway" almost never is.
- **Record the decision.** Who approved, when, what they saw — the audit trail from [Auditability and run history](/learn/ai-automation-ops/auditability-and-run-history) must include the human step, not just the machine steps.

## Preventing rubber-stamp decay

Approval gates fail socially before they fail technically: volume rises, approvers stop reading, the gate becomes a delay rather than a control. Countermeasures: keep approval volume low by automating the safe classes aggressively (a gate that fires fifty times a day is already broken); rotate or sample-audit approver decisions so rubber-stamping is detectable; and surface disagreement — when the model's confidence was low and the human approved anyway in two seconds, that's the signal worth logging.

The design-side framing — which decisions deserve friction and how to show uncertainty — is covered in [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries); this lesson is the operations-side mechanics.

**Related:** [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries), [Auditability and run history](/learn/ai-automation-ops/auditability-and-run-history), [Automation design lab](/learn/ai-automation-ops/automation-design-lab)
