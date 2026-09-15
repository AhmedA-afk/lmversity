---
title: "Harness Design Cheatsheet"
track: "harness-design"
status: live
summary: "The harness-layer decision table — where each control lives, what the boundary enforces, and the transcript that explains a run."
duration: "6 min read"
---

The harness layer compressed to where each control lives and what the audit trail must record.

## Where each control lives

| Control | Layer | Never in |
|---|---|---|
| Permission / deny rules | Policy layer (code) | The system prompt |
| Resource limits | Sandbox (OS/container) | The tool implementation |
| Approval gates | Durable harness state | In-memory flags that crash away |
| Idempotency | The harness + tool contract | The model's self-discipline |
| Cost / step bounds | The control loop | The model deciding it's done |
| Redaction | Harness boundary before the trace | The logger that already wrote it |

## The transcript must record

- **Proposed call** — what the model asked to run, verbatim.
- **Policy verdict** — allow / deny / approve, with the rule that decided it.
- **Execution result** — what the tool returned, truncated at the boundary.
- **Checkpoint** — the durable record the resume path reads.
- **Decision reason** — enough to reconstruct why the agent did what it did.

## The primitives in one line each

- **Control loop** — propose → check → execute → record → repeat; the harness's heartbeat.
- **Policy layer** — the code that gates every call before execution; the boundary the prompt can't cross.
- **Sandbox** — the isolation the tool runs inside; a subprocess is not one.
- **Checkpoint store** — the durable state that survives the process; resume reads it.
- **Tool registry** — the declared surface; a call to an undeclared tool is rejected by construction.

## The failure modes in one line each

- **Policy in the prompt** — the boundary that fails the first time the model is wrong.
- **Sandbox = subprocess** — a tool call with the host's credentials and network.
- **Torn checkpoint** — a non-atomic write that resume misreads.
- **Approval that crashes away** — the pending gate forgotten on restart.
- **Secrets in the trace** — the observability pipeline as the leak.
- **Cancellation that doesn't propagate** — a "stopped" agent still running.

## Which lesson for which question

- "What is a harness?" → [What is a harness](/learn/harness-design/what-is-a-harness)
- "How does the loop enforce policy?" → [Deny floors and policy layers](/learn/harness-design/deny-floors-and-policy-layers)
- "How does it survive a crash?" → [State and checkpointing](/learn/harness-design/state-and-checkpointing), [Crash recovery and resumption](/learn/harness-design/crash-recovery-and-resumption)
- "What goes in the transcript?" → [Harness observability](/learn/harness-design/harness-observability)

**Related:** [Harness mistakes](/learn/harness-design/harness-mistakes), [Harness reliability project](/learn/harness-design/harness-reliability-project), [The control loop](/learn/harness-design/the-control-loop)
