---
title: "What skills does an AI engineer need? The honest list"
description: "What skills does an AI engineer need: prompting, RAG, evals, tool use, and production skills, plus the software engineering fundamentals underneath them."
intent: howto
updated: "2026-09-08"
featured: false
faq:
  - q: "Is AI engineering the same as machine learning engineering?"
    a: "No, though they overlap. Machine learning engineering typically means training and deploying models. AI engineering as the term is used now more often means building applications on top of existing foundation models via APIs, which leans more on software engineering, prompting, RAG, and evaluation than on training models from scratch."
  - q: "Do I need to know how to train a neural network to be an AI engineer?"
    a: "Not for most AI engineering work today, which is building applications on top of existing models. Understanding how models work conceptually helps you reason about their limits, but day-to-day work is closer to software engineering than to model training."
  - q: "What programming language should an AI engineer know?"
    a: "Python is the most common choice for AI tooling, data work, and most model provider SDKs. JavaScript or TypeScript matters if you're building the application layer, especially the frontend or a Node backend. Which one to prioritize depends on where you want to work."
  - q: "Is prompt engineering still a real skill?"
    a: "Yes, but a smaller and more specific one than it was initially framed to be: structuring instructions, examples, and context reliably, and evaluating whether a prompt actually works, rather than finding secret magic phrases."
  - q: "How important are evals for an AI engineer?"
    a: "Very. Without a way to measure whether a prompt, model, or pipeline change made things better or worse, you're guessing. Most experienced practitioners treat building evals as a core skill, not an optional extra."
related:
  - /learn/genai-app-dev
  - /learn/prompt-engineering
  - /learn/rag
  - /learn/evals-red-teaming
  - /learn/tools-function-calling
  - /learn/mcp
---

An AI engineer needs solid software engineering skills first, then the AI-specific layer on top: prompting and context engineering, retrieval-augmented generation, tool and agent design, and building evaluations to know if any of it actually works. Fine-tuning and deep model internals matter for some roles but are not the daily job for most.

## The short version

- Software engineering fundamentals, a language you can ship with, APIs, version control, testing, debugging, are the floor, not optional extras layered on later.
- Prompting and context engineering: structuring instructions, examples, and the information a model sees so it behaves reliably.
- Retrieval and tool use: getting external knowledge and actions into a model's reach via RAG, function calling, and increasingly MCP.
- Evaluation: building a golden set and metrics so you can tell whether a change actually helped, rather than guessing from a few examples.
- Production skills: observability, cost and latency management, caching, and handling the specific failure modes of LLM calls, such as timeouts, malformed output, and streaming.
- Model training and fine-tuning are real but narrower skills that most AI engineering roles use occasionally, not daily.

## The floor: software engineering

AI engineering builds on top of ordinary software engineering, not instead of it. That means comfort with at least one language, most commonly Python, and often also JavaScript or TypeScript for the application layer; working with APIs; using version control properly; writing and running tests; and the general skill of debugging code you didn't write. None of this is specific to AI, and none of it is optional. The AI-specific skills below have nowhere to attach without it, which is why a strong AI engineer often looks, at a glance, like a strong generalist software engineer who happens to also know this particular stack.

## Prompting and context engineering

Prompting is about the instructions, examples, and role framing you give a model in a single call. Context engineering is a related but distinct discipline: managing everything that enters the model's context window, and in what order, as a scarce and ordered resource. That includes token budgeting, prompt caching for cost and latency, and avoiding the ways that stuffing too much or poorly ordered context into a window degrades output quality rather than improving it. Both skills matter, and conflating them is a common beginner mistake, since the fixes for a bad prompt and the fixes for a bloated context window are different.

## Retrieval, tools, and agents

Most real AI features need more than a single model call. Retrieval-augmented generation grounds a model's answers in your own documents or data. Tool and function calling lets a model take actions, such as querying a database or calling an API, rather than only generating text. The Model Context Protocol, MCP, is an emerging standard for connecting models to external tools and data sources in a more consistent way than every team building its own bespoke integration. And agent design, giving a model the ability to plan and take multiple steps toward a goal, brings its own set of failure modes, such as looping or stopping too early, that are worth understanding before you build one.

## Evaluation

This is the skill most often skipped and most often the actual difference between a demo and something reliable. Without a golden set and a way to score outputs against it, you cannot know whether a change to a prompt, model, or pipeline made things better or worse, and you end up relying on a handful of examples you happened to glance at. Building evals is not glamorous, but experienced practitioners consistently treat it as core rather than optional, because it's the only honest way to answer "did this change actually help."

## Production and operational skills

Shipping an AI feature that survives contact with real traffic needs more than a working prototype. That includes structured logging and tracing so you can see what a call actually did, cost and latency budgets so a feature doesn't silently become too slow or too expensive, caching to avoid paying for and waiting on repeated work, and specific handling for the failure modes unique to LLM calls: timeouts, malformed structured output, rate limits, and the mechanics of streaming a response to a user. Treating prompts as versioned configuration rather than strings embedded in code is part of this same discipline.

## The narrower skills: fine-tuning and model internals

Understanding how models actually work under the hood, tokenization, attention, and what an objective like next-token prediction actually optimizes for, helps you reason about failure modes even if you never train a model yourself. Fine-tuning specifically matters for roles that need to customize a model's behavior, style, or domain vocabulary at scale, but it is not most AI engineers' daily work. Knowing when fine-tuning is the right tool, rather than always reaching for it, is arguably more valuable than knowing the mechanics of running a training job.

## How these skills actually show up day to day

In practice, the skills above rarely get exercised one at a time. A typical week for someone in this role might involve debugging why a retrieval step is returning irrelevant passages for a specific class of query, which touches chunking, embeddings, and evaluation all at once; adjusting a system prompt after noticing a regression in an eval run; or reviewing a tool schema that's causing a model to call the wrong function under certain phrasings. The skill that ties all of this together is diagnosis: being able to tell, from an output that looks wrong, which part of the pipeline actually caused it, rather than guessing and changing things at random until the symptom goes away.

## A note on the Forward Deployed Engineer variant

Some roles add a distinct, customer-facing layer on top of everything above. A Forward Deployed Engineer typically embeds directly with a customer to take a system from prototype to production inside that customer's own environment, which adds discovery and scoping, deployment into infrastructure you don't control, and ongoing relationship ownership to the technical skill set described here. If that's the specific direction you're aiming for, treat it as an additional, separate skill set layered on top of AI engineering fundamentals rather than a synonym for them.

## Skills that transfer well from adjacent roles

People coming from backend engineering usually already have the API, testing, and debugging fundamentals and mainly need to build the AI-specific layer on top. People coming from data science or classical machine learning usually already understand evaluation and model behavior conceptually and need to build up production software engineering habits, such as observability and handling failure modes gracefully, that a research or notebook-first background doesn't always demand. Neither background is a shortcut past the full list above, but knowing which parts you already have lets you focus your time on the parts you're actually missing.

## Where LMVersity fits

LMVersity's tracks map directly onto this list: GenAI App Dev and Python & Data for the engineering floor, Prompt Engineering and Context Engineering, RAG, Tools & Function Calling and MCP, Evals & Red-teaming, Production & Ops, and Fine-tuning for the narrower skills, plus a dedicated Forward Deployed Engineer path if that specific role is the target. It's free, hands-on, and has no certificate.

## Go deeper

- [/learn/genai-app-dev](/learn/genai-app-dev) — the application-building fundamentals
- [/learn/prompt-engineering](/learn/prompt-engineering) — prompting as a distinct skill
- [/learn/context-engineering](/learn/context-engineering) — managing what a model actually sees
- [/learn/rag](/learn/rag) — grounding models in your own data
- [/learn/tools-function-calling](/learn/tools-function-calling) — giving models actions to take
- [/learn/mcp](/learn/mcp) — the emerging standard for connecting tools
- [/learn/evals-red-teaming](/learn/evals-red-teaming) — measuring whether any of it works
- [/learn/production](/learn/production) — running LLM features in production
