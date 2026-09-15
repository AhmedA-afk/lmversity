---
title: "Common Mistakes: Harness Design"
track: "harness-design"
status: live
summary: "The eight harness errors that turn an agent demo into an incident — the policy in the prompt, the sandbox that's a subprocess, and the checkpoint that doesn't survive."
duration: "8 min read"
---

A harness is the part of an agent system that's supposed to survive the model. These are the places it doesn't — each names the design mistake and the fix.

## 1. Policy enforced in the prompt

**Wrong:** The system prompt says "don't run destructive commands" — and the model complies until a prompt-injected tool result tells it to, and the harness executes whatever the model proposed.
**Right:** Policy is code, not text. A deny-floor in the harness rejects the call regardless of what the model was told — the prompt is a suggestion, the policy layer is the boundary.

## 2. A sandbox that's just a subprocess

**Wrong:** "Sandboxing" means spawning a shell — the tool call runs with the harness's own credentials, network, and filesystem, so a bad call has the whole host's reach.
**Right:** A sandbox is an isolation boundary — restricted filesystem, no ambient credentials, resource limits, no network unless granted. A subprocess is a subprocess; it shares your authority by default.

## 3. Checkpoints that don't survive the write

**Wrong:** The harness checkpoints after each step — but the write isn't durable or isn't atomic, so a crash mid-write leaves a torn checkpoint that resume misreads.
**Right:** A checkpoint is a transaction — written atomically, versioned, and validated on load. A torn checkpoint should fail loudly, not silently resume into a corrupted trajectory.

## 4. Approval gates that pause nothing

**Wrong:** The "approval required" flag is checked in-process — a crash or a UI disconnect abandons the pending approval, and the resumption path skips the gate entirely.
**Right:** Approvals are durable state. A pending approval survives process death, and resume must not bypass it — an approval that can be crashed past is not a gate.

## 5. Tool output that floods the context

**Wrong:** A tool returns 50,000 tokens and the harness stuffs it into the context window — the model's next call is drowned in tool output and the budget is spent on noise.
**Right:** Tool output is truncated, summarized, or paged at the harness boundary. What reaches the model is a deliberate size decision, not whatever the tool happened to return.

## 6. Secrets that leak into the trace

**Wrong:** The harness logs every tool call and result — including the API key in the request header and the private data in the response — and the observability pipeline becomes the secret store.
**Right:** Redact at the harness boundary before the trace is written. Secrets in a log are a breach that happened quietly — the trace should record that a call was made, not what it carried.

## 7. Cancellation that doesn't propagate

**Wrong:** The user cancels the run — the loop stops, but the in-flight tool call keeps executing, the sandbox keeps burning CPU, and the "stopped" agent is still working.
**Right:** Cancellation is a signal that reaches the sandbox. The in-flight call is killed, the resources released, the checkpoint marked cancelled — a stop that stops nothing is a UI affordance, not a control.

## 8. A harness that can't tell you why

**Wrong:** The agent did something unexpected — and the harness has no record of the policy decision, the tool inputs, or the model's proposal, so the incident is reconstructed from vibes.
**Right:** Every decision is logged: proposed call, policy verdict, execution result, checkpoint. The transcript is the audit trail — a harness that can't explain a run can't be trusted to have controlled it.

## If you take one habit

Enforce at the boundary, not the prompt. Every control that lives in the model's instructions is a control that fails the first time the model is wrong — the harness exists to enforce what the prompt only requests.

**Related:** [The control loop](/learn/harness-design/the-control-loop), [Deny floors and policy layers](/learn/harness-design/deny-floors-and-policy-layers), [Harness reliability project](/learn/harness-design/harness-reliability-project), [Secrets in the harness](/learn/harness-design/secrets-in-the-harness)
