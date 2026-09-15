---
title: "Playwright fundamentals: deterministic browser control before agents"
track: "web-agents"
status: live
summary: "Playwright is the deterministic baseline every browser agent should be measured against — auto-waiting actions, and semantic locators that survive redesigns while CSS selectors don't."
duration: "10 min read"
sources: ["playwright-docs"]
---

## The short answer

Before reaching for an AI browser agent, the bar to clear is
deterministic automation — and Playwright is the modern baseline: one
API across Chromium/Firefox/WebKit, **auto-waiting** actions (it waits
for the element to be actionable instead of racing the page), and
**semantic locators** that find elements by role and accessible name
rather than fragile CSS paths. If a Playwright script can do the task
reliably, an LLM agent is the *worse* tool — slower, pricier, and
nondeterministic. Learn this first because it defines when the agent
is justified.

## The mental model

```python
page.goto("https://app.example.com")
page.get_by_role("button", name="Sign in").click()
page.get_by_label("Email").fill("ops@example.com")
```

Three things make this robust where older tools weren't:

- **Auto-waiting** — `click()` waits until the element is visible,
  stable, and enabled; assertions (`expect`) retry until timeout. The
  biggest class of browser-automation bugs — racing the page — is
  engineered out by default.
- **Contexts** — a `browser_context` is an isolated session (own
  cookies/storage) without a second browser; parallel tasks and
  logged-in-vs-anonymous states are cheap
  ([sessions](/learn/web-agents/sessions-credentials-and-act-boundaries)).
- **Tracing** — every run can record a trace (DOM snapshots, network,
  screenshots, action timeline) replayable after the fact — the
  deterministic world's answer to
  [browser task evaluation](/learn/web-agents/extraction-and-evaluation).

## Semantic locators: the skill that matters everywhere

The locator strategy is the difference between automation that
survives a redesign and automation that dies with a CSS class rename:

- **Best** — `get_by_role("button", name="Submit")`, `get_by_label`,
  `get_by_text`, `get_by_placeholder`, `get_by_test_id`. These match
  the [accessibility tree](/learn/web-agents/what-the-browser-exposes) —
  what the element *is* and *says*, not how it's styled. They survive
  layout changes and work like the user perceives the page.
- **Acceptable** — stable attributes: `#id`, `[data-testid]` you own.
- **Fragile** — `div > ul > li:nth-child(3) > .btn-primary`:
  positional and class-based selectors break on any refactor; avoid
  unless nothing better exists.

This is also exactly how AI browser agents should locate elements —
the same semantic layer a screen reader uses. An agent instructed to
"prefer role/label selectors over CSS" produces measurably sturdier
code than one left to invent selectors.

## The honest limits

Playwright can't handle the unscriptable — a flow whose steps depend
on content that varies per run (CAPTCHA-gated or highly dynamic UIs)
is where deterministic automation stops and
[agentic browsing](/learn/web-agents/agentic-browsers-overview)
earns its cost. And semantic locators inherit the site's accessibility
quality — an app full of icon-only buttons with no accessible names
leaves locators (and screen readers, and agents) equally blind.

## The exercise

Write the same three-step flow (navigate, fill, submit) twice: once
with positional CSS selectors, once with `get_by_role`/`get_by_label`.
Then change a class name in the page and run both — the difference in
what survives is the whole argument.

## Go deeper

- [What the browser exposes](/learn/web-agents/what-the-browser-exposes) — the channels Playwright drives.
- [CDP, Puppeteer, Selenium, DevTools MCP](/learn/web-agents/cdp-puppeteer-selenium-devtools-mcp) — the alternatives and the protocol beneath.
- [Agentic browsers overview](/learn/web-agents/agentic-browsers-overview) — when deterministic isn't enough.
