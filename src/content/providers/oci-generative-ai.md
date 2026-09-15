---
title: "Oracle OCI Generative AI"
description: "OCI's Generative AI service mapped: frontier-model hosting, Enterprise AI agent features (vector stores, MCP tools, NL2SQL), model import, guardrails, and the OpenAI-compatible API surface."
vendor: oracle
covers: ["cloud-platform", "api"]
verifiedAt: "2026-09-15"
related:
  - /providers/aws-bedrock
  - /learn/production/deployment-variants-cloud-and-portable
sources:
  - oci-genai-docs
---

## What this page covers

**OCI Generative AI** — Oracle Cloud Infrastructure's "Enterprise AI" platform: hosted frontier models plus a managed agent-development layer (vector stores, connectors, managed memory, hosted runtime) under OCI's IAM and audit surface. Verified against OCI docs on 2026-09-15.

## Product map

- **Pretrained models** — hosted frontier models (Cohere has been the flagship partner; check the current catalog and per-region availability — OCI publishes models-by-region explicitly).
- **Import your own models** — from Hugging Face or Object Storage buckets onto dedicated serving shapes.
- **Enterprise AI agents** — managed agent runtime with vector stores, connectors, context retention/memory; agent tools include MCP tools, code interpreter, file search, NL2SQL, and function calling.
- **API surfaces** — Inference API, Management API, NL2SQL API; OCI OpenAI-compatible endpoints and an OCI Responses API; CLI and SDKs.
- **Operations** — model retirement is documented (the `deprecating` page tracks it); hardware-unit shapes by region are published; guardrails and auditability are first-class sections.

## The architectural point

OCI's pitch is enterprise controls as the product: IAM, guardrails, observability, and auditability around a managed agent stack — plus model import for teams whose fine-tuned weights live in their own buckets. The NL2SQL agent tooling reflects Oracle's database gravity.

## Enterprise controls

OCI IAM and API-key scoping, regional model availability (per-region catalogs), auditability and guardrails built into the platform docs. Data handling inherits your OCI agreements.

## When to choose it

**Choose OCI GenAI when** you're an Oracle estate (the IAM/audit/database integration is the actual value), when model import of your own fine-tunes onto managed shapes fits your MLOps story, or when a managed agent runtime with vector stores saves you operating your own.

**When not to choose it.** The model catalog is narrower than the hyperscaler catalogs — if vendor diversity is the requirement, Bedrock/Foundry/gateways are broader. OCI expertise is scarcer than AWS/Azure in most hiring markets, which affects team staffing more than capability.

**Migration considerations.** OpenAI-compatible endpoints ease code portability; the agent runtime, vector stores, and NL2SQL tooling are OCI-specific — isolate per the standard adapter rule.
