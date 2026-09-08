---
title: "What is an AI agent? A plain definition and the parts that matter"
description: "An AI agent is a system that uses a language model to decide what to do, calls tools to act, checks the result, and repeats until a goal is met or it stops."
intent: definition
updated: "2026-09-08"
faq:
  - q: "What makes something an AI agent instead of just a chatbot?"
    a: "A chatbot responds with text. An agent uses tools to act on the world — running code, calling an API, editing a file — and decides its next step based on what those tools return, often across multiple rounds without a person in between."
  - q: "Does an AI agent need to be autonomous to count as an agent?"
    a: "Not fully. Most working definitions describe a spectrum: how much a system decides for itself versus follows a fixed path, and how much a human has to approve before it acts. A system with some autonomy and some tool use is still meaningfully an agent."
  - q: "What is the difference between an agent and a workflow?"
    a: "A workflow is a fixed sequence of steps written in advance. An agent decides its own sequence of steps at runtime, based on what it observes. Many production systems that look like agents are actually workflows, and that's often the more reliable choice."
  - q: "Can an AI agent work without any tools?"
    a: "Not usefully, by most definitions. A model that can only produce text without acting on anything outside itself is a chatbot or a text generator, not an agent. Tool use — even something as simple as running a search — is generally treated as the defining feature."
  - q: "What is the simplest example of an AI agent?"
    a: "A coding assistant that can read a file, propose an edit, run the tests, read the failure output, and try again — deciding each next action itself based on what the previous one returned — is a minimal, working example."
related:
  - /learn/agentic-ai/what-is-an-agent
  - /learn/agentic-ai/the-agent-loop
  - /learn/agentic-ai/agents-vs-workflows
  - /learn/agentic-ai/when-not-to-use-an-agent
  - /learn/tools-function-calling/what-is-tool-calling
  - /learn/ai-foundations/ai-agents-vs-chatbots
---

An AI agent is a system built around a language model that decides what action to take next,
takes that action by calling a tool, observes the result, and repeats — pursuing a goal across
multiple steps rather than producing one response and stopping. The defining feature is the
loop: the model's output changes what happens next in the world, and what happens in the world
changes the model's next output.

## The short version

- An agent loops: think, act, observe, repeat — until a goal is met, a limit is hit, or it decides it's done.
- Tool use is the defining capability. Without the ability to act on something outside the conversation, it's a chatbot, not an agent.
- Autonomy is a spectrum, not a switch. Some agents ask permission before every action; others run many steps unsupervised.
- Not every AI-powered feature should be an agent. A fixed workflow is often more reliable when the steps are known in advance.
- The word gets applied loosely in marketing. The useful test is whether the system decides its own next step, not whether it's branded "agentic."

## The parts that make a system an agent

**A model that reasons about what to do next.** The language model is the decision-maker in
the loop. Given the current state — the conversation so far, any tool results received — it
produces either a final answer or a request to call a tool.

**Tools it can call.** These are the actions available to the model: running a search, querying
a database, executing code, calling an API, editing a file. A tool call is the model requesting
an action; the surrounding system actually performs it and returns the result as text or
structured data the model can read.

**A loop.** The system takes the model's tool request, executes it, and feeds the result back
in as new input. This repeats — often called the agent loop, or described as a sense-think-act
cycle — until some condition ends it.

**A stopping point.** Every real agent needs a way to know when it's finished: the model
declares the task complete, a limit on steps or tokens is reached, or a human interrupts. Agents
without a clear stopping condition tend to keep calling tools past the point of usefulness.

**Some degree of autonomy.** How much the agent decides for itself versus checks in with a
human varies widely. A coding agent that asks before every file edit is still an agent; so is
one that runs unsupervised for an hour. The distinguishing question isn't "how autonomous" but
"does it decide its own next step based on what it observes."

## A concrete walkthrough

Say the goal is "find out why last night's batch job failed and propose a fix." A chatbot
version of this would need you to paste in the error log yourself and ask what it means. An
agent version looks different: the model decides it needs the log, calls a tool to read it,
notices the error points to a specific file, calls another tool to open that file, forms a
hypothesis, calls a tool to check a related config value, and only then writes up what it
found and what it would change. Nobody wrote a script that says "read log, then open file,
then check config" — the model chose that order because of what each step revealed. That
chosen, adaptive ordering is what makes it an agent rather than a scripted lookup.

## Agent vs. chatbot vs. workflow

A **chatbot** takes an input and produces an output — usually text — with no ability to act
on anything outside the conversation. A **workflow** is a fixed, pre-written sequence of steps;
an AI model might be one step in it, but the sequence itself doesn't change based on what the
model decides. An **agent** decides its own sequence of steps at runtime: it can take a
different path through the problem depending on what it finds along the way. The practical
implication is that a workflow is more predictable and easier to test, while an agent is more
flexible and more useful when the right sequence of steps genuinely can't be known in advance.

## How much autonomy is normal

In production systems, full autonomy is the exception rather than the rule. Most working
agents run under some form of approval boundary: a coding agent that can read any file freely
but must ask before writing one, a customer-support agent that can look up an order but must
get a human sign-off before issuing a refund, a research agent that can search and read
freely but hands its draft to a person before it's sent anywhere. The engineering discipline
here is deciding, action by action, which ones are safe to let the model take on its own and
which ones need a human in the loop — not deciding once whether "the agent" as a whole is
autonomous.

## Why "is this actually an agent" is a real engineering question

It matters in practice because agent-shaped systems are harder to test, harder to make
reliable, and more expensive to run than a fixed workflow doing the same job. A common and
well-documented mistake is reaching for an agent when a workflow would do — writing an
open-ended loop for a task that has three known steps every time. The useful discipline is to
ask whether the steps and their order are actually unknown ahead of time; if they're not, a
workflow will usually be more reliable and cheaper to operate than a loop that re-decides the
same three steps every run.

## Where LMVersity fits

LMVersity's Agentic AI track starts with exactly this question — what makes something an
agent — and builds up through the agent loop, tool use, memory, stopping conditions, and the
judgment call between an agent and a workflow. The Tools & Function Calling track covers tool
calling itself in depth: how a model requests a tool, how results get back to it, and where
that mechanism breaks. Both are free, self-paced, and carry no certificate.

## Go deeper

- [What Makes Something an Agent](/learn/agentic-ai/what-is-an-agent) — the fuller lesson behind this page.
- [The Agent Loop: Sense, Think, Act](/learn/agentic-ai/the-agent-loop) — the core cycle explained step by step.
- [Choose an agent only when a workflow is not enough](/learn/agentic-ai/agents-vs-workflows) — the decision most teams get wrong.
- [When a Workflow Beats an Agent](/learn/agentic-ai/when-not-to-use-an-agent) — concrete cases where the loop is the wrong tool.
- [What Is Tool Calling](/learn/tools-function-calling/what-is-tool-calling) — the mechanism that makes an agent able to act.
- [AI Agents vs. Chatbots](/learn/ai-foundations/ai-agents-vs-chatbots) — a side-by-side comparison for beginners.
