---
title: "Microsoft Copilot (consumer + work)"
description: "Microsoft Copilot mapped: consumer vs Microsoft 365 Copilot vs Copilot Studio — three products under one name, what enterprise data protection actually means, and the selection trap of conflating them."
vendor: microsoft
covers: ["consumer-app", "consumer-product"]
verifiedAt: "2026-09-15"
related:
  - /providers/microsoft-foundry
  - /providers/github-copilot
  - /answers/how-to-choose-an-ai-chat-product
sources:
  - microsoft-copilot-support
---

## What this page covers

**Microsoft Copilot** — three genuinely different products sharing a name: the consumer app, Microsoft 365 Copilot for work, and Copilot Studio for building. Verified against Microsoft's support docs on 2026-09-15 — the naming collision is itself the first thing to teach.

## Product map — the three-way split

- **Consumer Copilot** — the free/personal assistant (copilot.microsoft.com, Windows, mobile): chat, web grounding, image generation, voice. Funded by the consumer surface.
- **Microsoft 365 Copilot** — the *work* product: Copilot inside Word/Excel/PowerPoint/Outlook/Teams, grounded on your org's data via Microsoft Graph — the feature that justifies enterprise pricing. Requires the M365 Copilot license on a work account.
- **Copilot Studio** — the *builder* product: create custom copilots/agents with org knowledge, connectors, and actions — adjacent to but distinct from the chat products, and related to the Foundry agent surface on the enterprise side.
- **Copilot+ PCs** — the hardware-marketing layer (on-device AI features on certified Windows machines) — a fourth use of the name, keep it out of the chat-product conversation.

## The enterprise-data-protection point — the actual differentiator

Signed in with a work account, M365 Copilot carries **commercial data protection**: prompts/responses aren't used to train foundation models, and grounding respects your Graph permissions (users only see what they could already access). That's the enterprise answer to "employees are pasting work data into consumer chatbots" — and it's a *different product* than consumer Copilot, whose terms differ. The conflation (either direction) is the selection trap: "we use Copilot" means nothing until you say which one.

## When to choose it

**Choose M365 Copilot when** the org lives in Microsoft 365 (the Graph-grounded in-app experience is the unique value — drafting in Word from your docs, meeting recaps in Teams), when commercial data protection and Entra/Graph permission-respecting is the compliance requirement, or when IT wants one vendor for identity+data+AI.

**When not to choose it.** If you're not an M365 shop, the work product has no substrate to ground on — the consumer app is then just another chat surface. Copilot Studio vs Foundry agents is a build-vs-govern decision for the platform team, not a user choice.

**Migration considerations.** The Graph grounding is M365-specific by design; consumer Copilot has no meaningful lock-in (it's a chat surface). See the selection framework at [/answers/how-to-choose-an-ai-chat-product](/answers/how-to-choose-an-ai-chat-product).
