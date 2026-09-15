---
title: "PydanticAI: agents that type-check"
track: "agent-frameworks"
status: live
summary: "PydanticAI brings the Pydantic model to agent code — typed dependencies, validated tool signatures, structured output that fails type-checking instead of parsing — plus graphs, evals, and Logfire observability."
duration: "8 min read"
sources: ["pydanticai-docs"]
---

## The short answer

PydanticAI is the Pydantic team's agent framework, and its pitch is one
word: **types**. `Agent[DepsT, OutputT]` is generic over its dependency and
output types; tools get their parameters from annotated function
signatures; `output_type` returns a validated Pydantic model, not a string
you parse. The bet: agent code should be checkable like the rest of your
codebase — mismatches fail at type-check or validation time, not in
production output.

## The typed pieces

```python
from pydantic_ai import Agent, RunContext
from pydantic import BaseModel

class Deps(BaseModel):
    user_tier: str

class Answer(BaseModel):
    text: str
    confidence: float

agent = Agent("openai:gpt-5", deps_type=Deps, output_type=Answer)

@agent.tool
async def account_status(ctx: RunContext[Deps], account_id: str) -> str:
    # ctx.deps.user_tier is typed; account_id is validated from the schema
    ...
```

- **`deps_type` + `RunContext`** — dependencies injected into tools/system
  prompts through a typed container: database handles, config, user
  context. Testability is the point — swap `deps` in a test and the agent
  runs against stubs.
- **`output_type`** — the model's final output is validated into a
  Pydantic model; the framework retries on validation failure instead of
  handing you malformed JSON (the runtime version of
  [validation-and-repair](/learn/prompt-engineering/validation-and-repair-loop)).
- **Graphs** — a typed state-machine layer for control flow too complex for
  one agent loop, in the same spirit as LangGraph but built on Pydantic
  generics.
- **Evals + Logfire** — `pydantic-evals` for dataset/LLM-judge evaluation
  and Logfire (OpenTelemetry-based) for tracing — the framework treats
  [evals](/learn/evals-red-teaming/datasets-rubrics-and-judges) and observability as
  first-party concerns, not integrations.

## What it adds over the raw loop

Validation and structure. The [raw loop](/learn/agent-frameworks/raw-sdk-agent-baseline)
returns strings you hope parse; PydanticAI returns typed objects or a
visible failure. DI (`deps`) makes agents unit-testable without mocking
the model, and the model-provider layer is genuinely multi-provider —
the agent spec and the provider are separate choices.

## When plain code is enough

Plain code wins for one-shot prompts and trivial tool loops — the generic
machinery pays off when *shape* matters, not when you're piping text. It's
also lighter than it looks but still a framework: if your output contract
is "a string", `output_type=str` buys you little over raw. Reach for
PydanticAI when your agent emits structured results other code consumes
(the common production case), when you want DI-driven testability, or when
your team already thinks in Pydantic — it's the most "normal Python"
framework in this track.

## The exercise

Rebuild the raw-loop exercise with `output_type` set to a Pydantic model —
then feed a deliberately malformed tool result and watch validation retry
instead of propagate. That's the framework in one behavior.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — the loop this type-checks.
- [Schema design for reliability](/learn/structured-outputs/schema-design-for-reliability) — the contract `output_type` enforces.
- [LangGraph: durable agents as graphs](/learn/agent-frameworks/langgraph-durable-agents) — the alternative when durability matters more than types.
