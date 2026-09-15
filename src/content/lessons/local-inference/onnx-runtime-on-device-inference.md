---
title: "ONNX Runtime: inference that embeds in the app"
track: "local-inference"
status: live
summary: "ONNX Runtime runs exported models inside applications across platforms — execution providers route work to whatever accelerator the device has, from CUDA to CoreML to WebGPU."
duration: "8 min read"
sources: ["onnxruntime-docs"]
---

## The short answer

ONNX Runtime is a cross-platform inference engine for models exported to
the **ONNX format** — a vendor-neutral graph representation. Everything else
in this track runs *models as a service* (a server you call); ONNX Runtime
runs *models inside your process*: a .NET desktop app, a mobile app, a
browser tab via `onnxruntime-web`, an edge device. The mechanism that makes
one engine cover that range is **execution providers** — pluggable backends
that route graph operations to the device's accelerator.

## The two-step shape

1. **Get an ONNX model.** Export from PyTorch/TensorFlow/scikit-learn, or
   pull a pre-exported one. The format freezes the computation graph —
   weights plus operator sequence — into a portable file.
2. **Run it in an `InferenceSession`.** One API surface across Python, C#,
   C++, Java, JavaScript:

```python
import onnxruntime as ort

session = ort.InferenceSession("model.onnx")
outputs = session.run(None, {"input": inputs})
```

## Execution providers are the real story

The same `.onnx` file runs on a CUDA GPU, Apple CoreML, Windows DirectML,
Qualcomm's NPU (QNN), Android NNAPI, Intel OpenVINO, or in-browser WebGPU —
the execution provider decides which ops go where, with CPU as the
universal fallback. That indirection is the pitch: write the inference
code once, and the provider layer maps it onto whatever silicon the
deployment target actually has. It's also the catch — performance and
numerics can differ per provider, so "works on my GPU" doesn't guarantee
identical behavior on a phone's NPU. Test on the target provider, not just
the target model.

## Where it sits against the rest of this track

- **Pick ONNX Runtime when** the model must ship inside an application —
  mobile, desktop, browser, edge — or when the deployment environment is
  heterogeneous Windows/enterprise hardware. The ONNX Runtime docs also
  list a generative-AI API for running LLMs through the same engine.
- **Pick llama.cpp/Ollama/vLLM when** you want an LLM *server* — ONNX
  Runtime's strength is embedding inference, not serving chat APIs.
- **Quantization applies here too** — ONNX has its own quantization tooling
  (dynamic/static quantization to int8), and the same rule holds:
  [measure the tradeoff](/learn/local-inference/quantization-formats-and-tradeoffs-lab)
  on your model and your provider.

## The honest limits

Export isn't free. Not every model converts cleanly — custom ops, dynamic
control flow, and tokenizer logic often live outside the ONNX graph and
need host-side handling. For mainstream architectures it's routine; for
unusual ones, budget debugging time. And an ONNX file from an untrusted
source is still an artifact to inspect before running — the runtime's own
docs say as much.

## The exercise

Take a small exported model, run it under the CPU provider, then under an
accelerated provider available on your machine — compare latency *and*
outputs. The exercise is noticing that "same model, different provider" is
a real variable.

## Go deeper

- [What 'running a model locally' actually means](/learn/local-inference/what-local-inference-actually-means) — where on-device inference sits in the taxonomy.
- [Hardware sizing by measurement](/learn/local-inference/hardware-sizing-measurement-guide) — provider choice is a hardware-utilization choice.
- [The local privacy boundary](/learn/local-inference/the-local-privacy-boundary) — embedded inference is the strongest local claim there is.
