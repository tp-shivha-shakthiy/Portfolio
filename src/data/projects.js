/*
  Project data.

  Card fields (shown on the homepage and /projects):
    tagline · role · team · stack · proof · links
  Case-study fields (shown on /projects/:slug):
    summary · problem · built ("What I built") · architecture · engineeringDecisions · results
  "Full write-up" (collapsed on the case study, nothing removed):
    solution · impact · challenges · lessons · notes
*/

export const PROJECTS = [
  {
    slug: "trace",
    title: "TRACE",
    abbr: "TR",
    color: "#059669",
    year: "2026",
    kind: "project",
    featured: true,
    status: "Active development",

    tagline:
      "Backend that syncs a developer's GitHub activity into structured, queryable data.",
    role: "Solo project — design, backend and deployment",
    team: "Solo",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "GitHub API", "OAuth", "Docker"],
    proof: [
      "66+ live GitHub events synced in end-to-end testing",
      "Dockerized and deployed",
    ],

    summary:
      "Developer intelligence platform that turns GitHub activity into structured developer data through asynchronous synchronization, scoped access control, and a backend designed for longitudinal analysis.",
    problem:
      "GitHub profiles expose large volumes of activity, but commits, repositories, and contribution events provide limited structure for understanding what a developer works on and how their technical activity evolves over time.",
    built: [
      "Built an asynchronous GitHub ingestion backend with GitHub OAuth sign-in and owner-scoped access control",
      "Modelled developers, repositories and activity as relational data in PostgreSQL with SQLAlchemy and Alembic",
      "Made synchronization deterministic and idempotent, so repeated syncs never create duplicate records",
      "Moved GitHub synchronization out of the request path into background processing",
      "Validated end-to-end sync against live GitHub data with automated tests; containerized and deployed with Docker",
    ],
    architecture:
      "GitHub OAuth → GitHub API → FastAPI → asynchronous synchronization worker → PostgreSQL → developer/repository/activity data model → analytics layer. The current system uses deterministic synchronization and owner-scoped access, while deeper intelligence pipelines and additional event-driven infrastructure remain under development.",
    engineeringDecisions: [
      "Designed owner-scoped access so private GitHub activity is restricted to the authenticated account while public developer information can remain publicly viewable",
      "Used PostgreSQL with SQLAlchemy and Alembic to model developers, repositories, and GitHub activity as structured relational data",
      "Separated GitHub synchronization from API request handling through background processing",
      "Designed synchronization logic to be deterministic and idempotent so repeated GitHub activity does not create duplicate records",
      "Built the backend around FastAPI and asynchronous operations to support incremental expansion of the developer intelligence pipeline",
      "Separated raw GitHub activity from higher-level developer insights so future intelligence features can operate over normalized data rather than directly against the GitHub API",
    ],
    results: [
      "66+ GitHub events processed during live end-to-end testing",
      "Deterministic mock and live GitHub end-to-end workflows validated",
      "FastAPI backend and frontend deployed",
    ],

    solution:
      "Building TRACE as a backend-first developer intelligence platform that authenticates through GitHub, synchronizes repository and contribution activity, normalizes events into structured data, and provides a foundation for deriving higher-level developer insights.",
    impact:
      "The current implementation provides an end-to-end workflow for turning live GitHub activity into structured developer data. TRACE supports GitHub OAuth, owner-scoped access, repository synchronization, PostgreSQL persistence, and deployed frontend/backend components, with deeper intelligence analysis being developed on top of the normalized activity layer.",
    challenges: [
      "Converting GitHub's heterogeneous activity data into a consistent internal representation",
      "Maintaining synchronization state while avoiding duplicate or inconsistent records",
      "Designing access boundaries between private owner data and publicly visible developer information",
      "Building an architecture that can evolve from activity synchronization into higher-level developer intelligence",
      "Handling real GitHub API integration and persistence rather than relying solely on mock data",
    ],
    lessons: [
      "Developer analytics becomes more useful when raw activity is normalized before higher-level analysis",
      "Access control needs to be enforced at the data and API layers rather than added only at the UI layer",
      "Idempotent synchronization is essential when repeatedly consuming external activity APIs",
      "A backend-first architecture provides a stronger foundation for analytics than coupling intelligence directly to the frontend",
      "Real external API integration exposes reliability and data-modeling problems that mock data can hide",
    ],
    notes: [
      "GitHub OAuth and owner-scoped access implemented",
      "Live GitHub synchronization pipeline implemented",
      "PostgreSQL persistence with SQLAlchemy/Alembic",
    ],

    github: "https://github.com/tp-shivha-shakthiy/trace",
    demo: "https://trace-lrrv.onrender.com",
    demoNote:
      "The hosted demo runs on a free instance that sleeps when idle, so the first load can take a while to wake up. If it doesn't respond, the GitHub repository has the source.",
    paper: null,
  },

  {
    slug: "neurobridge",
    title: "NeuroBridge",
    abbr: "NB",
    color: "#0891b2",
    year: "2026",
    kind: "project",
    featured: true,
    status: "Complete",

    tagline:
      "Adaptive support platform that personalizes interventions for neurodivergent users through real-time user-state modelling.",
    role: "Architected and built the adaptive engine; led the ASD and Anxiety modules",
    team: "Team of 4",
    stack: ["TypeScript", "React", "Supabase", "PostgreSQL"],
    proof: [
      "1,054 / 1,059 automated tests passing across 118 files",
      "Runner-Up — Girlathon 4.0 (2026)",
    ],

    summary:
      "Adaptive support platform that transforms condition-specific accessibility tools into context-aware experiences through behavioral context, user-state modeling, deterministic reasoning, and intervention personalization.",
    problem:
      "Accessibility tools are often implemented as isolated condition-specific features, making support difficult to adapt as a user's context, activity, and needs change during a session.",
    built: [
      "Designed and built the adaptive engine end to end — a deterministic 10-stage pipeline: user-state model with confidence-aware inference, reasoning core, adaptation policy, planner, runtime pipeline and UI executor",
      "Hardened it for production: evidence-gated decisions, hysteresis for temporal stability, guarded UI execution, learning from adaptation feedback, and per-user persistent personalization",
      "Connected 11 condition modules to the central engine so every module adapts through one shared runtime",
      "Led the ASD module (conversation assistance, scenario generator) and built the Anxiety module",
      "Integrated and released the team's work: merged pull requests to main, fixed production issues, and handled a rollback and redeploy",
    ],
    architecture:
      "Context Engine → Adaptive Runtime → User-State Model → Deterministic Reasoning → Policy/Conflict/Preference/Safety Evaluation → Hysteresis → Intervention Planning → Adaptive UI → Outcome/Reflection → Tier-9 Personalization. The platform uses React, FastAPI, Supabase, PostgreSQL/SQLite, and shared adaptive runtime components.",
    engineeringDecisions: [
      "Designed and implemented the core adaptive intelligence architecture to transform contextual and behavioral signals into structured user-state changes and adaptation decisions",
      "Separated context collection, reasoning, policy evaluation, conflict resolution, safety checks, hysteresis, planning, and execution into distinct adaptive stages",
      "Implemented intervention ranking and adaptive UI planning so support modules can be selected according to the current user state rather than only static condition configuration",
      "Added reflection and Tier-9 personalization so intervention outcomes can influence future strategy selection without making the core decision system dependent on an LLM",
      "Used shared adaptive runtime components across condition-specific support modules to reduce duplicated adaptation logic and maintain a consistent architecture",
    ],
    results: [
      "1,054 / 1,059 frontend tests passing across 118 test files",
      "11 condition modules connected to the central adaptive engine",
      "9 condition entries registered, with substantive support implemented across the major condition modules",
      "4 adaptive anxiety intervention types implemented",
      "Runner-Up — Girlathon 4.0 (2026)",
    ],

    solution:
      "Built the core adaptive intelligence architecture for a multi-condition support platform, combining contextual signals, user-state modeling, deterministic reasoning, intervention ranking, adaptive UI, and reflection-based personalization within a shared runtime.",
    impact:
      "The adaptive runtime converts behavioral and contextual signals such as task switching, typing pauses, navigation, mood, and session activity into structured user-state changes and context-aware support decisions, enabling the platform to adapt its interventions rather than relying solely on static feature selection.",
    challenges: [
      "Designing an adaptive architecture that could operate across multiple condition-specific support modules without tightly coupling their implementations",
      "Converting noisy contextual signals such as task switching, navigation, mood, and activity into stable user-state changes",
      "Preventing repeated context updates from triggering unnecessary adaptation cycles through content-signature deduplication and hysteresis",
      "Balancing personalization with deterministic safety and policy constraints",
      "Integrating adaptive decisions into an existing multi-feature frontend without making every feature dependent on the adaptive runtime",
    ],
    lessons: [
      "Adaptive systems require a clear separation between context collection, state representation, reasoning, planning, and execution",
      "Deterministic reasoning provides a more controllable foundation for safety-sensitive adaptation than making every decision dependent on an LLM",
      "Personalization is more useful when intervention outcomes can feed back into future strategy selection",
      "Hysteresis and deduplication are important for preventing unstable behavior in continuously evaluated adaptive systems",
      "A shared adaptive runtime allows condition-specific tools to evolve independently while maintaining consistent adaptation behavior",
    ],
    notes: [
      "Multi-stage adaptive reasoning and planning pipeline implemented",
      "Intervention ranking and reflection-based personalization implemented",
      "Production adaptive UI runtime implemented with backend-dependent features separated from client-side adaptation",
    ],

    github: "https://github.com/Civora-Forge/NeuroBridge",
    demo: "https://neuro-bridge-olive.vercel.app",
    paper: null,
  },

  {
    slug: "vanta-ai",
    title: "Vanta AI",
    abbr: "VA",
    color: "#7c3aed",
    year: "2025",
    kind: "project",
    featured: true,
    status: "Complete",

    tagline:
      "Digital-safety web app for preventing, detecting and reporting image-based abuse.",
    role: "Backend, feature-logic and deployment engineer",
    team: "Team of 3",
    stack: ["Express.js", "Ollama (Phi-3 Mini)", "SSE", "Supabase", "Docker", "React"],
    proof: [
      "Fuzzy Q&A matching: 97.2% accuracy on 144 test queries, 0 false positives",
      "Runner-Up — Girlathon 2025",
    ],

    summary:
      "Digital safety web application for preventing, detecting, and reporting image-based abuse through watermarking, content-trust analysis, legal document generation, anonymous reporting, and crisis-support tools.",
    problem:
      "Victims of image-based abuse often have to navigate disconnected tools to preserve evidence, understand their rights, report incidents, and request content removal. Vanta AI brings these workflows into a single safety-focused application.",
    built: [
      "Built the Express.js backend and chat API: Phi-3 Mini runs locally through Ollama, with responses streamed over Server-Sent Events — no hosted AI provider needed",
      "Wrote the content-safety logic (content checks, ML analysis, takedown checks, in-app warnings), the takedown-request flow and the legal-complaint generator",
      "Made chat work without a model: built-in safety Q&A answered before the model, matched with fuzzy matching, plus a benchmark script — it recovered 96% of the queries the baseline missed",
      "Deployed it: Docker, backend on Railway, frontend on Vercel; fixed production streaming (proxy buffering, duplicate headers, friendly errors when the model fails)",
    ],
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
    results: [
      "Fuzzy Q&A matching: 97.2% accuracy on a 144-case test set, zero false positives",
      "Recovered 96% of the perturbed queries the baseline matcher missed",
      "3 AI/ML integrations: Phi-3, SigLIP, and TensorFlow.js toxicity",
      "Runner-Up — Girlathon 2025",
    ],

    solution:
      "Built a web platform combining client-side image watermarking, layered content-trust scoring, anonymous reporting, legal and takedown document generation, crisis-support tools, and conversational guidance. The platform also includes optional local AI integrations for Phi-3 chat and SigLIP-based deepfake analysis, while TensorFlow.js provides browser-based toxicity analysis.",
    impact:
      "Delivered a functional prototype that brings prevention, detection, reporting, legal guidance, and crisis-support workflows into one application. The project was recognized as Runner-Up at Girlathon 2025.",
    challenges: [
      "Integrating optional local AI services while keeping the core application usable without them",
      "Designing safety workflows that remain functional without requiring user authentication",
      "Providing graceful fallbacks when LLM or deepfake infrastructure is unavailable",
      "Combining deterministic content rules with ML-based toxicity signals into a single interpretable trust score",
      "Keeping sensitive crisis evidence local while other reporting workflows use external persistence services",
    ],
    lessons: [
      "Local AI can provide useful domain-specific assistance while keeping inference under the developer's control, but deployment constraints must be considered from the beginning",
      "Anonymous-first design can remove unnecessary identity requirements from safety-critical workflows",
      "Client-side processing is useful when sensitive evidence should not automatically leave the user's device",
      "Deterministic fallbacks are important when AI infrastructure cannot be guaranteed",
      "Safety-oriented applications require careful separation between product convenience and actual privacy/security guarantees",
    ],
    notes: [
      "28 frontend routes across prevention, detection, reporting, legal guidance, and support workflows",
      "15 product feature screens",
      "20+ hardcoded safety Q&A pairs with fuzzy matching",
      "15 real stories, 10 awareness campaigns, 8+ legal categories, and multiple helpline/directory resources",
    ],

    github: "https://github.com/tp-shivha-shakthiy/VantaAI",
    demo: "https://vanta-ai-eight-eight.vercel.app",
    paper: null,
  },


  {
    slug: "network-intrusion-detection-under-class-imbalance",
    title: "Intrusion Detection under Class Imbalance",
    abbr: "NID",
    color: "#d97706",
    year: "2026",
    kind: "research",
    featured: false,
    status: "Paper accepted",

    tagline:
      "First-author paper: a leakage-controlled intrusion detection framework combining hybrid feature engineering and class balancing on the full UNSW-NB15 dataset.",
    role: "First author · Student Researcher, IIIT Kottayam",
    team: null,
    stack: ["Python", "PyTorch", "scikit-learn", "XGBoost"],
    // All figures below are taken from the accepted paper (verified against the PDF, Nov 2026).
    proof: [
      "Accepted — ICTCS 2026 (Springer LNNS), oral presentation",
      "98.70% binary accuracy · 96.66% multiclass accuracy on UNSW-NB15 (2.54M records)",
    ],
    publication: {
      title:
        "A novel intrusion detection framework with Hybrid Feature Engineering and Class Imbalance Techniques",
      authorship: "First author",
      venue: "ICTCS 2026 · Springer LNNS",
      status: "Accepted for oral presentation",
      paperId: "1056",
      headline:
        "98.70% binary accuracy and 96.66% multiclass accuracy on the full UNSW-NB15 dataset (2.54M records), under a leakage-controlled evaluation.",
    },

    summary:
      "Leakage-controlled intrusion detection framework for the complete UNSW-NB15 dataset, combining Mutual Information feature selection, standard scaling, PCA and training-only class balancing, evaluated across classical and deep learning models for binary and multiclass detection.",
    problem:
      "Modern networks generate large volumes of traffic with highly imbalanced attack distributions — in UNSW-NB15, normal traffic is about 87% of records and Worms has only 174 samples. Models can reach high overall accuracy while performing poorly on the rare attack classes, and preprocessing that leaks test information can inflate reported results.",
    built: [
      "First-authored the study on the full UNSW-NB15 dataset (2,540,044 records, 10 traffic classes); accepted at ICTCS 2026 (Springer LNNS)",
      "Built a leakage-controlled pipeline: stratified 80:20 split with five-fold stratified cross-validation, and the held-out test set isolated from feature selection, scaling, resampling and model selection",
      "Combined Mutual Information feature selection (top 15 features, computed per training fold) with standard scaling and PCA retaining 95% of variance",
      "Compared two training-only balancing strategies — SMOTE and Random Under-Sampling + KMeansSMOTE — across 7 classical and deep learning models",
      "Ran ablations over six preprocessing configurations to separate the effects of MI, PCA and balancing",
    ],
    architecture:
      "UNSW-NB15 (2.54M records) → Cleaning & categorical encoding → Stratified 80:20 split → MI feature selection (top 15, per training fold) → StandardScaler → PCA (95% variance) → Training-only balancing (SMOTE or RUS + KMeansSMOTE) → Models (HGB, Logistic Regression, XGBoost, DNN, LSTM, BiLSTM, shared-feature BiLSTM) → 5-fold stratified cross-validation + held-out test evaluation.",
    engineeringDecisions: [
      "Kept the held-out test set isolated from every fitted step — feature selection, scaling, PCA, resampling and model selection — so reported results are free of leakage",
      "Used Mutual Information instead of correlation-based selection to capture both linear and non-linear feature–label relationships",
      "Applied balancing only to training data, comparing conventional SMOTE with RUS (capped at 15,000 samples per class) followed by KMeansSMOTE",
      "Included Logistic Regression as a baseline to separate the effect of preprocessing and balancing from classifier complexity",
      "Built a shared-feature BiLSTM with one extractor and two output heads, jointly optimising binary and multiclass objectives",
    ],
    results: [
      "Shared-feature BiLSTM: 98.70% binary accuracy, 95.10% binary F1, 99.92% AUC",
      "DNN with MI + PCA: 96.66% multiclass accuracy, 97.29% weighted F1",
      "HGB with RUS + KMeansSMOTE: 96.29% accuracy, 96.93% F1, 99.76% AUC",
      "Evaluated 7 models across two balancing strategies and six ablation configurations",
      "Paper accepted for oral presentation — ICTCS 2026 (Springer LNNS)",
    ],

    solution:
      "Developed a modular intrusion detection pipeline implementing feature selection, standardization, dimensionality reduction and training-only class balancing, classifying traffic both as binary (normal vs attack) and multiclass (normal plus nine attack types). Classical and deep learning models are evaluated under one leakage-controlled protocol.",
    impact:
      "The shared-feature BiLSTM reached 98.70% binary accuracy and 99.92% AUC, and the DNN with MI and PCA reached 96.66% multiclass accuracy with 97.29% weighted F1. Ablations showed that the benefit of MI, PCA and balancing depends on the classifier, so preprocessing and imbalance handling should be chosen together with the downstream model.",
    challenges: [
      "Handling a highly imbalanced dataset of over 2.5 million network records, where the rarest class has only 174 samples",
      "Keeping every fitted preprocessing step inside the training folds so the test set stays untouched",
      "Designing preprocessing that generalized across classical and deep learning architectures",
      "Comparing diverse models using one consistent evaluation pipeline",
    ],
    lessons: [
      "Careful, leakage-free preprocessing matters as much as model choice",
      "The effect of feature selection, PCA and balancing is classifier-dependent and has to be evaluated jointly with the model",
      "High weighted scores can hide weak rare-class performance — macro F1 is the honest check",
      "Consistent evaluation methodology is essential for meaningful model comparison",
    ],
    notes: [
      "Macro F1 stays around 49–55% across models: the rarest attack classes remain hard to detect, which weighted metrics do not show",
      "Paper ID 1056 · co-authored with researchers at IIIT Kottayam and Govt. Polytechnic College, Tiruchirappalli",
    ],

    github: "https://github.com/tp-shivha-shakthiy/Intrusion-Detection-System",
    demo: null,
    paper: null,
  },

  {
    slug: "st-hf-vvi-reid",
    title: "ST-HF-VVI-ReID",
    abbr: "ReID",
    color: "#be185d",
    year: "2026",
    kind: "research",
    featured: false,
    status: "Internship project",

    tagline:
      "Video visible-infrared person re-identification: matching people across RGB and infrared camera footage.",
    role: "Research intern, NIT Tiruchirappalli — core architecture modules and evaluation",
    team: "Co-developed with one teammate",
    stack: ["Python", "PyTorch"],
    proof: [
      "Designed the core ST-HF modules, including Adaptive STHPF with a learned frequency-selection gate",
      "Cross-modality evaluation (CMC, Rank-k, mAP) and a 4-variant cutoff ablation",
    ],

    summary:
      "PyTorch implementation of Spatial-Temporal High-Frequency (ST-HF) learning for video-based visible-infrared person re-identification (VI-ReID), co-developed during a research internship.",
    problem:
      "Visible-Infrared Person Re-Identification aims to match individuals across RGB and infrared video streams. Cross-modal appearance differences, viewpoint variations, and temporal inconsistencies make robust identity matching a challenging computer vision problem.",
    built: [
      "Designed and implemented the core architecture modules: Modality Purifier, SDC, Adaptive STHPF with a learned frequency-selection gate, and DSR temporal refinement",
      "Built the cross-modality evaluation framework and a cutoff ablation pipeline with four variants (weak, paper, strong, adaptive)",
      "Wrote the dataset loaders, samplers and evaluation metrics",
      "Maintained the repository and integrated pull requests",
    ],
    architecture:
      "Video Frames → ResNet-50 Video Backbone → Spatial-Temporal High-Frequency Learning (Fixed or Adaptive STHF) → SDC & DSR Modules → Feature Embeddings → Cross-Modal Person Re-Identification.",
    engineeringDecisions: [
      "Designed the implementation around modular components to allow independent experimentation with backbone networks and frequency-learning modules",
      "Implemented both Fixed STHF and Adaptive STHF variants to compare static and learned frequency filtering strategies",
      "Used FFT-based high-pass filtering to emphasize discriminative spatial and temporal features",
      "Built a configurable training pipeline supporting multiple datasets, augmentation strategies, and evaluation protocols",
    ],
    results: [
      "Fixed STHF and Adaptive STHF evaluations run and logged, with comparison tables",
      "Support for HITSZ-VCM and BUPTcampus datasets",
      "Standard VI-ReID evaluation pipeline with CMC, Rank-k, and mAP metrics",
    ],

    solution:
      "Implemented a modular PyTorch research framework that reproduces the ST-HF architecture for video-based VI-ReID. The project includes baseline and frequency-enhanced models, enabling systematic experimentation with spatial-temporal high-frequency learning and adaptive frequency fusion.",
    impact:
      "Developed a reproducible research codebase supporting multiple ST-HF variants, configurable training pipelines, and standardized evaluation for cross-modal person re-identification.",
    challenges: [
      "Translating research paper concepts into a maintainable production-quality codebase",
      "Implementing spatial-temporal FFT operations efficiently within PyTorch",
      "Preserving compatibility across multiple model variants while minimizing duplicated code",
      "Reproducing experimental details from the original publication where implementation specifics were not explicitly documented",
    ],
    lessons: [
      "Research papers often require significant engineering effort beyond the published methodology",
      "Modular implementations make it easier to validate architectural changes independently",
      "Reproducibility depends as much on implementation details as on model design",
      "Building robust research infrastructure is essential before meaningful experimentation can begin",
    ],
    notes: [],

    github: "https://github.com/tp-shivha-shakthiy/sthf-vi-reid",
    demo: null,
    paper: null,
  },
];

// Status dot colour by meaning: done = green, in progress = amber, other = neutral accent
const DONE = ["Complete", "Paper accepted", "Internship project"];
const IN_PROGRESS = ["Active development"];
export function statusTone(status) {
  if (DONE.includes(status)) return "done";
  if (IN_PROGRESS.includes(status)) return "active";
  return "neutral";
}

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const MORE_PROJECTS = PROJECTS.filter((p) => !p.featured && p.kind === "project");
export const RESEARCH_PROJECTS = PROJECTS.filter((p) => p.kind === "research");
export const PUBLICATION_PROJECT = PROJECTS.find((p) => p.publication);
