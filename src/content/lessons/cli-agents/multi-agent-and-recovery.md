---
title: "Multi-agent decomposition, failure recovery, and handoff notes"
track: "cli-agents"
status: live
summary: "Running several agents on one codebase without collisions — worktree isolation and file ownership — plus the recovery playbook for context rot, dead ends, and crashed runs."
duration: "10 min read"
sources: ["claude-code-docs", "openai-codex-repo"]
---

## The short answer

Two advanced disciplines that pair naturally: **multi-agent work** —
decomposing a task across parallel agents, where the enemy is *file
conflict*, not effort — and **recovery** — what to do when an agent
fails mid-task: context reset, resumption from checkpoints, and
handoff notes that let the next run (or next agent, or next human)
pick up where the last one died.

## Multi-agent without collisions

The decomposition rule: split by **ownership**, not by task order.
Agents that each own a disjoint set of files can run in parallel
without ever seeing each other's diffs; agents that share files will
silently overwrite each other.

- **Isolate working trees** — `git worktree add` per agent gives each
  its own checkout on its own branch; merging is a normal git
  operation afterward. Never run two agents in one working directory —
  they can't see each other's uncommitted writes
  ([git workflow](/learn/cli-agents/permissions-sandboxes-and-git-workflow)).
- **Split by file ownership** — good decompositions are disjoint by
  directory or layer: "agent A owns `src/api/`, agent B owns `src/ui/`",
  "agent A writes the implementation, agent B writes tests *against
  the merged result*". Bad splits share files: "A does the model
  changes, B does the callers" touches the same surface twice.
- **Mind shared state** — worktrees isolate files, not the world:
  same database, same dev-server port, same external API quota =
  collision regardless of file boundaries.
- **Subagents vs parallel sessions** — in-session
  [subagents](/learn/harness-design/subagent-and-task-delegation)
  delegate *within* one orchestrator (it owns the merge); parallel CLI
  sessions are peers (you own the merge). Orchestrated subagents for
  subtasks the parent understands; parallel sessions for independent
  workstreams.

## The recovery playbook

Agents fail mid-task constantly — context rot, dead ends, crashes,
rate limits. The playbook:

1. **Checkpoint early** — verified increment → commit; a good
   checkpoint turns any failure into a `git reset` instead of a
   rewrite ([git discipline](/learn/cli-agents/permissions-sandboxes-and-git-workflow)).
2. **Recognize context rot** — the agent starts re-reading files it
   already read, contradicting earlier decisions, or drifting off
   scope: the context is polluted. **Reset, don't argue** — a fresh
   session with a good prompt beats a long session with a confused
   one ([context management](/learn/harness-design/context-window-management-in-a-harness)).
3. **Write the handoff note** — before killing a session (or when the
   agent dies), capture: *what was the goal, what's done and verified,
   what's attempted and broken, what to try next, what NOT to retry*.
   Four lines in a scratch file or issue comment. The next run starts
   with the accumulated knowledge instead of the accumulated garbage —
   the note is the difference between "resumed" and "restarted".
4. **Resume from artifacts, not transcripts** — the committed code,
   the test output, and the handoff note are the state that matters;
   a 200-message transcript is mostly context rot.

## The honest limits

Parallel agents multiply throughput and *coordination cost* — merging
three agents' overlapping assumptions is often slower than one
sequential run, and decomposition itself takes judgment most teams
underestimate. And no recovery scheme saves you from an unverified
checkpoint — "committed but broken" is just a saved failure.

## The exercise

Take a task that naturally splits in two, run both halves in
worktrees, and merge — pay attention to which interface between them
was under-specified. Then kill a session mid-task deliberately and
write the handoff note for your next self — feel how much harder it
is to reconstruct intent than to write it down.

## Go deeper

- [Subagent and task delegation](/learn/harness-design/subagent-and-task-delegation) — the in-session variant.
- [Crash recovery and resumption](/learn/harness-design/crash-recovery-and-resumption) — the harness-level mechanics.
- [CLI agent labs](/learn/cli-agents/cli-agent-labs) — practice fixtures.
