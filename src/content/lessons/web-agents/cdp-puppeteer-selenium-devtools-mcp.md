---
title: "CDP, Puppeteer, Selenium, and Chrome DevTools MCP: the protocol layer"
track: "web-agents"
status: live
summary: "The Chrome DevTools Protocol is the raw wire every Chromium tool sits on — Puppeteer drives it directly, Selenium takes the cross-browser WebDriver standard, and Chrome DevTools MCP exposes it to agents."
duration: "9 min read"
sources: ["cdp-docs", "chrome-devtools-mcp-repo", "puppeteer-docs", "selenium-docs"]
---

## The short answer

Under every browser tool is a protocol. **Chrome DevTools Protocol
(CDP)** is Chromium's native wire — domains like `Page`, `Network`,
`DOM`, `Runtime` exposed over a websocket; Playwright and Puppeteer
both ride it for Chrome. **Puppeteer** is the thin CDP-first library —
close to the metal, Chrome-only by default. **Selenium** is the elder
standard — WebDriver, the cross-browser protocol every vendor
implements; clunkier, but the only game for genuinely cross-browser
deterministic coverage. And **Chrome DevTools MCP** wraps the same
CDP surface as an MCP server, giving an agent DevTools-grade powers —
inspect, click, trace — without bespoke tools.

## The stack, bottom to top

```
Chrome DevTools Protocol (the wire)
├── Puppeteer      — thin CDP wrapper, Chromium-first
├── Playwright     — CDP for Chromium + own protocols for FF/WebKit
├── DevTools MCP   — CDP exposed as MCP tools for agents
└── Selenium       — WebDriver protocol, every browser vendor
```

- **CDP** — what `chrome --remote-debugging-port=9222` opens: raw
  commands like `Network.enable`, `Page.captureScreenshot`,
  `Runtime.evaluate`. Everything else in this lesson is a friendlier
  face on this wire. Useful to know because when a high-level API
  can't do something (subscribe to raw network events, evaluate in a
  specific frame's context), dropping to a CDP session is the escape
  hatch — Playwright and Puppeteer both expose one.
- **Puppeteer** — Google's own minimal client: `page.goto`,
  `page.click`, `page.evaluate`, PDF/screenshot capture. Less
  auto-waiting than Playwright, Chromium-only — fine for scripts that
  stay close to one browser.
- **Selenium/WebDriver** — the W3C-standard protocol implemented by
  every browser vendor, with bindings in every language. The legacy
  incumbent: more ceremony, sleeps instead of auto-waits, but
  unmatched for real Safari/Firefox/Edge coverage and for enterprise
  grids that already exist. Choose it when the target matrix demands
  browsers, not when starting fresh on Chrome.
- **Chrome DevTools MCP** — the protocol-as-agent-tools: an MCP server
  that lets a coding agent drive a real Chrome instance — navigate,
  snapshot the a11y tree, click by element reference, capture
  performance traces, read console/network. The pattern to notice:
  instead of a bespoke browser tool, the agent gets *the same
  inspection surface a human developer uses in DevTools* — a much
  richer act+observe channel than screenshot-and-pray
  ([MCP](/learn/mcp/mcp-architecture-hosts-clients-servers)).

## Choosing

| Need | Reach for |
|---|---|
| Modern deterministic automation | [Playwright](/learn/web-agents/playwright-fundamentals-and-locators) |
| Minimal Chromium-only scripting | Puppeteer |
| True multi-browser matrix or existing grid | Selenium/WebDriver |
| Agent inspects/debugs a live page | Chrome DevTools MCP |
| High-level API can't reach it | Drop to a raw CDP session |

## The honest limits

Protocol choice doesn't fix strategy: a Selenium script and a
Puppeteer script are equally deterministic — and equally blind to
*meaning*. And CDP is Chromium-specific; tools that claim
cross-browser support over CDP are really running per-browser
protocols under one API (which is fine — just don't expect identical
behavior).

## The exercise

Launch Chrome with `--remote-debugging-port`, hit
`http://localhost:9222/json` in a browser, and read the websocket URL
— you've just found the raw channel every tool in this lesson uses.
That's the layer cake made visible.

## Go deeper

- [Playwright fundamentals](/learn/web-agents/playwright-fundamentals-and-locators) — the modern deterministic default.
- [Agentic browsers](/learn/web-agents/agentic-browsers-overview) — Browser Use, Stagehand, computer-use on top of these.
- [MCP architecture](/learn/mcp/mcp-architecture-hosts-clients-servers) — what DevTools MCP plugs into.
