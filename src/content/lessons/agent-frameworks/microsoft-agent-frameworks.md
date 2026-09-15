---
title: "Microsoft's agent frameworks: Semantic Kernel, AutoGen, and the convergence"
track: "agent-frameworks"
status: live
summary: "Microsoft's agent story is consolidation — Semantic Kernel's enterprise orchestration and AutoGen's multi-agent research are converging into the Microsoft Agent Framework, so read the current docs before choosing."
duration: "8 min read"
sources: ["semantic-kernel-docs", "autogen-docs"]
---

## The short answer

Microsoft has two agent-framework lineages that are merging into one.
**Semantic Kernel (SK)** is the enterprise SDK — C#-first with Python and
Java, built on plugins, planners, and enterprise plumbing — which grew
agent abstractions on top. **AutoGen** is Microsoft Research's multi-agent
framework — agents as *conversing* entities in group chats and round-robin
teams. The **Microsoft Agent Framework** is the announced convergence:
SK's enterprise base plus AutoGen's multi-agent patterns in one successor.
The practical guidance: the direction is consolidation, so verify which
framework the current docs point at before committing.

## The two lineages

- **Semantic Kernel** — the integration framework: plugins (functions and
  prompt packages), planners, filters, and connectors into the Microsoft
  ecosystem (Azure OpenAI, Entra auth, .NET). Its agent layer —
  `ChatCompletionAgent` and multi-agent orchestrations — rides that
  enterprise base. If your stack is .NET/Azure, SK is the native fit.
- **AutoGen** — the research framework: multi-agent *conversations* are
  the primitive — `AssistantAgent`s and `UserProxyAgent`s exchanging
  messages in rounds, GroupChat for teams, code execution for
  tool-work. AutoGen went through a ground-up redesign (0.2's
  conversation-centric API → 0.4's async, event-driven Core/AgentChat
  split), which is the history lesson: the project prioritized the
  research idea over API stability.

```python
# AutoGen (AgentChat): agents as conversing entities
assistant = AssistantAgent("assistant", model_client=client)
team = RoundRobinGroupChat([assistant, critic], termination_condition=...)
await team.run(task="Draft the migration plan.")
```

## What the convergence means for a chooser

Don't pick between SK and AutoGen on 2023-era tutorials — pick on the
*current* docs. The announced direction is a single framework carrying
SK's enterprise plumbing and AutoGen's orchestration patterns; code
written for the retiring APIs becomes migration debt. That volatility is
the honest caveat for the whole Microsoft lane: capability is real, API
stability has been the price.

## When plain code is enough

Plain code wins when you're not in the Microsoft ecosystem — SK's value is
largely Azure/.NET integration, and AutoGen's is conversational multi-agent
research; outside those shapes the raw loop is simpler. Inside the
ecosystem, reach for it when you need the enterprise plumbing (auth,
connectors, .NET hosting) or genuinely conversational multi-agent work —
and check which successor framework the docs currently bless before
building on either lineage.

## The exercise

Find the current Microsoft Agent Framework docs and locate where AutoGen's
GroupChat pattern and SK's plugin model landed — tracing the migration map
is the skill this ecosystem actually demands.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — the loop under both lineages.
- [Multi-agent patterns](/learn/agentic-ai/multi-agent-patterns) — GroupChat is one topology of several.
- [Choosing an agent framework](/learn/agentic-ai/choosing-an-agent-framework) — the criteria Microsoft's churn tests.
