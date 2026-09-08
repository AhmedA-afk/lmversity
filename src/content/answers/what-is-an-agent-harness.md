---
title: "What is a harness in AI? The agent harness, explained"
description: "An agent harness is the code around an LLM that gives it tools, memory, permissions, and stop conditions — the part that turns a model into a working agent."
intent: definition
updated: "2026-09-08"
featured: true
faq:
  - q: "What is the difference between a harness and a framework?"
    a: "A framework is a library you import to help build a harness — it gives you pre-built pieces for tool calling, memory, or orchestration. A harness is the actual running system for one product: its specific tools, prompts, permissions, and stop conditions, whether built with a framework or from scratch."
  - q: "What is the difference between a harness and an agent?"
    a: "The agent is the behavior you observe: a model calling tools in a loop to pursue a goal. The harness is the infrastructure that makes that behavior possible and safe — the loop itself, the sandboxing, the logging, and the rules the model cannot override."
  - q: "Why do people say the model is only 20% of the problem?"
    a: "Because two products built on the same underlying model can behave completely differently depending on the harness around it — what tools it has, how errors are handled, what it's allowed to do without asking, and how failures are caught. The harness accounts for most of the difference in reliability."
  - q: "Does Claude Code have a harness?"
    a: "Yes. Claude Code's harness handles tool execution, permission prompts, file-editing safety, context management, and session state around the underlying Claude model. Check Anthropic's documentation for the current details of how it's implemented."
  - q: "Can a good harness fix a weak model?"
    a: "Only partly. A harness can catch failures, retry with better context, add verification steps, and constrain what a model is allowed to do, which measurably improves reliability. It cannot substitute for the model's underlying reasoning or knowledge."
related:
  - /learn/harness-design
  - /learn/harness-design/what-is-a-harness
  - /learn/harness-design/hooks-as-extension-points
  - /learn/harness-design/harness-observability
  - /learn/agentic-ai
  - /learn/agentic-ai/the-agent-loop
  - /blog/agents-need-a-harness
---

A harness is the code that surrounds a language model and turns it into a working agent: the
loop that calls the model, executes the tools it requests, tracks state across turns, enforces
what it's allowed to do, decides when it's done, and retries or halts when something goes wrong.
The model generates text; the harness is everything that makes that text into useful, bounded
action.

## The short version

- A harness is infrastructure, not intelligence — it doesn't reason, it constrains and coordinates.
- Its core jobs: tool execution, state and memory across turns, permissions, stopping conditions, retries, evaluation, and observability.
- Two products on the same base model can behave very differently because of harness differences, which is the practical meaning of "the model is 20% of the problem."
- A framework is a reusable library for building harnesses; a harness is the specific, running system for one product.
- An agent is the observed behavior; the harness is the machinery that produces it safely.

## Why the harness matters more than it looks

It's tempting to think a chatbot product is "just the model." In practice, once a model is
given tools and allowed to run in a loop — the definition of an agent — almost everything that
determines whether it's useful or dangerous lives outside the model weights. What tools does
it have, and how well are they described? What happens when a tool call fails? How much of the
conversation history survives into the next turn? Is it allowed to delete a file, or does it
need to ask first? How does the system know when to stop calling tools and give a final answer?
None of that is decided by the model itself — it's decided by the harness. This is the basis
for the common engineering shorthand that the model is roughly 20% of building a working agent
product; the other 80% is the surrounding system.

## The parts that make up a harness

**Tools.** The functions the model can call, and the schemas that describe them. A harness
defines what's available, executes the actual call against a real system, and returns the
result in a format the model can use productively.

**State and memory.** What the agent remembers from one turn to the next, and from one session
to the next. This includes the raw conversation history, any summarized or compacted version of
it, and any external memory store the agent can read from or write to.

**Permissions.** The rules that decide what an agent can do without asking, what it must ask
permission for, and what it can never do regardless of what the model requests. Well-designed
harnesses put the last category — often called deny-floors — outside the model's control
entirely, so no prompt or instruction the model receives can override them.

**Stopping conditions.** The rules that end a run: the model declares itself done, a budget
of tool calls or tokens runs out, a timeout is hit, or a human intervenes. Agents without
clear stopping conditions tend to loop, over-call tools, or run past the point where their
output is still useful.

**Retries and error handling.** What happens when a tool call fails, a model call times out,
or a response comes back malformed. A harness has to decide whether to retry, how many times,
with what backoff, and what to show the model about the failure so it can adapt.

**Evals and observability.** How the team building the harness knows it's working: structured
logs of every model and tool call, traces that can be replayed, and evaluation sets that catch
regressions before they reach users. Without this, harness changes are made blind.

## Harness vs. framework vs. agent

These three words get used loosely, but they describe different things:

- **Agent** is the behavior — a model using tools in a loop to pursue a goal with some autonomy.
- **Harness** is the specific, running infrastructure for one product that makes that behavior possible: its tool definitions, its permission rules, its state management, its stop conditions.
- **Framework** is a reusable library — something like a pre-built orchestration layer — that a team can use as a starting point when building a harness, rather than writing every piece from scratch.

A team can build a harness without any framework at all, and many production systems do,
specifically to keep full control over behavior that a general-purpose framework would
abstract away. Choosing whether to build on a framework or write the loop directly is itself
a harness-design decision, not a settled default.

## Where LMVersity fits

LMVersity's Harness Design track covers this system piece by piece: the agent loop itself,
deny-floors and policy layers, sandboxing and subprocess isolation, checkpointing and crash
recovery, model routing and fallback, hooks as extension points, and tracing a harness with
structured spans. The Agentic AI track covers the behavior the harness produces — the loop,
memory, multi-agent patterns, and failure modes. Both are free and self-paced, with no
certificate at the end.

## Go deeper

- [Harness Design track](/learn/harness-design) — the full sequence: loop, state, sandboxing, observability.
- [The Harness: Everything Around the Model](/learn/harness-design/what-is-a-harness) — the lesson this page summarizes, in more depth.
- [Hooks: Letting Users Extend the Harness Without Forking It](/learn/harness-design/hooks-as-extension-points) — how production harnesses stay customizable.
- [Tracing a Harness: Structured Spans for Every Model and Tool Call](/learn/harness-design/harness-observability) — how teams actually debug agent behavior.
- [Agentic AI track](/learn/agentic-ai) — the loop, memory, and multi-agent patterns the harness runs.
- [The Agent Loop: Sense, Think, Act](/learn/agentic-ai/the-agent-loop) — the core cycle a harness implements.
- [Agents need a harness, not just a prompt](/blog/agents-need-a-harness) — the argument for why this layer can't be skipped.
