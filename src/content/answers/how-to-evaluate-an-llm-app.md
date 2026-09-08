---
title: "How to evaluate an LLM app: golden sets, judges, and release gates"
description: "How to evaluate an LLM app: build a golden dataset, choose metrics and an LLM judge, and turn evaluation into a release gate that catches regressions."
intent: howto
updated: "2026-09-08"
featured: false
faq:
  - q: "What is a golden set in LLM evaluation?"
    a: "A golden set is a curated collection of representative inputs paired with a known-correct answer, expected behavior, or grading rubric, used to score a model or prompt consistently every time something changes."
  - q: "What is LLM-as-judge?"
    a: "LLM-as-judge means using a language model to grade another model's output against a rubric, instead of or alongside human review. It scales further than manual grading but carries its own biases, such as favoring longer or more confident-sounding answers, so it needs calibration against human judgment."
  - q: "How many examples do I need in an eval set?"
    a: "Enough to detect the regressions you actually care about with reasonable confidence. A few dozen well-chosen, diverse examples can be more useful than thousands of near-duplicates. Size the set to your failure modes, not an arbitrary round number."
  - q: "What is the difference between offline and online evals?"
    a: "Offline evals run against a fixed dataset before you ship, usually in CI, to catch regressions. Online evals monitor real production traffic and signals like user feedback or downstream outcomes after you've shipped. Production systems need both."
  - q: "Can I skip building an eval set and just eyeball outputs?"
    a: "You can for a quick prototype, but eyeballing doesn't scale past a handful of examples, doesn't catch regressions when you change a prompt or model, and gives no defensible answer to whether a change made things better or worse."
related:
  - /learn/evals-red-teaming
  - /learn/evals-red-teaming/datasets-rubrics-and-judges
  - /learn/evals-red-teaming/llm-as-judge
  - /learn/evals-red-teaming/regression-gates-and-online-signals
  - /guides/write-your-first-eval-for-an-ai-feature
  - /interview/evals
---

Evaluating an LLM app means building a golden set of representative inputs with known-good answers or rubrics, scoring outputs against it with metrics and often an LLM-as-judge, and wiring that scoring into your release process as a gate that blocks regressions. Do this before you ship, not after users find the problems.

## The short version

- Build a golden set first: real or realistic inputs with a known-correct answer, expected behavior, or grading rubric attached to each one.
- Separate what you're measuring. Correctness, faithfulness to source material, format compliance, safety, and latency or cost are different axes that need different checks.
- Pick metrics you can compute automatically where possible, and reserve human or LLM-judge review for what automatic metrics can't catch.
- Calibrate any LLM judge against human ratings on a sample before trusting its scores at scale.
- Wire evals into CI as a release gate, so a prompt or model change that regresses quality is caught before it ships, not after.
- Keep watching in production. Offline evals catch known failure modes; online monitoring catches the ones you didn't think to test for.

## Start with the golden set, not the metric

The most common mistake is picking a metric before deciding what "good" actually means for your feature. Start instead with a representative set of inputs: real user queries where possible, redacted if needed, plus support tickets, expert-written cases, and known edge cases that have caused problems before. Attach to each one an expected answer, the key facts it must contain, or a rubric a grader can apply consistently. A small, carefully chosen set that covers your actual failure modes is worth more than a large set of near-duplicate easy cases. This set is also what you'll re-run every time you change a prompt, a model, or a pipeline step, so it's worth investing real time in building it well the first time.

## Choosing what to measure

Different failure modes need different checks, and collapsing them into one score hides which part of the system is actually broken. Correctness or accuracy checks whether the answer is right. Faithfulness or groundedness, most relevant for RAG systems, checks whether the answer is actually supported by the retrieved evidence rather than invented. Format or schema validity checks whether structured output parses correctly. Safety checks compliance with policy. Latency and cost are their own axis entirely, separate from quality. It also matters whether you're scoring one output against a rubric (pointwise grading) or comparing two outputs head-to-head (pairwise grading); pairwise comparison is often more reliable for deciding whether a prompt change is actually an improvement, since it's easier for a grader to say which of two answers is better than to assign an absolute score.

## LLM-as-judge, and its limits

Using a model to grade another model's output against a rubric scales far past what manual review can cover, and it's now a standard part of most eval pipelines. It comes with real biases worth knowing before you trust it: judges tend to favor longer answers, more confident-sounding phrasing, and in some cases their own model family's style over another's. None of this makes LLM-as-judge useless, but it means you should calibrate the judge against a human-labeled subsample before trusting its scores at scale, and treat it as one signal among several rather than the only one, particularly for safety-critical decisions where a wrong judgment has real consequences.

## Offline evals vs production monitoring

Offline evaluation runs your golden set against a fixed dataset, typically as part of CI, before a change ships. Online evaluation monitors real production traffic after a change has shipped, watching signals like user feedback, complaint or escalation rates, and downstream outcomes. You need both. Offline evals catch the failure modes you already know to test for; online monitoring is what catches the ones nobody thought to include in the golden set, which in practice is most of the interesting failures once a system has been live for a while.

## Turning evals into a release gate

The payoff of building an eval set is treating it as a gate, not a report you glance at occasionally. Run the eval suite in CI on every prompt or model change, and block merges or deploys when a score regresses past a threshold you've set deliberately. Track scores over time across model and prompt versions so you can see trends, not just pass or fail on the latest change. One practical wrinkle: LLM outputs are non-deterministic, so a single run of an eval can be noisy. Sampling multiple runs per case, or applying basic statistical reasoning about sample size and confidence, keeps you from chasing noise as if it were a real regression or a real improvement.

## Building the eval habit into a team

An eval set that only one person knows how to run tends to decay: it stops being updated as the product changes, and it stops being trusted once nobody remembers exactly what it covers. Treating the eval set the way you'd treat a codebase, under version control, with clear ownership, and updated whenever a new failure mode shows up in production, keeps it useful over time rather than becoming a one-time exercise before a launch. It's also worth periodically adding real production failures back into the golden set once they've been identified and understood, so the set grows to reflect what actually goes wrong rather than only what you anticipated when you first built it.

## Common mistakes

Testing only happy-path inputs and skipping edge cases or adversarial ones is the most common gap. For RAG and agent systems, judging only the final answer without checking whether the retrieval or tool-use steps along the way were correct hides exactly where a failure originated. Trusting a single LLM-judge run without calibration or repeated sampling produces scores that look precise and aren't. And treating an eval score as a single number in isolation, without any sense of confidence interval or sample size, makes it easy to mistake noise for a real signal in either direction.

## Evaluating agents and multi-step pipelines

If your feature is an agent or a multi-step pipeline rather than a single call, evaluating only the final answer hides where things actually broke. A wrong final answer might come from a bad plan, a wrong tool call, misread tool output, or a fine last step built on good earlier ones. Evaluating the trajectory, meaning the sequence of intermediate decisions and tool calls, not just the outcome, is what lets you tell those apart, and it's the difference between fixing the actual cause of a failure and papering over its symptom in the final response.

## Where LMVersity fits

LMVersity's free Evals & Red-teaming track covers this in sequence: datasets and rubrics, judges and their biases, pairwise versus pointwise grading, statistical rigor, and turning evals into CI gates, alongside a hands-on guide to writing your first eval for a real feature. It's free, structured, and has no certificate.

## Go deeper

- [/learn/evals-red-teaming](/learn/evals-red-teaming) — the evals and red-teaming track overview
- [/learn/evals-red-teaming/datasets-rubrics-and-judges](/learn/evals-red-teaming/datasets-rubrics-and-judges) — building the golden set and rubric
- [/learn/evals-red-teaming/llm-as-judge](/learn/evals-red-teaming/llm-as-judge) — using a model to grade output
- [/learn/evals-red-teaming/llm-judge-bias-and-calibration](/learn/evals-red-teaming/llm-judge-bias-and-calibration) — the biases to calibrate against
- [/learn/evals-red-teaming/regression-gates-and-online-signals](/learn/evals-red-teaming/regression-gates-and-online-signals) — wiring evals into release gates
- [/learn/evals-red-teaming/offline-vs-online-evals](/learn/evals-red-teaming/offline-vs-online-evals) — the two eval regimes you need
- [/guides/write-your-first-eval-for-an-ai-feature](/guides/write-your-first-eval-for-an-ai-feature) — a hands-on starting guide
- [/interview/evals](/interview/evals) — evaluation interview questions if you're prepping to discuss this
