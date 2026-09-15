---
title: "Project: A Governed CLI-Agent Setup for a Real Repo"
track: "cli-agents"
status: live
summary: "Configure a CLI agent for a real repository end to end — orientation files, permission tiers, a headless template, and a review checklist."
duration: "1–2 weeks"
---

**Prerequisites:** [Permissions, sandboxes, and git workflow](/learn/cli-agents/permissions-sandboxes-and-git-workflow) and [Getting the agent oriented](/learn/cli-agents/getting-the-agent-oriented).

Take a real repository — yours or an open-source one — and set up a CLI-agent workflow that's safe to run unattended on bounded tasks, with the orientation, permissions, and review process to prove it.

## The brief

The deliverable is a working agent setup, not a doc: the repo is configured so a bounded headless task runs correctly and produces a reviewable result. Suggested scope: pick a mechanical task (a migration, a rename, a docs update) as the test case.

## The components

1. **Orientation files** — `AGENTS.md` or equivalent covering: the build/test commands, the conventions that matter, the off-limits directories, and the definition of done for a change.
2. **Permission configuration** — the tiers the agent runs under: read-only for exploration, edit-with-review for changes, an allowlist for the shell commands it can run headless.
3. **A headless task template** — a reusable spec (scope, bounds, verification) for the class of mechanical tasks the repo sees repeatedly.
4. **A review checklist** — the steps a human runs on the agent's output before merge: read the diff, run the checks, confirm scope.

## Mock / deterministic mode

Use a versioned copy of the repo or a fixture project — the point is the setup's correctness, not the specific codebase. The headless template should be testable on a canned task with a known-good expected diff.

## Acceptance criteria

- `AGENTS.md` covers the five orientation elements (commands, conventions, off-limits, review process, definition of done).
- A headless run on the test task produces a diff that matches the expected scope — no out-of-scope changes.
- The permission config demonstrably blocks an out-of-allowlist command.
- The review checklist exists and was used on the test run's output.

## Failure injection

- Point the agent at an off-limits directory — does the permission config stop it?
- Give the task an ambiguous instruction — does the template force clarification or a bounded guess?
- Let the agent's diff include an unrequested change — does the review checklist catch it?

## Milestones

1. Orientation files written and verified (a fresh agent session answers the conventions correctly).
2. Permission tiers configured and the block verified.
3. The headless template tested on the canned task.
4. The review checklist applied and the run documented.

## Portfolio note

The deliverable is the configured repo + the template + a writeup of the test run — "here's a repo where an agent can run unattended on bounded tasks, and here's the evidence it stays in bounds."

## Defend this build

- What did you put in the orientation file, and what did you deliberately leave out?
- Where did the permission boundary actually sit — and what can't the agent do, by construction?
- What did the test run reveal that a config review wouldn't?
- If the task class changed — less mechanical, more judgment — what would you re-tighten?

**Related:** [CLI agents cheatsheet](/learn/cli-agents/cli-agents-cheatsheet), [CLI agent mistakes](/learn/cli-agents/cli-agents-mistakes), [CLI agent labs](/learn/cli-agents/cli-agent-labs)
