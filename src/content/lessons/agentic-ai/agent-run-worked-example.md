---
title: "Worked Example: An Agent Run, Step by Step"
track: "agentic-ai"
status: live
summary: "One agent task traced through the loop — the proposal, the policy check, the tool call, the checkpoint — and the moment a naive loop would have failed."
duration: "10 min read"
---

An agent run is a sequence of small decisions, each of which can fail. This example traces one — a "find and fix the failing test" task — through the loop and shows where the design decisions matter.

## The task

"Find the failing test in this repo and fix it." The agent has a shell tool, a file-read tool, and a file-write tool. The harness has a policy layer, a checkpoint store, and a step cap.

## The trace

**Step 1.** The model proposes `shell: pytest`. Policy: allowed (read-only command). Executes — 2 failures. Checkpoint written: inputs, output (the failure list), decision.

**Step 2.** Model proposes `read: tests/test_auth.py`. Allowed. Executes — the failing test reads a `expires_at` field. Checkpoint.

**Step 3.** Model proposes `write: src/auth.py — fix the expiry comparison`. Policy: write to source file — requires approval. The loop pauses on the gate; the pending approval is durable state.

**Step 4.** The approval arrives. The write executes. Checkpoint.

**Step 5.** Model proposes `shell: pytest tests/test_auth.py`. Executes — the test passes. Checkpoint.

**Step 6.** Model proposes "done." The acceptance check runs: does the full suite pass? It does. The run terminates — bounded, recorded, resumable.

## Where a naive loop fails

- **Step 3 without a durable gate** — the approval is in-memory; a crash abandons it, and resume either skips the gate (dangerous) or re-prompts (annoying). Durable approval state is what makes the gate real.
- **Step 5 without the acceptance check** — the model says "done" and the loop exits; if the fix only addressed one of the two failures, the run "completes" on a partial fix. The check runs the suite, not the claim.
- **Any step without a checkpoint** — a crash loses the trajectory; resume either replays side effects (double-running the write) or starts over. The checkpoint is what makes `kill -9` survivable.

## What the trace teaches

- **Each step is a decision, not a call.** Propose → check → execute → record — the loop is the discipline, not the model.
- **The gate and the check are the design.** The approval gate bounds the side effect; the acceptance check bounds the completion claim. Without both, the loop is a demo.
- **Resume is a property of the state, not the loop.** The checkpoints are what make interruption survivable — the loop just reads them.

## The check

For any agent run, ask: what's the step cap, what happens on a tool error, where does the state live, and what defines "done"? An agent that can't answer all four is an agent that can't be operated.

**Related:** [The agent loop](/learn/agentic-ai/the-agent-loop), [Agent loop mistakes](/learn/agentic-ai/agent-loop-mistakes), [Stateful agent project](/learn/agentic-ai/stateful-agent-checkpoints-project), [Cost-aware agent loops](/learn/agentic-ai/cost-aware-agent-loops)
