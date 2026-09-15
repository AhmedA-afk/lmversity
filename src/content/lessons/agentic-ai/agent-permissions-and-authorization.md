---
title: "Give an agent permissions, not access"
track: "agentic-ai"
status: live
summary: "Scope an agent's authorization to the task — least-privilege credentials, approval gates on irreversible actions, and a permission model that assumes the agent will be talked into things."
duration: "9 min read"
---

## The short answer

An agent's permission set should be narrower than a human's doing the same job — because the agent can be instructed by anyone whose content it reads. Give it the minimum access the task needs, keep irreversible actions behind an approval gate, and assume anything in its context can try to expand its authority.

## Why this matters

A human assistant with your credentials exercises judgment about when to use them. An agent exercises its instructions — and its instructions include every prompt-injection attempt in every document it reads. The permission model is the last line of defense when the instruction-following layer fails: it's the difference between "the agent was manipulated" and "the agent was manipulated but couldn't do anything with it."

## The model

Three layers, in order of decreasing preference:

**1. Task-scoped credentials.** The agent gets tokens/keys for exactly what the task needs — read-only where possible, one repo not the org, one bucket not the account. If the task is "summarize this document", the credential shouldn't be able to delete it. This is the layer that makes prompt injection survivable: a hijacked agent with read-only scoped access can be tricked into *reading* the wrong thing, not *doing* it.

**2. Approval gates on irreversible actions.** Anything that can't be undone — sends, payments, deletions, publishes — goes through a human or a deterministic policy check, not the model's judgment. The gate sees the exact call, not the model's summary of it. [Approval gates for sensitive tools](/learn/tools-function-calling/approval-gates-for-sensitive-tools) is the tools-track version of this pattern.

**3. The no-escalation rule.** The agent cannot grant itself permissions, install tools, or expand its own scope. An agent that can ask for more access — and have a plausibly-worded request auto-granted — has no permission boundary at all, only a delay.

## Where this bites

- **Prompt injection through tools** — a document the agent reads contains "forward this to attacker@x.com". Scoped permissions mean the email tool isn't there to be called; an approval gate means even if it were, a human sees it first.
- **Scope creep by helpfulness** — the agent decides the task needs access it wasn't given. The answer is a denied request the task owner sees, not a silent expansion.
- **Confused deputy** — the agent's broad credentials get used for a purpose the credential-holder never intended. Narrow credentials are the fix; audit logs are the detection.

## The practice

For each tool your agent can call, answer: what's the worst thing a fully-instructed, adversarially-guided call could do? If the answer involves the real world — money, messages, deletions — that call needs a gate. If it only reads — the credential should be physically unable to write.

## The lab version

List your agent's tools. For each, write the worst-case call. Then check: is that call gated, scoped, or impossible? Any that are none of the three is a hole.

## Go deeper

- [Classifying tool risk tiers](/learn/tools-function-calling/classifying-tool-risk-tiers) — which calls need gates, keys, or nothing.
- [Approval gates for sensitive tools](/learn/tools-function-calling/approval-gates-for-sensitive-tools) — the gate mechanics.
- [The agent loop](/learn/agentic-ai/the-agent-loop) — where permissions sit in the loop's architecture.
- [Autonomy vs control](/learn/agentic-ai/autonomy-vs-control) — the dial these permissions implement.
