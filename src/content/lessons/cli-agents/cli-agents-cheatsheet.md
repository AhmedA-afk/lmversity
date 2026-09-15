---
title: "CLI Agents Cheatsheet"
track: "cli-agents"
status: live
summary: "The CLI-agent reference — permissions, orientation, headless runs, and the review discipline that keeps an agentic session honest."
duration: "6 min read"
---

The CLI-agent track compressed to the controls that matter — how the agent gets oriented, what it can touch, and how you review what it did.

## The permission tiers in one line each

- **Read-only** — the agent can explore but not change; the default for reconnaissance.
- **Edit with review** — file changes land as diffs/patches you approve; the working default.
- **Shell with allowlist** — commands run only from a permitted set; the boundary that holds.
- **Full shell** — the agent acts as you; reserved for trusted, sandboxed contexts.

## The orientation checklist

- **AGENTS.md / rules** — the repo's instructions read first; the agent that skips them violates them.
- **The task scope stated** — what "done" means before the loop starts.
- **The boundaries stated** — which dirs are off-limits, which commands need approval.
- **The verification step** — how the work gets checked before it's called done.

## The review discipline

- **Read the diff, not the summary.** The agent's summary describes intent; the diff is the act.
- **Check the plan before the edits.** Planning mode surfaces the approach before the tokens burn.
- **The test run is the receipt.** "It compiles" is the minimum; the project's checks are the bar.
- **Commit atomic units.** A session's work split into reviewable, revertable commits — not one 40-file blob.

## The failure modes in one line each

- **The agent that never read the rules** — conventions violated en masse because AGENTS.md wasn't the first file read.
- **Scope creep** — the agent "improved" adjacent code; the diff tripled and the review got harder.
- **The confident wrong fix** — the agent's patch compiles, looks plausible, and fixes the wrong thing.
- **Headless without a leash** — an unattended run with no step cap or diff review gate.
- **The unmerged session** — the work exists in a branch nobody reviewed and can't reconstruct.

## Which lesson for which question

- "How do I point it at the right context?" → [Getting the agent oriented](/learn/cli-agents/getting-the-agent-oriented)
- "How do permissions work?" → [Permissions, sandboxes, and git workflow](/learn/cli-agents/permissions-sandboxes-and-git-workflow)
- "How do I review what it did?" → [Planning modes and patch review](/learn/cli-agents/planning-modes-and-patch-review)
- "How do I run it unattended?" → [Headless runs and automation](/learn/cli-agents/headless-runs-and-automation)

**Related:** [CLI agent labs](/learn/cli-agents/cli-agent-labs), [Customizing the agent surface](/learn/cli-agents/customizing-the-agent-surface), [Multi-agent and recovery](/learn/cli-agents/multi-agent-and-recovery)
