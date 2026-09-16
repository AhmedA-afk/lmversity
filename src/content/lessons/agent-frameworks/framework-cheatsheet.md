---
title: "Agent Frameworks Cheatsheet"
track: "agent-frameworks"
status: live
summary: "The framework-selection table — which abstraction each one sells, where it leaks, and the questions that decide between them."
updated: "2026-09-16"
duration: "6 min read"
---

The agent-framework landscape compressed to what each one actually sells and the question that picks between them.

## What each sells

| Framework | The abstraction | Best when |
|---|---|---|
| Raw SDK | Nothing — the tool loop is yours | You want full control, small scope |
| LangGraph | Durable, graph-shaped agent state | Long-running, resumable, complex state |
| CrewAI | Role-based agent teams | Multi-agent with a familiar mental model |
| OpenAI Agents SDK | Hosted-loop primitives + guardrails | You're in the OpenAI ecosystem |
| Claude Agent SDK | The harness Claude Code runs on | You want the harness's affordances |
| PydanticAI | Typed, validated agent outputs | Correctness matters more than flexibility |
| Mastra | TypeScript-native agent framework | Your stack is TypeScript end to end |
| Agno | Performance-focused, AgentOS runtime | Latency and a serving runtime matter |
| Haystack | Pipeline + agent hybrid | Retrieval-heavy, pipeline-shaped tasks |
| LlamaIndex | Data framework with agents | The task is mostly about the data |

## The questions that decide

- **"What does it give me that the raw loop doesn't?"** — If the answer is "a config file," the framework is earning its cost only if the config is the hard part.
- **"Where does the abstraction leak?"** — Every framework has a task it can't express; the escape hatch's ugliness is the real price.
- **"What happens on a tool error?"** — Does the framework surface it to the model, retry it, or swallow it?
- **"Where does the state live?"** — In-process (lost on crash) or durable (resumable)?
- **"Can I see the loop?"** — Trace visibility decides whether you can debug a run or just observe it.

## The tradeoffs in one line each

- **Abstraction vs control** — every convenience is a decision the framework made for you.
- **Ecosystem lock-in** — the framework's primitives are the ones you'll build on; switching costs are real.
- **Maturity vs fit** — the most-used framework isn't the best for your task; the least-used might be unmaintained.
- **Hosted vs self-hosted** — a managed runtime is convenience plus a dependency.

## The mistakes to not make

- Picking the framework before the task is specified.
- Benchmarking on a demo the framework was designed to ace.
- Letting the framework's defaults become the system's behavior unexamined.

**Related:** [Framework selection project](/learn/agent-frameworks/framework-selection-project), [Framework mistakes](/learn/agent-frameworks/framework-mistakes), [Framework comparison and escape hatches](/learn/agent-frameworks/framework-comparison-and-escape-hatches), [Raw SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline)
