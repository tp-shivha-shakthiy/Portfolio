// Single source for identity, contact and skills copy used across the site.

export const PROFILE = {
  name: "T P Shivha Shakthiy",
  displayName: "Shivha Shakthiy",
  role: "Software Engineer — Backend & Applied AI",
  bio: "Backend-focused engineer building reliable APIs and data pipelines with Python, FastAPI, PostgreSQL and Docker — with applied ML when the problem calls for it.",
  education: "B.Tech CSE (AI & Data Science) · IIIT Kottayam · Expected 2028",
  // Confirmed by owner (matches resume and git).
  email: "tpshivhashakthiyy@gmail.com",
  github: "https://github.com/tp-shivha-shakthiy",
  linkedin: "https://linkedin.com/in/t-p-shivha-shakthiy-801723346",
  availability: "Open to software engineering internships and full-time roles.",
  // TODO(owner): one line on what I am building now — not shown until confirmed
  now: null,
  // Short, verifiable highlights shown under the hero bio
  highlights: ["First-author paper, ICTCS 2026 (Springer LNNS)"],
  resumeSubject: "Résumé request — [Company]",
};

export const resumeMailto = () =>
  `mailto:${PROFILE.email}?subject=${encodeURIComponent(PROFILE.resumeSubject)}`;

export const GITHUB_USER = "tp-shivha-shakthiy";

// Shown in the About section beside the portrait (no scores, no graduation year)
export const ABOUT_EDUCATION = "B.Tech CSE (AI & Data Science), IIIT Kottayam";
export const ABOUT_PHOTO_CAPTION = "Kerala, India";

export const ABOUT = [
  "I'm a backend-focused software engineer. I design REST APIs with FastAPI and Express, model data in PostgreSQL, and ship services with Docker.",
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

// All seven entries, newest year first. Academic scores (CGPA, SGPA, percentages, marks)
// are deliberately not stored anywhere in the site source, so they can never ship.
export const RECOGNITION = [
  { title: "Runner-Up, Girlathon 4.0", context: "with NeuroBridge", year: "2026" },
  { title: "Cerebral Valley × Google DeepMind Hackathon", context: "Participant", year: "2026" },
  { title: "Google Student Ambassador", context: "", year: "2026" },
  { title: "GirlScript Summer of Code", context: "Contributor", year: "2026" },
  { title: "Runner-Up, Girlathon 2025", context: "with Vanta AI", year: "2025" },
  { title: "Top 10 Finalist, She Builds Tech 2.0", context: "Kerala Startup Mission", year: "2025" },
  { title: "School Topper", context: "Grade 12 and Grade 10", year: "2024" },
];

// Recognition grouped by year for display: [["2026", [...]], ["2025", [...]], ...]
export const RECOGNITION_BY_YEAR = RECOGNITION.reduce((groups, r) => {
  const g = groups.find(([y]) => y === r.year);
  if (g) g[1].push(r);
  else groups.push([r.year, [r]]);
  return groups;
}, []);
