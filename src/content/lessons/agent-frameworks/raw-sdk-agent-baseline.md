---
title: "The raw-SDK baseline every framework wraps"
track: "agent-frameworks"
status: live
summary: "Every agent framework is plumbing around one loop — messages in, tool calls out, execute, repeat — so learn the loop in raw SDK code before learning anyone's abstraction over it."
duration: "8 min read"
---

## The short answer

Before any framework: an agent is a `while` loop around a provider SDK call.
The loop feeds the model a messages array plus a tools schema; when the
model returns `tool_calls` your code executes them, appends results, and
calls again; when it returns plain text you're done. Everything a framework
adds — graphs, sessions, guardrails, handoffs — is plumbing around that
loop. Learn the loop first and frameworks become *evaluations of tradeoffs*
instead of magic you inherit.

## The loop in raw code

```python
messages = [{"role": "user", "content": task}]
while True:
    resp = client.chat.completions.create(
        model=MODEL, messages=messages, tools=TOOLS)
    msg = resp.choices[0].message
    messages.append(msg)
    if not msg.tool_calls:
        return msg.content                      # done
    for call in msg.tool_calls:
        result = dispatch(call.function.name,    # your code runs the tool
                          json.loads(call.function.arguments))
        messages.append({"role": "tool",
                         "tool_call_id": call.id,
                         "content": str(result)})
```

That's the whole contract — the same one in
[the tool-call loop](/learn/agentic-ai/the-agent-loop) and
[tool calling across providers](/learn/tools-function-calling/tool-calling-across-providers).
Every framework lesson in this track shows this loop first, then what the
framework adds on top.

## What the loop already gives you

- **Total control flow clarity** — you can read exactly what happens, in
  what order, with what data. Debugging is `print(messages)`.
- **Zero dependencies** beyond the SDK — no framework version to pin, no
  abstraction leaks to learn, no docs to mismatch.
- **Explicit state** — `messages` *is* the state. Persisting it is
  serializing a list; truncating it is your call.

## What the loop doesn't give you

The gaps are real and they're exactly the features frameworks sell:

- **Guardrails** — validating inputs before the model sees them and outputs
  before the user does. In raw code it's another `if`; in frameworks it's a
  first-class hook.
- **Multi-agent structure** — handoffs, sub-agents, parallel workers. Raw
  code grows these as nested functions and shared state, which gets brittle
  fast.
- **Durable execution** — surviving process death mid-loop, resuming from a
  checkpoint, human interrupts. Rolling this yourself is a project, not a
  feature.
- **Observability** — tracing every call/tool/decision for evals. Frameworks
  emit it; raw code needs you to log deliberately.

## When plain code is enough

This is the question every lesson in this track answers for its framework —
here's the baseline answer: **plain code is enough** when the loop is
single-agent, the tool set is small and stable, runs are short-lived (a
failed run just restarts), and you can trace by logging. That covers a
large share of production agents. Reach for a framework when a named gap
above is *your* gap — not because the framework exists.

## The exercise

Write the loop above against your provider of choice with two tools, then
run it — every framework lesson after this one is a diff against this file.

## Go deeper

- [The agent loop](/learn/agentic-ai/the-agent-loop) — the anatomy in detail.
- [When not to use an agent](/learn/agentic-ai/when-not-to-use-an-agent) — the prior question.
- [Agents vs workflows](/learn/agentic-ai/agents-vs-workflows) — where orchestration starts.
- [Tool calling across providers](/learn/tools-function-calling/tool-calling-across-providers) — the provider-side mechanics.
