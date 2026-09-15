---
title: "Project: Framework Selection Bake-Off"
track: "agent-frameworks"
status: live
summary: "Implement the same bounded agent task in two frameworks and a raw SDK baseline, then defend the choice on evidence — not vibes."
duration: "1–2 weeks"
---

**Prerequisites:** [Raw SDK agent baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) and [Framework comparison and escape hatches](/learn/agent-frameworks/framework-comparison-and-escape-hatches).

Build the same non-trivial agent task three ways — two frameworks plus a raw-SDK baseline — and produce a comparison that's actually evidence, not a framework README summary.

## The brief

Pick a task with real agent properties: tool calls, state across steps, at least one failure mode. Suggested: "a research agent that takes a topic, searches, reads sources, and produces a cited summary" — it exercises planning, tool use, state, and failure handling without needing external credentials (use a local mock search corpus).

Implement it in:

- **A raw SDK baseline** — the model's tool-call loop built by hand. This is the control: it shows what the frameworks are actually adding.
- **Two frameworks of your choice** — pick from the ones covered in the track (LangGraph, CrewAI, Agno, PydanticAI, the OpenAI Agents SDK, Mastra, the Claude Agent SDK) based on which tradeoffs you want to measure.

## Mock mode

The task must run fully offline: a local corpus for search, canned tool responses, a fixed model or a recorded trajectory. No external API keys — the point is the framework comparison, not the task's domain.

## Acceptance criteria

- The same task spec implemented in all three, to the same acceptance test.
- A comparable metric on each: lines of glue code, control over the loop, the failure-handling surface, the escape hatch when the abstraction leaks.
- At least one deliberate failure injected per implementation (a tool error, a timeout) — and a record of how each framework's abstraction handled it.
- A written comparison: what each framework added, what it hid, what it cost.

## Failure injection

- A tool call that returns an error — does the framework surface it to the model, or swallow it?
- A mid-run interruption — can each implementation resume, or does state live in memory?
- A step the framework doesn't have a primitive for — what's the escape hatch, and how ugly is it?

## Milestones

1. Raw SDK baseline working to the acceptance test.
2. First framework implementation + the comparison notes it generates.
3. Second framework + failure injection on all three.
4. The written comparison with a defended pick.

## Portfolio note

The deliverable is the comparison, not the three implementations. "I ran the same task through LangGraph and a raw SDK and here's what LangGraph actually added" is a stronger signal than "I used LangGraph."

## Defend this build

- Why these two frameworks — what tradeoff were you measuring?
- Where did a framework's abstraction leak, and what did the escape hatch cost?
- What did the raw SDK force you to build that the framework gave for free — and vice versa?
- If the task changed — more agents, more state, more steps — would your pick change?

**Related:** [Raw SDK agent baseline](/learn/agent-frameworks/raw-sdk-agent-baseline), [Framework comparison and escape hatches](/learn/agent-frameworks/framework-comparison-and-escape-hatches), [Framework selection mistakes](/learn/agent-frameworks/framework-mistakes)
