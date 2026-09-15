---
title: "Microsoft Foundry (Azure)"
description: "Microsoft's AI platform mapped: Foundry's unified agents+models+tools resource, the 10,000+ model catalog, prompt vs hosted agents, the Azure OpenAI→Foundry migration path, and enterprise controls."
vendor: microsoft
covers: ["cloud-platform", "api"]
verifiedAt: "2026-09-15"
related:
  - /learn/agent-frameworks/microsoft-agent-frameworks
  - /providers/google
  - /learn/production/deployment-variants-cloud-and-portable
sources:
  - microsoft-foundry-docs
---

## What this page covers

**Microsoft Foundry** — the current name for what was Azure AI Foundry (and before that, Azure AI Studio). It's the consolidation play: agents, models, and tools under one Azure resource with unified RBAC, networking, and policy. Verified against Microsoft Learn on 2026-09-15 — the rebrand and resource-model migration are themselves the first thing to know.

## Product map

- **Foundry Models catalog** — 10,000+ models: Microsoft's own, OpenAI, Anthropic, Meta, and others behind one management plane.
- **Agent Service** — two rungs: **prompt agents** (declarative — instructions + model + tools, no code to maintain) and **hosted agents** (your container — Agent Framework, LangGraph, Semantic Kernel — with managed endpoints, scaling, identity).
- **Foundry Toolbox** — built-in tools, memory, and retrieval for agents.
- **Observability** — tracing, evaluations, monitoring dashboards (some preview).
- **Surfaces** — portal (`ai.azure.com`), SDKs (Python/C#/JS/Java — the unified `azure-ai-projects` 2.x client), Azure Developer CLI (`azd`), VS Code extension, plus a Foundry Skill + MCP server for driving it from coding agents.

## The migration story — the thing docs won't stress enough

The resource model changed: old **hub + Azure OpenAI + AI Services** resources consolidate into a single **Foundry resource with projects**. Azure OpenAI resources upgrade in place (endpoint and keys preserved). API generations moved: Assistants API → **Responses API (Agents v2)**, monthly `api-version` params → **v1 stable routes** (`/openai/v1/`). Foundry (classic) portal still serves hub-based projects, but new investment lands on the new portal — if your tutorials mention "AI Studio" or hub projects, they're one generation back.

## Enterprise controls

Microsoft Entra identity, RBAC, content filters, network isolation, Azure Policy — the Azure-standard governance surface, which is the actual reason enterprises land here. Data handling inherits your Azure agreements; verify per service at contract time.

## Getting started shape

Model calls work against the project endpoint with the unified SDK or plain `OpenAI()` client against `/openai/v1/` routes. The agent path starts with a prompt agent in the portal — the deliberate progression is declarative first, code when you need it.

## When to choose it

**Choose Foundry when** you're inside the Microsoft/Azure ecosystem (Entra, compliance posture, procurement), when you want one management plane over many model vendors, or when the prompt-agent→hosted-agent ladder matches your team's maturity path.

**When not to choose it.** If you're not an Azure shop, the value proposition shrinks to the model catalog — other gateways do that thinner. The consolidation churn (names, resource models, API generations) is real — budget migration attention. Preview labels ride on several agent features.

**Migration considerations.** The `/openai/v1/` stable routes and OpenAI-SDK compatibility ease inbound; Foundry-specific surfaces (agents, toolbox, projects) are the lock-in — isolate them if portability matters.
