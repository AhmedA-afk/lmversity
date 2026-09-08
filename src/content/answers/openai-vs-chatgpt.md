---
title: "OpenAI vs ChatGPT: what's the difference?"
description: "OpenAI vs ChatGPT is a company-vs-product distinction: OpenAI is the company that builds AI models, and ChatGPT is one product built on top of them."
intent: comparison
updated: "2026-09-08"
featured: false
faq:
  - q: "Is ChatGPT the same thing as GPT?"
    a: "No. GPT refers to the underlying model family OpenAI builds and names. ChatGPT is the chat product built around one of those models, plus a web and app interface, memory, and other product features layered on top."
  - q: "Do I need ChatGPT to use OpenAI's models?"
    a: "No. Developers can call OpenAI's models directly through its API without ever touching the ChatGPT interface, building the model into their own app, website, or tool instead."
  - q: "Is the API the same model as ChatGPT?"
    a: "Not necessarily the same checkpoint or configuration. The API and the ChatGPT product can expose different model options, defaults, and system-level behavior; check the current model list for what each surface offers."
  - q: "Do other companies have the same company-vs-product split?"
    a: "Yes. Anthropic builds models and offers them through Claude (the product) and an API; Google builds models and offers them through Gemini (the product) and an API. The pattern is standard across the industry."
related:
  - /learn/ai-foundations/foundation-models-explained
  - /learn/ai-foundations/choosing-a-model
  - /learn/ai-foundations/open-weight-vs-closed-models
  - /learn/llm-foundations/base-instruct-chat-reasoning-families
  - /learn/genai-app-dev
  - /learn/genai-app-dev/your-first-llm-api-call
---

OpenAI is the company; ChatGPT is one product that company makes. OpenAI builds and trains a family of AI models (branded GPT) and makes them available two ways: through ChatGPT, a consumer chat app, and through an API, which developers call from their own code to build other products. Confusing the company with the product is the most common mix-up in casual AI conversation.

## The short version

- OpenAI is the organization. It does research, trains models, and decides what gets released and how.
- ChatGPT is a specific product: a chat website and app built by OpenAI, aimed at end users typing questions into a text box.
- GPT is the name OpenAI uses for its underlying model family, the thing that actually generates text. ChatGPT is built around a model from this family.
- The API is a separate surface: a way for developers to send requests to OpenAI's models programmatically and get responses back inside their own software.
- A consumer uses ChatGPT directly. A developer building an app, a chatbot, or an internal tool typically uses the API instead, or a platform that wraps it.
- The same split exists at other labs: Anthropic (company) makes Claude (product) from models it also exposes via API; Google (company) makes Gemini (product) from models it also exposes via API.

## Company, product, model, API: four different things

**OpenAI** is the company. It runs research, decides training approaches, sets usage policies, and publishes the models under specific names and licenses. When people say "OpenAI released a new model," they mean the company shipped something; when they say "OpenAI is worth $X," they're talking about the business, not any single piece of software.

**GPT** is the name for OpenAI's model family. It stands for Generative Pre-trained Transformer, describing the architecture and training approach rather than a specific version. Multiple GPT models exist over time, with different capabilities, context sizes, and costs. This piece deliberately avoids naming a specific current model or price, since that list changes; check OpenAI's current model documentation for what's actually available today.

**ChatGPT** is a product: a chat interface (web, desktop, and mobile apps) that lets a person type messages and get answers back, built around one of OpenAI's models, plus product features the model itself doesn't provide, memory across conversations, file uploads, browsing, code execution in a sandbox, and a subscription tier structure. ChatGPT is what most non-technical people mean when they say "OpenAI."

**The API** is the developer-facing surface. Instead of a chat window, a developer sends a structured request (a prompt, some settings) to OpenAI's servers and gets a response back as data, which their own application then displays, stores, or acts on. The API exposes the underlying models more directly and is billed differently from a ChatGPT subscription; a developer building a customer support bot, a coding assistant, or an internal tool almost always builds on the API, not on ChatGPT itself.

## What a developer uses versus what a consumer uses

A consumer who wants to ask questions, draft an email, or debug a homework problem opens ChatGPT (or Claude, or Gemini) and types into the interface. They don't think about which model version answers them, and the product manages history, formatting, and follow-up context automatically.

A developer building a feature, say, a support ticket summarizer inside their own product, calls the API directly. They choose a model from the current list, write the prompt in code, and handle the response programmatically. They are not "using ChatGPT" in any meaningful sense, even though the same underlying model family may power both. This is the same distinction that shows up across the industry: a person chatting with Claude.ai is using a product; a team building a RAG pipeline that calls Claude through Anthropic's API is using a model directly. See our [Choosing a Model](/learn/ai-foundations/choosing-a-model) lesson for how to reason about that decision without depending on any single vendor's current lineup.

## Vendor-neutral parallels

The company-versus-product split isn't specific to OpenAI:

- **Anthropic** (the company) builds models and ships them through **Claude** (the consumer product) and a developer API. "Claude" and "Anthropic" get conflated the same way "ChatGPT" and "OpenAI" do.
- **Google** (the company) builds Gemini-family models and ships them through the **Gemini** app and an API (plus integrations across Google's own products).
- Some labs release **open-weight** models, where the trained model file itself can be downloaded and run by anyone, rather than only accessed through a hosted product or API. Our [Open-Weight vs. Closed Models](/learn/ai-foundations/open-weight-vs-closed-models) lesson covers what that distinction actually changes for a developer.

The pattern holds across vendors: a company trains models, then exposes them through at least one consumer product and at least one developer surface, and the two surfaces can differ in features, defaults, and pricing even when they're drawing on related underlying models.

## Where LMVersity fits

None of LMVersity's tracks are about any single vendor's product line, since the curriculum is built to stay useful regardless of which company is ahead in a given month. The [GenAI App Dev track](/learn/genai-app-dev) starts from "your first LLM API call" and works through the SDK-vs-raw-API decision that every developer building on top of a model (OpenAI's, Anthropic's, or otherwise) has to make. The [AI Foundations track](/learn/ai-foundations) covers how to evaluate and choose between models and providers without assuming brand loyalty. It's free, with no certificate, and deliberately vendor-neutral where practice differs by provider.

## Go deeper

- [Foundation Models, Explained](/learn/ai-foundations/foundation-models-explained) — what a "model" actually is, underneath any product name.
- [Choosing a Model in 2026](/learn/ai-foundations/choosing-a-model) — how to pick between providers and models for a real task.
- [Open-Weight vs. Closed Models](/learn/ai-foundations/open-weight-vs-closed-models) — the licensing and access distinction that cuts across every vendor.
- [Base vs Instruct vs Chat vs Reasoning Models](/learn/llm-foundations/base-instruct-chat-reasoning-families) — the model-type vocabulary that applies regardless of which company trained the model.
- [GenAI App Dev track](/learn/genai-app-dev) — building products on top of a model's API, vendor by vendor.
- [Your First LLM API Call](/learn/genai-app-dev/your-first-llm-api-call) — the concrete, hands-on version of "developer uses the API."

For the specifics of any single company's current models, pricing, or terms, check that company's own documentation directly rather than relying on this page or any other secondary source, since those details change often. Official references include OpenAI's platform documentation at platform.openai.com and Anthropic's at docs.anthropic.com.
