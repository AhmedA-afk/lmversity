---
title: "Provider moderation and safety APIs: the cheap filter layer"
track: "llm-security"
status: live
summary: "Moderation endpoints — OpenAI's Moderation API and its peers — are the lowest-effort safety layer: a classification call on input or output that filters categories of harm before they become your problem."
duration: "7 min read"
sources: ["openai-moderation"]
---

## The short answer

Before guardrail frameworks and bespoke classifiers, there's the cheap
layer every provider ships: a **moderation endpoint** that scores text
against harm categories (hate, violence, self-harm, sexual content,
harassment, and minors-related categories). One extra API call on user
input *and* on model output buys a documented, maintained filter trained
by someone whose full-time job is that classifier. It won't catch your
application-specific harms — but it catches the general-purpose ones for
near-zero engineering cost.

## Where it sits in the pipeline

```
user input → [moderate input] → model → [moderate output] → user
```

Two call sites, two different questions:

- **Input moderation** asks "should this request reach the model at
  all" — catching abusive users, jailbreak-adjacent content, and
  categories you have a policy against generating on demand.
- **Output moderation** asks "should this response reach the user" —
  the backstop for when the model produces something your system
  prompt said not to, because system prompts are instructions,
  not guarantees.

The moderation call is cheap and fast relative to a generation call, so
the usual pattern is moderate-everything at input, moderate-on-policy at
output (always for user-facing surfaces, sampled for internal tools).

## What it gives you — and what it doesn't

- **Gives**: maintained category classifiers, a defensible "we filter
  for X" claim with a vendor's documentation behind it, and a hard
  filter independent of model behavior — it can't be prompt-injected
  away because it doesn't read the prompt, it classifies the text.
- **Doesn't give**: application-specific harms (medical advice
  boundaries, competitor mentions, tone), precision tuned to *your*
  policy, or coverage of harms outside its category list. For those you
  need [guardrail frameworks](/learn/llm-security/guardrails-frameworks-in-practice)
  or your own evaluators — the moderation API is the floor, not the
  ceiling.

## The design detail people miss

Decide the *action* before wiring the check: block, escalate to human
review, or respond with a safe fallback. "Flagged" with no downstream
behavior is logging, not moderation. And record flagged decisions —
moderation calls are exactly the events an
[audit trail](/learn/llm-security/audit-logs-and-accountability) should
reconstruct, both for safety review and for measuring how often the
filter fires.

## The honest limits

Category thresholds are the vendor's, not yours — a moderation API tuned
for general audiences may be too permissive for a children's product and
too strict for a medical-adjacent tool. And it's a text classifier:
it doesn't see the image the user uploaded, the tool call the model is
about to make, or the *intent* of a multi-turn conversation. Depth still
requires layers.

## The exercise

Run twenty of your app's real inputs through a moderation endpoint and
read the category scores — not just the flagged boolean. The scores you
didn't expect are the calibration data for where your own policy layer
needs to start.

## Go deeper

- [Guardrails frameworks in practice](/learn/llm-security/guardrails-frameworks-in-practice) — the layer above this floor.
- [Red-teaming LLM apps](/learn/responsible-ai/red-teaming-llm-apps) — testing whether the layers hold.
- [OWASP Top 10 for LLM apps](/learn/llm-security/owasp-llm-and-agentic-top-10) — where moderation fits in the risk taxonomy.
