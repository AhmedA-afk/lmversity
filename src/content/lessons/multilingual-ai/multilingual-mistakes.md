---
title: "Multilingual AI: Common Mistakes"
track: "multilingual-ai"
status: live
summary: "The eight multilingual mistakes — English-only evals, forced language detection, and the translated test set that proves nothing."
duration: "8 min read"
---

The multilingual mistakes that pass an English eval and fail every real user.

## 1. Evaluating on English only

**The mistake.** The system "supports 50 languages" — verified on the English test set. The Hindi path fails in production and nobody tested it.

**The fix.** Eval per language, on real inputs in each. "Multilingual" is a claim per language, not a launch flag.

## 2. Forcing a language detection

**The mistake.** The input gets classified "English" or "Hindi" — code-mixed input ("I need to check my account balance") forced into one, the other language's part mangled.

**The fix.** Code-mixing is expected input — the pipeline handles mixed text, it doesn't force a choice.

## 3. Translate-process-translate

**The mistake.** Every input translated to English, processed, translated back — errors compound at both ends, and the output reads as translated, not native.

**The fix.** Use native processing where the language is well-supported; reserve translate-sandwich for genuinely low-resource languages where it's the better measured option.

## 4. The translated test set

**The mistake.** The English eval set machine-translated to "test" other languages — it now tests whether the model handles translated text, not native usage.

**The fix.** Native test items per language — written or collected in the language, not translated into it. A translated eval measures translation quality wearing a capability eval's clothes.

## 5. Latin-script assumptions everywhere

**The mistake.** Tokenization, OCR, UI rendering all tuned for Latin script — Devanagari undersegments, Arabic renders wrong, CJK costs triple the tokens nobody budgeted.

**The fix.** Test the pipeline on the actual scripts — tokenization cost, OCR quality, and rendering are per-script properties.

## 6. Cross-lingual retrieval that isn't

**The mistake.** The Hindi query only retrieves Hindi documents — the English corpus is invisible to it, and the answer is thin.

**The fix.** Cross-lingual embeddings or a translation step in retrieval — the query's language shouldn't bound the corpus it can reach.

## 7. One latency/cost model for all languages

**The mistake.** The budget was built on English token costs; CJK and Indic scripts cost more per character, and the per-language cost is a surprise.

**The fix.** Budget per language — tokenization isn't uniform, and neither is the cost.

## 8. Dialect treated as noise

**The mistake.** Regional variants and dialects corrected to the standard — the user's actual phrasing "fixed" into something that reads as formal and foreign.

**The fix.** Dialect is signal — the model should understand it without normalizing it away; eval on real dialect input, not just the standard.

**Related:** [Multilingual cheatsheet](/learn/multilingual-ai/multilingual-cheatsheet), [Code-mixing and code-switching](/learn/multilingual-ai/code-mixing-and-code-switching), [Low-resource language strategies](/learn/multilingual-ai/low-resource-language-strategies)
