---
title: "What is an agent loop?"
description: "An agent loop is the repeated cycle an AI agent runs — sense the current state, decide the next action, execute it, and sense again — until the task finishes or a stop condition fires."
intent: definition
updated: "2026-09-16"
featured: true
faq:
  - q: "How is an agent loop different from a workflow?"
    a: "A workflow runs a fixed sequence of steps written in advance — step two always follows step one. An agent loop decides at runtime how many iterations to run and which tools to call, based on what each step actually returns. That runtime adaptability is what lets an agent recover from a failed search or a still-failing test without a hand-coded branch — and it is also what makes the loop cost unpredictable."
  - q: "What stops an agent loop?"
    a: "Explicit stop conditions, layered: the model judging the goal reached, a hard cap on iterations, a cap on tool calls or token budget, a no-progress detector that halts repeated identical failures, and a human-handoff path for high-stakes or stuck situations. 'The model decides when it is done' alone is not enough — a confused loop either spins forever or declares victory early."
  - q: "Is the agent loop the same as ReAct?"
    a: "ReAct is one way to make the loop explicit: the model writes out its reasoning between actions instead of jumping straight to a tool call. The underlying sense-think-act cycle is the same either way — ReAct just exposes the 'think' step as text you can inspect."
  - q: "Does every LLM feature need an agent loop?"
    a: "No. If the task has no uncertain intermediate steps and no tool output to react to, a fixed sequence of calls is cheaper and more predictable. The loop earns its cost when the next step genuinely depends on what the last one returned."
related:
  - /learn/agentic-ai/the-agent-loop
  - /learn/agentic-ai/agent-loop-mistakes
  - /learn/agentic-ai/react-pattern
  - /learn/agentic-ai/when-not-to-use-an-agent
  - /learn/agentic-ai/autonomy-vs-control
  - /answers/what-is-an-ai-agent
  - /answers/what-is-agentic-ai
---

An agent loop is the repeated cycle an AI agent runs instead of answering once: it **senses** the current state, **thinks** about what to do next, **acts** — usually by calling a tool — then senses the result and goes again, until the task is finished or a stop condition ends it.

## The short version

- A single prompt produces one response; an agent produces a loop of response → action → observation → response.
- Every agent loop, whatever the framework, is the same three steps: read the state, decide the next move, execute it (a tool call, a file edit, an API request).
- The loop is what makes an agent an agent — the number of iterations and the choice of tools are decided at runtime, not scripted in advance.
- The loop's adaptability is also its cost: every iteration is tokens, latency, and a chance to wander off course — which is why stop conditions are designed as carefully as the loop itself.

## Why the loop matters more than the prompt

A workflow runs steps you wrote ahead of time. An agent loop handles what you couldn't foresee: the search that returns nothing useful gets retried with a different query, the failing test triggers a different fix, the ambiguous request triggers a clarifying question. A coding agent fixing a bug senses the test output, thinks about which line is wrong, edits the file, reruns the test, and senses the new result — that is the loop doing its job.

The same cycle is the engine behind every agentic product — coding agents, browsing agents, data pipelines that recover from errors — and most agent failures are loop failures: the retry that retries forever, the state that was never checkpointed, the tool error the model never sees.

## Where to go deeper

The cycle, its stop conditions, and when a fixed workflow beats it: [The Agent Loop: Sense, Think, Act](/learn/agentic-ai/the-agent-loop). The eight ways it fails in production: [Common Mistakes: Agent Loop Design](/learn/agentic-ai/agent-loop-mistakes).
