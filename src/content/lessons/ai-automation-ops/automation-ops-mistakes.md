---
title: "AI Automation for Ops: Common Mistakes"
track: "ai-automation-ops"
status: live
summary: "The eight automation mistakes — LLMs where rules belong, approval theater, and runs nobody can reconstruct."
duration: "8 min read"
---

The ops-automation mistakes that turn a timesaver into an unaccountable system.

## 1. An LLM where a rule belongs

**The mistake.** "Classify priority as high/medium/low" where the rules are known — an LLM call per ticket at nonzero cost and error, for what a lookup table does deterministically.

**The fix.** If the logic can be written as rules, write it as rules. LLMs are for judgment on unstructured input — the rest is plumbing.

## 2. Approval theater

**The mistake.** A gate on every step — the operator approves 40 runs a day, stops reading them, and the "human in the loop" is a rubber stamp.

**The fix.** Gates sized to blast radius: irreversible/external effects get gates; reversible internal steps run. An approval the operator doesn't read is worse than none — it looks like control without being it.

## 3. No run history

**The mistake.** The automation runs, produces an output, and the record is the output — not the inputs, decisions, or model calls that produced it.

**The fix.** Every run logs inputs, outputs, and the decision path. When the output is wrong, "why" is a lookup, not an archaeology project.

## 4. A retried run that double-acts

**The mistake.** The workflow retries a failed step — and the step that actually succeeded sends the email twice, files the ticket twice, charges twice.

**The fix.** Idempotency keys on every effect; the retry checks "did this already happen" before acting. A retried side effect should be a no-op, not a duplicate.

## 5. Silent drift

**The mistake.** The upstream form adds a field, the API changes a shape — the automation keeps running on stale assumptions, output quietly wrong.

**The fix.** Output-shape monitoring: assert the expected fields exist, alert on their absence. The automation that degrades loudly gets fixed; the one that degrades silently gets trusted.

## 6. Editing the prompt in the platform UI

**The mistake.** The AI step's instructions edited live in Zapier/n8n/Make — no review, no test, no rollback.

**The fix.** The prompt is code: versioned, reviewed, tested on a fixture before it ships. A UI edit is a deploy — treat it like one.

## 7. Automating the judgment you haven't validated

**The mistake.** The AI step's accuracy is assumed because the demo worked — at scale, a 5% error rate on 1,000 daily items is 50 daily mistakes.

**The fix.** Sample-audit the output before removing review; measure the error rate on real data, then decide the autonomy level the rate supports.

## 8. No owner

**The mistake.** The automation belongs to "the platform" — which is to say, nobody; when it breaks, nobody's job is fixing it.

**The fix.** Every automation names an owner — a person or team accountable for it working. Unowned automation is abandoned automation that hasn't stopped yet.

**Related:** [Automation ops cheatsheet](/learn/ai-automation-ops/automation-ops-cheatsheet), [Maintaining automations](/learn/ai-automation-ops/maintaining-automations), [Auditability and run history](/learn/ai-automation-ops/auditability-and-run-history)
