---
title: "Lab: pick a quantization level by measuring the tradeoff"
track: "local-inference"
status: live
summary: "Quantization is a quality/size dial with a name in the filename — this lab runs the same task at two levels and measures the real cost of going smaller."
duration: "8 min read"
sources: ["llamacpp-grammars"]
---

## The short answer

Quantization stores the model's weights at lower precision — a `Q4` model is
roughly a quarter the bytes of its `FP16` original — trading a bit of quality
for a lot of size and speed. The format name in the filename (`Q4_K_M`,
`Q8_0`, `IQ2_XXS`) encodes the level; the *right* level is the largest one
your hardware runs comfortably, and the only way to know whether you can go
smaller is to measure the quality drop on your actual task. This lab does
exactly that.

## The naming scheme, decoded

The `Q` number is the bit-width ballpark: `Q8` ≈ 8 bits/weight, `Q4` ≈ 4,
`Q2` ≈ 2. `_K` variants use a smarter mixed scheme (different parts of the
model at different precisions — the `M`/`S`/`L` suffix is roughly
medium/small/large quality within that level). `IQ` formats push below 4
bits with importance-aware tricks. Arithmetic gives the size floor: bits ×
parameters ÷ 8 — a 7B model at ~4 bits is on the order of 3.5GB before
runtime overhead. Quality doesn't scale linearly with bits, though — which
is why measuring beats guessing.

## The lab: measure the drop on your task

Take one prompt whose ideal output you know — something with a checkable
answer (extract a field, classify a sentence, answer a factual question).
Run it through llama.cpp at two quantization levels:

```bash
./llama-cli -m model-Q8_0.gguf  -p "Extract the year: signed in Paris in 1919." --temp 0
./llama-cli -m model-Q4_K_M.gguf -p "Extract the year: signed in Paris in 1919." --temp 0
```

`--temp 0` makes it deterministic so the only variable is the quantization.
Record three things per run: tokens/second (printed at the end), file size,
and whether the answer is *right* — not "similar", right. That last column is
the one spec sheets never give you for your workload.

## Reading the result

What you'll typically find: `Q8` is near-lossless and big; `Q4_K_M` is the
usual sweet spot — meaningfully smaller, quality drop you have to look for;
`Q2`-family is where the drop becomes obvious on harder tasks and only pays
when memory is the binding constraint. The important part is *on harder
tasks* — a simple extraction won't show a difference a hard reasoning prompt
will. Run two or three task difficulties before concluding.

## The rule this produces

Pick the largest quantization that fits comfortably — memory headroom
matters, because KV-cache and context grow on top of the weights. Drop a
level only when the measured quality cost is acceptable *on your task*, not
because a chart said `Q4` is fine. If two levels both pass, take the smaller
one — the memory buys you context.

## Go deeper

- [llama.cpp: build, quantize, and serve](/learn/local-inference/llama-cpp-build-quantize-serve) — the runtime this runs under.
- [Quantization GGUF, AWQ, GPTQ](/learn/fine-tuning/quantization-gguf-awq-gptq) — the formats compared at the algorithm level.
- [Hardware sizing by measurement](/learn/local-inference/hardware-sizing-measurement-guide) — feeding the tok/s data into a capacity decision.
