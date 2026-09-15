---
title: "The local privacy boundary"
track: "local-inference"
status: live
summary: "A locally-running model keeps inference on your machine — but the app, its telemetry, its plugins, and its remote fallbacks each draw their own boundary. Auditing all of them is the privacy task."
duration: "8 min read"
---

## The short answer

"The model runs locally" secures exactly one thing: your prompts and outputs
don't leave the machine *at inference time*. The privacy task is everything
around that — the application's telemetry and update checks, downloaded
plugins and tools, remote model fallbacks, and where logs and histories are
stored. A local model inside a chatty app is local in name only; the boundary
you have to audit is the software's, not the weights'.

## The four leaks to audit

**1. Application telemetry and updates.** Most local-model apps check for
updates and many collect usage telemetry — sometimes opt-out, sometimes
opt-in. The check itself is a network call; whether it carries data about
*what you ran* is the question to answer, in the app's docs and settings.
This is the leak "it's local so it's private" always forgets.

**2. Plugins and tools.** An agent or chat app that can call tools can call
*remote* tools — a web-search plugin, a hosted code executor, a cloud
embedding API. Each one is an exfiltration path for whatever's in context.
Local inference doesn't constrain what the agent's tools do; a "local"
assistant with a search plugin is sending your queries out by design.

**3. Remote model fallbacks.** Some apps silently route to a hosted model
when the local one can't handle a task — a helpful feature that's also a
privacy hole. The question to ask: is there a remote fallback, and can it be
disabled? A fallback you didn't know about is a leak you can't consent to.

**4. Where logs and history live.** Local inference with a cloud-synced
history, or logs shipped to a remote dashboard, leaks the same content
through a different door. Check where the app persists conversations and
whether any of it leaves the machine.

## The audit method

For each of the four: find the setting or the doc, not the marketing page.
Then verify with the machine — a network monitor or firewall log during a
session shows you what the app actually does, which is the only version that
can't be argued with. "Local" is a claim; a packet capture is the test.

## What "local and private" actually requires

A defensible local-private setup: weights on disk, inference on-device,
telemetry off (or absent), no remote tools in the loop, no silent fallback,
and history that stays local. That's a configuration you assemble and verify,
not a property you get by picking a local model. The model being local is the
necessary condition; everything on this list is the sufficient condition.

## Go deeper

- [What 'running a model locally' actually means](/learn/local-inference/what-local-inference-actually-means) — the three-layer split this audits.
- [Ollama: install, pull, run, and the first API call](/learn/local-inference/ollama-first-run) — a concrete app to run the audit on.
- [PII redaction in LLM logs](/learn/production/pii-redaction-in-llm-logs) — the log-leak counterpart on the production side.
- [Data retention and privacy policy](/learn/production/data-retention-and-privacy-policy) — the policy layer for what you do keep.
