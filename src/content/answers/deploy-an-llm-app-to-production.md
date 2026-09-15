---
title: "How do I deploy an LLM app to production?"
description: "A production LLM feature is a model call plus four systems around it — an eval gate, observability, cost controls, and a kill switch — not just the API call itself."
intent: howto
updated: "2026-09-15"
featured: false
faq:
  - q: "What's the minimum a production LLM feature needs?"
    a: "Four things around the model call: a versioned prompt and pinned model version, an eval that gates changes, observability (per-request logs of tokens, latency, errors, and cost), and a way to turn the feature off fast — a feature flag or kill switch — because AI failures are often silent quality regressions rather than crashes."
  - q: "Do I need a different deploy process than a normal web feature?"
    a: "Mostly no — the unusual parts are that 'working' is a statistical property, not a binary, so changes should be gated on an eval rather than eyeballing; and that the dependency you're calling changes underneath you, so model version pinning and deprecation monitoring matter."
  - q: "How do I roll out an LLM change safely?"
    a: "The same way as any risky change: canary to a small slice, shadow the new version against the old on real traffic before switching, and keep a one-step rollback. The AI-specific addition is comparing output quality between the versions, not just error rates."
  - q: "What do I monitor in production?"
    a: "Four axes: quality (eval scores on live samples, groundedness), cost (tokens per request type), latency (per stage of the pipeline), and failure modes (validation retries, escalation rate, injection attempts). A quality dashboard without the cost axis misses half the regressions."
related:
  - /guides/ship-your-first-ai-feature-to-production
  - /guides/write-your-first-eval-for-an-ai-feature
  - /learn/production/feature-flags-and-kill-switches
  - /learn/production/canary-and-shadow-releases
  - /learn/production/observability-cost-and-latency
  - /learn/production
---

Deploying an LLM app to production means the model call is the easy part — what makes it production is the four systems around it: an eval that gates changes, observability that sees quality and cost per request, controls that bound the blast radius, and a kill switch for the day it goes wrong. Ship the call without them and you'll find out from a user.

## The short version

- Pin the model version and version the prompt — "the API changed underneath me" is a real failure mode, not a hypothetical.
- Gate changes on an eval, not on eyeballing a few outputs — quality is statistical, and a demo that looks fine can hide a regression.
- Instrument per request: input/output tokens, latency per stage, errors, retries, cost — the monthly provider total hides which feature is expensive.
- Bound the blast radius: output validation, rate limits, per-tenant budgets, and a kill switch that doesn't need a deploy.
- Roll out like any risky change: canary, shadow against the old version, one-step rollback — plus compare output quality between versions, not just error rates.

## The shape of a production LLM feature

The model call sits inside a pipeline: input validation and templating on the way in, output parsing and validation on the way out, a model abstraction layer so provider changes don't rewrite your app, and the four systems above wrapped around it. The [production track](/learn/production) treats each of these as its own lesson because each is where real incidents come from — [prompts as versioned config](/learn/production/prompts-as-versioned-config), [feature flags and kill switches](/learn/production/feature-flags-and-kill-switches), [canary and shadow releases](/learn/production/canary-and-shadow-releases), and [observability, cost, and latency](/learn/production/observability-cost-and-latency).

## What "done" looks like

You can answer, without guessing: what did this feature cost per request yesterday, what did the p95 latency look like, what would turning it off take, and did last Tuesday's prompt change help or hurt on the eval set. If any of those is "I'd have to check manually," that's the next thing to build — usually starting with [an eval](/guides/write-your-first-eval-for-an-ai-feature), since everything else measures against it.

## Where LMVersity fits

The [ship your first AI feature to production](/guides/ship-your-first-ai-feature-to-production) guide walks the whole arc end to end, and the [production track](/learn/production) goes deeper on each subsystem — including the parts nobody enjoys, like [incident postmortems for AI](/learn/production/incident-postmortems-for-ai) and [on-call playbooks](/learn/production/on-call-playbooks-for-ai). Free, self-paced, no certificate.

## Go deeper

- [Ship your first AI feature to production](/guides/ship-your-first-ai-feature-to-production) — the end-to-end guide.
- [Write your first eval](/guides/write-your-first-eval-for-an-ai-feature) — the gate everything else measures against.
- [Canary and shadow releases](/learn/production/canary-and-shadow-releases) — the safe rollout pattern.
