// AUTO-GENERATED role learning paths. `path` items are "trackId/slug" concept refs.
export interface RoleBranch { label: string; refs: string[]; }
export interface RoleProject { ref: string; note: string; }
export interface RoleCredential { name: string; org: string; note: string; }
export interface Role {
  id: string; name: string; blurb: string; description: string; path: string[];
  prereq?: string;
  branches?: RoleBranch[];
  projects?: RoleProject[];
  interview?: string[];
  practice?: string[];
  credentials?: RoleCredential[];
  evidence?: string[];
}
export const roles: Role[] = [
  {
    "id": "developer",
    "name": "Developer",
    "blurb": "Ship AI features that survive production, not just demos.",
    "description": "For software engineers adding LLM features to real apps. Runs from a working mental model of what models do, through prompting, structured output, and tool calling, out to shipping and operating a feature under real load.",
    "path": [
      "ai-foundations/how-llms-work",
      "ai-foundations/what-llms-can-and-cannot-do",
      "prompt-engineering/system-vs-user-prompts",
      "genai-app-dev/anatomy-of-a-genai-feature",
      "structured-outputs/why-structured-output",
      "tools-function-calling/what-is-tool-calling",
      "genai-app-dev/streaming-responses-to-the-ui",
      "genai-app-dev/rate-limits-and-retry-strategies",
      "genai-app-dev/shipping-your-first-end-to-end-app",
      "production/feature-flags-and-kill-switches",
      "genai-app-dev/capstone-ship-a-genai-assistant"
    ],
    "prereq": "You read and write code in at least one language and have shipped something — a feature, a script, a side project. No ML background assumed.",
    "branches": [
      { "label": "Self-hosting models", "refs": ["local-inference"] },
      { "label": "Building agent systems", "refs": ["agent-frameworks", "harness-design"] },
      { "label": "Working with coding agents", "refs": ["cli-agents"] }
    ],
    "projects": [
      { "ref": "genai-app-dev/capstone-ship-a-genai-assistant", "note": "End-to-end shipped feature with tests, flags, and observability" },
      { "ref": "tools-function-calling/file-and-external-action-tools-lab", "note": "Tool layer with a real permission boundary" },
      { "ref": "genai-app-dev/realtime-voice-agent-project", "note": "Streaming pipeline with a measured latency budget" }
    ],
    "interview": ["agents", "ai-system-design", "prompt-engineering"],
    "practice": ["prompt-engineering", "agents"],
    "credentials": [
      { "name": "Short courses on LLM engineering topics", "org": "DeepLearning.AI", "note": "Free/paid mix; useful for structured deep dives" },
      { "name": "AI Engineer Associate (AI-102)", "org": "Microsoft Azure", "note": "Azure-centric; useful if your shop is on Azure" },
      { "name": "AI Practitioner", "org": "AWS", "note": "Entry-level cloud AI cert; signal for AWS-heavy roles" }
    ],
    "evidence": [
      "A shipped AI feature with structured logging, eval checks, and a kill switch you can demo live",
      "A tool-using agent where permissions are explicit and injected input can't act",
      "A latency/cost dashboard or report you produced for a real workload"
    ]
  },
  {
    "id": "ml-engineer",
    "name": "ML Engineer",
    "blurb": "Go under the hood: train, fine-tune, and serve models efficiently.",
    "description": "For ML engineers who need the internals, not just the API. Covers the maths and architecture that make transformers work, then the full decision path from fine-tuning through evaluation and cost tracking.",
    "path": [
      "maths-foundations/gradient-descent-intuition",
      "ai-foundations/ai-vs-ml-vs-deep-learning",
      "llm-foundations/next-token-prediction",
      "llm-foundations/the-transformer-architecture",
      "llm-foundations/attention-mechanism-explained",
      "fine-tuning/fine-tune-vs-prompt-vs-rag",
      "fine-tuning/building-a-fine-tuning-dataset",
      "fine-tuning/lora-and-qlora-fine-tuning",
      "evals-red-teaming/building-a-golden-dataset",
      "production/token-and-cost-tracking",
      "machine-learning/ml-615-lab-release-a-model-with-a-kill-switch"
    ],
    "prereq": "Python plus working linear algebra and probability — enough to follow a gradient derivation and a Bayes calculation without stopping.",
    "branches": [
      { "label": "Deep learning internals", "refs": ["deep-learning"] },
      { "label": "Running models yourself", "refs": ["local-inference"] },
      { "label": "Agent-shaped ML systems", "refs": ["agent-frameworks"] }
    ],
    "projects": [
      { "ref": "machine-learning/ml-615-lab-release-a-model-with-a-kill-switch", "note": "Release with rollback designed in" },
      { "ref": "fine-tuning/pinning-your-training-stack-lab", "note": "Reproducible training stack with run logs and a smoke test" },
      { "ref": "machine-learning/ml-foundations-capstone", "note": "Classical ML end-to-end defense" }
    ],
    "interview": ["llm-basics", "evals", "ai-system-design"],
    "practice": ["evals"],
    "credentials": [
      { "name": "Professional Machine Learning Engineer", "org": "Google Cloud", "note": "Substantial; GCP-weighted" },
      { "name": "Machine Learning Engineer – Associate", "org": "AWS", "note": "AWS-weighted; current AWS ML cert tier" },
      { "name": "Practical Deep Learning for Coders", "org": "fast.ai", "note": "Free course, not a cert — strong practical signal" }
    ],
    "evidence": [
      "A fine-tuned adapter with a run log, dataset provenance, and eval numbers vs the base model",
      "A model release with a documented rollback path you exercised",
      "A serving benchmark: latency/throughput at a stated batch and quantization"
    ]
  },
  {
    "id": "data-scientist",
    "name": "Data Scientist",
    "blurb": "Turn LLMs into reliable tools for data work.",
    "description": "For data scientists using LLMs for extraction, classification, and analysis. Emphasizes embeddings, structured outputs, and retrieval, plus measuring quality rather than trusting vibes.",
    "path": [
      "ai-foundations/how-llms-work",
      "maths-foundations/what-is-a-vector",
      "maths-foundations/cosine-similarity",
      "rag/embeddings-and-semantic-similarity",
      "structured-outputs/why-structured-output",
      "structured-outputs/json-schema-for-outputs",
      "rag/what-is-rag-and-when-to-use-it",
      "evals-red-teaming/why-evals-matter",
      "evals-red-teaming/building-a-golden-dataset",
      "hallucinations/why-models-hallucinate",
      "rag/rag-capstone-support-bot"
    ],
    "prereq": "SQL and a notebook workflow, plus enough statistics to read a confusion matrix and a confidence interval.",
    "branches": [
      { "label": "Data plumbing for AI", "refs": ["python-data-apis"] },
      { "label": "Classical ML depth", "refs": ["machine-learning"] },
      { "label": "Structured extraction at scale", "refs": ["structured-outputs"] }
    ],
    "projects": [
      { "ref": "rag/rag-capstone-support-bot", "note": "Grounded QA over a document set with faithfulness measured" },
      { "ref": "python-data-apis/messy-data-to-llm-pipeline-capstone", "note": "Messy inputs to model-ready pipeline" },
      { "ref": "tools-function-calling/building-a-web-search-tool-lab", "note": "A retrieval tool with shaped, dated results" }
    ],
    "interview": ["rag", "evals", "llm-basics"],
    "practice": ["rag", "evals"],
    "credentials": [
      { "name": "Azure Data Scientist Associate (DP-100)", "org": "Microsoft Azure", "note": "Azure-weighted data science cert" },
      { "name": "Specializations in ML/data topics", "org": "DeepLearning.AI", "note": "Course sequences, not certs — good structured depth" }
    ],
    "evidence": [
      "An extraction or classification pipeline with measured precision/recall vs a baseline",
      "A RAG system with retrieval and faithfulness evals you can show failing and passing",
      "A documented decision where a simpler model beat an LLM on cost or calibration"
    ]
  },
  {
    "id": "product-manager",
    "name": "Product Manager",
    "blurb": "Make sound calls on what to build with AI and what to avoid.",
    "description": "For PMs shaping AI features. Builds a grounded sense of what models can and can't do, what they cost, and where reliability, retrieval, and evals fit into a shipping plan.",
    "path": [
      "ai-foundations/how-llms-work",
      "ai-foundations/what-llms-can-and-cannot-do",
      "ai-foundations/tokens-context-cost",
      "ai-foundations/choosing-a-model",
      "hallucinations/why-models-hallucinate",
      "agentic-ai/when-not-to-use-an-agent",
      "rag/what-is-rag-and-when-to-use-it",
      "evals-red-teaming/why-evals-matter",
      "production/feature-flags-and-kill-switches",
      "ai-literacy/deciding-when-and-which-ai-quiz"
    ],
    "prereq": "No code required. You should be able to read a product demo and ask \"what happens when it's wrong?\"",
    "branches": [
      { "label": "Deeper on measurement", "refs": ["evals-red-teaming"] },
      { "label": "Risk and responsible-AI review", "refs": ["responsible-ai"] },
      { "label": "Hands-on AI workflows", "refs": ["ai-literacy"] }
    ],
    "projects": [
      { "ref": "ai-foundations/choosing-an-ai-approach-system-selection", "note": "The rules-vs-ML-vs-agent selection discipline applied to real cases" },
      { "ref": "ai-literacy/first-ai-workflow-capstone", "note": "One AI workflow run end to end, so estimates come from contact" }
    ],
    "interview": ["llm-basics", "evals"],
    "practice": ["ai-foundations"],
    "credentials": [
      { "name": "AI for Everyone", "org": "DeepLearning.AI", "note": "Non-technical survey course by Andrew Ng" }
    ],
    "evidence": [
      "A PRD that includes eval criteria, failure modes, and a fallback path — not just the happy-path feature",
      "A model/vendor comparison memo with cost and reliability numbers behind the recommendation",
      "A ship/no-ship decision you defended with evidence"
    ]
  },
  {
    "id": "founder",
    "name": "Founder",
    "blurb": "Go from idea to a shipped, defensible AI product.",
    "description": "For founders building AI-native products. Balances a fast build path with the cost, reliability, and evaluation decisions that determine whether the thing survives contact with real users.",
    "path": [
      "ai-foundations/what-llms-can-and-cannot-do",
      "ai-foundations/choosing-a-model",
      "ai-foundations/tokens-context-cost",
      "genai-app-dev/anatomy-of-a-genai-feature",
      "rag/what-is-rag-and-when-to-use-it",
      "fine-tuning/fine-tune-vs-prompt-vs-rag",
      "genai-app-dev/shipping-your-first-end-to-end-app",
      "evals-red-teaming/why-evals-matter",
      "production/token-and-cost-tracking",
      "production/feature-flags-and-kill-switches",
      "genai-app-dev/capstone-ship-a-genai-assistant"
    ],
    "prereq": "No technical background required for the early steps; the build path assumes you'll pair the lessons with real implementation work (yours or a teammate's).",
    "branches": [
      { "label": "Build the MVP yourself", "refs": ["genai-app-dev"] },
      { "label": "Keep costs and reliability visible", "refs": ["production"] },
      { "label": "AI workflows for the whole team", "refs": ["ai-literacy"] }
    ],
    "projects": [
      { "ref": "genai-app-dev/capstone-ship-a-genai-assistant", "note": "The MVP path — ship the smallest real thing" },
      { "ref": "ai-foundations/choosing-an-ai-approach-system-selection", "note": "Avoid building an agent where a rules engine wins" }
    ],
    "interview": ["llm-basics", "ai-system-design"],
    "practice": ["ai-foundations"],
    "credentials": [],
    "evidence": [
      "A working product demo that survives a skeptical user, not a video of a happy path",
      "A per-user cost model with the margin math shown",
      "An eval gate you'd run before each release — written down"
    ]
  },
  {
    "id": "ceo",
    "name": "CEO",
    "blurb": "Understand AI deeply enough to steer strategy, not just slides.",
    "description": "For executives who need a real mental model, not hype. Focuses on capabilities, limits, cost structure, and the risk and reliability questions that shape company-level bets.",
    "path": [
      "ai-foundations/ai-vs-ml-vs-deep-learning",
      "ai-foundations/how-llms-work",
      "ai-foundations/what-llms-can-and-cannot-do",
      "ai-foundations/tokens-context-cost",
      "hallucinations/why-models-hallucinate",
      "agentic-ai/what-is-an-agent",
      "evals-red-teaming/why-evals-matter",
      "production/feature-flags-and-kill-switches",
      "ai-literacy/cost-and-limits-quiz"
    ],
    "prereq": "None. Every lesson here assumes a business reader, not a technical one.",
    "branches": [
      { "label": "Full AI literacy", "refs": ["ai-literacy"] },
      { "label": "Governance and risk review", "refs": ["responsible-ai"] },
      { "label": "What the numbers mean", "refs": ["evals-red-teaming"] }
    ],
    "projects": [
      { "ref": "ai-literacy/first-ai-workflow-capstone", "note": "One real task run end to end — the fastest way to calibrate what AI does" },
      { "ref": "ai-literacy/run-a-real-task-end-to-end-with-verification", "note": "Verification habits that scale to an org policy" }
    ],
    "interview": ["llm-basics"],
    "practice": ["ai-foundations"],
    "credentials": [
      { "name": "AI for Everyone", "org": "DeepLearning.AI", "note": "Executive-friendly survey course" }
    ],
    "evidence": [
      "An AI use policy your org actually follows — what may be built, bought, and what needs review",
      "A vendor-evaluation rubric used on a real procurement decision",
      "A one-page AI risk summary you could defend to a board"
    ]
  },
  {
    "id": "designer",
    "name": "Designer",
    "blurb": "Design AI interactions that feel trustworthy, not magical or broken.",
    "description": "For product and UX designers working on AI features. Covers how models behave, why they fail, and the interaction patterns — streaming, uncertainty, structure — that make an AI feature feel reliable.",
    "path": [
      "ai-foundations/how-llms-work",
      "ai-foundations/what-llms-can-and-cannot-do",
      "hallucinations/why-models-hallucinate",
      "genai-app-dev/designing-chat-ux",
      "genai-app-dev/streaming-responses-to-the-ui",
      "hallucinations/teaching-models-to-say-i-dont-know",
      "prompt-engineering/system-vs-user-prompts",
      "agentic-ai/when-not-to-use-an-agent",
      "ai-literacy/judging-and-verifying-quiz"
    ],
    "prereq": "None beyond your design practice — no code assumed.",
    "branches": [
      { "label": "Everyday AI workflows", "refs": ["ai-literacy"] },
      { "label": "How AI features behave", "refs": ["genai-app-dev"] },
      { "label": "Where AI gets things wrong", "refs": ["hallucinations"] }
    ],
    "projects": [
      { "ref": "ai-literacy/seven-first-ai-workflows-lab", "note": "Hands-on reps across the workflows you'll design for" },
      { "ref": "genai-app-dev/realtime-voice-agent-project", "note": "What a streaming conversational surface demands of UX" }
    ],
    "interview": ["llm-basics"],
    "practice": ["ai-foundations", "prompt-engineering"],
    "credentials": [],
    "evidence": [
      "An AI-feature design spec covering latency, uncertainty, and failure states — not just the ideal flow",
      "A designed pattern for showing AI confidence/citations to users",
      "An accessibility-checked conversational flow"
    ]
  },
  {
    "id": "content-creator",
    "name": "Content Creator",
    "blurb": "Get consistent, high-quality output from models for creative work.",
    "description": "For writers and creators using LLMs day to day. Focuses on reliable prompting techniques, controlling tone and structure, and grounding output so the model stops fabricating.",
    "path": [
      "ai-foundations/how-llms-work",
      "ai-foundations/tokens-context-cost",
      "prompt-engineering/answer-first-prompting",
      "prompt-engineering/system-vs-user-prompts",
      "prompt-engineering/few-shot-prompting",
      "prompt-engineering/chain-of-thought-prompting",
      "hallucinations/why-models-hallucinate",
      "hallucinations/grounding-with-source-documents",
      "ai-literacy/prompting-quiz"
    ],
    "prereq": "None.",
    "branches": [
      { "label": "Prompting depth", "refs": ["prompt-engineering"] },
      { "label": "Verification and hallucination", "refs": ["hallucinations"] }
    ],
    "projects": [
      { "ref": "ai-literacy/seven-first-ai-workflows-lab", "note": "Research, drafting, editing, and review workflows hands-on" },
      { "ref": "ai-literacy/first-ai-workflow-capstone", "note": "One workflow tuned into something you'd actually reuse" }
    ],
    "interview": ["llm-basics"],
    "practice": ["prompt-engineering"],
    "credentials": [],
    "evidence": [
      "A documented workflow — prompt, steps, verification pass — that a teammate could follow",
      "A verification checklist you actually apply to AI-assisted drafts",
      "A measured before/after on a real piece of work"
    ]
  },
  {
    "id": "marketer",
    "name": "Marketer",
    "blurb": "Apply AI across content, research, and campaigns without getting burned.",
    "description": "For marketers embedding AI in their workflow. Combines practical prompting and grounding with an honest read on hallucination risk and what to verify before anything ships.",
    "path": [
      "ai-foundations/how-llms-work",
      "ai-foundations/what-llms-can-and-cannot-do",
      "prompt-engineering/system-vs-user-prompts",
      "prompt-engineering/few-shot-prompting",
      "prompt-engineering/answer-first-prompting",
      "hallucinations/why-models-hallucinate",
      "hallucinations/grounding-with-source-documents",
      "rag/what-is-rag-and-when-to-use-it",
      "ai-literacy/prompting-quiz"
    ],
    "prereq": "None.",
    "branches": [
      { "label": "Prompting depth", "refs": ["prompt-engineering"] },
      { "label": "Verification and brand safety", "refs": ["hallucinations"] }
    ],
    "projects": [
      { "ref": "ai-literacy/seven-first-ai-workflows-lab", "note": "Research, drafting, and review reps" },
      { "ref": "ai-literacy/first-ai-workflow-capstone", "note": "A repeatable workflow for a real recurring task" }
    ],
    "interview": ["llm-basics"],
    "practice": ["prompt-engineering"],
    "credentials": [],
    "evidence": [
      "A repeatable content workflow with the review step built in, not bolted on",
      "A brand-safety checklist for AI output used on a live campaign",
      "A quality comparison: AI-assisted vs previous baseline, scored on your criteria"
    ]
  },
  {
    "id": "security-engineer",
    "name": "Security Engineer",
    "blurb": "Find and fix the ways AI systems and agents get broken.",
    "description": "For security engineers responsible for AI systems. Covers the agent and harness attack surface, prompt injection, policy enforcement, and monitoring untrusted input in production.",
    "path": [
      "ai-foundations/how-llms-work",
      "tools-function-calling/what-is-tool-calling",
      "agentic-ai/what-is-an-agent",
      "harness-design/deny-floors-and-policy-layers",
      "harness-design/permission-and-approval-systems",
      "evals-red-teaming/prompt-injection-basics",
      "mcp/what-is-mcp",
      "production/structured-logging-for-llm-calls",
      "production/feature-flags-and-kill-switches",
      "responsible-ai/adversarial-testing-lab"
    ],
    "prereq": "Security fundamentals — authentication vs authorization, basic threat modeling, and how injection classes of bugs work. No ML background needed.",
    "branches": [
      { "label": "Full LLM security track", "refs": ["llm-security"] },
      { "label": "Web-agent attack surface", "refs": ["web-agents"] },
      { "label": "Detection and audit in production", "refs": ["production"] }
    ],
    "projects": [
      { "ref": "llm-security/prompt-injection-testing-and-threat-models", "note": "Threat-model an AI feature and test the injection paths" },
      { "ref": "responsible-ai/adversarial-testing-lab", "note": "Structured adversarial testing reps" },
      { "ref": "llm-security/sandboxing-code-execution-and-browser-use", "note": "Contain what an agent can touch" }
    ],
    "interview": ["agents", "ai-system-design", "mcp"],
    "practice": ["agents", "mcp"],
    "credentials": [],
    "evidence": [
      "A threat model for an LLM feature with abuse cases ranked by blast radius",
      "A red-team report with reproducible injection paths and the fixes verified",
      "A guardrail/sandbox configuration with before/after eval results"
    ]
  },
  {
    "id": "student",
    "name": "Student",
    "blurb": "Build a real foundation, from the maths up to working systems.",
    "description": "For students and career-switchers starting fresh. Runs from the core maths and how models learn, through how LLMs actually work, up to building and evaluating a first real feature.",
    "path": [
      "maths-foundations/what-is-a-vector",
      "maths-foundations/the-softmax-function",
      "maths-foundations/gradient-descent-intuition",
      "ai-foundations/ai-vs-ml-vs-deep-learning",
      "ai-foundations/what-is-a-neural-network",
      "llm-foundations/tokenization-explained",
      "llm-foundations/next-token-prediction",
      "ai-foundations/how-llms-work",
      "prompt-engineering/system-vs-user-prompts",
      "genai-app-dev/anatomy-of-a-genai-feature",
      "evals-red-teaming/why-evals-matter",
      "ai-foundations/capstone-build-train-evaluate-a-classifier"
    ],
    "prereq": "None — this path assumes you're starting from interest, not experience.",
    "branches": [
      { "label": "Maths underneath it all", "refs": ["maths-foundations"] },
      { "label": "Classical AI for fundamentals", "refs": ["classical-ai"] },
      { "label": "Deeper on models", "refs": ["llm-foundations"] }
    ],
    "projects": [
      { "ref": "ai-foundations/capstone-build-train-evaluate-a-classifier", "note": "The first real end-to-end build" },
      { "ref": "machine-learning/ml-foundations-capstone", "note": "Classical ML defended end to end" },
      { "ref": "llm-foundations/build-a-tiny-gpt-capstone", "note": "Build the thing yourself once" }
    ],
    "interview": ["llm-basics", "ai-system-design"],
    "practice": ["ai-foundations", "prompt-engineering"],
    "credentials": [
      { "name": "Specializations across ML and deep learning", "org": "DeepLearning.AI", "note": "Structured course sequences — audit free" },
      { "name": "Practical Deep Learning for Coders", "org": "fast.ai", "note": "Free and project-first" }
    ],
    "evidence": [
      "A classifier you trained, evaluated, and can explain the mistakes of",
      "A written explanation of one mechanism (attention, gradient descent, Bayes) that another student could learn from",
      "A capstone defense you survived questions on"
    ]
  }
];
export function getRole(id: string): Role | undefined { return roles.find((r) => r.id === id); }

export const conceptTitles: Record<string, string> = {
  "maths-foundations/what-is-a-vector": "Vectors: The Basic Unit of Data",
  "maths-foundations/dot-product-explained": "The Dot Product, Explained",
  "maths-foundations/cosine-similarity": "Cosine Similarity: Measuring How Alike Two Things Are",
  "maths-foundations/matrices-as-transformations": "Matrices as Transformations",
  "maths-foundations/probability-basics-for-ai": "Probability Basics for AI",
  "maths-foundations/the-softmax-function": "The Softmax Function",
  "maths-foundations/temperature-in-sampling": "Temperature: Reshaping a Probability Distribution",
  "maths-foundations/logarithms-for-ml": "Logarithms for Machine Learning",
  "maths-foundations/perplexity-explained": "Perplexity: How Language Models Are Scored",
  "maths-foundations/gradients-and-slopes": "Gradients: Slopes in Many Dimensions",
  "maths-foundations/gradient-descent-intuition": "Gradient Descent, Intuitively",
  "maths-foundations/backpropagation-intuition": "Backpropagation: How Networks Assign Blame",
  "maths-foundations/high-dimensional-spaces": "Why High-Dimensional Space Feels Weird",
  "maths-foundations/the-geometry-of-embeddings": "The Geometry of Embeddings",
  "ai-foundations/how-llms-work": "How LLMs Work",
  "ai-foundations/tokens-context-cost": "Tokens, Context, and Cost",
  "ai-foundations/choosing-a-model": "Choosing a Model",
  "ai-foundations/ai-vs-ml-vs-deep-learning": "AI vs. Machine Learning vs. Deep Learning",
  "ai-foundations/what-is-a-neural-network": "What a Neural Network Actually Is",
  "ai-foundations/narrow-ai-vs-general-ai": "Narrow AI vs. General AI",
  "ai-foundations/supervised-learning-explained": "Supervised Learning, Explained",
  "ai-foundations/self-supervised-learning": "Self-Supervised Learning: Training Without Labels",
  "ai-foundations/training-vs-inference": "Training vs. Inference",
  "ai-foundations/generalization-and-overfitting": "Generalization vs. Overfitting",
  "ai-foundations/foundation-models-explained": "Foundation Models, Explained",
  "ai-foundations/the-data-the-model-learned-from": "The Data the Model Learned From",
  "ai-foundations/benchmarks-and-what-they-miss": "AI Benchmarks and What They Miss",
  "ai-foundations/what-llms-can-and-cannot-do": "A Mental Model for What LLMs Can and Can't Do",
  "ai-foundations/ai-agents-vs-chatbots": "AI Agents vs. Chatbots",
  "llm-foundations/tokenization-explained": "Tokenization: How Text Becomes Tokens",
  "llm-foundations/what-are-embeddings": "Embeddings: Turning Tokens Into Geometry",
  "llm-foundations/attention-mechanism-explained": "The Attention Mechanism, Explained",
  "llm-foundations/positional-encoding-explained": "Positional Encoding: How Transformers Track Order",
  "llm-foundations/the-transformer-architecture": "The Transformer Architecture",
  "llm-foundations/next-token-prediction": "Next-Token Prediction: The One Objective",
  "llm-foundations/pretraining-explained": "Pretraining: Learning From the Whole Internet",
  "llm-foundations/context-window-mechanics": "Context Window Mechanics",
  "llm-foundations/sampling-temperature-top-p": "Sampling: Temperature, Top-k, and Top-p",
  "llm-foundations/instruction-tuning-and-rlhf": "Instruction Tuning and RLHF",
  "llm-foundations/emergent-abilities-in-llms": "Emergent Abilities in LLMs",
  "llm-foundations/mixture-of-experts-explained": "Mixture of Experts, Explained",
  "llm-foundations/model-families-and-variants": "Model Families: Base, Instruct, Chat, Reasoning",
  "llm-foundations/multimodal-llms-explained": "Multimodal LLMs, Explained",
  "prompt-engineering/answer-first-prompting": "Answer-First Prompting",
  "prompt-engineering/system-vs-user-prompts": "System Prompts vs User Prompts",
  "prompt-engineering/delimiters-and-formatting": "Delimiters: Fencing Off Instructions from Content",
  "prompt-engineering/role-prompting": "Role Prompting: What Personas Actually Change",
  "prompt-engineering/few-shot-prompting": "Few-Shot Prompting: Teaching by Example",
  "prompt-engineering/zero-shot-vs-few-shot": "Zero-Shot vs Few-Shot: When Examples Earn Their Tokens",
  "prompt-engineering/chain-of-thought-prompting": "Chain-of-Thought: Getting the Model to Show Its Work",
  "prompt-engineering/task-decomposition": "Decomposition: Splitting One Big Prompt into a Pipeline",
  "prompt-engineering/self-consistency-sampling": "Self-Consistency: Voting Across Multiple Reasoning Paths",
  "prompt-engineering/negative-instructions-pitfall": "Why 'Don't Do X' Backfires",
  "prompt-engineering/prompt-templates-and-variables": "Prompt Templates: Building Reusable, Parameterized Prompts",
  "prompt-engineering/prompt-anti-patterns": "Prompt Anti-Patterns to Stop Doing",
  "prompt-engineering/prompt-evaluation-basics": "Evaluating Prompts Before You Ship Them",
  "context-engineering/context-engineering-vs-prompting": "Context Engineering vs Prompt Engineering",
  "context-engineering/relevance-filtering": "Relevance Filtering: Deciding What Doesn't Make the Cut",
  "context-engineering/context-ordering-and-recency-effects": "Context Ordering: Why Position Changes What the Model Notices",
  "context-engineering/retrieval-vs-context-stuffing": "Retrieval vs Stuffing: Fetch Just-in-Time or Load It All",
  "context-engineering/token-budgeting-strategies": "Token Budgeting: Splitting a Fixed Context Window",
  "context-engineering/conversation-memory-and-state": "Memory vs State: What Persists Across Turns and Sessions",
  "context-engineering/summarization-for-compaction": "Compaction: Summarizing History to Reclaim Context Space",
  "context-engineering/sliding-window-context-management": "Sliding Windows: Rolling Off Old Turns Without Losing the Thread",
  "context-engineering/context-rot": "Context Rot: When More Tokens Make the Model Worse",
  "context-engineering/structured-context-injection": "Structuring Injected Context So the Model Can Actually Use It",
  "context-engineering/multi-source-context-merging": "Merging Context from Multiple Tools Without Contradictions",
  "context-engineering/long-context-strategies": "Long-Context Strategies for Million-Token Windows",
  "context-engineering/context-window-testing-and-eval": "Testing Whether More Context Actually Helps",
  "structured-outputs/why-structured-output": "Why Structured Output: Free Text vs Machine-Parseable Data",
  "structured-outputs/json-mode-basics": "JSON Mode: Forcing Valid JSON Out of the Model",
  "structured-outputs/json-schema-for-outputs": "JSON Schema: Specifying Your Exact Data Contract",
  "structured-outputs/enums-and-constrained-fields": "Enums: Locking a Field to a Fixed Set of Values",
  "structured-outputs/nested-and-array-schemas": "Nested Objects and Arrays in Output Schemas",
  "structured-outputs/tool-function-schemas": "Tool Schemas as a Structured-Extraction Mechanism",
  "structured-outputs/pydantic-zod-schema-patterns": "Pydantic and Zod: Deriving Schemas from Code",
  "structured-outputs/schema-design-for-reliability": "Schema Design Choices That Reduce Model Errors",
  "structured-outputs/constrained-decoding-under-the-hood": "Constrained Decoding: How Guaranteed-Valid Output Actually Works",
  "structured-outputs/validation-and-auto-repair": "Validation and Auto-Repair: Catching and Fixing Bad Output",
  "structured-outputs/streaming-structured-output": "Streaming Structured Output: Parsing Before the Response Finishes",
  "structured-outputs/structured-output-failure-modes": "Structured Output Failure Modes and How to Spot Them",
  "hallucinations/what-is-a-hallucination": "What a Hallucination Actually Is",
  "hallucinations/why-models-hallucinate": "Why Models Hallucinate: The Mechanics Behind Confident Wrong Answers",
  "hallucinations/hallucination-risk-factors": "Hallucination Risk Factors: Which Tasks Are Most Dangerous",
  "hallucinations/adversarial-and-leading-prompts": "Leading Questions and False Premises That Induce Hallucination",
  "hallucinations/grounding-with-source-documents": "Grounding: Constraining Answers to Supplied Sources",
  "hallucinations/retrieval-augmented-mitigation": "RAG as Hallucination Mitigation",
  "hallucinations/citations-and-attribution": "Citations: Making Every Claim Traceable to a Source",
  "hallucinations/teaching-models-to-say-i-dont-know": "Teaching a Model to Say 'I Don't Know'",
  "hallucinations/self-verification-techniques": "Self-Verification: Having the Model Check Its Own Work",
  "hallucinations/confidence-and-uncertainty-signals": "Confidence Signals: What Model Certainty Actually Reflects",
  "hallucinations/fact-checking-pipelines": "Fact-Checking Pipelines Before Output Ships",
  "hallucinations/guardrails-for-high-stakes-output": "Guardrails for High-Stakes Output",
  "hallucinations/hallucination-evaluation-and-benchmarks": "Measuring Hallucination Rate Instead of Spot-Checking",
  "genai-app-dev/anatomy-of-a-genai-feature": "Anatomy of a GenAI Feature",
  "genai-app-dev/your-first-llm-api-call": "Your First LLM API Call",
  "genai-app-dev/streaming-responses-to-the-ui": "Streaming Responses to the UI",
  "genai-app-dev/designing-chat-ux": "Designing Chat UX That Doesn't Feel Broken",
  "genai-app-dev/trimming-conversation-history": "Trimming Conversation History for Context Limits",
  "genai-app-dev/prompt-caching-for-speed-and-cost": "Prompt Caching for Speed and Cost",
  "genai-app-dev/latency-budgets-for-llm-features": "Setting Latency Budgets for LLM Features",
  "genai-app-dev/cost-budgets-and-usage-tracking": "Cost Budgets and Usage Tracking",
  "genai-app-dev/rate-limits-and-retry-strategies": "Rate Limits and Retry Strategies",
  "genai-app-dev/provider-abstraction-layers": "Building a Provider Abstraction Layer",
  "genai-app-dev/handling-api-keys-and-secrets": "Handling API Keys and Secrets Safely",
  "genai-app-dev/error-handling-for-llm-calls": "Error Handling for LLM Calls",
  "genai-app-dev/guardrails-and-input-validation": "Guardrails and Input Validation",
  "genai-app-dev/shipping-your-first-end-to-end-app": "Shipping Your First End-to-End GenAI App",
  "rag/what-is-rag-and-when-to-use-it": "What Is RAG and When to Use It",
  "rag/chunking-strategies-for-documents": "Chunking Strategies for Documents",
  "rag/embeddings-and-semantic-similarity": "Embeddings and Semantic Similarity",
  "rag/similarity-search-and-ann-indexes": "Similarity Search and ANN Indexes",
  "rag/choosing-a-vector-database": "Choosing a Vector Database",
  "rag/metadata-filtering-in-retrieval": "Metadata Filtering in Retrieval",
  "rag/hybrid-search-lexical-and-vector": "Hybrid Search: Lexical and Vector Combined",
  "rag/query-rewriting-and-expansion": "Query Rewriting and Expansion",
  "rag/reranking-retrieved-results": "Reranking Retrieved Results",
  "rag/grounding-answers-with-citations": "Grounding Answers with Citations",
  "rag/building-a-rag-pipeline-end-to-end": "Building a RAG Pipeline End to End",
  "rag/evaluating-rag-quality": "Evaluating RAG Quality",
  "rag/when-rag-is-the-wrong-tool": "When RAG Is the Wrong Tool",
  "tools-function-calling/what-is-tool-calling": "What Is Tool Calling",
  "tools-function-calling/designing-a-tool-schema": "Designing a Tool Schema",
  "tools-function-calling/writing-tool-descriptions-models-follow": "Writing Tool Descriptions Models Actually Follow",
  "tools-function-calling/tool-choice-and-forcing-tool-use": "Tool Choice and Forcing Tool Use",
  "tools-function-calling/executing-tool-calls-safely": "Executing Tool Calls Safely",
  "tools-function-calling/sandboxing-tool-execution": "Sandboxing Tool Execution",
  "tools-function-calling/returning-tool-results-to-the-model": "Returning Tool Results to the Model",
  "tools-function-calling/handling-tool-errors-and-retries": "Handling Tool Errors and Retries",
  "tools-function-calling/parallel-tool-calls": "Parallel Tool Calls",
  "tools-function-calling/sequential-multi-step-tool-use": "Sequential, Multi-Step Tool Use",
  "tools-function-calling/structured-output-vs-tool-calls": "Structured Output vs. Tool Calls",
  "tools-function-calling/common-tool-calling-failure-modes": "Common Tool-Calling Failure Modes",
  "tools-function-calling/testing-and-debugging-tool-calls": "Testing and Debugging Tool Calls",
  "mcp/what-is-mcp": "What Is MCP",
  "mcp/first-mcp-server": "Your First MCP Server",
  "mcp/mcp-architecture-hosts-clients-servers": "MCP Architecture: Hosts, Clients, Servers",
  "mcp/mcp-tools-resources-and-prompts": "MCP Tools, Resources, and Prompts",
  "mcp/mcp-transports-stdio-vs-http": "MCP Transports: stdio vs. HTTP",
  "mcp/connecting-a-client-to-an-mcp-server": "Connecting a Client to an MCP Server",
  "mcp/mcp-tool-discovery-and-schemas": "MCP Tool Discovery and Schemas",
  "mcp/mcp-context-window": "MCP and the Context Window",
  "mcp/mcp-auth-fundamentals": "MCP Auth Fundamentals",
  "mcp/agent-dies-overnight-oauth": "The Agent That Dies Overnight: OAuth",
  "mcp/securing-mcp-servers-against-prompt-injection": "Securing MCP Servers Against Prompt Injection",
  "mcp/inspecting-and-testing-mcp-servers": "Inspecting and Testing MCP Servers",
  "mcp/mcp-registries-and-discovery": "MCP Registries and Discovery",
  "mcp/versioning-mcp-servers-without-breaking-clients": "Versioning MCP Servers Without Breaking Clients",
  "mcp/running-mcp-servers-in-production": "Running MCP Servers in Production",
  "mcp/debugging-common-mcp-failures": "Debugging Common MCP Failures",
  "agentic-ai/what-is-an-agent": "What Makes Something an Agent",
  "agentic-ai/the-agent-loop": "The Agent Loop: Sense, Think, Act",
  "agentic-ai/tool-use-basics": "Giving Agents Tools",
  "agentic-ai/react-pattern": "ReAct: Interleaving Reasoning and Acting",
  "agentic-ai/planning-and-task-decomposition": "Planning Before Acting",
  "agentic-ai/agent-memory-short-vs-long-term": "Short-Term vs Long-Term Memory",
  "agentic-ai/reflection-and-self-critique": "Reflection: Letting an Agent Grade Itself",
  "agentic-ai/error-handling-and-retries": "Recovering When Tools Fail",
  "agentic-ai/multi-agent-patterns": "Multi-Agent Patterns: Orchestrator, Pipeline, Debate",
  "agentic-ai/agent-orchestration-frameworks": "Choosing an Orchestration Framework",
  "agentic-ai/autonomy-vs-control": "Setting the Autonomy Dial",
  "agentic-ai/when-not-to-use-an-agent": "When a Workflow Beats an Agent",
  "agentic-ai/common-agent-failure-modes": "Diagnosing Agent Failure Modes",
  "agentic-ai/evaluating-agent-behavior-in-dev": "Reading an Agent's Trace",
  "harness-design/what-is-a-harness": "The Harness: Everything Around the Model",
  "harness-design/the-control-loop": "Building the Control Loop",
  "harness-design/tool-routing-and-registries": "Routing Tool Calls to Real Code",
  "harness-design/prompt-composition": "Composing the System Prompt at Runtime",
  "harness-design/deny-floors-and-policy-layers": "Deny-Floors: Rules No Prompt Can Override",
  "harness-design/permission-and-approval-systems": "Allow/Ask/Deny: Designing Approval Gates",
  "harness-design/headless-cli-agents": "Running Agents Headless from a Terminal",
  "harness-design/subprocess-isolation-and-sandboxing": "Sandboxing Tool Execution in a Harness",
  "harness-design/state-and-checkpointing": "Checkpointing Long-Running Agent State",
  "harness-design/streaming-model-output": "Streaming Tokens and Tool Events",
  "harness-design/guardrails-as-code": "Guardrails as Code, Not Prose",
  "harness-design/context-window-management-in-a-harness": "Managing Context Inside a Long Session",
  "harness-design/subagent-and-task-delegation": "Delegating Work to Subagents",
  "harness-design/observability-and-logging": "Logging Every Step for Debuggability",
  "evals-red-teaming/why-evals-matter": "Why Vibes-Based Iteration Breaks Down",
  "evals-red-teaming/building-a-golden-dataset": "Building a Golden Dataset",
  "evals-red-teaming/offline-vs-online-evals": "Offline Evals vs Production Monitoring",
  "evals-red-teaming/writing-eval-metrics": "Choosing Metrics That Actually Measure Success",
  "evals-red-teaming/llm-as-judge": "LLM-as-Judge: Grading Outputs with a Model",
  "evals-red-teaming/building-a-regression-suite": "Turning Bugs into a Regression Suite",
  "evals-red-teaming/human-evaluation-and-annotation": "Designing a Human Review Workflow",
  "evals-red-teaming/eval-driven-iteration": "Shipping Changes by Eval Diff",
  "evals-red-teaming/prompt-injection-basics": "Prompt Injection: When Content Becomes Instructions",
  "evals-red-teaming/jailbreak-techniques-and-defenses": "Common Jailbreak Techniques and Their Defenses",
  "evals-red-teaming/scope-escape-and-tool-abuse": "Testing for Scope Escape",
  "evals-red-teaming/adversarial-red-teaming-process": "Running a Structured Red-Team Exercise",
  "evals-red-teaming/automated-adversarial-testing": "Automating Adversarial Probes",
  "evals-red-teaming/eval-and-safety-metrics-dashboards": "Tracking Eval Scores Across Model Versions",
  "production/structured-logging-for-llm-calls": "Log Every LLM Call as Structured Data",
  "production/pii-redaction-in-llm-logs": "Redact PII Before It Hits Your Logs",
  "production/token-and-cost-tracking": "Track Cost Per Request and Per User",
  "production/prompt-and-semantic-caching": "Cache Prompts and Responses to Cut Cost",
  "production/tracing-multi-step-ai-pipelines": "Trace Multi-Step Agent and RAG Pipelines",
  "production/eval-based-regression-testing": "Catch Regressions with Evals in CI",
  "production/latency-and-cost-slos": "Set SLOs for Latency, Cost, and Quality",
  "production/rate-limiting-llm-apps": "Rate-Limit and Add Backpressure to LLM Traffic",
  "production/canary-and-shadow-releases": "Canary and Shadow-Test Prompt or Model Changes",
  "production/feature-flags-and-kill-switches": "Put a Kill Switch on Every AI Feature",
  "production/on-call-playbooks-for-ai": "Write an On-Call Playbook for AI Failures",
  "production/incident-postmortems-for-ai": "Run a Postmortem After a Model Incident",
  "production/data-retention-and-privacy-policy": "Set a Data Retention Policy for AI Systems",
  "production/prompt-injection-monitoring": "Monitor Production Traffic for Prompt Injection and Abuse",
  "fine-tuning/fine-tune-vs-prompt-vs-rag": "Decide: Fine-Tune, Prompt, or RAG?",
  "fine-tuning/picking-a-base-model-to-fine-tune": "Choose a Base Model to Fine-Tune",
  "fine-tuning/building-a-fine-tuning-dataset": "Build a Fine-Tuning Dataset That Works",
  "fine-tuning/synthetic-data-generation": "Generate Synthetic Training Data with a Larger Model",
  "fine-tuning/full-fine-tuning-vs-peft": "Full Fine-Tuning vs Parameter-Efficient Fine-Tuning",
  "fine-tuning/lora-and-qlora-fine-tuning": "Fine-Tune with LoRA and QLoRA",
  "fine-tuning/supervised-fine-tuning-vs-preference-tuning": "SFT vs Preference Tuning (DPO/RLHF)",
  "fine-tuning/fine-tuning-run-hyperparameters": "Set Hyperparameters for a Fine-Tuning Run",
  "fine-tuning/catastrophic-forgetting-and-overfitting": "Diagnose Catastrophic Forgetting and Overfitting",
  "fine-tuning/evaluating-a-fine-tuned-model": "Evaluate a Fine-Tuned Model Before Shipping",
  "fine-tuning/quantization-gguf-awq-gptq": "Quantize a Model: GGUF, AWQ, and GPTQ",
  "fine-tuning/knowledge-distillation": "Distill a Large Model into a Small One",
  "fine-tuning/inference-serving-optimization": "Optimize Inference Serving: Batching and KV Cache",
  "fine-tuning/merging-and-versioning-adapters": "Merge and Version LoRA Adapters"
};
