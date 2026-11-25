// Single source for identity, contact and skills copy used across the site.

export const PROFILE = {
  name: "T P Shivha Shakthiy",
  role: "Software Engineer — Backend & Applied AI",
  bio: "Backend-focused engineer building reliable APIs and data pipelines with Python, FastAPI, PostgreSQL and Docker — with applied ML when the problem calls for it.",
  education: "B.Tech CSE (AI & Data Science) · IIIT Kottayam · Expected 2028",
  // Confirmed by owner (matches resume and git).
  email: "tpshivhashakthiyy@gmail.com",
  github: "https://github.com/tp-shivha-shakthiy",
  linkedin: "https://linkedin.com/in/t-p-shivha-shakthiy-801723346",
  availability: "Open to software engineering internships and full-time roles.",
  // Short, verifiable highlights shown under the hero bio
  highlights: ["First-author paper, ICTCS 2026 (Springer LNNS)"],
  resumeSubject: "Résumé request — [Company]",
};

export const resumeMailto = () =>
  `mailto:${PROFILE.email}?subject=${encodeURIComponent(PROFILE.resumeSubject)}`;

export const GITHUB_USER = "tp-shivha-shakthiy";

export const ABOUT = [
  "I'm a B.Tech Computer Science and Engineering (AI & Data Science) student at IIIT Kottayam, expected to graduate in 2028. My focus is backend engineering: designing REST APIs with FastAPI and Express, modelling data in PostgreSQL, and shipping services with Docker.",
  "I like architectures that are simple to reason about, resilient under real-world constraints, and easy for other engineers to maintain. When a problem calls for ML, I bring the same discipline to it — reproducible pipelines and consistent evaluation.",
];

export const SKILLS = [
  ["Languages", "Python · C++ · TypeScript · JavaScript · SQL"],
  ["Backend", "FastAPI · Express.js · REST APIs · async I/O · OAuth · SSE · SQLAlchemy"],
  ["Data", "PostgreSQL · Supabase · SQLite"],
  ["Tools", "Docker · Git · Linux · Render · Vercel"],
  ["AI / ML", "PyTorch · scikit-learn · XGBoost · Ollama"],
  ["Frontend", "React"],
];

export const RECOGNITION = [
  { title: "Runner-Up — Girlathon 4.0 (2026)", context: "NeuroBridge", year: "2026" },
  { title: "Runner-Up — Girlathon 2025", context: "Vanta AI", year: "2025" },
  { title: "Top 10 Finalist — She Builds Tech 2.0", context: "Kerala Startup Mission", year: "2025" },
  { title: "Participant — Cerebral Valley × Google DeepMind Hackathon", context: "", year: "2026" },
  { title: "Google Student Ambassador", context: "", year: "2026" },
  { title: "GirlScript Summer of Code Contributor", context: "", year: "2026" },
  { title: "School Topper — Grade 12: 99.9%, Grade 10: 97.4%", context: "", year: "2024" },
];
