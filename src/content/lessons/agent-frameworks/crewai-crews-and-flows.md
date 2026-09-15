---
title: "CrewAI: role-based crews with deterministic flows"
track: "agent-frameworks"
status: live
summary: "CrewAI designs multi-agent systems as crews — agents with roles, goals, and backstories executing tasks under a process — with Flows adding deterministic, event-driven control around them."
duration: "7 min read"
sources: ["crewai-docs"]
---

## The short answer

CrewAI's design metaphor is organizational: an `Agent` has a **role, goal,
and backstory**; a `Task` assigns work to an agent; a `Crew` runs the set
under a **process** (sequential or hierarchical with a manager agent);
and `Flow` adds event-driven, state-machine control for the parts that
shouldn't be improvised. The bet: business-shaped multi-agent systems are
easier to design as "who does what" than as graphs of functions — the
framework is deliberately higher-level than the others in this track.

## The vocabulary

```python
researcher = Agent(role="Researcher", goal="Find grounded facts",
                   backstory="Ex-analyst; cites sources or says nothing.",
                   tools=[search])
writer = Agent(role="Writer", goal="Readable reports", ...)

task1 = Task(description="Research {topic}", agent=researcher,
             expected_output="5 sourced bullets")
task2 = Task(description="Write the brief", agent=writer)

crew = Crew(agents=[researcher, writer], tasks=[task1, task2],
            process=Process.sequential)
crew.kickoff(inputs={"topic": "..."})
```

- **Agent** — persona-first: role/goal/backstory shape the system prompt;
  tools and memory attach per-agent.
- **Task** — a unit of work with `description` (templated) and
  `expected_output`; tasks can require structured output.
- **Crew + process** — `sequential` runs tasks in order; `hierarchical`
  puts a manager agent in charge of delegation — a concrete take on
  [hierarchical decomposition](/learn/agentic-ai/hierarchical-task-decomposition).
- **Flow** — event-driven control around crews: `@start`/`@listen` methods
  over shared state, so deterministic branching and human gates live in
  code while crews handle the open-ended middle.

## What it adds over the raw loop

A design language and the scaffolding to match. The
[raw baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) leaves
persona-design and task-routing to you; CrewAI makes them the API surface,
which is why it's popular for non-engineering-heavy teams prototyping
multi-agent workflows. Flows answer the "but where's the deterministic
part" question — orchestration stays in code.

## When plain code is enough

Plain code wins when there's one agent — a "crew of one" is the raw loop
with extra vocabulary — and when you need fine-grained control over the
loop internals (CrewAI's abstraction sits further from the model calls
than most). Reach for it when the *team metaphor is the right design
tool* — clearly separable responsibilities handed between specialist
agents — and you want to prototype that division of labor quickly.
For production-grade durability and control flow, check whether CrewAI's
own Flows cover the need or whether
[LangGraph](/learn/agent-frameworks/langgraph-durable-agents)'s checkpoints
are the better foundation.

## The exercise

Define a two-agent crew (researcher → writer) and run it; then implement
the same handoff in raw SDK calls. The gap between "15 lines of persona
config" and "a hand-rolled delegation" is what the framework sells.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — the loop crews delegate over.
- [Hierarchical task decomposition](/learn/agentic-ai/hierarchical-task-decomposition) — what hierarchical crews implement.
- [Google ADK: workflow agents](/learn/agent-frameworks/google-adk) — a different answer to explicit multi-agent structure.
