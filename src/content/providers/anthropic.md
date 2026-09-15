---
title: "Anthropic"
description: "Anthropic's product surface mapped: Claude apps, the Claude API (Messages), Claude Code, Agent SDK, and the model lineup with its alias/dated-ID convention — plus official policy, deprecation, and when-to-choose guidance."
vendor: anthropic
covers: ["consumer-app", "coding-agent", "api"]
verifiedAt: "2026-09-15"
related:
  - /learn/genai-app-dev/provider-adapter-anthropic-openai
  - /learn/agent-frameworks/claude-agent-sdk
  - /learn/cli-agents
  - /learn/tools-function-calling/tool-calling-across-providers
sources:
  - anthropic-docs
  - anthropic-models-overview
  - anthropic-model-deprecations
  - anthropic-pricing
  - anthropic-status
  - anthropic-trust
  - anthropic-privacy
  - claude-agent-sdk-docs
  - claude-code-docs
---

## What this page covers

Three surfaces again, one model family underneath: **Claude apps** (web/desktop/mobile), the **Claude API** (developer platform, docs at `platform.claude.com`), and **Claude Code** (the CLI/agent harness) plus the **Agent SDK** for building your own. Verified against the official docs on 2026-09-15.

## Product map

**Consumer.** Claude apps handle research, artifacts, files, and projects — the same models the API exposes, wrapped in a product.

**API platform.** The **Messages API** is the core endpoint — one request shape covering text, images, tool use, streaming, and thinking. Around it:

- **Agent SDK** — the harness primitives Claude Code itself is built on (the SDK and Claude Code share a lineage; the SDK is what you embed).
- **Tools and connectors** — tool use, MCP connector, web search/fetch, code execution, computer use, Files API, skills.
- **Efficiency and control** — prompt caching, batch processing, citations, extended thinking / effort controls, structured outputs.
- **Distribution beyond Anthropic** — the same models ship on Amazon Bedrock, Google Vertex AI, Microsoft Foundry, and Anthropic's Claude Platform on AWS, each with its own model-ID spelling.

**Model lineup** (from the official models page, 2026-09-15): Claude Fable 5.1 for demanding reasoning and long-horizon agentic work, Opus 5 for complex agentic coding and enterprise work, Sonnet 5 as the speed/intelligence balance, Haiku 4.5 as the fast tier. All take text + image in, text out, with tool use. Context: 1M tokens on the three larger models, 200K on Haiku; max output 128K (64K Haiku). Each model publishes a "not sooner than" retirement date — Anthropic is unusually explicit here.

## Official links

- Docs: `platform.claude.com/docs` (mirrors `docs.anthropic.com`)
- Models overview: `/en/docs/about-claude/models/overview` · Pricing: `/en/about-claude/pricing`
- Deprecations: `/en/docs/about-claude/model-deprecations` · Migration guide published per change
- Status: `status.anthropic.com` · Trust center: `trust.anthropic.com` · Privacy: `privacy.anthropic.com`

## Getting started shape

Auth is an `x-api-key` header plus an `anthropic-version` header; SDKs handle both. The minimal call is `messages.create` — model, `max_tokens` (required, unlike most APIs), and a `messages` array. Streaming is an event stream on the same endpoint; tool use is a `tools` array of name/description/input-schema; prompt caching is marked with `cache_control` breakpoints on content blocks.

```python
import anthropic
client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY
msg = client.messages.create(
    model="claude-sonnet-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Summarize this diff."}],
)
print(msg.content[0].text)
```

## Data policy, retention, enterprise controls

The trust center and privacy portal are authoritative. The distinctions that matter: API/commercial traffic carries different retention and training-use terms than the consumer apps; the trust center documents subprocessors, certifications, and security posture; enterprise tiers add SSO, audit logs, domain capture, and granular data controls. Multi-cloud availability (Bedrock/Vertex/Foundry) means the *cloud provider's* data boundary may be the operative one — read the policy for the surface you actually call, not the brand.

## Naming, aliases, deprecation

Two ID forms coexist: **aliases** like `claude-sonnet-5` that track the current snapshot, and **dated IDs** like `claude-haiku-4-5-20251001` that pin an exact build. The models table publishes per-model "not sooner than" retirement dates and a deprecations page tracks the schedule — the most legible deprecation policy among the frontier providers. **Pin dated IDs in production, use aliases in prototypes**, and let the deprecation page drive your upgrade calendar.

## Context and capability claims

The 1M-token context window is real but not free: effective usable context shrinks with output reservation and the retrieval degradation every long-context model shows. Vendor benchmark numbers on model pages are vendor numbers — run your own eval on your distribution before you commit architecture to them.

## Minimal lab

Five-call smoke test: one message, one streamed message, one tool-use round trip, one prompt-cached call (check `cache_read_input_tokens` in usage), one thinking-enabled call. Provider-neutral equivalent: same five behaviors through your adapter against a second provider — it converts "portable" into a number.

## Common errors and operations

The ones that matter in production: `rate_limit_error` (respect `retry-after`, tiered RPM/TPM/ITM limits), `overloaded_error` 529s (retry with backoff; they're transient by definition), `invalid_request_error` on `max_tokens` or malformed tool schemas (the API is strict — good), and `context_window_exceeded`. Status: `status.anthropic.com` publishes per-surface incidents (API vs Claude apps vs Claude Code are tracked separately — check the right component).

## When to choose it

**Choose Anthropic when** agentic coding and long-horizon tool use are the workload — Claude Code and the Agent SDK share a lineage with the models tuned for it — when the deprecation contract matters (published retirement dates make procurement and planning easier), or when you need the same model across Anthropic + Bedrock + Vertex + Foundry for compliance or redundancy.

**When not to choose it.** If realtime voice is core, Anthropic's surface is text-first — that's a different vendor or a second provider. If you need image/video generation, it isn't offered. And single-provider risk is single-provider risk: the multi-cloud distribution helps, but it's still one model family underneath.

**Migration considerations.** The Messages API shape is proprietary (content blocks, `cache_control`, thinking budgets don't port verbatim), though the ecosystem emulates it widely. Dated IDs make Anthropic-to-Anthropic upgrades routine; cross-provider moves still need the adapter discipline — isolate `messages.create` behind your own boundary from day one.
