---
title: "Worked Example: An Invoice-Triage Automation That Earned Its Autonomy"
track: "ai-automation-ops"
status: live
summary: "An ops workflow walked from manual to gated to autonomous — where the LLM step went, where the approval stayed, and the audit trail that made it trustworthy."
duration: "10 min read"
---

The right autonomy level is earned, not assumed. This example walks an invoice-triage workflow through the stages — and the measurement that decided how much autonomy it got.

## The workflow

Incoming vendor invoices arrive by email → extract fields → classify (approve / query / escalate) → route to the right queue → log the decision. Previously a person did all of it; the team wants automation.

## Stage 1: the assist version

The automation drafts, the human decides. An LLM extracts `vendor`, `amount`, `date`, `line_items` from the email + PDF; a second step drafts the classification with reasoning. The human sees the draft and confirms. Every run logged: input, extraction, draft, human decision.

**What this stage buys:** real accuracy data on the extraction and classification — measured on 200 real invoices, not assumed.

## Stage 2: the data

After 200 runs: extraction accuracy 97% (the failures are mostly scanned-PDF OCR), classification agreement with the human 91% — and the disagreements cluster in one class (`query` vs `escalate` on amounts over a threshold).

The measured facts decide the design:

- **Extraction is reliable** — automate it fully, with an OCR-quality flag for the scan cases.
- **The approve/query boundary is reliable** — amounts under the threshold auto-approve.
- **The query/escalate boundary isn't** — over the threshold stays human-decided.

## Stage 3: the gated version

- Extract: automatic, OCR-flagged items routed to human.
- Classify: LLM drafts; under-threshold auto-approves, over-threshold requires human sign-off.
- Route + log: automatic, every decision reconstructable.

The approval gate sits exactly where the data showed the errors — not on every step (approval theater), not nowhere (unearned autonomy).

## What each stage produced

- **Stage 1** produced the data — you can't measure what you don't run.
- **Stage 2** produced the boundary — the gate placement is a measurement, not a guess.
- **Stage 3** produced the trustworthy version — autonomy where accuracy was proven, judgment where it wasn't.

## The check

An automation's autonomy should be traceable to a measured error rate on real data. "We trust it" without the numbers is stage-0 thinking; "the approve/query boundary measured 91%, so over-threshold stays human" is stage-3.

**Related:** [Automation ops cheatsheet](/learn/ai-automation-ops/automation-ops-cheatsheet), [Automation mistakes](/learn/ai-automation-ops/automation-ops-mistakes), [Approvals and human-in-the-loop](/learn/ai-automation-ops/approvals-and-human-in-the-loop), [LLM steps in automation](/learn/ai-automation-ops/llm-steps-in-automation)
