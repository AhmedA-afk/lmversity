---
title: "What the browser exposes: DOM, accessibility tree, and every other channel"
track: "web-agents"
status: live
summary: "The full surface a browser agent can see and touch — DOM and the accessibility tree, screenshots, network, console, storage, cookies, sessions, frames, downloads, and dialogs — and what each channel is good for."
duration: "10 min read"
sources: ["playwright-docs", "cdp-docs"]
---

## The short answer

A browser agent doesn't interact with "the web page" — it interacts
with a stack of channels, each showing a different truth. The **DOM**
is the document structure; the **accessibility tree** is the semantic
layer derived from it (roles, names, states — what a screen reader
sees); **screenshots** are pixels for vision models; **network** shows
requests/responses the page makes; **console** is its log stream;
**storage** covers localStorage/sessionStorage/IndexedDB; **cookies**
carry session state; **frames** are nested browsing contexts that
each need their own handle; **downloads** and **dialogs** are events
that interrupt the flow. Knowing which channel answers which question
is the whole skill — most browser-agent failures are a channel being
asked the wrong question.

## The perception channels

- **DOM** — the full element tree: structure, attributes, text,
  computed layout. Precise and complete, but huge — a real page is
  thousands of nodes, so agents query it (selectors) rather than read
  it raw.
- **Accessibility tree** — the DOM distilled to semantics: `button
  "Submit order"`, `textbox "Email"`, `dialog "Confirm"`. For an agent
  it's the best of both worlds: compact *and* meaningful — this is why
  modern browser agents consume the a11y tree rather than raw HTML,
  and why [semantic locators](/learn/web-agents/playwright-fundamentals-and-locators)
  target accessible names instead of CSS classes.
- **Screenshot** — the rendered pixels. The only channel that captures
  what the page *looks like*: canvas, images, visual state. Vision
  models need it ([computer use](/learn/agentic-ai/computer-use-agents))
  but it's the lossiest for structure — a button is a rectangle to a
  screenshot.
- **Network** — requests and responses the page issues. Two jobs:
  seeing the API calls behind the UI (often the *real* data source),
  and observing what a download or submit actually sent.
- **Console** — the page's own logging and errors. The channel that
  says why a flow broke client-side.

## The state and event channels

- **Cookies + storage** — session state lives here: auth tokens in
  cookies, app state in localStorage/IndexedDB. An agent resuming a
  session is really resuming *these* ([sessions](/learn/web-agents/sessions-credentials-and-act-boundaries)).
- **Frames** — iframes are separate documents with separate DOMs and
  a11y trees; an agent that can't see an element is often looking in
  the wrong frame. Each needs explicit selection.
- **Dialogs** — `alert`/`confirm`/`prompt` block the page until
  answered; an agent that doesn't handle them hangs forever.
- **Downloads** — file saves are events to listen for, not page
  content; a download triggered by a click won't appear in the DOM.
  Downloads are also an
  [injection surface](/learn/web-agents/web-prompt-injection) — file
  contents are tool results like any other.

## The exercise

Open a real page in DevTools: flip between Elements (DOM), the
Accessibility pane (a11y tree), Network, and Console — and notice the
same page tells four different stories. Then imagine a model only
ever sees one of them.

## Go deeper

- [Playwright fundamentals and locators](/learn/web-agents/playwright-fundamentals-and-locators) — driving these channels in code.
- [CDP, Puppeteer, Selenium, and DevTools MCP](/learn/web-agents/cdp-puppeteer-selenium-devtools-mcp) — the protocol layer underneath.
- [Sessions, credentials, and act boundaries](/learn/web-agents/sessions-credentials-and-act-boundaries) — the state channels under control.
