---
title: "AI engineer interview questions: what is asked and how to prepare"
description: "AI engineer interview questions cover LLM basics, prompting, RAG, evals, agents, and system design; here is what each round tests and how to prepare."
intent: howto
updated: "2026-09-08"
featured: false
faq:
  - q: "What topics come up most in AI engineer interviews?"
    a: "LLM fundamentals, such as tokens, context windows, and why models hallucinate, prompt engineering, retrieval-augmented generation, evaluation methodology, tool use and agents, and system design questions that combine several of these into one scenario."
  - q: "Do AI engineer interviews include system design rounds?"
    a: "Often yes, especially at mid to senior level. These typically ask you to design a feature like a support assistant or document Q&A system and defend choices around retrieval, evaluation, cost, and failure handling rather than just draw boxes and arrows."
  - q: "Will I be asked to code in an AI engineer interview?"
    a: "Usually, in some form: calling an LLM API, implementing a piece of a RAG pipeline, or handling structured output and errors. Expect ordinary software engineering competence to be checked alongside AI-specific knowledge, not instead of it."
  - q: "How is a Forward Deployed Engineer interview different?"
    a: "It adds customer-facing rounds on top of the usual technical bar: live problem decomposition of an ambiguous scenario, discovery and scoping exercises, and behavioral questions about ownership under ambiguity, since the role centers on deploying into a customer's own environment."
  - q: "How should I prepare for an AI engineer interview?"
    a: "Be able to explain, not just use, the concepts behind whatever you've built: why you chunked documents the way you did, how you evaluated a prompt change, what you'd do if retrieval returned the wrong context. Practicing the underlying concepts in each topic area matters more than memorizing answers."
related:
  - /interview/llm-basics
  - /interview/prompt-engineering
  - /interview/rag
  - /interview/evals
  - /interview/agents
  - /interview/ai-system-design
---

AI engineer interview questions cluster around six areas: LLM fundamentals, prompt engineering, retrieval-augmented generation, evaluation, tool use and agents, and system design that combines them into one scenario. Most rounds test whether you can explain trade-offs and diagnose failures, not just recite definitions or list APIs you've used.

## The short version

- Six recurring areas show up across companies: LLM basics, prompt engineering, RAG, evaluation, agents and tool use, and system design that combines them.
- Interviewers usually care more about your reasoning and trade-offs than a memorized correct answer, so expect follow-up "why" questions on anything you say.
- Expect some coding: an API call, a piece of a RAG pipeline, structured output handling, or debugging a failing prompt.
- System design rounds ask you to design a realistic feature, such as a support assistant or document Q&A system, and defend retrieval, evaluation, and failure-handling choices.
- If you're interviewing for a Forward Deployed Engineer role specifically, expect an added customer-facing layer: live problem decomposition and scoping exercises.
- The preparation that transfers best is being able to explain decisions from your own projects, not memorizing question banks.

## LLM basics

Expect questions on tokens and tokenization, context windows and their limits, why models hallucinate, temperature and sampling, the difference between base, instruct, and chat models, and what embeddings actually represent. Interviewers here are usually probing whether you understand the underlying mechanism, not just whether you know the vocabulary, so being able to explain why something happens, not only that it happens, matters.

## Prompt engineering

This covers zero-shot versus few-shot prompting, how to structure instructions, context, and examples so a model follows them reliably, diagnosing why a specific prompt failed, and treating prompts as versioned artifacts rather than throwaway strings. A common follow-up is being handed a prompt that isn't working and asked to explain what's wrong with it and how you'd fix it, which tests applied diagnosis more than recall.

## RAG

Retrieval-augmented generation questions tend to be some of the most detailed, because the topic touches data handling, retrieval, and generation all at once. Expect questions on chunking trade-offs, diagnosing why retrieval returned the wrong passages, when hybrid search beats pure vector search, when RAG is the wrong tool for a problem entirely, and how you'd evaluate whether a RAG system's answers are actually grounded in what was retrieved.

## Evaluation

Expect to be asked how you'd build a golden set for a hypothetical feature, what metrics you'd choose and why, how LLM-as-judge works and where its biases show up, the difference between offline evaluation and production monitoring, and how you'd turn an eval into something that gates a release rather than just producing a report nobody reads. This is often where interviewers separate people who've genuinely shipped something from people who've only prototyped.

## Tools, function calling, and agents

This area covers how tool schemas should be designed, the mechanics of the agent loop, common failure modes such as an agent looping on the same action or hallucinating arguments to a tool call, when an agent is the right choice versus a simpler fixed workflow, and how you'd design stopping conditions so an agent doesn't run forever or stop too early.

## System design for AI features

System design rounds combine the topics above into one scenario: design a document Q&A system, a support assistant, or a research agent. The bar here isn't drawing a clean architecture diagram; it's defending specific choices, such as how you'd chunk and retrieve data, what your evaluation plan looks like before you'd trust the system in production, how you'd budget cost and latency, and how the system fails gracefully when something goes wrong.

## MCP and tool infrastructure

At companies building agent platforms, expect questions on what the Model Context Protocol actually is, the roles of hosts, clients, and servers in its architecture, why a tool's description functions as a piece of prompt engineering rather than just metadata, and common failure and security issues in connecting a model to external tools.

## The Forward Deployed Engineer variant

Worth calling out separately: interviews for a Forward Deployed Engineer role, a title used by Anthropic, OpenAI, Palantir, and a number of other companies, add a distinct customer-facing layer on top of the technical topics above. That typically includes a live decomposition round, where you break down a vague, realistic business problem in real time, scoping and discovery exercises, and behavioral questions specifically about ownership and judgment under ambiguity. This reflects the role itself, which centers on deploying a system into a specific customer's own environment rather than building a product for many customers at once. If that's the role you're preparing for, treat this layer as additional preparation on top of the general list above, not a replacement for it.

## Behavioral and communication rounds

Alongside the technical topics, expect at least one round focused on how you communicate and make decisions, not just what you know. Common threads include describing a time a project didn't work the way you expected and what you changed as a result, explaining a technical decision to someone without your background, and talking through how you decided a feature was ready to ship rather than needing another iteration. These rounds are less about a specific right answer and more about whether you can give a clear, honest account of your own reasoning, including the parts that didn't go well, rather than a polished story that avoids any difficulty.

## How to actually prepare

The preparation that transfers best is being able to explain decisions from real projects out loud: why you chunked documents the way you did, what your evaluation set actually looked like, what you'd change if retrieval returned the wrong context. Where you have a gap in one of the six areas above, building or revisiting a small project in that area is more useful than reading a long list of questions. Use the interview pages linked below as a checklist of areas you should be able to discuss confidently, not a script to memorize word for word.

## Scenario-style questions

Some interviews present a short written scenario rather than an abstract question, for instance a support assistant that needs to show its work, or an agent that's been given permission to update customer records, and ask you to reason through the design, the risks, and the safeguards you'd put in place. These tend to test the same underlying judgment as the topic-by-topic questions above, but combined and applied to a specific, concrete situation, which is closer to what the day-to-day work actually looks like than an isolated question about, say, chunking strategy in the abstract.

## Where LMVersity fits

LMVersity's interview section covers exactly these six areas, LLM basics, prompt engineering, RAG, evals, agents, MCP, and system design, each written as a set of questions with the reasoning behind good answers, and the underlying tracks are the same ones these questions are testing. It's free and has no certificate; the preparation itself is the credential.

## Go deeper

- [/interview/llm-basics](/interview/llm-basics) — LLM fundamentals interview questions
- [/interview/prompt-engineering](/interview/prompt-engineering) — prompt engineering interview questions
- [/interview/rag](/interview/rag) — RAG interview questions
- [/interview/evals](/interview/evals) — LLM evaluation interview questions
- [/interview/agents](/interview/agents) — AI agents interview questions
- [/interview/ai-system-design](/interview/ai-system-design) — AI system design interview questions
- [/interview/mcp](/interview/mcp) — MCP interview questions
- [/roles/forward-deployed-engineer/career](/roles/forward-deployed-engineer/career) — how Forward Deployed Engineer interviews specifically differ
