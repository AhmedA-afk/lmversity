---
title: "Build your first browser agent"
description: "A working browser agent — Playwright-driven, allowlisted actions, source capture, and the act boundary that keeps it from doing things you didn't approve."
question: "How do I build an AI agent that operates a browser?"
level: "intermediate"
duration: "35 min"
published: "2026-09-16"
tags: ["Browser agents", "Playwright", "Tools"]
steps:
  - "Define the task scope and the action allowlist"
  - "Drive the browser with Playwright locators, not pixels"
  - "Build the observe-decide-act loop"
  - "Capture sources and actions for every step"
  - "Gate consequential actions behind the act boundary"
  - "Test against the real site's failure modes"
related:
  - "/learn/web-agents/what-the-browser-exposes"
  - "/learn/web-agents/playwright-fundamentals-and-locators"
  - "/learn/web-agents/sessions-credentials-and-act-boundaries"
  - "/learn/tools-function-calling/building-a-browser-tool-loop"
---

A browser agent is a loop — observe the page, decide an action, take it, repeat — wrapped around a real browser. It is also the agent most likely to do something you didn't intend, so the boundary design comes before the cleverness. The [web-agents track](/learn/web-agents/what-the-browser-exposes) covers each piece in depth; this guide assembles the minimal working version.

## 1. Scope the task and allowlist

Write down: which sites, which actions, which outcomes count as done. Then encode the actions as an **allowlist** — `click`, `type`, `scroll`, `extract`, `navigate` to allowed domains — not a free-form "control the browser" tool. Checkout, form submission, and account changes are off the list unless explicitly gated (step 5).

## 2. Drive with locators, not pixels

Use Playwright with role/text/test-id locators (`getByRole`, `getByLabel`) — pixel coordinates and brittle CSS selectors are how browser agents die on redesigns. Locator strategy and when each kind survives: [Playwright and locator strategies](/learn/web-agents/playwright-fundamentals-and-locators).

## 3. The observe-decide-act loop

Per step: snapshot the accessibility tree or DOM (compact, structured — not a screenshot megabyte), hand the model the snapshot plus the goal plus the allowlist, get back one structured action, execute it, record the result. Keep the context window honest — prune old snapshots, keep the goal and the last few observations. The full loop pattern: [Building a browser tool loop](/learn/tools-function-calling/building-a-browser-tool-loop).

## 4. Capture sources and actions

Log every step: what the agent observed (URL + snapshot digest), what it decided, what it did, what it extracted. For research tasks, capture the *source URL and quoted span* behind every extracted fact — an agent that can't show where a claim came from produces unverifiable output.

## 5. The act boundary

Split actions into two classes: **observe-class** (navigate, read, extract) runs freely; **act-class** (submit, purchase, post, delete, anything that changes state outside the page) pauses for explicit approval — a human confirm or a policy check. Sessions, credentials, and who-approves-what: [Sessions, permissions, and the act boundary](/learn/web-agents/sessions-credentials-and-act-boundaries).

## 6. Test the failure modes, not the happy path

The real tests: a site that changed its layout, a CAPTCHA wall, a login expiry mid-task, a page that loads nothing, an infinite-scroll trap. Decide per failure whether the agent retries, asks, or aborts — "keep trying things" is how agents end up clicking ads. Web-side injection is a real threat too: page content your agent reads can instruct it to do things — see [Web prompt injection](/learn/web-agents/web-prompt-injection) before trusting any observe step.

## Where to go next

For the full taxonomy — CDP vs Puppeteer vs Selenium vs agentic browsers — the [web-agents track](/learn/web-agents/what-the-browser-exposes) maps the whole channel landscape, and [extraction and evaluation](/learn/web-agents/extraction-and-evaluation) covers measuring whether the agent is actually any good.
