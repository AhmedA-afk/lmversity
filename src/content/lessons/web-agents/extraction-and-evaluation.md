---
title: "Extraction with schemas, and evaluating whether the browser task worked"
track: "web-agents"
status: live
summary: "The two closing disciplines of browser automation — pulling data out as validated schema-shaped records with source capture, and judging agent runs with replays, traces, and failure classification."
duration: "9 min read"
sources: ["playwright-docs", "stagehand-repo"]
---

## The short answer

Two disciplines close the loop on browser automation: **extraction** —
getting data out of pages as *validated, schema-shaped records*, not
prose — always with **source capture** so every record can be traced
back to where it came from — and **evaluation** — answering "did the
agent actually do the task" with replayable evidence: traces,
screenshots, step logs, and a failure taxonomy that tells you *how* it
broke.

## Extraction: schemas and provenance

"Scrape the pricing table" produces an essay; **schema extraction**
produces a contract. The pattern — Stagehand's `extract` makes it
explicit, and it generalizes to any agent doing page→data:

```python
items = page.extract(
  instruction="list the pricing tiers",
  schema={
    "tiers": [{"name": "string", "price": "number", "period": "string"}]
  }
)
```

The schema does three jobs: it constrains the output shape (parseable,
diffable, storable), it makes the model's misses *visible* (a missing
field is a null in a row, not a sentence that quietly skipped it), and
it's your eval surface — validation is "does the record match the
schema," not "does the prose look right."

**Source capture** is the second half: every extracted record should
carry where it came from — URL, timestamp, and ideally the element or
screenshot region. Extraction without provenance is unverifiable data;
with it, a disputed row can be traced back to the actual page state
that produced it — which is also the
[evidence discipline](/learn/harness-design/harness-observability)
observability applies everywhere.

## Evaluation: did it work, and how did it break?

A browser-task run is judged on evidence, not the agent's report —
"done" from the agent is a claim; the trace is the record:

- **Replay and traces** — Playwright traces (DOM snapshots + network +
  timeline) and hosted-browser session replays let you watch what
  actually happened, step by step. For nondeterministic agents, the
  replay *is* the eval artifact — you can't re-run the same run, but
  you can re-watch it.
- **Screenshots at checkpoints** — a screenshot per milestone ("on
  checkout page", "total visible") gives verify-without-replay
  evidence and doubles as source capture for extracted data.
- **Failure classification** — the taxonomy that turns "it failed"
  into a fixable signal:
  - *Navigation failure* — wrong page, dead link, blocked by auth
  - *Locator failure* — element not found, ambiguous match, wrong frame
  - *Extraction failure* — field missing, wrong type, hallucinated value
  - *Judgment failure* — the agent did something else entirely,
    followed [injected instructions](/learn/web-agents/web-prompt-injection),
    or declared victory early
  - *Environment failure* — timeout, crash, site down

  Classified failures route the fix: locator failures → better
  [selectors](/learn/web-agents/playwright-fundamentals-and-locators);
  judgment failures → task contract or model; environment failures →
  retries and timeouts.

## The honest limits

Evaluation is the expensive half — a replay watched per run doesn't
scale, so teams sample, and sampled review misses drift. And "it
extracted the data" isn't "it extracted *correct* data" — schema
validation catches shape errors, not values that are plausible but
wrong; spot-checking against the source is the only calibration.

## The exercise

Take one extraction task and run it with an explicit schema + source
capture, then classify a failure deliberately (rename the target
element so extraction breaks). Watching a run produce a *classified*
failure — "locator failure at step 4" — instead of a silent wrong
answer is the payoff.

## Go deeper

- [Playwright fundamentals](/learn/web-agents/playwright-fundamentals-and-locators) — the extraction substrate.
- [Sessions, credentials, and act boundaries](/learn/web-agents/sessions-credentials-and-act-boundaries) — what gets gated.
- [Evals for agent behavior](/learn/evals-red-teaming/why-evals-matter) — evaluation discipline generally.
