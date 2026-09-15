---
title: "The automation landscape: deterministic to agentic"
track: "ai-automation-ops"
status: live
summary: "Map the spectrum from deterministic workflows to agentic automation, and learn why most operations work should stay on the deterministic end."
duration: "11 min read"
---

Operations teams are being sold "AI automation" as a single thing. It is at least three different things with different failure modes, costs, and maintenance burdens — and the most common mistake is reaching for the agentic end when the deterministic end would do.

## The three tiers

**Tier 1 — Deterministic workflow automation.** Trigger → fixed steps → done. The invoice arrives, fields get extracted by a parser, rules route it, an approval email goes out. No model involved — or a model used only inside one narrow step. These systems fail predictably (a connector breaks, a format changes), are trivially auditable (every run is a log of concrete steps), and are owned like any other integration.

**Tier 2 — LLM-in-the-loop workflows.** Same deterministic skeleton, but specific steps call a model: classify this ticket, extract these fields, draft this reply, summarize this thread. The workflow's *structure* stays fixed; the model handles the steps where judgment — not computation — is the requirement. This is where most real value lives today.

**Tier 3 — Agentic automation.** The model decides the steps: which tools to call, in what order, when to stop. Appropriate for genuinely open-ended tasks (research, investigation, multi-system diagnosis) and inappropriate for anything that must run the same way every time — an agent that *usually* routes invoices correctly is a liability, not an automation.

## The default rule

Automate deterministically until you hit a step that requires judgment; put a model in that step only; keep the orchestration deterministic. Agents are for tasks where the *path* is unknown, not for tasks where only the *content* varies.

A useful test per step: **can I write the rule?** If yes, write the rule — it's cheaper, faster, and auditable. If the step requires reading tone, extracting intent, or drafting prose, that's the LLM's step. If no fixed sequence of steps exists at all, *then* consider an agent — and read [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries) before letting it act.

## What this track covers

Choosing where AI belongs in a workflow, the platform landscape (n8n, Zapier, Make, Pipedream), the four LLM-step patterns, approval gates, auditability, and maintenance — ending in a lab where you design a real ops automation step by step.

**Related:** [Where AI belongs in a workflow](/learn/ai-automation-ops/where-ai-belongs-in-a-workflow), [Workflow platforms compared](/learn/ai-automation-ops/workflow-platforms-compared), [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries)
