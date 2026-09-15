---
title: "Lab: design an ops automation"
track: "ai-automation-ops"
status: live
summary: "Design a complete operations automation — step decomposition, AI-vs-rule decisions, approval gates, audit design, and a maintenance plan — on a realistic scenario."
duration: "25 min read"
sources: []
---

This lab runs the whole track on one realistic process: **inbound invoice triage** for a mid-size company. Invoices arrive by email in every format; each must be parsed, matched to a PO, routed for approval, and logged — about 200 a week. Design the automation; don't build it yet. The design artifact is the deliverable.

## Step 1 — Decompose the process

List every step between "email lands" and "invoice paid or escalated." A reasonable decomposition:

1. Receive email, extract attachment(s)
2. Identify document type (invoice vs receipt vs spam)
3. Extract fields: vendor, amount, date, PO reference, line items
4. Validate: is the vendor known? does the PO exist? does the amount match the PO?
5. Route: auto-approve (small, matched), route to approver (mismatch or large), or escalate (unparseable)
6. Log to the system of record
7. Confirm receipt to the sender

## Step 2 — Apply the judgment test per step

Using the test from [Where AI belongs](/learn/ai-automation-ops/where-ai-belongs-in-a-workflow):

- Steps 1, 4, 6, 7 → **deterministic.** File handling, database lookups, matching rules, system writes, templated confirmation. No judgment required — no model allowed.
- Steps 2, 3 → **model steps.** Document-type classification and field extraction — the judgment kernels. Constrained output for step 2 (enum), schema extraction for step 3.
- Step 5 → **deterministic routing** on validated outputs. The model recommends nothing here; rules decide on the extracted, validated data.

Notice what this produces: an "AI automation" where models touch two of seven steps. That's the correct shape.

## Step 3 — Place the act boundary and approval gates

The send-anything and pay-anything steps cross the boundary. Design: auto-approve only when the invoice matches a known PO within a tolerance and sits under a threshold — encode both in rules, not in the prompt. Everything else pauses for a named approver who sees the extracted fields *alongside the source document*, per [Approvals and human-in-the-loop](/learn/ai-automation-ops/approvals-and-human-in-the-loop). Timeout: hold and alert, never auto-send.

## Step 4 — Specify validation and fallbacks

Per [LLM steps in automation](/learn/ai-automation-ops/llm-steps-in-automation): classification output constrained to the enum; extraction schema with types; every extracted field checked against systems of record; invalid/unparseable → human queue with the raw document attached. Idempotency key: message-ID + attachment hash — retries must not double-log invoices.

## Step 5 — Design the audit and maintenance plan

Define the run record (inputs, outputs, decisions, approvals, versions) per [Auditability](/learn/ai-automation-ops/auditability-and-run-history); pick the platform per the [comparison](/learn/ai-automation-ops/workflow-platforms-compared) — justify the choice on hosting, connectors (email, ERP/accounting, Slack), and volume pricing; and write the maintenance plan from [Maintaining automations](/learn/ai-automation-ops/maintaining-automations): owner, monitoring checks (step errors, routing distribution, weekly sample audit), and quarterly review.

## The grading rubric

A passing design: models appear only at judgment steps; every model output is validated before use; the approval gate shows evidence and has a safe timeout; dedupe makes retries safe; the audit record answers "why did it do that" for any run; and a named human owns the drift. If your design can't say which step is most likely to rot first, it's not done.

**Related:** [Where AI belongs in a workflow](/learn/ai-automation-ops/where-ai-belongs-in-a-workflow), [Approvals and human-in-the-loop](/learn/ai-automation-ops/approvals-and-human-in-the-loop), [Auditability and run history](/learn/ai-automation-ops/auditability-and-run-history)
