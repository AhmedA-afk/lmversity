---
title: "AI engineer roadmap: the skills in order, and what to skip"
description: "The AI engineer roadmap in order: foundations, LLM internals, building with models, evals, and production, with what's optional and what to skip."
intent: pillar
updated: "2026-09-08"
featured: true
faq:
  - q: "What is the correct order to learn AI engineering skills?"
    a: "Programming and data handling first, then how models work internally (tokens, embeddings, transformers), then building with models (prompting, structured output, tools, RAG, agents), then evaluation, then production hardening."
  - q: "Do I need calculus and linear algebra to become an AI engineer?"
    a: "Only at an intuition level for most application-building roles: vectors, dot products, probability basics. Deep calculus and matrix calculus matter if you plan to train or fine-tune models, not for building on top of existing ones."
  - q: "Should I learn classical machine learning before large language models?"
    a: "Not as a prerequisite. Classical ML (regression, trees, SVMs) is a separate, valuable specialization, but it is not required to build applications on top of LLMs. Learn it if you want the theory or plan to build predictive systems outside of LLMs."
  - q: "What's the difference between the app-builder path and the model-internals path?"
    a: "App builders go foundations to prompting to RAG/agents to production, mostly using APIs. Model-internals people add deep learning, attention mechanics from first principles, and fine-tuning, because they need to modify or train models, not just call them."
  - q: "Where does Forward Deployed Engineer fit on this roadmap?"
    a: "FDE branches off after the same AI engineering core, adding enterprise data integration, hostile-environment deployment, live problem decomposition, and customer-facing skills that a pure app-building roadmap does not cover."
related:
  - /learn/ai-foundations
  - /learn/llm-foundations
  - /learn/agentic-ai
  - /learn/machine-learning
  - /learn/deep-learning
  - /roles/forward-deployed-engineer
---

The AI engineer roadmap runs: programming and data handling, then how LLMs work internally (tokens, embeddings, transformers), then building with models (prompting, structured output, tools, RAG, agents, MCP), then evaluation, then production. Classical ML theory and deep learning internals are optional depth, not prerequisites, unless you plan to train models yourself rather than build on top of existing ones.

## The short version

- The roadmap has a genuine dependency order for the application-building path: skipping "how models work" to jump to agents produces engineers who can't debug their own systems.
- Maths depth, classical ML, and deep learning internals are real specializations, not universal prerequisites — treat them as branches, not gates.
- There is a real fork after the shared core: app builders go toward production and agents; model people go toward deep learning, fine-tuning, and training.
- A third branch, Forward Deployed Engineer, adds enterprise data, hostile deployment, and customer-facing skills on top of the same AI engineering core.
- What to skip depends on your goal. Nobody needs all 22 tracks at full depth; almost everyone needs the core stages below.

## The roadmap, stage by stage

| Stage | What it covers | Prerequisite for |
|---|---|---|
| 1. Programming & data | Python basics, JSON/JSONL, API calls, data shapes | Everything below |
| 2. Maths intuition | Vectors, dot products, probability, embedding geometry | Understanding embeddings, retrieval, loss |
| 3. AI foundations | Supervised learning, foundation models, why models hallucinate | LLM foundations, evals |
| 4. LLM internals | Tokenization, attention, transformer block, KV cache | Prompting, RAG, context engineering |
| 5. Building with models | Prompting, structured output, tools, RAG, agents, MCP | Evals, production |
| 6. Evaluation | Eval datasets, rubrics, LLM-as-judge, regression testing | Production, credible portfolio work |
| 7. Production | Streaming, logging, cost, latency, injection defense | Shipping to real users |
| Branch: model internals | Deep learning, fine-tuning, training mechanics | Training or modifying models, not just calling them |
| Branch: classical ML | Regression, trees, SVMs, statistical evaluation | Predictive/tabular systems, ML-specific roles |
| Branch: FDE | Enterprise data, hostile deployment, decomposition, customer skills | Field-facing, embedded deployment roles |

Stages 1 through 7 are the shared spine. Everything below the line is a genuine fork, not a "do this too" addition — treat the branches as decisions, not obligations.

## What is genuinely prerequisite

**Programming fundamentals.** You cannot skip this and still build anything real. This includes comfort reading unfamiliar code, not just writing your own from a blank file, because most AI engineering work involves extending an existing codebase or someone else's agent framework.

**Enough maths to reason about embeddings and probability.** Vectors, dot products, cosine similarity, and what a probability distribution over tokens means. This is a small, finite set of ideas, and skipping it doesn't save much time — it just means retrieval and sampling stay mysterious later, when the cost of confusion is higher.

**How LLMs actually work, mechanically.** Tokens, attention, the transformer block, why context windows have the shape they do, why hallucination is a structural property of next-token prediction rather than a bug you can patch away. This is the stage most self-taught paths skip because it feels theoretical, and it is the stage that pays off every time something breaks in production and you need to reason about why, rather than guess.

**Evaluation, before you think you need it.** Not a separate elective — treat it as load-bearing. An AI engineer who cannot produce a number showing a change helped or hurt is not meaningfully different from one who cannot write tests, in a codebase where "it looks right" is not a reliable signal.

## What is genuinely optional, and when to pick it up

**Maths depth beyond intuition.** Full linear algebra, multivariable calculus, and the maths behind backpropagation matter if you are training or fine-tuning models, doing research, or working at a lab on model internals. They do not gate building a RAG pipeline, a tool-using agent, or a production API integration. If your goal is application engineering, treat deep maths as something to return to later, driven by curiosity or a specific need, not as a wall in front of everything else.

**Classical machine learning.** Linear and logistic regression, decision trees, random forests, SVMs, and the statistical evaluation methods that go with them are a real and valuable body of knowledge — for tabular data problems, recommendation systems, and roles where "machine learning engineer" means training predictive models, not building on LLMs. It is not a prerequisite for LLM-based application engineering. Learn it if the job you want actually needs it, or if you want the theoretical grounding; skip it if your goal is purely to build products on top of foundation models and revisit later if a specific role asks for it.

**Deep learning internals beyond what LLM Foundations covers.** Building a full training loop, understanding backpropagation from first principles at the tensor level, vision architectures, and generative model internals matter for research roles, fine-tuning specialists, and anyone reproducing papers. Most AI engineers calling an API and building RAG pipelines will never need to implement a transformer's backward pass, though the ones who have done it once tend to debug attention-related weirdness faster than those who haven't.

**Fine-tuning.** Worth learning once you understand when prompting and RAG genuinely aren't enough — usually a narrower, later-stage need than beginners assume. Most product problems that look like "I need to fine-tune" turn out to be prompting, retrieval, or structured-output problems in disguise; the "fine-tune vs prompt vs RAG" decision itself is worth learning before you invest in fine-tuning mechanics.

## What to actually skip, and when it's safe

A few concrete calls, since "it depends" isn't useful advice on its own.

**Skip building a tokenizer from scratch** unless you specifically want to understand byte-pair encoding at implementation level; reading how one works is enough for application engineering, and you can always come back to build one once tokenization bugs actually bite you in a real project.

**Skip full linear algebra and multivariable calculus courses** before you start building. Pick up vectors, dot products, and probability basics first, build something, and let specific gaps (matrix calculus for a fine-tuning run, eigenvalues for a dimensionality-reduction problem) pull you back to the maths when you actually hit them. Front-loading a semester of maths before writing a line of application code is a common way people stall out before reaching the interesting part.

**Skip data structures and algorithms depth beyond what a standard coding screen needs.** DSA still shows up as a gate at some companies, particularly larger ones, but the FDE and applied-AI hiring data both point the same direction: once you're past a basic coding bar, the differentiator is live problem decomposition, system design over LLM-specific concerns, and project depth, not LeetCode mastery. Prepare enough to pass the bar; don't over-invest past it.

**Don't skip evaluation to "get to the fun part faster."** This is the one shortcut that looks free and isn't. Every stage from RAG onward produces systems whose failures are silent — a bad retrieval, a subtly wrong tool call — and evaluation is the only thing that turns "seems fine" into a number you can trust or defend.

## How to tell which branch you're on

A few questions that tend to sort people quickly. Do you care more about what a system does for a user, or about what happens inside the model when it produces an answer? Would you rather debug a flaky agent loop or debug why a loss curve isn't converging? Is your target job posting asking for "LLM applications," "agents," and "production" language, or "training," "fine-tuning," and "research" language? Answers pointing toward the first option in each pair belong on the app-builder branch; answers pointing toward the second belong on the model-internals branch. Most people can answer this honestly after finishing stages 1 through 4 and building one small project in each direction — a short RAG pipeline and a from-scratch attention implementation — rather than by introspecting about it in the abstract before writing any code.

It's also fine to stay a generalist longer than feels comfortable. The shared core (stages 1-4) is large enough that plenty of working AI engineers never fully commit to one branch, moving between building agentic products and occasionally fine-tuning a model when prompting genuinely isn't enough. Specialization is a response to a specific job or project pulling you in a direction, not a status you need to claim early.

## The branch point: app builders versus model people

Both branches share stages 1 through 4. After that, the paths diverge in what they spend the most time on.

**App builders** spend the bulk of their time in stages 5 through 7: prompting, structured output, tool use, RAG, agent orchestration, MCP, evaluation, and production hardening. Their mental model of a model is mostly a well-specified black box with known failure modes: they need to know what a model can and can't do, not how to change what it can do. This branch is closer to product engineering than to research, and it's where most AI engineering job postings actually sit today.

**Model people** add deep learning fundamentals, attention mechanics from first principles, tokenizer construction, fine-tuning (LoRA/QLoRA, full fine-tuning, preference tuning), and training-time concerns like hyperparameters and catastrophic forgetting. They need stages 5 through 7 too, eventually, but their differentiator is being able to open the model up rather than only calling it. This branch overlaps with what's traditionally called ML engineering or applied research, and it's a longer, more maths-heavy road.

Neither branch is "the real one." Job postings for products built on LLMs mostly want app builders; postings for labs, research teams, and companies doing custom model work want model people. Most people benefit from starting on the app-builder branch, because it gets you to a working, evaluable system faster, and the model-internals knowledge is easier to absorb once you have a concrete system to relate it to.

## The FDE branch

Forward Deployed Engineer is a third, distinct fork, not a deeper version of either branch above. It shares the same AI engineering core (stages 1 through 7) but adds skills a pure app-building or model-internals roadmap does not cover at all: enterprise data integration (ETL, legacy schemas, identity and access), deployment into constrained environments (VPCs, on-prem, air-gapped systems), live problem decomposition of an ambiguous business problem under time pressure, and the customer-facing work of discovery, scoping, and driving adoption. It is a genuinely different job shape — closer to a hybrid of software engineer and embedded consultant — and it is worth knowing about early if the idea of building for one customer at a time, inside their environment, sounds more interesting than building a product for many customers from the outside. LMVersity's Forward Deployed Engineer path lays out this branch across ten phases, from the same starting point as the general AI engineering roadmap.

## Where LMVersity fits

The stage-by-stage roadmap above maps directly onto LMVersity's tracks: AI Foundations and LLM Foundations for stages 3 and 4, Prompt Engineering, Structured Outputs, Tools & Function Calling, RAG, Agentic AI, and MCP for stage 5, Evals & Red-teaming for stage 6, and Production & Ops for stage 7. Machine Learning and Deep Learning sit as the classical-ML and model-internals branches described above, and Fine-tuning & Optimization covers that specific sub-branch once you're past the "do I actually need this" question. It's free, sequenced by these dependencies, and has no certificate — what it gives you is the order, not a shortcut through it.

## Go deeper

- [AI Foundations](/learn/ai-foundations) — the conceptual base every branch of this roadmap depends on.
- [LLM Foundations](/learn/llm-foundations) — the internals stage most self-taught paths skip.
- [Agentic AI](/learn/agentic-ai) — where the app-builder branch goes after RAG and tools.
- [Classical Machine Learning](/learn/machine-learning) — the classical-ML branch, if your goal needs it.
- [Deep Learning](/learn/deep-learning) — the model-internals branch, for training and fine-tuning work.
- [Fine-tuning & Optimization](/learn/fine-tuning) — for when prompting and RAG genuinely aren't enough.
- [Decide: fine-tune, prompt, or RAG?](/guides/rag-fine-tuning-or-a-longer-prompt) — the decision that comes before investing in fine-tuning.
- [Forward Deployed Engineer](/roles/forward-deployed-engineer) — the branch that adds enterprise deployment and customer-facing skills.
