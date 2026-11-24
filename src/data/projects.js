function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const PROJECTS = [

{
  abbr: "N",
  color: "#0891b2",
  slug: slugify("Neurobridge"),
  title: "Neurobridge",
  year: "2026",
  type: "product",
  status: "Complete",
  category: "Full-Stack · Accessibility · Adaptive Systems",

  summary:
    "Adaptive support platform that transforms condition-specific accessibility tools into context-aware experiences through behavioral context, user-state modeling, deterministic reasoning, and intervention personalization.",
  metric: "Runner-Up — Girlathon 4.0 ",

  problem:
    "Accessibility tools are often implemented as isolated condition-specific features, making support difficult to adapt as a user's context, activity, and needs change during a session.",

  solution:
    "Built the core adaptive intelligence architecture for a multi-condition support platform, combining contextual signals, user-state modeling, deterministic reasoning, intervention ranking, adaptive UI, and reflection-based personalization within a shared runtime.",

  impact:
    "The adaptive runtime converts behavioral and contextual signals such as task switching, typing pauses, navigation, mood, and session activity into structured user-state changes and context-aware support decisions, enabling the platform to adapt its interventions rather than relying solely on static feature selection.",

  architecture:
    "Context Engine → Adaptive Runtime → User-State Model → Deterministic Reasoning → Policy/Conflict/Preference/Safety Evaluation → Hysteresis → Intervention Planning → Adaptive UI → Outcome/Reflection → Tier-9 Personalization. The platform uses React, FastAPI, Supabase, PostgreSQL/SQLite, and shared adaptive runtime components.",

  engineeringDecisions: [
    "Designed and implemented the core adaptive intelligence architecture to transform contextual and behavioral signals into structured user-state changes and adaptation decisions",

    "Separated context collection, reasoning, policy evaluation, conflict resolution, safety checks, hysteresis, planning, and execution into distinct adaptive stages",

    "Implemented intervention ranking and adaptive UI planning so support modules can be selected according to the current user state rather than only static condition configuration",

    "Added reflection and Tier-9 personalization so intervention outcomes can influence future strategy selection without making the core decision system dependent on an LLM",

    "Used shared adaptive runtime components across condition-specific support modules to reduce duplicated adaptation logic and maintain a consistent architecture"
  ],

  challenges: [
    "Designing an adaptive architecture that could operate across multiple condition-specific support modules without tightly coupling their implementations",

    "Converting noisy contextual signals such as task switching, navigation, mood, and activity into stable user-state changes",

    "Preventing repeated context updates from triggering unnecessary adaptation cycles through content-signature deduplication and hysteresis",

    "Balancing personalization with deterministic safety and policy constraints",

    "Integrating adaptive decisions into an existing multi-feature frontend without making every feature dependent on the adaptive runtime"
  ],

  metrics: [
    "1,054/1,059 frontend tests passing across 118 test files",

    "9 condition entries registered, with substantive support implemented across the major condition modules",

    "Multi-stage adaptive reasoning and planning pipeline implemented",

    "Intervention ranking and reflection-based personalization implemented",

    "4 adaptive anxiety intervention types implemented",

    "Production adaptive UI runtime implemented with backend-dependent features separated from client-side adaptation"
  ],

  lessons: [
    "Adaptive systems require a clear separation between context collection, state representation, reasoning, planning, and execution",

    "Deterministic reasoning provides a more controllable foundation for safety-sensitive adaptation than making every decision dependent on an LLM",

    "Personalization is more useful when intervention outcomes can feed back into future strategy selection",

    "Hysteresis and deduplication are important for preventing unstable behavior in continuously evaluated adaptive systems",

    "A shared adaptive runtime allows condition-specific tools to evolve independently while maintaining consistent adaptation behavior"
  ],

  github: "https://github.com/Civora-Forge/NeuroBridge",
  demo: "https://neuro-bridge-olive.vercel.app",
  paper: null,
},
{
  abbr: "TR",
  color: "#059669",
  slug: slugify("TRACE"),
  title: "TRACE",
  year: "2026",
  type: "product",
  status: "Active Development",
  category: "Backend · Developer Analytics · Event-Driven Systems",

  summary:
    "Developer intelligence platform that turns GitHub activity into structured developer data through asynchronous synchronization, scoped access control, and a backend designed for longitudinal analysis.",

  metric: "66+ GitHub events processed in live E2E testing",

  problem:
    "GitHub profiles expose large volumes of activity, but commits, repositories, and contribution events provide limited structure for understanding what a developer works on and how their technical activity evolves over time.",

  solution:
    "Building TRACE as a backend-first developer intelligence platform that authenticates through GitHub, synchronizes repository and contribution activity, normalizes events into structured data, and provides a foundation for deriving higher-level developer insights.",

  impact:
    "The current implementation provides an end-to-end workflow for turning live GitHub activity into structured developer data. TRACE supports GitHub OAuth, owner-scoped access, repository synchronization, PostgreSQL persistence, and deployed frontend/backend components, with deeper intelligence analysis being developed on top of the normalized activity layer.",

  architecture:
    "GitHub OAuth → GitHub API → FastAPI → asynchronous synchronization worker → PostgreSQL → developer/repository/activity data model → analytics layer. The current system uses deterministic synchronization and owner-scoped access, while deeper intelligence pipelines and additional event-driven infrastructure remain under development.",

  engineeringDecisions: [
    "Designed owner-scoped access so private GitHub activity is restricted to the authenticated account while public developer information can remain publicly viewable",

    "Used PostgreSQL with SQLAlchemy and Alembic to model developers, repositories, and GitHub activity as structured relational data",

    "Separated GitHub synchronization from API request handling through background processing",

    "Designed synchronization logic to be deterministic and idempotent so repeated GitHub activity does not create duplicate records",

    "Built the backend around FastAPI and asynchronous operations to support incremental expansion of the developer intelligence pipeline",

    "Separated raw GitHub activity from higher-level developer insights so future intelligence features can operate over normalized data rather than directly against the GitHub API"
  ],

  challenges: [
    "Converting GitHub's heterogeneous activity data into a consistent internal representation",

    "Maintaining synchronization state while avoiding duplicate or inconsistent records",

    "Designing access boundaries between private owner data and publicly visible developer information",

    "Building an architecture that can evolve from activity synchronization into higher-level developer intelligence",

    "Handling real GitHub API integration and persistence rather than relying solely on mock data"
  ],

  metrics: [
    "GitHub OAuth and owner-scoped access implemented",

    "Live GitHub synchronization pipeline implemented",

    "66+ GitHub events processed during live end-to-end testing",

    "PostgreSQL persistence with SQLAlchemy/Alembic",

    "Deployed FastAPI backend and frontend",

    "Deterministic mock and live GitHub E2E workflows validated"
  ],

  lessons: [
    "Developer analytics becomes more useful when raw activity is normalized before higher-level analysis",

    "Access control needs to be enforced at the data and API layers rather than added only at the UI layer",

    "Idempotent synchronization is essential when repeatedly consuming external activity APIs",

    "A backend-first architecture provides a stronger foundation for analytics than coupling intelligence directly to the frontend",

    "Real external API integration exposes reliability and data-modeling problems that mock data can hide"
  ],

  github: "https://github.com/tp-shivha-shakthiy/trace",
  demo: "https://trace-lrrv.onrender.com",
  demoNote:
    "The hosted demo runs on a free instance that sleeps when idle, so the first load can take a while to wake up. If it doesn't respond, the GitHub repository has the source.",
  paper: null,
},

  {
  abbr: "VA",
  color: "#7c3aed",
  slug: slugify("Vanta AI"),
  title: "Vanta AI",
  year: "2025",
  type: "product",
  status: "Complete",
  category: "Full-Stack · Applied ML · Digital Safety",
  summary:
    "Digital safety web application for preventing, detecting, and reporting image-based abuse through watermarking, content-trust analysis, legal document generation, anonymous reporting, and crisis-support tools.",
  metric: "Runner-Up — Girlathon 2025",
  problem:
    "Victims of image-based abuse often have to navigate disconnected tools to preserve evidence, understand their rights, report incidents, and request content removal. Vanta AI brings these workflows into a single safety-focused application.",
  solution:
    "Built a web platform combining client-side image watermarking, layered content-trust scoring, anonymous reporting, legal and takedown document generation, crisis-support tools, and conversational guidance. The platform also includes optional local AI integrations for Phi-3 chat and SigLIP-based deepfake analysis, while TensorFlow.js provides browser-based toxicity analysis.",
  impact:
    "Delivered a functional prototype that brings prevention, detection, reporting, legal guidance, and crisis-support workflows into one application. The project was recognized as Runner-Up at Girlathon 2025.",
  architecture:
    "React 19 + Vite frontend → Express.js chat API and separate FastAPI image-analysis service, with Firebase Firestore/Storage and Supabase used directly from the client. The frontend contains the primary product workflows and rule-based content logic, while optional local services provide Phi-3 conversational assistance and SigLIP-based deepfake analysis.",
  engineeringDecisions: [
    "Designed the application around anonymous-first access so core safety workflows do not require authentication",
    "Implemented client-side LSB steganographic watermark embedding and extraction without requiring a server",
    "Built fuzzy matching for hardcoded safety Q&A using string similarity, with a benchmark script to measure recovery under perturbed queries",
    "Used Server-Sent Events to stream conversational responses incrementally from the chat backend",
    "Added a layered content-trust engine combining deterministic content checks with browser-based toxicity analysis",
    "Stored Silent SOS evidence locally in the browser rather than transmitting it to a backend",
    "Added reusable warning prompts before potentially risky safety workflows",
    "Supported bilingual complaint-generation templates for English and Hindi",
  ],
  challenges: [
    "Integrating optional local AI services while keeping the core application usable without them",
    "Designing safety workflows that remain functional without requiring user authentication",
    "Providing graceful fallbacks when LLM or deepfake infrastructure is unavailable",
    "Combining deterministic content rules with ML-based toxicity signals into a single interpretable trust score",
    "Keeping sensitive crisis evidence local while other reporting workflows use external persistence services",
  ],
  metrics: [
    "28 frontend routes across prevention, detection, reporting, legal guidance, and support workflows",
    "15 product feature screens",
    "20+ hardcoded safety Q&A pairs with fuzzy matching",
    "3 AI/ML integrations: Phi-3, SigLIP, and TensorFlow.js toxicity",
    "15 real stories, 10 awareness campaigns, 8+ legal categories, and multiple helpline/directory resources",
    "Runner-Up — Girlathon 2025",
  ],
  lessons: [
    "Local AI can provide useful domain-specific assistance while keeping inference under the developer's control, but deployment constraints must be considered from the beginning",
    "Anonymous-first design can remove unnecessary identity requirements from safety-critical workflows",
    "Client-side processing is useful when sensitive evidence should not automatically leave the user's device",
    "Deterministic fallbacks are important when AI infrastructure cannot be guaranteed",
    "Safety-oriented applications require careful separation between product convenience and actual privacy/security guarantees",
  ],
  github: "https://github.com/tp-shivha-shakthiy/VantaAI",
  demo: "https://vanta-ai-eight-eight.vercel.app",
  paper: null,
},
  {
    abbr: "NID",
    color: "#d97706",
    slug: slugify("Network Intrusion Detection under Class Imbalance"),
    title: "Network Intrusion Detection under Class Imbalance",
    year: "2026",
    type: "deep-dive",
    status: "Ongoing",
    category: "ML Pipeline · Cybersecurity",
    summary:
      "Machine learning pipeline for network intrusion detection using the UNSW-NB15 dataset, evaluating multiple classical and deep learning models for both binary and multi-class attack classification.",
    metric: "99.04% Binary Accuracy",
    problem:
      "Modern enterprise networks generate massive volumes of traffic containing highly imbalanced attack distributions. Traditional intrusion detection systems often struggle to accurately identify rare attack categories while maintaining low false-positive rates.",
    solution:
      "Developed a modular intrusion detection pipeline implementing feature selection, dimensionality reduction, class balancing, and multi-model training to classify both binary (Normal/Attack) and 10 attack categories. The framework evaluates multiple machine learning and deep learning architectures under a unified evaluation methodology.",
    impact:
      "Implemented and evaluated seven model configurations, achieving 99.04% binary accuracy, 95.52% binary F1-score, and 98.08% multi-class accuracy on the UNSW-NB15 dataset. The implementation reproduces and extends the methodology proposed by Kasina et al. (2026).",
    architecture:
      "Raw UNSW-NB15 Dataset → Data Preprocessing → Mutual Information Feature Selection → PCA → Class Balancing (SMOTE / MiniBatchKMeans + SMOTE) → Model Training (HGB, XGBoost, Logistic Regression, DNN, LSTM, Bi-LSTM) → Cross Validation & Holdout Evaluation.",
    engineeringDecisions: [
      "Built a modular preprocessing pipeline reusable across multiple machine learning models",
      "Combined Mutual Information feature selection with PCA to reduce dimensionality while preserving informative features",
      "Applied SMOTE and MiniBatchKMeans + SMOTE to address severe class imbalance across rare attack categories",
      "Evaluated both traditional machine learning and deep learning architectures under a consistent experimental framework",
      "Implemented a multi-task Bi-LSTM architecture with a shared feature extractor for simultaneous binary and multi-class prediction",
    ],
    challenges: [
      "Handling highly imbalanced attack distributions within a dataset containing over 2.5 million network records",
      "Maintaining high performance across both binary and multi-class classification tasks",
      "Designing preprocessing steps that generalized across multiple model architectures",
      "Comparing diverse models using a consistent evaluation pipeline",
    ],
    metrics: [
      "99.04% Binary Accuracy",
      "95.52% Binary F1-Score",
      "98.08% Multi-Class Accuracy",
      "Evaluated 7 machine learning and deep learning architectures",
      "Best-performing model: Bi-LSTM",
    ],
    lessons: [
      "Careful preprocessing contributes as much to performance as model selection",
      "Addressing class imbalance is critical for detecting rare cyberattacks",
      "Modular pipelines simplify experimentation across multiple architectures",
      "Consistent evaluation methodology is essential for meaningful model comparison",
    ],
    github: "https://github.com/tp-shivha-shakthiy/Intrusion-Detection-System",
    demo: null,
    paper: null,
  },
  {
    abbr: "ReID",
    color: "#be185d",
    slug: slugify("ST-HF-VVI-ReID"),
    title: "ST-HF-VVI-ReID",
    year: "2026",
    type: "deep-dive",
    status: "Ongoing",
    category: "Computer Vision · Research Implementation",
    summary:
      "PyTorch implementation of Spatial-Temporal High-Frequency Learning for Video-based Visible-Infrared Person Re-Identification (VI-ReID), reproducing and extending the architecture proposed in the original research paper.",
    metric: "Adaptive STHPF",
    problem:
      "Visible-Infrared Person Re-Identification aims to match individuals across RGB and infrared video streams. Cross-modal appearance differences, viewpoint variations, and temporal inconsistencies make robust identity matching a challenging computer vision problem.",
    solution:
      "Implemented a modular PyTorch research framework that reproduces the ST-HF architecture for video-based VI-ReID. The project includes baseline and frequency-enhanced models, enabling systematic experimentation with spatial-temporal high-frequency learning and adaptive frequency fusion.",
    impact:
      "Developed a reproducible research codebase supporting multiple ST-HF variants, configurable training pipelines, and standardized evaluation for cross-modal person re-identification. The implementation is currently undergoing full experimental validation.",
    architecture:
      "Video Frames → ResNet-50 Video Backbone → Spatial-Temporal High-Frequency Learning (Fixed or Adaptive STHF) → SDC & DSR Modules → Feature Embeddings → Cross-Modal Person Re-Identification.",
    engineeringDecisions: [
      "Designed the implementation around modular components to allow independent experimentation with backbone networks and frequency-learning modules",
      "Implemented both Fixed STHF and Adaptive STHF variants to compare static and learned frequency filtering strategies",
      "Used FFT-based high-pass filtering to emphasize discriminative spatial and temporal features",
      "Built a configurable training pipeline supporting multiple datasets, augmentation strategies, and evaluation protocols",
    ],
    challenges: [
      "Translating research paper concepts into a maintainable production-quality codebase",
      "Implementing spatial-temporal FFT operations efficiently within PyTorch",
      "Preserving compatibility across multiple model variants while minimizing duplicated code",
      "Reproducing experimental details from the original publication where implementation specifics were not explicitly documented",
    ],
    metrics: [
      "Implemented Baseline, Fixed STHF, and Adaptive STHF architectures",
      "Support for HITSZ-VCM and BUPTcampus datasets",
      "Standard VI-ReID evaluation pipeline with CMC, Rank-k, and mAP metrics",
      "116/117 implementation tests passing",
      "Full 200-epoch experimental reproduction currently in progress",
    ],
    lessons: [
      "Research papers often require significant engineering effort beyond the published methodology",
      "Modular implementations make it easier to validate architectural changes independently",
      "Reproducibility depends as much on implementation details as on model design",
      "Building robust research infrastructure is essential before meaningful experimentation can begin",
    ],
    github: "https://github.com/tp-shivha-shakthiy/sthf-vi-reid",
    demo: null,
    paper: null,
  },
  {
    abbr: "C",
    color: "#6366f1",
    slug: slugify("Conclave"),
    title: "Conclave",
    year: "2026",
    type: "product",
    status: "Complete",
    category: "Real-Time AI · Multi-Agent Systems · Systems Architecture",
    summary:
      "Real-time AI system that orchestrates four autonomous stakeholder personas (CTO, Product, Finance, Research) to listen to live audio discussions and selectively intervene when fallacies or unverified claims are detected.",
    metric: "Google DeepMind Bangalore Hackathon 2026",
    problem:
      "Live discussions and meetings often let unverified claims or logical fallacies pass unchallenged simply because no one in the room has the domain expertise, time, or social standing to push back in the moment. Existing AI meeting tools summarize or transcribe after the fact — none intervene in real time with the judgment of a domain-specific stakeholder.",
    solution:
      "Built a system where four independent AI agents, each reasoning as a distinct stakeholder persona, continuously listen to live audio and decide — individually and then collectively — whether an intervention is warranted. The system runs on a custom deterministic execution model, the \"Cognitive Tick,\" which triggers once per semantic event rather than on a fixed timer, so agents reason only when the conversation actually produces something worth reasoning about.",
    impact:
      "Delivered a working real-time system within the hackathon timeframe capable of ingesting live audio, reasoning across four parallel agents, and producing spoken interventions with under-perceptible latency for a natural conversational flow.",
    architecture:
      "Audio input → Gemini Live API (ingestion, diarization, transcription) → Context Layer (structured world model: topics, decisions, assumptions, risks) → Agent Layer (4 stakeholder agents reasoning via Gemini structured output) → Kernel Layer (arbitrates competing proposals under a fixed attention budget) → Output Layer (Gemini TTS) → WebSocket bridge to a Vite-powered browser UI for live observation.",
    engineeringDecisions: [
      "Designed the Cognitive Tick as a deterministic, CPU-like cognition loop instead of a polling/timer-based loop, to keep agent reasoning event-driven and reproducible",
      "Separated perception, reasoning, and arbitration into independent layers so agents never talk to each other directly — all coordination flows through the Kernel",
      "Used Gemini structured output (not free-form generation) for every agent decision, so the Kernel could arbitrate on typed data instead of parsing natural language",
      "Built an attention budget into the Kernel to prevent all four agents from interrupting simultaneously, forcing prioritization under real conversational constraints",
    ],
    challenges: [
      "Keeping four independently-reasoning agents from producing conflicting or redundant interventions in the same moment",
      "Achieving low enough latency across the Perception → Agent → Output pipeline for interventions to feel conversational rather than delayed",
      "Designing the Context Layer's world model to stay accurate as a live conversation evolves, without re-processing the entire transcript on every tick",
      "Building and validating this end-to-end pipeline under hackathon time constraints",
    ],
    metrics: [
      "Built a full 6-layer real-time cognitive pipeline from live audio to spoken intervention",
      "Designed and implemented a novel deterministic execution model (Cognitive Tick) for multi-agent arbitration",
      "Covered core modules with 30 test files (27 unit, 3 integration), with typecheck and lint enforced",
      "Presented a working system to Google DeepMind Bangalore Hackathon 2026",
    ],
    lessons: [
      "Event-driven cognition loops scale better than fixed-timer polling for multi-agent reasoning under real-time constraints",
      "Structured output is essential once you need multiple agents' decisions to be arbitrated programmatically, not just displayed",
      "An explicit attention/arbitration layer is necessary the moment more than one autonomous agent can act on the same input",
      "Building for real-time latency surfaces architectural tradeoffs that don't appear in batch or async systems",
    ],
    github: "https://github.com/tp-shivha-shakthiy/googledeepmindhackathon-conclave",
    demo: null,
    paper: null,
  },
];
