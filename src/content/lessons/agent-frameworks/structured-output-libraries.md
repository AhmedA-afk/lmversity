---
title: "Instructor, Outlines, Guidance: the constrained-output libraries"
track: "agent-frameworks"
status: live
summary: "Three libraries enforce structure at three different layers — Instructor validates and retries with Pydantic, Outlines constrains decoding at the token level, Guidance interleaves generation and control — pick by where the guarantee has to live."
duration: "8 min read"
sources: ["instructor-docs", "outlines-repo"]
---

## The short answer

Three libraries solve "make the LLM emit valid structure" at three
different layers, and the layer is the whole choice. **Instructor** wraps a
provider SDK: your Pydantic model becomes the response contract, and
invalid output triggers a validation-retry loop — structure enforced
*after* generation. **Outlines** enforces it *during* generation:
constrained decoding makes tokens that would violate the regex/JSON
schema literally undecodable. **Guidance** (Microsoft) interleaves
generation and control in one template — generation constrained by
structure embedded in the prompt program itself.

## The three layers

```python
# Instructor — validate-and-retry (any provider)
import instructor
client = instructor.from_openai(openai.OpenAI())
answer = client.chat.completions.create(
    model="gpt-5", response_model=Invoice,
    messages=[{"role": "user", "content": text}])   # returns a validated Invoice

# Outlines — constrained decoding (local models: transformers, vLLM, llama.cpp)
import outlines
model = outlines.models.transformers("...")
gen = outlines.generate.json(model, Invoice)(text)  # invalid JSON is undecodable
```

- **Instructor** — retry-on-invalid. Provider-agnostic (OpenAI, Anthropic,
  and others behind one `response_model` API), Pydantic models as the
  contract, `max_retries` for the repair loop. Its niche is shrinking:
  providers' native
  [structured outputs](/learn/structured-outputs/cross-provider-landscape)
  now do schema-enforcement server-side — but Instructor still wins for
  validation *with retry* and for providers whose native mode is weaker.
- **Outlines** — decode-time enforcement via finite-state machines over
  the grammar. Works on models you run yourself — the same guarantee as
  [SGLang's constrained decoding](/learn/local-inference/sglang-serving-and-structured-generation),
  which is no coincidence: the mechanism is the same family
  ([constrained decoding mechanics](/learn/structured-outputs/constrained-decoding-under-the-hood)).
- **Guidance** — a template language where structure, generation, and
  branching interleave (`{{gen}}` blocks inside a prompt program). Powerful
  but the least conventional API of the three; treat as a candidate when
  the other two don't fit the control shape.

## What they add over the raw loop

A guarantee the [raw loop](/learn/agent-frameworks/raw-sdk-agent-baseline)
can't give you: *structure by construction*, not by hope. In raw code the
answer is "parse and pray, retry on failure" — which Instructor automates,
Outlines makes unnecessary, and Guidance embeds in the prompt itself.

## When plain code is enough

Plain code wins when output is free text — the whole category is about
structure. It also wins when the provider's *native* structured output
already satisfies the contract (OpenAI/Anthropic/Gemini all have server-side
schema modes — see the
[cross-provider landscape](/learn/structured-outputs/cross-provider-landscape)):
adding a library to wrap a feature the API already has is indirection
without payoff. Reach for these when the guarantee must live somewhere the
native API can't put it: retry-with-validation semantics (Instructor),
self-hosted models (Outlines), or prompt-program control flow (Guidance).

## The exercise

Run the same Pydantic schema through a provider's native structured output
and through Outlines on a local model — the takeaway is that the *same
contract* is enforceable at two different layers, and only one of them
survives a provider outage.

## Go deeper

- [Structured outputs: the landscape](/learn/structured-outputs/cross-provider-landscape) — the native feature these libraries predate.
- [Constrained decoding under the hood](/learn/structured-outputs/constrained-decoding-under-the-hood) — the mechanism Outlines and SGLang share.
- [Validation and repair loops](/learn/prompt-engineering/validation-and-repair-loop) — the pattern Instructor automates.
