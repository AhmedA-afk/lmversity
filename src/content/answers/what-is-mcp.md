---
title: "What is MCP (Model Context Protocol)?"
description: "MCP (Model Context Protocol) is an open standard letting AI applications connect to external tools, data, and prompts via a common client-server interface."
intent: definition
updated: "2026-09-08"
featured: false
faq:
  - q: "Who created MCP?"
    a: "MCP, the Model Context Protocol, was introduced by Anthropic as an open standard and has since been adopted and extended by other companies and tooling in the AI ecosystem. Check modelcontextprotocol.io for the current specification and adopters."
  - q: "Is MCP the same as function calling?"
    a: "No, but they're related. Function calling (tool use) is the model-level capability to call a defined function; MCP is a protocol that standardizes how those tools, along with resources and prompts, are exposed by external servers so any compatible client can discover and use them without custom integration code per tool."
  - q: "Do I need MCP for a simple integration?"
    a: "Not always. If you're wiring one specific function into one specific application you control, a plain function call is simpler and has less overhead. MCP earns its complexity when you want the same tool reusable across multiple clients, or when you're exposing many tools that need consistent discovery and permissions."
  - q: "What's the difference between an MCP tool and an MCP resource?"
    a: "A tool is an action the model can invoke, something with a side effect or a computation, like searching a database. A resource is data the client can read and hand to the model as context, like a file or a document, without the model needing to actively call anything."
related:
  - /learn/mcp
  - /learn/mcp/quick-guide
  - /learn/mcp/mcp-architecture-hosts-clients-servers
  - /learn/mcp/mcp-tools-resources-and-prompts
  - /learn/mcp/first-mcp-server
  - /guides/build-an-mcp-server-in-python
---

The Model Context Protocol (MCP) is an open standard defining how AI applications connect to external tools, data sources, and predefined prompts. Instead of writing custom integration code for every tool, MCP defines a common client-server interface: a server exposes tools, resources, and prompts in a standard way, and any MCP-compatible client (an AI assistant, say) can discover and use them without bespoke glue code.

## The short version

- MCP standardizes the connection between an AI application and the outside world: databases, file systems, APIs, internal company systems.
- It has three roles: a host application (the AI assistant or tool a person uses), a client (the connector inside the host, one per server it talks to), and a server (the program exposing capabilities).
- A server can expose three kinds of primitives: tools (actions the model can invoke), resources (data the client can read and hand to the model), and prompts (reusable, predefined prompt templates a server offers).
- MCP servers communicate over a small number of standard transports, commonly local process communication (stdio) or HTTP, so a client doesn't need custom code per server.
- MCP is not always the right choice: a single hard-coded function call inside an app you fully control is often simpler than standing up a server.
- MCP was introduced as an open standard and has since seen adoption beyond its original creator; check modelcontextprotocol.io for the current specification.

## Host, client, server: the three roles

MCP's architecture separates three concerns cleanly:

**The host** is the AI application the person actually interacts with, a coding assistant, a chat app, an IDE plugin. The host decides which MCP servers to connect to and manages the overall conversation with the model.

**The client** lives inside the host and manages a one-to-one connection to a single MCP server, handling the protocol details: sending requests, receiving responses, and managing the session's lifecycle. A host that connects to five different servers runs five client instances, one per server.

**The server** is a separate program, potentially written by a completely different team, that exposes capabilities: it might wrap a database, a filesystem, a ticketing system, or a search API. The server doesn't need to know anything about which host or model is calling it; it just implements the protocol and responds to requests.

This separation is what makes MCP useful at scale: a team can write one MCP server for their internal ticketing system, and every MCP-compatible AI tool, regardless of vendor, can connect to it without custom integration work. Our [MCP Architecture: Hosts, Clients, Servers](/learn/mcp/mcp-architecture-hosts-clients-servers) lesson covers this in more depth.

## The three primitives: tools, resources, prompts

An MCP server can expose three kinds of things, and the distinction matters:

**Tools** are actions the model can actively invoke, with arguments, that do something or compute something, like "search this database for X" or "create a ticket with these fields." Tools are the closest analog to function calling as most developers already know it.

**Resources** are pieces of data the client can read and provide as context, like a specific file, a document, or a database record. Unlike a tool, a resource isn't something the model decides to call with arguments mid-conversation; it's more like content the host application makes available.

**Prompts** are predefined, reusable prompt templates a server can offer, often for a specific recurring task, so a host application (or a user) can invoke a known-good prompt instead of writing one from scratch every time.

Most of what people build early on with MCP is tools, since that maps directly onto "let the model take an action." Resources and prompts are less commonly used but solve real problems once a server needs to expose more than actions. Our [MCP Tools, Resources, and Prompts](/learn/mcp/mcp-tools-resources-and-prompts) lesson and its accompanying [Primitives Cheatsheet](/learn/mcp/mcp-primitives-cheatsheet) cover when to use each one, and the [Primitives, Worked: The Same Capability as a Tool, a Resource and a Prompt](/learn/mcp/mcp-primitives-worked-example) lesson shows the same underlying capability implemented all three ways so the distinction becomes concrete.

## When a plain function is simpler

MCP adds real value when a tool needs to be reusable across multiple clients or teams, when you're exposing a meaningful number of tools that benefit from standardized discovery, permissions, and versioning, or when you don't control the host application and need a standard way to plug into it. It adds real overhead too: a server process to run, a transport to manage, and protocol details to get right.

If you're wiring one function into one application you fully control, and nobody else will ever call that function through a different tool, a plain function call inside your own code is simpler and has none of that overhead. MCP is infrastructure for reuse and interoperability; it's not automatically better than a direct integration for a one-off case. Our [Building an MCP Server: Common Mistakes](/learn/mcp/mcp-server-common-mistakes) lesson covers this decision along with other pitfalls people hit once they've decided to build a server.

## Where LMVersity fits

LMVersity's [MCP track](/learn/mcp) covers the protocol end to end: architecture, primitives, transports, building your first server, building a client, debugging common failures, auth, and running servers in production, each with a cheatsheet and worked examples. The [Build an MCP Server in Python](/guides/build-an-mcp-server-in-python) guide is the fastest hands-on entry point if you'd rather build something working first and read the concepts as you go. Both are free and self-paced, with no certificate attached.

## Go deeper

- [MCP track](/learn/mcp) — the full track, from architecture through production deployment.
- [MCP in 9 minutes](/learn/mcp/quick-guide) — a fast overview of the whole protocol.
- [MCP Architecture: Hosts, Clients, Servers](/learn/mcp/mcp-architecture-hosts-clients-servers) — the three roles, in depth.
- [MCP Tools, Resources, and Prompts](/learn/mcp/mcp-tools-resources-and-prompts) — the three primitives, compared directly.
- [Build your first MCP server in Python (20 min)](/learn/mcp/first-mcp-server) — the concrete, hands-on starting point.
- [Build an MCP server in Python and connect it to Claude](/guides/build-an-mcp-server-in-python) — a full guide from empty file to working server.

For the current, authoritative protocol specification, see modelcontextprotocol.io directly rather than any secondary summary, since the spec evolves.
