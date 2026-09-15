---
title: "LLM supply-chain security: secrets, dependencies, and model artifacts"
track: "llm-security"
status: live
summary: "AI systems inherit software supply-chain risk and add a new layer — model weights, datasets, and eval artifacts that need the same integrity, provenance, and scanning discipline as code."
duration: "8 min read"
sources: ["gitleaks-repo", "sigstore-model-transparency"]
---

## The short answer

Supply-chain security for LLM systems is two inventories, not one: the
familiar **code layer** — secrets committed to repos, vulnerable
dependencies, poisoned packages — plus the **model layer** — weights
pulled from a hub, datasets scraped from the internet, tokenizers and
adapters downloaded as opaque blobs. The controls rhyme: scan secrets
(gitleaks-class tools), audit dependencies, and pin + verify model
artifacts — hash-check weights, prefer signed/provenanced models
(sigstore-style model signing is the emerging answer), and record where
every artifact came from.

## The code layer (the familiar half)

- **Secrets** — API keys in prompts, configs, and *traces* leak as often
  as keys in code: scanners like gitleaks catch committed secrets, but
  the LLM-specific leak is a provider key pasted into a prompt or logged
  in a trace — which is why
  [redaction at instrumentation](/learn/production/llm-observability-foundations)
  is a supply-chain control too.
- **Dependencies** — the SDKs, agent frameworks, and vector-DB clients in
  your stack are normal dependencies with normal CVEs; the
  LLM-specific wrinkle is *plugins and tools* — a third-party MCP server
  or agent tool is code that gets invoked by model decisions, so its
  trust level should match code-review standards, not plugin-store
  standards.

## The model layer (the new half)

A downloaded `safetensors` or GGUF file is an executable artifact with a
supply chain: who trained it, on what data, uploaded by whom, modified
since? The practical controls:

- **Pin by hash, not by name** — `llama-3-8b:latest` is a moving target;
  record the artifact digest so "the model we evaluated" is the model
  you run ([version pinning](/learn/production/model-deprecation-and-version-pinning)
  applies to weights too).
- **Prefer signed/provenanced artifacts** — model signing (sigstore's
  model-transparency work) and hub-side provenance are early but real;
  where they exist, verification is cheap insurance.
- **Treat tokenizer/config files as code** — chat templates and
  generation configs can carry surprising behavior; they're part of the
  artifact you're trusting.
- **Datasets are supply chain too** — fine-tuning or eval data of unknown
  provenance is a poisoning vector; record dataset sources like
  dependency lockfiles.

## The operating rule

Keep one **artifact inventory** — models, datasets, adapters, tools,
MCP servers — with source, version/hash, license, and last-reviewed date
per row. It's the SBOM of an AI system: unglamorous, and the first thing
an incident, an audit, or a [governance review](/learn/llm-security/nist-ai-rmf-and-mitre-atlas)
asks for.

## The honest limits

Model-hub provenance is immature — many popular weights have no signature
and ambiguous training provenance, so "verify everything" collides with
"verify what's possible." The honest posture is inventory + pinning +
sourcing discipline on what you *can* verify, and explicit risk-acceptance
notes on what you can't — an unexamined blob is a risk; a documented one
is a decision.

## The exercise

List every artifact your system loads at runtime — weights, tokenizers,
datasets, tools, MCP servers — and mark which have a recorded source and
hash. The unmarked rows are your supply-chain backlog.

## Go deeper

- [OWASP Top 10 for LLM apps](/learn/llm-security/owasp-llm-and-agentic-top-10) — supply chain is one of the ten.
- [Model deprecation and version pinning](/learn/production/model-deprecation-and-version-pinning) — the operational side of pinning.
- [Sandboxing agent execution](/learn/llm-security/sandboxing-code-execution-and-browser-use) — containment for what artifacts might do.
