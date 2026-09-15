---
title: "Lab: measure how the same prompt behaves across providers"
track: "prompt-engineering"
status: live
summary: "Run one fixed prompt suite across two or more providers, pin the exact model strings, and record the behavioral differences that matter for your app — not the benchmark leaderboard."
duration: "20 min read"
---

## The short answer

Prompts are not portable by default. In this lab you take a small suite of your own prompts, run them unchanged across providers, and record where behavior diverges — instruction-following, JSON adherence, refusals, formatting, tone. The output is a one-page diff report specific to *your* prompts, which no public benchmark can give you.

## Why this matters

Provider comparisons published online measure the models on generic tasks. Your app has specific prompts with specific requirements — "always answer in JSON", "never mention competitors", "stay under 150 words". Whether a prompt survives a provider switch is an empirical question about your suite, and this lab is how you answer it before it becomes an incident.

## Set up honestly

Pin the exact model identifiers you call in each provider — the dated or versioned strings, not the floating aliases. Record them in the report. Model behavior drifts behind aliases; the pinned string is what makes your result reproducible and tells you when to rerun.

Use each provider's recommended call pattern — its own SDK, its documented message format. Do not force one provider's conventions onto another; you are measuring the system you would actually ship.

## The test suite

Write five prompts that exercise what your app depends on:

1. **Structured output.** Ask for a specific JSON shape with a fixed schema. Record whether each provider returns parseable JSON, whether it adds preamble, and whether it respects `null` fields.
2. **Instruction precision.** A prompt with three constraints — a format, an exclusion ("do not mention X"), and a length bound. Score each constraint separately; providers differ on which constraint they sacrifice first.
3. **Refusal boundary.** A benign-but-adjacent request near a safety line — summarize a document containing a medical claim, or rewrite content with a strong opinion. Record who refuses, who hedges, and how recoverable each refusal is.
4. **Reasoning format.** A problem that benefits from step-by-step work. Record whether the provider exposes reasoning, hides it, or requires a different prompting pattern to get it.
5. **Tone under constraint.** "Answer like a careful expert, no hedging filler." Diff the voices — house styles differ more than capability does on everyday prompts.

## Score and record

For each provider × prompt cell, record: did it follow the contract (pass/fail per constraint), what it cost in tokens in and out, and one line on what was different. The deliverable is a table — five prompts down, your providers across — plus a paragraph on which differences would actually hurt your app.

## What to do with divergences

Three responses, in order of preference:

1. **Adapt the prompt** where the difference is stylistic — a provider-neutral phrasing often fixes it.
2. **Isolate the prompt** where one provider needs a genuinely different formulation — keep it behind an interface, not inline.
3. **Accept the difference** where it is a real capability gap — and record it as a constraint on provider choice, with the pinned model string and date.

## The checkpoint

You are done when you can name, for your own prompt suite, which prompts port cleanly and which need per-provider variants — with the evidence in a table, not a vibe.

## Go deeper

- [Porting a prompt, worked example](/learn/prompt-engineering/porting-a-prompt-worked) — the mechanics of adapting one prompt across providers.
- [A/B testing prompts in production](/learn/prompt-engineering/ab-testing-prompts-in-production) — how to keep measuring after launch.
- [Choosing an SDK](/learn/genai-app-dev/sdk-vs-raw-api) — the abstraction layer where per-provider differences live in code.
- [Cross-provider structured-output differences](/learn/structured-outputs/cross-provider-structured-output-differences) — the same problem, specialized to JSON and schemas.
