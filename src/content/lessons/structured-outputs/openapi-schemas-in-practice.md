---
title: "Use OpenAPI schemas for tool and output validation"
track: "structured-outputs"
status: live
summary: "Practice reading and writing the OpenAPI schema dialect — the subset some providers and most tool ecosystems actually speak — and where it differs from the JSON Schema you already know."
duration: "10 min read"
---

## The short answer

OpenAPI schemas look like JSON Schema because they descend from it, but the dialect is narrower: a restricted keyword set, no full `patternProperties`/`$ref` freedom in some contexts, and provider-specific subsets on top. The practice is to write schemas inside the intersection — the constructs every consumer accepts — and validate them against the actual target, not the full spec.

## Why this matters

Google's structured-output surface accepts an OpenAPI subset, tool ecosystems describe their parameters in OpenAPI-flavored schemas, and the `openapi.json` document your API already ships is a validation contract you can reuse. If your schemas only work in one dialect, every provider or tool boundary becomes a rewrite.

## The dialect in practice

The safe intersection — constructs that survive JSON Schema, OpenAPI 3.x, and the provider subsets:

```yaml
type: object
properties:
  status:
    type: string
    enum: [ok, failed, pending]
  total:
    type: number
  items:
    type: array
    items:
      type: object
      properties:
        sku: { type: string }
        qty: { type: integer }
required: [status, total]
```

- **Scalars and enums** port cleanly everywhere.
- **`required` and `properties`** are universal; some providers require *every* property listed in `required` even when logically optional.
- **`additionalProperties: false`** is accepted or required depending on the surface — safe to include.
- **`oneOf`/`anyOf`** work for discriminated unions but are the first thing subsets cut or weaken — keep them shallow.
- **The traps**: `pattern` regexes, `format` values, deep nesting, large enums, and recursive `$ref` are where dialects diverge. Verify per target.

## The practice

Take one schema you already use — Pydantic model or Zod schema — and hand-write the OpenAPI `components.schemas` entry for it. Then diff the three surfaces:

1. **JSON Schema** — your model's native serialization.
2. **OpenAPI 3.1** — what your API spec says.
3. **The provider subset** — what the structured-output or tool-call surface accepts.

Where they disagree, that is a portability boundary — the same discipline as [writing portable schema code](/learn/structured-outputs/writing-portable-schema-code), at the schema-document level.

## Where this pays off

- **Tool definitions** — an OpenAPI-shaped parameter schema is the lingua franca of [tool schemas](/learn/structured-outputs/tool-function-schemas).
- **Extraction pipelines** — your OpenAPI spec's request/response schemas are pre-built extraction targets; an endpoint that consumes the same shape your extractor produces needs no translation layer.
- **Provider swaps** — a schema written to the intersection survives the [cross-provider differences](/learn/structured-outputs/cross-provider-structured-output-differences) that break dialect-specific ones.

## The checkpoint

You can write a schema once and say, for each surface it must satisfy, which constructs survive and which need adaptation — and you know that `required`, `enum`, scalars, and shallow objects are the floor everything shares.

## Go deeper

- [Schema versioning and migration](/learn/structured-outputs/schema-versioning-and-migration) — the contract-management side of shipping a schema.
- [JSON Schema essentials for outputs](/learn/structured-outputs/json-schema-essentials-for-outputs) — the fuller dialect OpenAPI subsets descend from.
- [Discriminated unions in schemas](/learn/structured-outputs/discriminated-unions-in-schemas) — `oneOf` used where it actually ports.
