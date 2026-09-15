---
title: "Handle refusals and partial structured outputs"
track: "structured-outputs"
status: live
summary: "Plan for the two structured-output outcomes that aren't valid JSON — a refusal-shaped response and a truncated stream — with detection and recovery paths for each."
duration: "8 min read"
---

## The short answer

A structured-output call has three outcomes, not two: valid JSON, a refusal, or a partial document. Refusals come back well-formed but wrong-typed; partials come back right-typed but cut off. If your pipeline only handles "valid" and "exception", both failure modes land in the wrong bucket — a refusal gets retried as if it were a parse error, and a truncated document gets parsed as if it were whole.

## Why this matters

The failure shapes differ by provider, so code that "handles errors" against one provider's behavior misclassifies the other's. A safety refusal on a borderline extraction request is not a bug to retry — it is information. A token-limit truncation is not a content problem — it is a budget problem. Treating them the same produces retry loops that never converge and logs that explain nothing.

## The three-outcome contract

Classify every response before you parse:

```text
finish_reason / stop reason   →   complete? length-capped? content-filtered?
content shape                 →   schema-valid? refusal-shaped? empty?
```

1. **Refusal-shaped.** The provider returns a refusal object or a polite paragraph instead of your schema — the field you expected is absent, or there's a refusal marker in the response. Detection: the parse fails *and* the text reads like a refusal, or the API's own refusal field is set.
2. **Length-capped.** The output ends mid-JSON because it hit the token limit. Detection: finish reason says length/truncated, and the tail is unterminated JSON.
3. **Complete.** Parse and validate against the schema — this is the only path that reaches your application code.

## Recovery per shape

**Refusals** — don't retry the same call. First classify why: safety boundary (log and route to a human or a fallback task), schema ambiguity (the model couldn't express the answer in your shape — loosen the schema or add an `unable` variant), or prompt phrasing (rephrase once, not in a loop). A refusal on a well-formed request is a product event worth recording, not an exception.

**Partials** — three repairs in order of preference:

- **Re-request with a tighter budget**: shorten the schema's optional fields, ask for the longest fields first, or raise the token cap if the response was merely too big.
- **Resume**: feed the truncated output back and ask for the continuation — works when the document is a list you can split.
- **Salvage**: parse the longest valid prefix — a truncated array of 40 items where 37 parsed is often usable, if your schema tolerates partial collections and you mark the record incomplete.

The worst option is the one codebases reach for: `try { JSON.parse } catch { retry }` — it retries refusals forever and retries truncation into the same wall.

## The lab version

Build a fixture set: one prompt that triggers a refusal on your provider, one that truncates at a deliberately small token cap, one clean pass. Assert your classifier routes each correctly — that is the whole skill.

## Go deeper

- [Incremental JSON repair](/learn/structured-outputs/incremental-json-repair) — the salvage technique done properly.
- [Failure modes taxonomy](/learn/structured-outputs/failure-modes-taxonomy) — where refusals and truncations sit among the other failure shapes.
- [Evaluating structured-output quality](/learn/structured-outputs/evaluating-structured-output-quality) — measuring refusal and truncation rates, not just parse rates.
