---
title: "Guardrails AI, NeMo Guardrails, and Llama Guard: the filter layer in depth"
track: "llm-security"
status: live
summary: "Three different answers to programmable safety — Guardrails AI's validation-and-fix loops, NVIDIA NeMo Guardrails' conversational rails, and Meta's Llama Guard safety classifier models."
duration: "9 min read"
sources: ["guardrails-ai-repo", "nemo-guardrails-repo", "purple-llama-repo"]
---

## The short answer

Past [moderation APIs](/learn/llm-security/provider-moderation-and-safety-apis)
— fixed category filters — sit *programmable* guardrails: **Guardrails
AI** validates structured output against specs and can re-ask or fix on
failure; **NeMo Guardrails** defines conversational rails — dialogue
flows, topic boundaries, fact-checking steps — in a rail language around
the model; **Llama Guard** is a safety *classifier model* (part of Meta's
Purple Llama project) you run yourself to score inputs/outputs across
hazard categories. Three different mechanisms for three different
problems — choosing starts with naming which one you have.

## The three mechanisms

- **Guardrails AI — validation as a wrapper.** You declare what valid
  output looks like (schema, types, custom validators — no PII, no
  competitor names, on-topic); the library wraps the LLM call, checks
  the output, and on failure can re-prompt, apply a fix, or raise. It's
  the natural fit when "safety" means *output contract*: the model must
  return parseable JSON without forbidden fields. Think of it as
  [structured-output validation](/learn/structured-outputs/validate-then-branch-pipeline)
  with a safety vocabulary.
- **NeMo Guardrails — rails around the conversation.** Colang-defined
  flows sit between user and model: input rails screen requests, dialog
  rails steer the conversation (stay on topic, follow this flow for
  refunds), output rails check responses, and retrieval rails check
  groundedness. It's the fit for *behavioral* guardrails — the bot that
  must not discuss politics, must escalate billing disputes, must cite
  sources — where the policy is conversational, not per-field.
- **Llama Guard — safety classification you own.** A fine-tuned
  classifier that scores text (or image, in multimodal versions) against
  the MLCommons-style hazard taxonomy — you host it, you set the
  threshold, you adapt the categories. It's the fit when you need a
  moderation API's job done *inside your infrastructure* — no third-party
  call, tunable categories — and can afford to run another model per
  request.

## Choosing by failure mode

| Your problem | Mechanism that fits |
|---|---|
| Output must match schema and exclude forbidden content | Guardrails AI validators |
| Conversation must follow flows and stay in scope | NeMo Guardrails |
| Need self-hosted, tunable input/output safety classification | Llama Guard |
| General harm categories, lowest effort | [Moderation API](/learn/llm-security/provider-moderation-and-safety-apis) |

Real systems stack them: moderation API as the cheap floor, a guardrail
framework for application policy, Llama Guard where data can't leave.

## The honest limits

Every guardrail layer adds latency, cost, and a new failure surface — a
rail that blocks too eagerly becomes the bug users remember. Guardrail
frameworks also inherit the fundamental limit: an LLM checking an LLM is
still a model making a judgment, and determined adversarial input tests
*both* models. Treat guardrails as risk reduction with measurable
coverage — test them in your
[red-team suite](/learn/llm-security/prompt-injection-testing-and-threat-models),
don't assume them.

## The exercise

Write your application's actual safety policy in three sentences, then
ask which mechanism each sentence maps to — most policies decompose into
one validation rule, one conversational rail, and one classification
need, which tells you what to adopt and what to skip.

## Go deeper

- [Provider moderation APIs](/learn/llm-security/provider-moderation-and-safety-apis) — the cheaper layer below.
- [Prompt-injection testing and threat models](/learn/llm-security/prompt-injection-testing-and-threat-models) — how to test the rails.
- [Sandboxing code execution and browser use](/learn/llm-security/sandboxing-code-execution-and-browser-use) — guardrails constrain text; sandboxes constrain actions.
