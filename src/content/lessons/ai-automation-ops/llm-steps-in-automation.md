---
title: "LLM steps in automation"
track: "ai-automation-ops"
status: live
summary: "The four LLM-in-workflow patterns — classify, extract, draft, route — with the validation each one needs before its output touches a downstream system."
duration: "11 min read"
sources: []
---

Inside a deterministic workflow, an LLM step is just a function call with a strange contract: text in, judgment out, sometimes wrong. Four patterns cover nearly every real use; each has a required validation counterpart.

## Pattern 1: Classify

Model assigns one of a fixed set of labels: ticket → queue, email → intent, document → type.

- **Contract:** output must be exactly one of N labels — enforce with a constrained output (schema/enum), not a prompt plea. The technique in [Get reliable JSON out of an LLM](/guides/get-reliable-json-out-of-an-llm) applies directly.
- **Validation:** reject anything not in the enum; route low-confidence or invalid outputs to a "needs review" queue rather than guessing.
- **Failure mode:** the model invents a plausible-sounding thirteenth category. Constrained decoding prevents it entirely.

## Pattern 2: Extract

Model pulls structured fields from unstructured input: invoice → {vendor, amount, date, PO}.

- **Contract:** a schema with types and required fields — `amount` is a number or null, never "about $500".
- **Validation:** type-check every field; cross-check extracted values against sources of truth (does this PO exist? is this vendor in the system?); a null with a reason beats a hallucinated value.
- **Failure mode:** confident extraction of a field that isn't in the document. Keep the raw text alongside the extraction so reviewers can spot-check.

## Pattern 3: Draft

Model writes text a human will review: reply draft, status summary, escalation note.

- **Contract:** output is a *draft artifact*, never a send. The workflow's send step must require an approval event — see [Approvals and human-in-the-loop](/learn/ai-automation-ops/approvals-and-human-in-the-loop).
- **Validation:** lint for banned content (commitments, prices, dates the model invented); check length and required sections; attach the source material the draft was based on.
- **Failure mode:** a fluent draft containing a wrong figure nobody catches because it reads well. Fact-bearing fields deserve extraction-style checks even inside prose.

## Pattern 4: Route by meaning

Model chooses among options by semantics, not keywords: "which runbook applies," "which team owns this."

- **Contract:** pick from a closed list, plus an explicit "none/unsure" option — forcing a choice among N options when the right answer is "none of these" manufactures misroutes.
- **Validation:** log the choice and the alternatives considered; sample-audit routing decisions weekly until accuracy is proven.

## The universal rules

- **Every LLM step gets a fallback.** Invalid output, timeout, or low confidence → deterministic default or human queue, never a silent guess.
- **Log inputs and outputs.** You cannot audit, debug, or improve a step you didn't record — see [Auditability and run history](/learn/ai-automation-ops/auditability-and-run-history).
- **Version the prompt with the workflow.** A workflow whose prompt lives in someone's scratch doc is unmaintainable.

**Related:** [Where AI belongs in a workflow](/learn/ai-automation-ops/where-ai-belongs-in-a-workflow), [Get reliable JSON out of an LLM](/guides/get-reliable-json-out-of-an-llm), [Auditability and run history](/learn/ai-automation-ops/auditability-and-run-history)
