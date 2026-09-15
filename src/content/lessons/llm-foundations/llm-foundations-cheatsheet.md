---
title: "LLM Foundations Cheatsheet"
track: "llm-foundations"
status: live
summary: "The model-side vocabulary and decision table — tokens, context, sampling, and which failure belongs to which layer."
duration: "6 min read"
---

The LLM-foundations concepts compressed to the card you keep open — which term explains which behavior, and which lesson covers it.

## The pipeline in one line each

- **Tokenizer** — text → token IDs; the boundary where "the model can't count" bugs are born.
- **Embedding** — token ID → vector; position in space encodes meaning.
- **Transformer blocks** — attention + feed-forward; where the actual computation happens.
- **LM head** — vector → probability distribution over the vocabulary.
- **Sampling** — distribution → one token; the only stochastic step in the loop.

## Which failure belongs to which layer

| Symptom | Likely layer | The check |
|---|---|---|
| Can't count, spell, or handle non-English | Tokenizer | Look at the tokenization of the failing input |
| Confident wrong answer | Sampling / training objective | Fluency is the objective — truth isn't |
| Output stops mid-thought | max_tokens / context window | Check the finish reason, not the text |
| Same prompt, different output | Temperature > 0 | Set temperature 0 for reproducibility |
| Forgets the start of a long chat | Context window | What actually fit in the window this turn? |

## Sampling parameters in one line each

- **Temperature** — reshapes the distribution; 0 = argmax, higher = flatter.
- **Top-p (nucleus)** — samples from the smallest set covering p of the probability mass.
- **Top-k** — samples from the k most likely tokens only.
- **Frequency / presence penalty** — pushes down tokens already used, to reduce repetition.
- **max_tokens** — a hard output budget, not a target.

## The four things to not confuse

- **Context window ≠ memory.** The window is per-request; nothing persists unless you send it again.
- **Tokens ≠ words.** A token is ~3/4 of an English word on average — and very different in code, CJK, and rare strings.
- **Perplexity ≠ quality.** Lower perplexity means better next-token prediction, not better answers.
- **A bigger model ≠ a better fit.** Capability, latency, and cost trade off — the right size is the smallest that passes your eval.

## Which lesson for which question

- "What is a token?" → [Tokenization worked example](/learn/llm-foundations/cross-entropy-and-perplexity-worked)
- "Why does temperature matter?" → [Sampling temperature and top-p](/learn/llm-foundations/sampling-temperature-top-p)
- "What is the context window?" → [Context window mechanics](/learn/llm-foundations/context-window-mechanics)

**Related:** [LLM foundations practice](/practice/llm-foundations), [AI foundations cheatsheet](/learn/ai-foundations/model-selection-cheatsheet)
