---
title: "Migrate between raw SDKs and agent frameworks"
description: "Move an LLM feature between a provider SDK and a framework — what the abstraction buys, what it costs, and a staged migration path that keeps the app running."
question: "How do I migrate from a raw SDK to a framework — or back?"
level: "intermediate"
duration: "25 min"
published: "2026-09-16"
tags: ["Frameworks", "Migration", "Architecture"]
steps:
  - "Inventory what the framework actually does for you"
  - "Draw the seam: provider calls vs your logic"
  - "Migrate behind an interface, not in place"
  - "Port prompts, structured output, and tool calls deliberately"
  - "Diff behavior on logged traffic before cutting over"
  - "Know the exit cost before you enter"
related:
  - "/learn/agent-frameworks/framework-comparison-and-escape-hatches"
  - "/learn/agent-frameworks/raw-sdk-agent-baseline"
  - "/learn/agent-frameworks/framework-comparison-and-escape-hatches"
---

Migration between a raw provider SDK and a framework — in either direction — is mostly an exercise in finding where your real logic lives. The providers differ in API shape; the frameworks differ in philosophy; your parsing, retries, prompts, and evals are the asset that must survive the trip.

## 1. Inventory before you move

List what you actually use: chat calls, streaming, tool calls, structured output, file upload, batch. Then list what the framework would add (chains, memory, agents, evals, callbacks) or remove (provider-specific features the abstraction doesn't expose). Migration is justified by a *delta* — capability gained or dependency shed — not by restlessness.

## 2. Find the seam

In a well-shaped codebase there's a thin layer where your code talks to the model — a `callModel()` that everything else uses. If your code calls the SDK from forty places, you don't have a migration, you have a rewrite. Establish the seam first: one function (or class) owning provider calls, everything else speaking your types. This is the [raw SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) discipline and it's what makes any framework swappable later.

## 3. Migrate behind the interface

Port the seam, not the codebase. Write the framework-backed implementation of `callModel()` alongside the SDK one, switchable by config. The app keeps running on the old path while the new one proves itself — this is the same seam discipline as [gateway vs in-app abstraction](/learn/production/llm-gateway-and-provider-abstraction), applied to frameworks.

## 4. Port the semantics, not the calls

The traps are in the details: message-role mapping differs; tool-call schemas serialize differently; structured-output features (JSON mode vs schema-enforced) have different guarantees per provider *and* per framework wrapper; streaming chunk shapes differ; system-prompt handling differs. Port each feature with its contract — "this field must be a validated enum" — then verify the contract, not the code path. [Structured outputs across providers](/learn/structured-outputs/cross-provider-structured-output-differences) catalogs the differences that will bite you.

## 5. Diff on logged traffic

Before cutover, replay real logged inputs through both implementations and compare outputs — same inputs, both paths, scored. Behavioral diffing catches what code review misses: a prompt that behaved one way on the SDK path may shift under the framework's hidden formatting. This is the replay discipline from [Auditability and run history](/learn/ai-automation-ops/auditability-and-run-history).

## 6. Price the exit, not just the entry

Every abstraction has a leaving cost: framework-specific types in your function signatures, framework state in your stores, framework idioms in your prompts. Before adopting, ask what a future migration out would touch — the [framework comparison capstone](/learn/agent-frameworks/framework-comparison-and-escape-hatches) evaluates lock-in as a first-class dimension. Keep framework types at the seam's edge and your own types inside; that's the whole game.

## Where to go next

The [agent-frameworks track](/learn/agent-frameworks/framework-comparison-and-escape-hatches) maps when the abstraction earns its keep, and the comparison capstone turns the choice into a scored decision instead of a vibe.
