---
title: "Worked Example: A Headless Agent Run With Real Bounds"
track: "cli-agents"
status: live
summary: "One unattended agent task configured end to end — the scope statement, the step cap, the diff gate, and the run that would have failed without them."
duration: "10 min read"
---

A headless agent run is a delegation, not a launch-and-forget. This example configures one — "migrate the logging calls to the new logger" — and shows where each bound earns its place.

## The task

Migrate ~30 files from `console.log` to the project's structured logger. Mechanical, bounded, verifiable — a good headless candidate. The danger: an unbounded agent "fixes" adjacent issues, and the diff becomes unreviewable.

## The configuration

```
Task: migrate console.log calls to `logger.info`/`logger.warn`/`logger.error`
      in src/ only. Match the log level to the call's severity.

Bounds:
  - Scope: src/**/*.ts only — do not touch tests/, scripts/, or config.
  - Step cap: 60 tool calls.
  - No dependency changes, no new imports outside the logger.
  - Output: a single branch with one commit; a summary of files changed.

Verification: the run must end with `npm run build` green and
              `grep -r console.log src/` returning zero matches.
```

Each bound addresses a failure: the scope prevents drive-by changes, the step cap prevents loops, the import constraint prevents dependency creep, the verification defines "done" as evidence, not assertion.

## The run

The agent migrates 28 files. On file 29 it hits a `console.log` inside a template literal that the logger's API can't express — it stops, logs the blocker, and writes the partial migration plus a note naming the file and the reason. The build is green; `console.log` count went from 30 to 2 (the blocker plus one in a test util outside scope — correctly untouched).

## What the bounds caught

- **The step cap** — a previous unbounded run on a similar task spent 200 calls "improving" the logger's import structure; the cap forced it to finish the task first.
- **The scope bound** — the test-util `console.log` was correctly left alone; an unscoped run would have "fixed" it and broken the test's intentional stderr capture.
- **The verification** — "the migration is complete" as a claim is unverifiable; "grep returns 0 and build is green" is a check.

## What the example teaches

- **The bounds are the design.** A headless run is only trustworthy when the failure modes are pre-bounded — scope, steps, and a checkable definition of done.
- **A partial result with a named blocker beats a forced finish.** The agent that reports "file 29 needs a manual change" is more useful than one that mangles the template literal to make the count zero.
- **Verification is the acceptance test.** The run isn't done when the agent stops — it's done when the check passes.

## The check

A headless run is configured correctly when you can answer: what's out of scope, when does it stop, and what command proves it worked? An unbounded headless run is a demo, not a delegation.

**Related:** [Headless runs and automation](/learn/cli-agents/headless-runs-and-automation), [CLI agents cheatsheet](/learn/cli-agents/cli-agents-cheatsheet), [CLI agent mistakes](/learn/cli-agents/cli-agents-mistakes)
