---
title: "Building for Indic scripts, fonts, and segmentation"
track: "genai-app-dev"
status: live
summary: "The engineering concerns English-first pipelines miss: Indic script rendering, grapheme-aware text handling, segmentation and tokenization differences, and moderation coverage across 22 languages."
duration: "10 min read"
---

## The English-default bugs

Most text infrastructure was built assuming English. Indic languages break those assumptions in specific, repeatable places — none exotic, all real:

**Rendering is shaping, not glyph lookup.** Devanagari conjuncts (क्ष, त्र, ज्ञ), Tamil ligatures, vowel signs that reorder visually, Urdu's Nastaliq slant — correct rendering needs proper text shaping (HarfBuzz-class), not just a font that has the characters. Symptoms of broken shaping: disjointed letters, misplaced vowel marks, boxes (tofu) where conjuncts should be. If your pipeline ships text to PDFs, images, or canvas, test the shaping path — it's a different failure than the font simply missing glyphs.

**"Character" is ambiguous — count graphemes.** A Devanagari syllable is a cluster: base consonant + combining marks + virama + more consonants. `len()`, `substring()`, cursor math, truncation, and character limits that count code points (or UTF-16 units) split clusters mid-syllable — producing broken text *and* sometimes invalid sequences. Use grapheme-cluster-aware segmentation (ICU, `Intl.Segmenter`, regex `\X`) anywhere you split, truncate, or count user-visible characters.

**Tokenization isn't language-neutral.** Indic text typically costs more tokens per word than English — the same sentence in Hindi can use several times the tokens, and some tokenizers handle Indic scripts far worse than others. Consequences: shorter effective context windows, higher cost per document, chunking that splits mid-word. Measure token inflation on your languages before sizing context budgets.

**Sorting, search, and comparison need locale awareness.** Collation order, case-folding (moot for most Indic scripts), normalization (NFC/NFKC distinctions matter for Indic combining sequences), and full-text search analyzers all have per-language answers. A database that sorts English correctly may order Hindi nonsensically; a search analyzer tuned for English stems nothing useful in Tamil.

## Moderation across languages

Safety coverage is asymmetric by default — moderation models and blocklists are trained mostly on English. The gaps:

- **Slurs and abuse in-language.** English-tuned filters miss Indic-language abuse entirely, including romanized spellings ("gali" typed in Latin script) that users actually type.
- **Code-mixed evasion.** Adversaries mix scripts specifically to evade filters — "English + Hindi in one message" is both a normal speech pattern *and* a known bypass.
- **Cultural context.** What's sensitive differs: political, religious, and caste-related sensitivities in Indian contexts don't map to English-moderation categories one-to-one.
- **Test it like a feature.** Probe your moderation layer per language and per script — the [multilingual eval design](/learn/evals-red-teaming/multilingual-evaluation-design) lesson covers the methodology; treat "moderation works in Hindi/Tamil/Bengali" as claims to verify, not assume.

## Accessibility considerations

- **Screen readers and Indic TTS.** Correct lang attributes (`lang="hi"`) are what switch assistive tech to the right speech engine — unlabeled Indic text gets read as gibberish by English TTS.
- **Font fallbacks.** Ship proper font stacks; missing Indic glyphs render as tofu boxes, and users blame the content, not the CSS.
- **Input methods.** Users type Indic text via transliteration keyboards, inscript layouts, and IMEs — validate on the composed output, and don't assume input equals what a Latin keyboard produces.
- **Reading direction is the same, bidirectionality isn't.** Indic scripts are LTR like English, but Urdu/Arabic-script inputs (RTL) inside Indic-language products create bidi-rendering cases — mixed-direction strings need bidi handling, not just fonts.

## The checklist in practice

For any feature shipping Indic-language support: test grapheme-safe truncation, verify script rendering in PDF/image output paths, measure token inflation on real text, check response-language correctness, probe moderation per language, label `lang` attributes, and include code-mixed inputs in the test corpus. None of these are optional refinements — they're the difference between "supports Hindi" as a claim and "supports Hindi" as a fact.

## Go deeper

- [Indic-language pipeline lab](/learn/genai-app-dev/indic-language-pipeline-lab) — build the speech+translation pipeline this supports.
- [Multilingual evaluation design](/learn/evals-red-teaming/multilingual-evaluation-design) — score per language, code-mix as a category.
- [AI4Bharat](/providers/ai4bharat) — IndicNLP tooling for tokenization, transliteration, and script handling.
- [Using AI across languages](/learn/ai-literacy/ai-across-languages-and-accessibility) — the user-facing side of the same problems.
