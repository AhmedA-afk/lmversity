---
title: "Web Agents Cheatsheet"
track: "web-agents"
status: live
summary: "The browser-agent reference — which automation layer for which job, the permission boundary, and the injection surface nobody tests."
updated: "2026-09-16"
duration: "6 min read"
---

The web-agents track compressed to the automation-layer pick, the action boundary, and the security surface that makes browser agents different.

## Which automation layer for which job

| The job | The tool | Why |
|---|---|---|
| Deterministic scraping/tests | Playwright / Selenium | The browser driven by code, not a model |
| Agent-driven browsing | DevTools MCP / a browser-agent harness | The model drives via structured control |
| Extraction at scale | A scraper + a parser | An agent is the expensive way to fetch |
| Login-walled tasks | Session + credential management | Auth state is the hard part, not the click |
| Anything that acts | A permission boundary | The web is untrusted input that can act |

## The browser agent's trust boundary

- **Page content is untrusted input** — a page can carry instructions ("click this," "navigate here") that are injections, not content.
- **The action boundary is the control** — read vs act: reading a page is low-risk; submitting a form, clicking a link, entering credentials is not.
- **The session is the credential** — a logged-in browser session is the keys; who holds it and what it can do is the security question.

## The permission tiers that matter

- **Read-only** — extract, screenshot, describe; the default reconnaissance tier.
- **Act with approval** — clicks and form fills gated per action or per class.
- **Scoped actions** — a domain allowlist, a "no checkout/purchase" rule, a "no credential entry" bound.
- **Unrestricted** — reserved for sandboxed, monitored, low-stakes contexts.

## The failure modes in one line each

- **Page content as instruction** — a page's embedded text telling the agent what to click; the classic indirect injection.
- **The session that outlives its purpose** — a logged-in session kept past the task, a standing credential.
- **Act before read** — a click fired before the page state was verified; the agent acts on stale assumptions.
- **No extraction eval** — "it got the data" unverified; the agent navigated but the extraction is wrong.
- **A general-purpose browser for a single task** — an agent where a Playwright script would be deterministic and cheaper.

## The decision rules

- Deterministic task → Playwright, not an agent — the agent is for tasks the script can't enumerate.
- Read before act — verify the page state before every consequential action.
- The session is a credential — scope it, expire it, log what it did.
- Eval the extraction, not the navigation — reaching the page isn't the task.

**Related:** [Agentic browsers overview](/learn/web-agents/agentic-browsers-overview), [Sessions, credentials, and act boundaries](/learn/web-agents/sessions-credentials-and-act-boundaries), [Web prompt injection](/learn/web-agents/web-prompt-injection), [Playwright fundamentals and locators](/learn/web-agents/playwright-fundamentals-and-locators)
