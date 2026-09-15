---
title: "Maintaining automations"
track: "ai-automation-ops"
status: live
summary: "Keep automations alive past week two — connector drift, prompt decay, model updates, monitoring, ownership, and the maintenance budget nobody plans for."
duration: "10 min read"
sources: []
---

Automations don't fail loudly; they rot quietly. The workflow that saved ten hours a week in month one is silently misrouting tickets by month four — and nobody notices because "it runs" gets confused with "it works." Maintenance is the cost center of automation; plan for it or lose the system.

## The four drift modes

**Connector drift.** The SaaS tools your workflow touches change APIs, auth, and field names on their own schedule. Platform vendors absorb most of it, but not all — a renamed Salesforce field or a deprecated endpoint breaks a step that looks fine in the editor. Monitor for step-level errors, not just whole-run failures; a silently-skipped branch is worse than a crash.

**Prompt decay.** The prompt that classified tickets well was tuned against last quarter's ticket distribution. New product, new issue types, new vocabulary — the input drifts and the prompt's assumptions don't. Prompt decay shows up as slowly-degrading accuracy, which is why you can't see it without measurement.

**Model drift.** Providers update models; a "stable" model name can resolve to a new snapshot, and behavior shifts with zero changes on your side. Pin model versions where the provider allows it; replay logged inputs after any version change (see [Auditability and run history](/learn/ai-automation-ops/auditability-and-run-history)) to detect drift before users do.

**Process drift.** The business process the automation encodes changes — new queue, new approval rule, new compliance requirement — and the workflow keeps executing the old process perfectly. The most dangerous drift is a *correctly running* automation doing the wrong thing.

## The monitoring that matters

- **Step-level error rates** — not run success; a workflow "succeeding" while skipping its LLM step is failing invisibly.
- **Output distribution checks** — if the classifier suddenly routes 80% to one queue, something drifted. Cheap statistical alerts on output distributions catch decay that step-level checks miss.
- **Sample audits** — a human reviews N outputs per week per LLM step. Automated checks can't catch "technically valid but actually wrong."
- **Approval-gate health** — timeout rates and rubber-stamp signals (approvals in seconds, no rejections ever) indicate the gate decayed socially.

## Ownership and the maintenance budget

Every automation needs a named owner — the person paged when it breaks and consulted when the process changes. "The team owns it" means nobody does. Budget ongoing time: a working estimate is that AI-assisted workflows need *more* maintenance than deterministic ones, not less, because they carry two extra drift modes (prompt and model). If a process isn't worth maintaining, it isn't worth automating — a dead automation that keeps running is worse than none.

Review cadence: quarterly for stable flows, monthly where inputs change fast. The review is a replay-and-audit exercise, not a meeting — pull the logs, check the distributions, re-run the eval sample.

**Related:** [Auditability and run history](/learn/ai-automation-ops/auditability-and-run-history), [LLM steps in automation](/learn/ai-automation-ops/llm-steps-in-automation), [Automation design lab](/learn/ai-automation-ops/automation-design-lab)
