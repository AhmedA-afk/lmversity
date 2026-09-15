---
title: "Agentic browsers: Browser Use, Stagehand, Browserbase, and computer-use tools"
track: "web-agents"
status: live
summary: "When deterministic automation can't handle the variation — Browser Use's agent loop over Playwright, Stagehand's act/extract/observe primitives on Browserbase, and providers' native computer-use."
duration: "10 min read"
sources: ["browser-use-repo", "stagehand-repo", "anthropic-computer-use"]
---

## The short answer

Agentic browsing tools put an LLM in the loop over a real browser:
**Browser Use** is the open-source agent that drives Playwright from a
natural-language task; **Stagehand** (Browserbase) splits the
difference — deterministic code plus `act`/`extract`/`observe`
primitives that call the model only where the script can't cope, with
Browserbase providing hosted browsers as the runtime; and providers
ship **computer-use** tools that drive a desktop by screenshots
([the mechanism](/learn/agentic-ai/computer-use-agents)). The shared
premise — and the shared warning — is the same: use the model only
where a script can't reach.

## The three shapes

- **Browser Use** — a full agent loop: task in, it plans steps, drives
  Playwright, observes results, iterates until done. The tool for
  genuinely open-ended tasks ("find the pricing page and extract the
  tiers") where no fixed script exists. Understand it as *agent +
  Playwright as its body*: the same tradeoffs as any agent loop —
  nondeterminism, cost per step, drift on long tasks.
- **Stagehand + Browserbase** — the hybrid: you write a deterministic
  script, but at the steps where selectors or content vary you call
  `stagehand.act("click the checkout button")`,
  `stagehand.extract("get the total as a number")`, or
  `stagehand.observe("what's on this dialog")` — model calls scoped to
  single actions inside an otherwise deterministic flow. Browserbase
  is the hosted-browser runtime behind it (headless browsers as a
  service: sessions, proxies, stealth, replay). The pattern is the
  lesson: *deterministic spine, model joints*.
- **Provider computer-use** — Anthropic's computer-use tool and
  OpenAI's equivalent drive a whole desktop via screenshots +
  synthetic input: a broader surface than a browser (any app, any
  dialog) at a higher cost and lower reliability — pixels and
  coordinates instead of DOM and selectors. It's the last resort when
  the task isn't browser-shaped at all.

## When each is justified

| The task looks like | Reach for |
|---|---|
| Fixed flow, known selectors | [Playwright](/learn/web-agents/playwright-fundamentals-and-locators) — never an agent |
| Mostly fixed, a few varying steps | Stagehand-style hybrid |
| Open-ended navigation, unknown site | Browser Use |
| Whole desktop, not just the browser | Provider computer-use |

The checklist's own rule — **agentic browsing only where deterministic
automation can't handle the variation** — is the whole decision: the
model's variability is a liability in a loop that should be identical
every run, and a necessity only where the environment itself varies.

## The honest limits

Every one of these inherits the agent loop's failure modes plus
browser-specific ones: the page is *untrusted input* — every site it
visits can carry [prompt injection](/learn/web-agents/web-prompt-injection);
costs scale with steps (an open-ended browse can burn an hour of model
calls); and hosted-browser runtimes send your session — credentials
included — through a third party, a
[data-boundary decision](/learn/web-agents/sessions-credentials-and-act-boundaries).

## The exercise

Take a real task ("log in, export last month's report") and sketch it
three ways — full Playwright, Stagehand hybrid (mark which steps need
`act`), full Browser Use — then honestly ask which steps actually
require the model. The answer is usually fewer than expected.

## Go deeper

- [Playwright fundamentals](/learn/web-agents/playwright-fundamentals-and-locators) — the deterministic baseline.
- [Sessions, credentials, and act boundaries](/learn/web-agents/sessions-credentials-and-act-boundaries) — what these tools do with logins.
- [Web prompt injection](/learn/web-agents/web-prompt-injection) — the page as attacker.
- [Extraction and evaluation](/learn/web-agents/extraction-and-evaluation) — judging whether the agent did the task.
