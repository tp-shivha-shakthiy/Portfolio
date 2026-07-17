function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const PROJECTS = [
  {
    abbr: "VA",
    color: "#7c3aed",
    slug: slugify("Vanta AI"),
    title: "Vanta AI",
    year: "2025",
    type: "product",
    status: "Complete",
    category: "Full-Stack · Applied ML · Safety",
    summary:
      "Full-stack web application developed by a three-member team to support victims of image-based abuse through AI-assisted guidance, reporting tools, and privacy-focused system design.",
    metric: "Runner-Up — Girlathon 2025",
    problem:
      "Victims of image-based abuse often need to navigate multiple disconnected services to understand their legal options, document incidents, and begin the reporting process. Existing solutions primarily focus on emergency response rather than providing integrated guidance and reporting assistance.",
    solution:
      "Contributed to the development of a full-stack platform that combines reporting workflows, educational resources, and an AI-powered legal assistant. My primary contribution was building the conversational AI backend using Phi-3 running locally via Ollama, enabling contextual guidance and complaint draft generation while prioritizing user privacy.",
    impact:
      "Delivered a working proof of concept that unified AI-assisted guidance with reporting workflows. The project was recognized as Runner-Up at Girlathon 2025.",
    architecture:
      "React frontend → Express.js chat backend → Firebase & Supabase for authentication and data → Local Phi-3 (Ollama) powers the conversational assistant and complaint drafting workflow. Additional ML services, including deepfake and harassment detection, were developed as separate modules by the team.",
    engineeringDecisions: [
      "Chose Phi-3 via Ollama to enable privacy-preserving local AI inference during development",
      "Implemented a dual-mode chat backend with local LLM support",
      "Used Server-Sent Events (SSE) to stream AI responses for a more responsive chat experience",
      "Structured complaint generation as editable drafts rather than fixed documents",
    ],
    challenges: [
      "Integrating a locally hosted LLM into a full-stack application",
      "Maintaining consistent chat functionality across local and deployed environments",
      "Designing prompts that produced reliable, structured legal guidance",
      "Managing inference latency on consumer hardware",
    ],
    metrics: [
      "Built a functional AI-powered legal guidance and complaint drafting system",
      "Successfully integrated the chat service into the team's platform",
      "Runner-Up at Girlathon 2025",
      "Demonstrated a privacy-first conversational AI workflow using local inference",
    ],
    lessons: [
      "Local language models can effectively power focused, domain-specific assistants",
      "Deployment constraints should be considered early when relying on local AI services",
      "Streaming responses significantly improve the conversational experience",
      "Clear ownership boundaries are essential when integrating independently developed modules within a team project",
    ],
    github: "https://github.com/tp-shivha-shakthiy/VantaAI",
    demo: "https://vanta-ai-eight-eight.vercel.app",
    paper: null,
  },
  {
    abbr: "N",
    color: "#0891b2",
    slug: slugify("Neurobridge"),
    title: "Neurobridge",
    year: "2026",
    type: "product",
    status: "Active Development",
    category: "Full-Stack · Accessibility · Healthcare",
    summary:
      "Accessibility-first health platform supporting neurodiverse individuals through modular assistive tools, AI-powered personalization, and privacy-focused system design.",
    metric: "Top 10 Finalist — SheBuildsTech 2026",
    problem:
      "Most digital health tools focus on a single neurodivergent condition, forcing users to switch between multiple applications for support. This fragmented experience makes it difficult to access personalized, accessible, and consistent assistance.",
    solution:
      "Built a full-stack platform supporting eight neurodivergent conditions within a unified application. The system combines modular feature gating, role-based access, AI-assisted learning, and offline resilience to deliver personalized support while maintaining a shared codebase.",
    impact:
      "Developed a scalable proof of concept demonstrating how a single platform can adapt to diverse accessibility needs through configurable feature modules. The project was selected among the Top 10 teams at SheBuildsTech 2026.",
    architecture:
      "React frontend → Flask backend → MongoDB & Supabase Authentication → Google Gemini AI for personalized assistance and learning workflows. A centralized feature registry dynamically enables modules based on each user's selected conditions, while offline-first storage ensures continued usability without backend connectivity.",
    engineeringDecisions: [
      "Designed a centralized feature registry to dynamically enable condition-specific modules",
      "Implemented role-based access control for users, guardians, and administrators",
      "Adopted an offline-first architecture with local storage fallbacks for improved reliability",
      "Integrated Google Gemini for personalized learning assistance while keeping core application functionality independent of AI services",
      "Built reusable components that could be shared across multiple conditions, reducing duplication and improving maintainability",
    ],
    challenges: [
      "Designing a scalable architecture that supports multiple neurodivergent conditions without tightly coupling feature implementations",
      "Balancing personalization with a consistent and accessible user experience",
      "Maintaining synchronization between offline and authenticated user states",
      "Building reusable modules while preserving condition-specific workflows",
    ],
    metrics: [
      "Functional platform supporting 8 neurodivergent conditions",
      "Modular feature-gated architecture with reusable components",
      "AI-assisted personalized learning and accessibility features",
      "Top 10 Finalist — SheBuildsTech 2026",
    ],
    lessons: [
      "Modular system design scales better than maintaining separate applications for related domains",
      "Accessibility should shape architectural decisions from the earliest stages of development",
      "Offline resilience significantly improves usability for health-focused applications",
      "AI delivers the most value when integrated into specialized workflows rather than replacing core application logic",
    ],
    github: "https://github.com/tp-shivha-shakthiy/Neurobridge",
    demo: "https://neurobridge-one.vercel.app",
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
    metric: "116/117 Tests Passing",
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
    abbr: "TR",
    color: "#059669",
    slug: slugify("TRACE"),
    title: "TRACE",
    year: "2026",
    type: "product",
    status: "Active Development",
    category: "Backend · Event-Driven Systems · Developer Analytics",
    summary:
      "Event-driven developer intelligence platform that analyzes GitHub activity to model developer expertise, infer technical domains, and generate personalized engineering insights through scalable backend architecture.",
    metric: null,
    problem:
      "Developers leave valuable signals across repositories, commits, technologies, and contribution history, but these signals remain fragmented across platforms. Existing developer profiles primarily summarize activity rather than deriving meaningful insights about expertise, growth, and specialization.",
    solution:
      "Building an event-driven platform that ingests GitHub activity, normalizes developer events, constructs a knowledge graph, and applies machine learning to infer technical domains, recommend learning paths, and visualize engineering growth over time.",
    impact: null,
    architecture:
      "GitHub OAuth → GitHub API & Webhooks → FastAPI → PostgreSQL → SQLAlchemy & Alembic → Redis & Celery → Developer Knowledge Graph → Domain Inference Engine → Analytics Dashboard.",
    engineeringDecisions: [
      "Adopted an event-driven architecture to decouple data ingestion from downstream processing",
      "Selected PostgreSQL with SQLAlchemy and Alembic for reliable schema evolution and relational modeling",
      "Used Redis and Celery to handle asynchronous synchronization, retries, and background processing",
      "Designed idempotent event pipelines to safely process duplicate webhook deliveries",
      "Planned a modular architecture separating infrastructure, knowledge graph construction, ML inference, and observability",
    ],
    challenges: [
      "Designing a scalable event pipeline that handles high-volume GitHub webhook data",
      "Building a knowledge graph that accurately models developer expertise from contribution patterns",
      "Ensuring reliable asynchronous processing with graceful failure handling",
    ],
    metrics: [
      "Architecture and system design finalized",
      "Backend infrastructure under active development",
      "GitHub OAuth and repository synchronization in progress",
      "90-day development roadmap established",
    ],
    lessons: [
      "Production systems benefit from event-driven architectures that separate ingestion from processing",
      "Investing in infrastructure early simplifies future feature development",
      "Strong data models are the foundation for reliable analytics and machine learning pipelines",
    ],
    github: "https://github.com/tp-shivha-shakthiy/trace",
    demo: null,
    paper: null,
  },
];
