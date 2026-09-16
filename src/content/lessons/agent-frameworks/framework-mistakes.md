---
title: "Agent Frameworks: Common Mistakes"
track: "agent-frameworks"
status: live
summary: "The eight framework mistakes — picking before specifying, trusting the abstraction, and the demo that proves nothing."
updated: "2026-09-16"
duration: "8 min read"
---

The framework mistakes that turn a shortcut into a constraint — each with the fix that keeps the framework working for you.

## 1. Picking the framework before the task

**The mistake.** "We're using LangGraph" decided before the task was specified — the tool chose the problem shape.

**The fix.** Specify the task's requirements first — state durability, control over the loop, the failure modes — then pick the framework that fits. A framework is an answer to a question you haven't asked yet if you pick it first.

## 2. Trusting the demo task

**The mistake.** The framework's quickstart — the task it was designed to ace — stands in for "does it fit our task."

**The fix.** Bake off on your actual task, not the quickstart. The framework that demos best is often the one whose demo is closest to its design center.

## 3. Not knowing where the state lives

**The mistake.** The agent's progress is in the framework's in-memory structures — a crash loses the run, and nobody noticed until it mattered.

**The fix.** Know the framework's durability story before production. In-memory state is a demo property; durable checkpoints are a production one.

## 4. The abstraction leak discovered in production

**The mistake.** The first task the framework can't express arrives at scale — and the escape hatch is monkey-patching internals.

**The fix.** Find the leak in the bake-off: one deliberate task the framework doesn't have a primitive for. The escape hatch's ugliness is a selection criterion.

## 5. The tool error that never reached the model

**The mistake.** The framework catches a tool error and retries or defaults it — the model never sees the failure, so it can't reason about it.

**The fix.** Know the framework's error-handling contract. A tool error is information the model needs; an abstraction that hides it produces an agent that can't recover.

## 6. The framework's defaults as the system's behavior

**The mistake.** Retry counts, step limits, prompts the framework injects — all defaults, never examined, all now the system's actual behavior.

**The fix.** Read the defaults. Every framework injects behavior — a system prompt, a retry policy, a loop bound — and unexamined defaults are design decisions you didn't make.

## 7. Lock-in discovered at the migration

**The mistake.** The framework's primitives shaped the whole codebase; the migration is a rewrite, discovered when it's needed.

**The fix.** Keep a seam — the task logic and the tool implementations behind interfaces the framework calls, not inside its structures.

## 8. Skipping the raw-SDK baseline

**The mistake.** No hand-rolled baseline — so "what the framework adds" is marketing, not measurement.

**The fix.** Build the task once on the raw SDK. The delta between it and the framework is what you're actually paying for — measure it, don't assume it.

**Related:** [Framework selection project](/learn/agent-frameworks/framework-selection-project), [Framework cheatsheet](/learn/agent-frameworks/framework-cheatsheet), [Framework comparison and escape hatches](/learn/agent-frameworks/framework-comparison-and-escape-hatches)
