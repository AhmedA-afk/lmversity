---
title: "Project: A Reliable Tool-Call Harness — Policy, Sandbox, Crash Recovery"
track: "harness-design"
status: live
summary: "Build the harness loop a coding or ops agent actually runs on — policy-gated tool calls, a real sandbox, and crash recovery that resumes honestly."
duration: "25 min read"
---

A harness is the difference between an agent demo and an agent product: it decides which tool calls are allowed, where they execute, and what survives a crash. This project builds the smallest honest version — a control loop with a policy layer, an isolated execution environment, and checkpointed state that resumes without replaying side effects.

## The brief

Build a harness that runs a model-driven tool loop: each proposed tool call passes a policy check (allow / deny / require-approval), executes in a sandbox with resource limits, writes a checkpoint, and the whole run can be killed at any point and resumed without double-executing an effectful call.

## Prerequisites

- [The control loop](/learn/harness-design/the-control-loop) — what the harness loops over
- [Permission and approval systems](/learn/harness-design/permission-and-approval-systems) — the policy layer's job
- [Crash recovery and resumption](/learn/harness-design/crash-recovery-and-resumption) — what resume must not redo
- [Subprocess isolation and sandboxing](/learn/harness-design/subprocess-isolation-and-sandboxing) — the execution boundary

## Supplied assets and mock mode

Runs fully local: a scripted mock model emitting tool calls (including malicious-looking ones) is the correct test fixture — the harness is what's under test, not the model. The sandbox can be a subprocess with resource limits or a container; the policy file is data, not code.

## Acceptance criteria

- [ ] Every tool call passes the policy layer before execution — a test shows a denied call never reaches the sandbox and the denial is logged with a reason
- [ ] Approval-gated calls pause the loop durably — the pending approval survives a process restart, and resuming after approval continues the run
- [ ] The sandbox enforces a resource limit — a tool call that exceeds memory or time is killed and the failure returns to the model as a tool error, not a harness crash
- [ ] Checkpoints record each step's inputs, outputs, and policy decision — killing mid-run and resuming produces the same final state as an uninterrupted run
- [ ] Side-effecting calls carry idempotency keys — a retried call after a mid-write crash effects once, provably
- [ ] A run transcript shows the full decision log: proposed call → policy verdict → execution result → checkpoint

## Failure injection (required)

- [ ] The mock model emits a call the policy denies — the loop reports the denial to the model and continues, no execution
- [ ] Kill the harness between sandbox-execution and checkpoint-write — resume re-runs the step and the idempotency key prevents a double effect
- [ ] A tool call hangs — the sandbox timeout kills it and the loop records a timeout error, not a stuck run

## Milestones

1. **The loop without policy** — propose, execute, record; get the mechanics working first.
2. **The policy layer** — allow/deny/approve as data; the denied-call test.
3. **The sandbox** — resource limits and the hang test.
4. **Checkpointing** — kill-at-random-step resumption test.
5. **The transcript** — the decision log as the auditable artifact.

## What good looks like

The harness is boring infrastructure: every decision is in the log, every effect is gated, and `kill -9` is a test case. The transcript answers "why did the agent run that command" with the policy verdict that allowed it — not a guess about the model's reasoning.

## For your portfolio

Show the kill-and-resume test and the policy-verdict transcript — the two artifacts that separate "wired up an agent" from "built the harness." The sandbox code is table stakes; the audit trail is the signal.

## Defend this build

1. Show a transcript — which policy verdict would you change first, and why is it wrong or right?
2. A call is approved, the process crashes before executing, then resumes — what does the user see?
3. What can a tool do inside your sandbox that it shouldn't — and what would you tighten first?
4. Where does policy live — and what stops a prompt-injected model from proposing calls that route around it?

The pass bar: answers cite the transcript and the policy file, not the idea of a control loop.

**Related:** [Deny floors and policy layers](/learn/harness-design/deny-floors-and-policy-layers), [State and checkpointing](/learn/harness-design/state-and-checkpointing), [Interrupt and cancellation handling](/learn/harness-design/interrupt-and-cancellation-handling), [Guardrails as code](/learn/harness-design/guardrails-as-code)
