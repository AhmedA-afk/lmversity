---
title: "Amazon Bedrock"
description: "AWS's managed foundation-model service mapped: 100+ models across vendors, five API shapes (Messages/Responses/Chat/Converse/Invoke), cross-region inference, agent and eval services — plus SageMaker's separate role."
vendor: amazon
covers: ["cloud-platform", "api"]
verifiedAt: "2026-09-15"
related:
  - /providers/google
  - /learn/production/deployment-variants-cloud-and-portable
  - /learn/genai-app-dev/provider-layer-cheatsheet
sources:
  - aws-bedrock-docs
---

## What this page covers

**Amazon Bedrock** — AWS's fully managed foundation-model service: one AWS API surface over 100+ models from multiple vendors (Amazon Nova, Anthropic, DeepSeek, Kimi/Moonshot, MiniMax, OpenAI, xAI), inside your AWS security and billing perimeter. Verified against AWS docs on 2026-09-15.

## Product map

- **Model catalog** — namespaced IDs (`global.anthropic.claude-opus-4-7`, `openai.gpt-5.6-sol`, `openai.gpt-oss-120b`): the vendor prefix is part of the ID, which makes multi-vendor routing explicit.
- **Five API shapes** — Anthropic Messages (via a dedicated `/anthropic` base path), OpenAI Responses, Chat Completions, AWS-native **Converse** (the provider-neutral one), and legacy **Invoke**. The recommended endpoint is `bedrock-runtime`.
- **Cross-Region inference** — Global/Geo CRIS profiles route traffic across regions for throughput and lower per-token cost.
- **Built-in tools** — Web Search (AWS-hosted index) as a server-side tool for OpenAI models.
- **Customization** — fine-tuning, continued pre-training, distillation for supported models.
- **Agents/eval/guardrails** — Bedrock Agents, Flows, Guardrails, and model-evaluation features live in the same service family.

**SageMaker AI is the sibling, not the same product**: Bedrock = managed model *consumption*; SageMaker = training/ML platform (your own models, JumpStart, endpoints). Teams regularly confuse them — the checklist distinction matters.

## Enterprise controls

The AWS-standard posture: IAM-scoped model access (per-model permissions), VPC endpoints, CloudTrail logging, regional data boundary, and your existing AWS agreements governing data use — the reason Bedrock wins enterprise bake-offs is that procurement already trusts the wrapper.

## Getting started shape

Pick your API shape deliberately: Converse for provider-neutral AWS-native code; Messages/Responses/Chat Completions when porting Anthropic/OpenAI-shaped code. Auth is SigV4 or the bedrock token generator for the vendor-native paths.

## When to choose it

**Choose Bedrock when** you're an AWS shop wanting multi-vendor models inside your existing governance perimeter, when cross-region throughput matters, or when the vendor-diversity story (same task, swappable model families behind one bill) is your architecture's actual requirement.

**When not to choose it.** If you want the providers' newest features first — Bedrock trails the vendors' own APIs on feature parity (it's a curated subset). Five API shapes is flexibility and a learning surface. And "100+ models" includes plenty you shouldn't use — the catalog is broad, not curated-for-you.

**Migration considerations.** The vendor-native API shapes make Bedrock a genuinely low-friction second supplier: Anthropic-shaped code calls Claude on Bedrock with a base-URL change. Converse is portable across Bedrock models but not across vendors — the adapter rule still applies.
