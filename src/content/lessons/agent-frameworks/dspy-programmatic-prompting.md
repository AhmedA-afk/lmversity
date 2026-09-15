---
title: "DSPy: programming, not prompting"
track: "agent-frameworks"
status: live
summary: "DSPy treats the LLM pipeline as a program — signatures declare inputs and outputs, modules compose them, and optimizers compile better prompts and weights from your data instead of hand-tuning strings."
duration: "8 min read"
sources: ["dspy-docs"]
---

## The short answer

DSPy inverts the usual workflow: instead of writing prompts, you declare
**signatures** (typed input→output contracts) and compose **modules**
(`Predict`, `ChainOfThought`, `ReAct`) into a program — then an
**optimizer** compiles the program against your data, searching
instructions, few-shot examples, and even fine-tuned weights for what
scores best on your metric. Prompting becomes a compile step; the artifact
you tune is a metric, not a string.

## The vocabulary

```python
import dspy

class Extract(dspy.Signature):
    """Pull the total from a receipt."""
    receipt: str = dspy.InputField()
    total: float = dspy.OutputField()

extract = dspy.Predict(Extract)          # or ChainOfThought, ReAct
result = extract(receipt="...")

# optimize: give it data + a metric, get a better program back
optimizer = dspy.MIPROv2(metric=exact_match)
better = optimizer.compile(extract, trainset=examples)
```

- **Signature** — `docstring` + typed fields; the contract the LLM must
  satisfy. It's the same idea as
  [schema design](/learn/structured-outputs/schema-design-for-reliability)
  but applied to the *prompt*, not just the output.
- **Module** — `Predict` (direct answer), `ChainOfThought` (reason first),
  `ReAct` (tool-using agent loop — DSPy's version of
  [the agent loop](/learn/agent-frameworks/raw-sdk-agent-baseline)).
  Modules compose: a pipeline is modules calling modules.
- **Optimizer** — `BootstrapFewShot`, `MIPROv2`, and friends search the
  prompt space: which instructions, which demos, which weights maximize
  your metric on a trainset. You bring data and a scorer; the framework
  brings the search.

## What it adds over the raw loop

A different axis entirely. Other frameworks wrap the *loop*; DSPy wraps the
*optimization problem* — "what should the prompt/few-shots/weights be" is a
search over your data with your metric, not a taste-driven edit loop. The
raw baseline has no notion of "compile the prompt better"; DSPy makes that
the whole API.

## When plain code is enough

Plain code wins when the task is single-shot and correctness is obvious —
optimization needs a metric and a trainset, and tasks without either have
nothing to optimize toward. DSPy earns its complexity when you *have* a
scorable task and enough examples to tune against — extraction,
classification, QA-with-known-answers — and when prompt quality is the
actual bottleneck rather than plumbing. It's also genuinely orthogonal to
the other frameworks: DSPy programs can sit inside a LangGraph node or a
Mastra step.

## The exercise

Take a task you currently prompt by hand, express it as a signature, run
`Predict` — then run an optimizer over a dozen labeled examples and diff
the compiled prompt against yours. The diff is the lesson: optimization
finds phrasing you wouldn't write.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — the loop DSPy optimizes into.
- [Prompt engineering](/learn/prompt-engineering/few-shot-prompting) — the manual craft DSPy automates.
- [Evals: datasets, rubrics, and judges](/learn/evals-red-teaming/datasets-rubrics-and-judges) — the metric an optimizer needs.
