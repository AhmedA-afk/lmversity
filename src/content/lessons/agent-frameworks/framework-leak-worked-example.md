---
title: "Worked Example: The Task the Framework Couldn't Express"
track: "agent-frameworks"
status: live
summary: "A role-based agent framework asked to do conditional branching — the abstraction leak, the escape hatch, and the decision it should have driven."
duration: "10 min read"
---

Every framework has a task it can't express. This example finds one — a role-based framework asked to do conditional branching — and traces the escape hatch that should have driven the selection.

## The setup

A role-based agent framework (CrewAI-style): agents have roles, tasks are assigned, the framework manages the delegation. The task: a research agent where the *next step depends on what the last step found* — search → read → if the source is a PDF, extract it differently; if it's a paywall, skip it; if it contradicts the prior source, flag it. Conditional branching on runtime data.

## The leak

The framework's model is "a set of tasks, each assigned to a role" — static delegation. The task list is fixed at definition time; "do different things depending on what step 2 found" doesn't fit the primitive. The framework expects the *plan* to be enumerable up front; this task's plan is discovered at runtime.

## The escape hatch

Three options, each ugly:

1. **One mega-task with instructions** — "do the research, handling PDFs and paywalls and contradictions" as a single task. Works, but the framework's delegation model is now a wrapper around a single unstructured call — the framework is adding config, not value.
2. **A custom task type** — subclass the framework's Task to add branching. Works, but you're now maintaining internals-aware code — the abstraction's benefit is inverted.
3. **Multiple agents with a router** — the "conditional" is an agent that decides which agent to call. Works, but the router is the actual logic and the framework is a registry of agents it dispatches between.

## What the leak reveals

The framework's abstraction is "tasks assigned to roles" — static, enumerable. The task needs "a loop that branches on data" — dynamic, discovered. The mismatch isn't a missing feature; it's a different model of what an agent is. The framework sells orchestration of a known plan; the task needs a loop that discovers its plan.

## The decision it should have driven

The right framework for this task is a graph/loop-shaped one (LangGraph-style) or the raw SDK — where "conditional next step" is the primitive, not the escape hatch. The bake-off that would have caught it: one task requiring runtime branching. The demo tasks all had static plans — which is exactly the property that hid the leak.

## What the example teaches

- **The leak is the model, not the feature.** "No branching primitive" isn't a gap to patch — it's a different model of the problem.
- **The escape hatch's ugliness is the data.** A clean escape hatch means the abstraction mostly fits; monkey-patching means it doesn't.
- **The bake-off needs the hard task.** A demo task can't reveal the leak — the task that doesn't fit is the one that matters.

## The check

Before committing to a framework: what's the task it can't express, and what does the escape hatch look like? If you can't name the leak, you haven't found it yet — not "it doesn't have one."

**Related:** [Framework comparison and escape hatches](/learn/agent-frameworks/framework-comparison-and-escape-hatches), [Framework mistakes](/learn/agent-frameworks/framework-mistakes), [Framework selection project](/learn/agent-frameworks/framework-selection-project)
