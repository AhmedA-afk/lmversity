---
title: "Falcon (open weights)"
description: "TII's Falcon family: early open-weight leaders whose relevance has faded — where they still fit, the custom license, and the honest assessment of when to pick newer families instead."
vendor: tii
covers: ["open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/local-inference/ollama-first-run
sources:
  - hf-tii-falcon
---

## What this page covers

The Technology Innovation Institute's **Falcon** family — one of the first credible open-weight lines (Falcon 40B was an early milestone), now a generation behind the leaders. The checklist asks for coverage "where still relevant" — the honest answer is narrower than it was. Verified against Hugging Face cards on 2026-09-15.

## Family and license map

Falcon 3 releases (e.g. `Falcon3-10B-Instruct`) carry the **`falcon-llm-license`** — TII's custom terms (permissive-ish with conditions; read the actual terms, they're not Apache). Earlier Falcon releases had their own license iterations — another per-card check case.

## Where Falcon still fits

Honestly: mainly **legacy and regional contexts**. If an existing deployment runs Falcon, there's no urgency to migrate on model grounds alone. For greenfield work, the newer families (Llama, Qwen, Gemma, DeepSeek, Mistral) offer stronger capability, cleaner licensing, and livelier tooling. TII's research continues, but the family's ecosystem momentum has moved on — an honest "where still relevant" means "where already deployed or specifically evaluated," not "as a default new choice."

## Serving and hardware

Standard formats, standard runtime support — Falcon serves like any open model of its size class. Nothing exotic.

## When to choose it

**Choose Falcon when** it's already in your stack and working, when a specific eval on your task favors it, or when regional/procurement contexts point there.

**When not to choose it.** As a default new selection — the newer families win on capability, licensing clarity, and ecosystem depth for almost every case. This assessment is itself the lesson: open-model relevance has a shelf life, and "was important once" isn't a selection criterion.
