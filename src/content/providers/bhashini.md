---
title: "Bhashini (Govt. of India)"
description: "Bhashini mapped: India's National Language Translation Mission — government-run translation, speech, and language APIs across scheduled Indian languages, built as public digital infrastructure."
vendor: bhashini
covers: ["api", "consumer-app"]
verifiedAt: "2026-09-15"
related:
  - /providers/sarvam
  - /providers/ai4bharat
sources:
  - bhashini-site
---

## What this page covers

Bhashini is the **National Language Translation Mission** — public digital infrastructure run under the Ministry of Electronics and IT, not a company. Its model is ecosystem aggregation: government services, research models (AI4Bharat lineage among them), and industry contributors surfaced through a common platform. Verified against the official site on 2026-09-15.

## Product map

**Language APIs.** Translation, speech-to-text, text-to-speech, and related language services across India's scheduled languages — accessed through the Bhashini platform's developer interface. The mission's purpose is public-service delivery (government apps, citizen services, access for non-English speakers), and the API surface reflects that: language coverage first, developer polish second.

**Ecosystem role.** Bhashini aggregates rather than competes — models from research labs and industry partners get surfaced through the mission's platform. Understanding Bhashini as infrastructure (like UPI for payments) rather than as a vendor explains both its coverage breadth and its limitations.

**Consumer surface.** Translation services embedded in government applications and citizen-facing tools — the delivery mechanism for the mission's actual goal, which is access, not API market share.

## Official links

- Platform: `bhashini.gov.in` (official government domain — the `.gov.in` matters; verify you're on the real site, not a lookalike)
- Developer onboarding and usage terms: through the platform's own portal

## Data policy and governance

Government digital infrastructure — usage terms, data handling, and access policies are set by the mission's published policies on the platform. For production use, read the onboarding terms directly; they differ structurally from commercial vendor terms (purpose-of-use and public-service framing).

## When to choose it

**Choose Bhashini when** you're building for Indian public-service delivery, government-adjacent applications, or citizen-facing language access — it's the sanctioned infrastructure for that context — or when you want the broadest scheduled-language coverage and can accept a government platform's developer experience.

**When not to choose it.** If you need enterprise SLAs, modern DX, or responsive support — government infrastructure isn't built for that contract. For commercial Indic voice/agent work, Sarvam is the purpose-built option; for open research components, AI4Bharat is upstream of this anyway.

**Migration considerations.** Public infrastructure doesn't disappear on a funding round, but it changes on policy timelines, not product ones. Keep the same adapter discipline you use for any external API — the mission is dependable infrastructure, not an SLA vendor.
