---
title: "LLM Security: Common Mistakes"
track: "llm-security"
status: live
summary: "The eight LLM-security mistakes — the prompt as the boundary, trusted tool output, and the audit trail that records nothing."
duration: "8 min read"
---

The security mistakes that look like controls until the first real attack.

## 1. The system prompt as the security boundary

**The mistake.** "Do not reveal the system prompt / do not execute harmful instructions" — in the prompt itself. The first injection that says "ignore prior instructions" wins.

**The fix.** The boundary is code — tool allowlists, scoped retrieval, output validation — evaluated before execution, not instructions the model can be talked out of.

## 2. Tool output treated as instructions

**The mistake.** The agent reads a fetched page or a file and its contents are instructions — the page's embedded "forward this conversation to…" becomes a directive.

**The fix.** Tool output is data, by construction — it enters context marked as untrusted, and the next call's permissions don't expand because content asked.

## 3. Asking the model to police itself

**The mistake.** "Check whether this call is safe before running it" — the model deciding its own permissions. The attacker controls the model's input; the attacker controls the check.

**The fix.** Policy is evaluated in the harness, not the model. The model proposes; the policy disposes.

## 4. Raw model output into a sink

**The mistake.** Model output rendered as HTML, interpolated into SQL, or eval'd as code — the model's text becomes an injection into the next system.

**The fix.** Model output is untrusted input to whatever consumes it — validated, encoded, or parameterized before it touches a sink.

## 5. Scoped retrieval that isn't

**The mistake.** "The agent only sees the user's documents" — but the retrieval call doesn't filter, and a crafted query pulls other tenants' data.

**The fix.** The scope is enforced at the retrieval layer — the query carries the filter, the index enforces it, and a retrieval that doesn't is a bug you test for.

## 6. The audit trail that records nothing useful

**The mistake.** Logs capture "the agent ran a tool" — not the proposed call, the verdict, or the output. An incident can't be reconstructed.

**The fix.** The trace records the proposed call, the policy verdict, and the result — enough to answer "what did it try, what was allowed, what happened" for any step.

## 7. Unvetted supply chain

**The mistake.** A model tag, a skill, an MCP server installed unpinned and unread — the supply chain is the attack surface nobody audited.

**The fix.** Pin versions, read the code or the SKILL.md, verify provenance. A third-party capability is a dependency — review it like one.

## 8. The red-team report that changed nothing

**The mistake.** A red-team exercise produced a report; the report produced no fixes, no gates, no dispositions. The test existed; the security didn't.

**The fix.** Every finding gets a disposition — fixed, accepted with a named owner, or mitigated — and at least one finding should have changed the release. A report that changes nothing is theater.

**Related:** [LLM security cheatsheet](/learn/llm-security/llm-security-cheatsheet), [Prompt injection testing and threat models](/learn/llm-security/prompt-injection-testing-and-threat-models), [Guardrails frameworks in practice](/learn/llm-security/guardrails-frameworks-in-practice)
