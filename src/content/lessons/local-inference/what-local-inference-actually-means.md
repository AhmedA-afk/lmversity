---
title: "What 'running a model locally' actually means"
track: "local-inference"
status: live
summary: "Local inference means the model's weights and every forward pass live on your hardware — but the app wrapping it may still phone home, download updates, or fall back to a remote API."
duration: "7 min read"
---

## The short answer

Running a model locally means the weights sit on your disk and every forward
pass runs on your hardware — the text never leaves the machine *at inference
time*. That's the core property, and it's a narrower promise than it looks:
the model may run locally while the application around it still sends
telemetry, checks for updates, downloads plugins, or quietly falls back to a
remote API when a task gets hard. "Local" describes where the math happens,
not everything the software does.

## The three layers to separate

When someone says a setup is "local", three different things might be true:

- **The weights are local** — the model file is on your disk, not streamed
  from a server. Nearly always true in a local setup.
- **The inference is local** — tokens are generated on your CPU/GPU. This is
  the property people actually care about for privacy and offline work.
- **The application is local** — nothing the program does touches the
  network. This is the one that's often false: update checkers, crash
  reporters, model-catalog fetches, plugin marketplaces, and opt-out
  telemetry all make network calls independently of inference.

A privacy claim only holds if you can vouch for all three. [The local privacy
boundary](/learn/local-inference/the-local-privacy-boundary) is the full
checklist for auditing the third layer.

## What local buys you — and what it doesn't

What it buys: your prompts and documents never leave the machine at inference
time, the system works offline and on planes, per-token cost is zero, and you
control the model version — it can't be silently upgraded under you.

What it doesn't buy: the same answer quality as a frontier model (a local
model is only as capable as the weights you can fit and run), safety
(someone's fine-tune can be worse-behaved than a hosted model, and nobody's
trust-and-safety layer sits between it and you), or magic (a quantized model
on a laptop is still a quantized model on a laptop).

## Where this fits

The honest mental model: local inference is a *deployment choice with
different tradeoffs*, not a moral upgrade. You trade capability and ops
convenience for privacy, offline use, cost predictability, and version
control. Whether that trade is right depends on the workload — which is why
[hardware sizing](/learn/local-inference/hardware-sizing-measurement-guide)
is a measurement exercise, not a vibes exercise.

## Go deeper

- [Ollama: from install to first API call](/learn/local-inference/ollama-first-run) — the fastest path to a working local setup.
- [The local privacy boundary](/learn/local-inference/the-local-privacy-boundary) — auditing what the app around the model sends.
- [Hardware sizing by measurement](/learn/local-inference/hardware-sizing-measurement-guide) — figuring out what your machine can actually run.
- [Choosing managed vs self-hosted fine-tuning](/learn/fine-tuning/choosing-managed-vs-self-hosted-fine-tuning) — the same tradeoff on the training side.
