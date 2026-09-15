---
title: "Databricks Mosaic AI"
description: "Databricks' AI platform mapped: Foundation Model APIs, Model Serving, AI Gateway, agents on Databricks, Unity Catalog governance, and where Mosaic ends and classic Databricks ML begins."
vendor: databricks
covers: ["cloud-platform"]
verifiedAt: "2026-09-15"
related:
  - /providers/aws-bedrock
  - /learn/production/deployment-variants-cloud-and-portable
  - /learn/production/llm-gateway-and-provider-abstraction
sources:
  - databricks-ml-docs
---

## What this page covers

**Databricks Mosaic AI** — the gen-AI layer of the Databricks lakehouse platform: hosted frontier models, agent building, model serving, and governance that inherits Databricks' Unity Catalog data perimeter. Verified against Databricks docs on 2026-09-15.

## Product map

- **Foundation Model APIs** — state-of-the-art models hosted and queried through Databricks (pay-per-token or provisioned throughput).
- **Model Serving** — deploy custom models and LLMs as auto-scaling REST endpoints with GPU support.
- **AI Gateway** — governance for model access: usage tracking, payload logging, rate limiting, security controls on serving endpoints.
- **Agents on Databricks** — agent-building surface (Mosaic AI Agent Framework + Agent Bricks family) tied to Unity Catalog tools and data.
- **The rest of the platform** — Feature Store, MLflow, AI Runtime (serverless GPU), Ray/distributed training, Lakeflow jobs, Unity Catalog governance across data/features/models/functions.

## The architectural point

Mosaic AI's differentiation isn't model access — every cloud has that. It's that the models sit inside the same governance perimeter as your data: Unity Catalog permissions cover tables, vector indexes, functions, and models uniformly. RAG over governed data without egress is the design center — the pattern the checklist's lakehouse coverage is built on.

## Enterprise controls

Unity Catalog lineage and access control across the full stack; payload logging and usage tracking through AI Gateway; workspace-level isolation. Data stays in your Databricks estate — the governance story is the product.

## When to choose it

**Choose Mosaic AI when** your data already lives in Databricks (the lakehouse-native case is genuinely strong — no egress, one permission model), when you need custom-model serving next to hosted frontier models, or when Unity Catalog governance is a compliance requirement.

**When not to choose it.** If you're not a Databricks customer, adopting it for AI alone is buying a lakehouse to get a model API — the value is the integration, not the standalone surface. Smaller surface than the hyperscaler platforms for exotic agent features.

**Migration considerations.** Foundation Model APIs expose OpenAI-compatible shapes for portability; the serving/agent/Unity-Catalog layers are Databricks-specific — the same adapter-and-isolate rule as every cloud platform.
