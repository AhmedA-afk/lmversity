---
title: "Sandboxing code execution and browser use"
track: "llm-security"
status: live
summary: "When a model runs code or drives a browser, the blast radius is real — sandboxing means treating model-issued actions as untrusted: isolated execution, scoped credentials, egress control, and hard timeouts."
duration: "9 min read"
sources: ["e2b-docs"]
---

## The short answer

The moment a model's output executes — a generated Python cell, a shell
command, a browser session clicking through the web — the threat model
changes from *bad text* to *real actions*. Sandboxing is the discipline
of treating every model-issued action as untrusted input: run code in
isolated environments (microVM or container sandboxes like E2B-class
services), give browser agents scoped sessions and scoped credentials,
cap egress and lifetime, and never let the execution environment share
secrets or network trust with the rest of your system.

## Why the model's actions are untrusted

Even with no attacker, models write buggy code and click the wrong
element. With an attacker, [prompt injection](/learn/tools-function-calling/tool-results-as-injection-vector)
turns a code-execution or browser tool into remote-controlled actions:
the webpage the browser visits can contain instructions for the agent
viewing it — the indirect-injection pattern where the *content* attacks
the *agent reading it*. A sandbox assumes compromise and asks "what's
reachable if the model is fully controlled by hostile input" — if the
answer is "the sandbox filesystem and nothing else," the architecture is
right.

## The sandboxing checklist

- **Isolation** — a separate environment per execution: microVMs (E2B,
  Firecracker-class), containers with no shared mounts, or at minimum a
  restricted subprocess. The agent's environment should be able to burn
  completely without taking anything with it.
- **Scoped credentials** — no ambient cloud roles, no SSH keys, no
  provider secrets beyond what the task needs; a browser agent gets a
  throwaway session, not your logged-in profile — the
  [confused-deputy](/learn/tools-function-calling/the-authority-problem)
  pattern applied to execution environments.
- **Egress control** — code-execution sandboxes are also exfiltration
  endpoints: a compromised agent that can `curl` anywhere can ship your
  data anywhere. Network policies — allowlisted domains or no network —
  close the quietest hole.
- **Resource limits and timeouts** — CPU/memory caps and hard lifetimes
  bound both accidents and attacks; an agent environment that runs
  forever is an unbounded consumption risk.
- **Action audit** — log what the sandbox was asked to do and what it
  did; execution actions belong in the same
  [audit trail](/learn/llm-security/audit-logs-and-accountability) as
  tool calls.

## Browser use: the special case

A browser agent faces the worst version of indirect injection — its
entire input channel is untrusted content, and its action channel is
authenticated browsing. The controls tighten accordingly: dedicated
browser profiles, no saved credentials for sensitive sites, domain
allowlists for high-value actions, and
[approval gates](/learn/tools-function-calling/approval-gates-design)
before consequential steps (purchases, submissions, sends).

## The honest limits

Sandboxing contains execution — it doesn't make the agent's *decisions*
safe. A sandboxed agent can still be manipulated into exfiltrating data
it legitimately accessed, or into performing its allowed actions on
hostile input's behalf. Containment limits the blast radius; judgment
about *which* actions to allow still lives in
[authorization](/learn/tools-function-calling/the-authority-problem) and
[guardrails](/learn/llm-security/guardrails-frameworks-in-practice).

## The exercise

Take your code-execution or browser tool and answer: if the model were
fully adversarial for one hour, what could it reach? List filesystem,
network, credentials, and actions — then remove everything the task
doesn't strictly need. What's left is your sandbox spec.

## Go deeper

- [The authority problem](/learn/tools-function-calling/the-authority-problem) — the credential side of the same issue.
- [Prompt-injection testing and threat models](/learn/llm-security/prompt-injection-testing-and-threat-models) — testing the containment.
- [OWASP Top 10 for LLM and agentic apps](/learn/llm-security/owasp-llm-and-agentic-top-10) — "excessive agency" in the taxonomy.
