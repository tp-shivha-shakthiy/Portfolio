import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const NAV = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = {
  Programming: ["C++", "Python", "JavaScript", "C"],
  "AI / ML": ["PyTorch", "Scikit-learn", "Deep Learning", "Data Analysis", "SMOTE / Imbalanced Learning"],
  "Web Development": ["React", "Node.js", "Express", "FastAPI", "MongoDB", "Supabase"],
  "Tools & Systems": ["Git", "GitHub", "VS Code", "Jupyter", "Ollama", "MySQL", "REST APIs"],
};

const PROJECTS = [
  {
    abbr: "VA", color: "#7c3aed",
    name: "Vanta AI", year: "2025",
    desc: "Full-stack women's safety platform with ML-based harassment detection, a local LLM (Phi-3 via Ollama) for contextual responses, and automated legal complaint generation.",
    tags: ["React", "FastAPI", "PyTorch", "Ollama", "Phi-3"],
    github: "https://github.com/", demo: "#", status: null,
  },
  {
    abbr: "N", color: "#0891b2",
    name: "Neurobridge", year: "2026",
    desc: "Cognitive support system with ML-based behavioral analysis modules and a real-time pipeline tightly integrating frontend and backend ML.",
    tags: ["React", "Python", "Scikit-learn"],
    github: "https://github.com/", demo: "#", status: null,
  },
  {
    abbr: "ALP", color: "#059669",
    name: "Adaptive Learning Platform", year: "2025",
    desc: "Personalized learning engine that adapts difficulty and content sequencing using student performance signals.",
    tags: ["Node.js", "React", "MongoDB", "ML"],
    github: null, demo: null, status: "In development",
  },
  {
    abbr: "IDS", color: "#d97706",
    name: "Intrusion Detection System", year: "2026",
    desc: "Preprocessing + benchmarking pipeline on NSL-KDD and CICIDS using SMOTE / KMeans-SMOTE and stratified CV across XGBoost, RF and CNN.",
    tags: ["Python", "XGBoost", "CNN", "SMOTE"],
    github: null, demo: null, status: "Research · WIP",
  },
  {
    abbr: "CVE", color: "#be185d",
    name: "Computer Vision Experiments", year: "2026",
    desc: "Feature learning pipelines and evaluation frameworks for representation learning, run on real-world image datasets.",
    tags: ["PyTorch", "OpenCV", "Python"],
    github: null, demo: null, status: "Research · WIP",
  },
];

const EXPERIENCE = [
  {
    role: "Research Intern", period: "May 2026 – Present",
    org: "NIT Tiruchirappalli", sub: "Dr. Brindha M",
    points: [
      "Computer vision and representation learning research",
      "Designing feature learning pipelines & evaluation frameworks",
      "Controlled experiments on real-world datasets",
    ],
  },
  {
    role: "Student Researcher", period: "Jan 2026 – Present",
    org: "IIIT Kottayam", sub: "Dr. Balasubramanian P",
    points: [
      "Preprocessing pipelines for NSL-KDD & CICIDS",
      "Applied SMOTE / KMeans-SMOTE for imbalanced classification",
      "Benchmarked XGBoost, RF, CNN with stratified CV",
    ],
  },
  {
    role: "Research Core Member", period: "Jan 2025 – Present",
    org: "Enigma Research Club", sub: "",
    points: [
      "Reproduced ML research papers & validated results",
      "Built modular ML pipelines (preprocessing → eval)",
    ],
  },
];

const ACHIEVEMENTS = [
  "Runner-Up — Girlathon 2025 (Vanta AI)",
  "Top 10 — She Builds Tech 2.0 (Kerala Startup Mission)",
  "Google Gemini Student Ambassador, 2026",
  "GirlScript Summer of Code 2026 Contributor",
  "School Topper — Grade 12: 99.9%, Grade 10: 97.4%",
  "Certifications: Infosys (Networking & Web), freeCodeCamp (RWD)",
];

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } },
      { threshold: 0.1 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);
  return [ref, { opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s` }];
}

/* ─────────────────────────────────────────────
   SMALL COMPONENTS
───────────────────────────────────────────── */
function Tag({ label }) {
  return (
    <span style={{ display:"inline-block", padding:"2px 8px", fontSize:11, fontFamily:"monospace", border:"1px solid #2a2a2a", borderRadius:4, color:"#888", marginRight:4, marginBottom:4 }}>
      {label}
    </span>
  );
}

function SectionHeading({ num, title }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:48 }}>
      <span style={{ fontFamily:"monospace", fontSize:11, color:"#333", letterSpacing:"0.15em" }}>{num}</span>
      <div style={{ flex:1, height:1, background:"#1a1a1a" }} />
      <span style={{ fontFamily:"monospace", fontSize:11, color:"#444", textTransform:"uppercase", letterSpacing:"0.15em" }}>{title}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN
───────────────────────────────────────────── */
export default function Portfolio() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);

  /* Active nav tracking */
  useEffect(() => {
    const onScroll = () => {
      const ids = ["hero", ...NAV.map(n => n.toLowerCase())];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = id => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMenuOpen(false); };

  /* ── HERO fade-in items ── */
  const [hRef, hStyle] = useFadeIn(0.1);
  const [h2Ref, h2Style] = useFadeIn(0.2);
  const [h3Ref, h3Style] = useFadeIn(0.3);
  const [hBtnRef, hBtnStyle] = useFadeIn(0.4);
  const [hChipRef, hChipStyle] = useFadeIn(0.5);
  const [hImgRef, hImgStyle] = useFadeIn(0.25);

  /* Section fades */
  const [aRef, aStyle] = useFadeIn(0);
  const [a2Ref, a2Style] = useFadeIn(0.1);
  const [skRef, skStyle] = useFadeIn(0);
  const [prRef, prStyle] = useFadeIn(0);
  const [exRef, exStyle] = useFadeIn(0);
  const [coRef, coStyle] = useFadeIn(0);

  const S = { // shared section wrapper style
    maxWidth: 1024, margin:"0 auto", padding:"96px 24px",
  };

  return (
    <div style={{ background:"#080808", color:"#d1d5db", minHeight:"100vh", fontFamily:"'Inter', -apple-system, sans-serif" }}>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #080808; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #1f1f1f; }
        a { text-decoration: none; color: inherit; }
        button { cursor: pointer; border: none; background: none; color: inherit; font-family: inherit; }
        input, textarea { font-family: inherit; }
        .nav-link { font-family: monospace; font-size: 11px; letter-spacing: .15em; text-transform: uppercase; color: #555; transition: color .2s; }
        .nav-link:hover, .nav-link.active { color: #e5e7eb; }
        .btn-primary { background: #fff; color: #000; padding: 10px 20px; border-radius: 6px; font-size: 13px; font-weight: 500; transition: background .2s; }
        .btn-primary:hover { background: #e5e7eb; }
        .btn-outline { border: 1px solid #2a2a2a; color: #aaa; padding: 10px 20px; border-radius: 6px; font-size: 13px; transition: border-color .2s, color .2s; }
        .btn-outline:hover { border-color: #555; color: #e5e7eb; }
        .btn-ghost { color: #555; font-size: 13px; padding: 10px 4px; transition: color .2s; }
        .btn-ghost:hover { color: #ccc; }
        .proj-card { border: 1px solid #141414; border-radius: 10px; padding: 24px; background: transparent; transition: border-color .25s, background .25s; }
        .proj-card:hover { border-color: #2a2a2a; background: rgba(255,255,255,0.02); }
        .skill-card { border: 1px solid #141414; border-radius: 10px; padding: 20px; transition: border-color .25s; }
        .skill-card:hover { border-color: #2a2a2a; }
        .contact-item { border: 1px solid #141414; border-radius: 8px; padding: 16px; transition: border-color .25s; }
        .contact-item:hover { border-color: #2a2a2a; }
        .form-input { width: 100%; background: transparent; border: 1px solid #1f1f1f; border-radius: 6px; padding: 10px 14px; font-size: 13px; color: #d1d5db; outline: none; transition: border-color .2s; }
        .form-input::placeholder { color: #333; }
        .form-input:focus { border-color: #444; }
        .exp-dot { width: 8px; height: 8px; border-radius: 50%; background: #333; border: 1px solid #555; position: absolute; left: -4.5px; top: 4px; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform:none; } }
      `}</style>

      {/* ════════════════════════
          NAVBAR
      ════════════════════════ */}
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, borderBottom:"1px solid #111", background:"rgba(8,8,8,.85)", backdropFilter:"blur(12px)" }}>
        <nav style={{ maxWidth:1024, margin:"0 auto", padding:"0 24px", height:56, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <button onClick={() => goto("hero")} style={{ fontFamily:"monospace", fontSize:13, color:"#fff", letterSpacing:".15em" }}>
            TPS<span style={{ color:"#333" }}>.</span>dev
          </button>

          {/* Desktop */}
          <div style={{ display:"flex", alignItems:"center", gap:28 }} className="desktop-nav">
            {NAV.map(n => (
              <button key={n} className={`nav-link${active===n.toLowerCase()?" active":""}`} onClick={() => goto(n.toLowerCase())}>
                {n}
              </button>
            ))}
            <a href="#" style={{ marginLeft:8, padding:"6px 14px", border:"1px solid #2a2a2a", borderRadius:6, fontFamily:"monospace", fontSize:11, color:"#888", letterSpacing:".1em", transition:"all .2s" }}
              onMouseEnter={e=>{e.target.style.borderColor="#555";e.target.style.color="#ddd";}}
              onMouseLeave={e=>{e.target.style.borderColor="#2a2a2a";e.target.style.color="#888";}}>
              Resume ↗
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display:"none", color:"#aaa" }} className="burger">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {menuOpen
                ? <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                : <><line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="3" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="3" y1="16" x2="17" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
              }
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <div style={{ background:"#0d0d0d", borderTop:"1px solid #111", padding:"16px 24px", display:"flex", flexDirection:"column", gap:16 }}>
            {NAV.map(n => (
              <button key={n} className="nav-link" style={{ textAlign:"left" }} onClick={() => goto(n.toLowerCase())}>{n}</button>
            ))}
          </div>
        )}
      </header>

      {/* ════════════════════════
          HERO
      ════════════════════════ */}
      <section id="hero" style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden" }}>
        {/* purple glow */}
        <div style={{ position:"absolute", top:"20%", left:"35%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(109,40,217,.12) 0%, transparent 70%)", pointerEvents:"none" }} />
        {/* grid lines */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(#ffffff04 1px, transparent 1px), linear-gradient(90deg, #ffffff04 1px, transparent 1px)", backgroundSize:"72px 72px", pointerEvents:"none" }} />

        <div style={{ maxWidth:1024, margin:"0 auto", padding:"0 24px", width:"100%", display:"grid", gridTemplateColumns:"1fr auto", gap:48, alignItems:"center", paddingTop:80 }}>

          {/* Left */}
          <div>
            <div ref={hRef} style={{ ...hStyle, marginBottom:20 }}>
              <span style={{ fontFamily:"monospace", fontSize:11, letterSpacing:".2em", color:"#4b5563", textTransform:"uppercase", display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#22c55e", display:"inline-block", boxShadow:"0 0 6px #22c55e" }} />
                Available for Internships · SDE / AI Roles
              </span>
            </div>

            <div ref={h2Ref} style={h2Style}>
              <h1 style={{ fontFamily:"'DM Serif Display', Georgia, serif", fontSize:"clamp(42px,7vw,76px)", fontWeight:400, lineHeight:1.05, color:"#f9fafb", letterSpacing:"-.02em", marginBottom:12 }}>
                T P Shivha<br />
                <span style={{ color:"#4b5563" }}>Shakthiy</span>
              </h1>
            </div>

            <div ref={h3Ref} style={{ ...h3Style, marginBottom:16 }}>
              <p style={{ fontSize:16, color:"#6b7280", fontWeight:300, letterSpacing:".05em" }}>AI &amp; Full-Stack Developer</p>
              <p style={{ fontSize:13, color:"#374151", lineHeight:1.7, maxWidth:460, marginTop:12 }}>
                Computer Science undergraduate at IIIT Kottayam, focused on building intelligent systems and elegant,
                production-grade software at the intersection of AI and engineering.
              </p>
            </div>

            <div ref={hBtnRef} style={{ ...hBtnStyle, display:"flex", flexWrap:"wrap", gap:10, marginBottom:40 }}>
              <button className="btn-primary" onClick={() => goto("projects")}>View Work</button>
              <a href="#" className="btn-outline">Download Resume</a>
              <button className="btn-ghost" onClick={() => goto("contact")}>Get in Touch →</button>
            </div>

            <div ref={hChipRef} style={{ ...hChipStyle, display:"flex", flexWrap:"wrap", gap:8 }}>
              {["IIIT Kottayam · B.Tech CSE (AI & DS)", "Research Intern · NIT Trichy", "Based in India"].map(t => (
                <span key={t} style={{ padding:"4px 12px", border:"1px solid #1f1f1f", borderRadius:99, fontFamily:"monospace", fontSize:11, color:"#374151" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right — portrait card */}
          <div ref={hImgRef} style={{ ...hImgStyle, flexShrink:0 }}>
            <div style={{ position:"relative", width:260 }}>
              {/* outer glow ring */}
              <div style={{ position:"absolute", inset:-1, borderRadius:16, background:"linear-gradient(135deg,#7c3aed22,#06b6d422)", zIndex:0 }} />
              <div style={{ position:"relative", zIndex:1, border:"1px solid #1f1f1f", borderRadius:14, overflow:"hidden", background:"#111", aspectRatio:"3/4" }}>
                {/* Portrait placeholder — replace src with actual image */}
                <img
                  src="https://id-preview-688b864f--b1442a87-cd16-4568-bbb6-b6592ce3024a.lovable.app/__l5e/assets-v1/a19dc4c1-a1fc-4aba-8b64-fd37c6bbb331/hero-portrait.jpeg"
                  alt="Portrait of T P Shivha Shakthiy"
                  style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
                  onError={e => { e.target.style.display="none"; }}
                />
                {/* fallback gradient when image fails */}
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#1e1b4b,#0c1a2e)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <div style={{ textAlign:"center" }}>
                    <div style={{ width:72, height:72, borderRadius:"50%", background:"#1e1b4b", border:"1px solid #312e81", margin:"0 auto 12px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, color:"#818cf8" }}>TPS</div>
                    <p style={{ fontFamily:"monospace", fontSize:10, color:"#4338ca", letterSpacing:".1em" }}>AI · ML · Engineering</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop:10, textAlign:"center" }}>
                <p style={{ fontFamily:"monospace", fontSize:10, color:"#374151", letterSpacing:".1em" }}>AI · ML · Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════
          ABOUT
      ════════════════════════ */}
      <section id="about" style={{ ...S, borderTop:"1px solid #111" }}>
        <div ref={aRef} style={aStyle}>
          <SectionHeading num="01 —" title="About" />
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>
          <div ref={aRef} style={aStyle}>
            <h2 style={{ fontFamily:"'DM Serif Display', Georgia, serif", fontSize:"clamp(24px,3vw,32px)", fontWeight:400, color:"#f9fafb", lineHeight:1.25, marginBottom:24 }}>
              Engineering at the intersection of AI and real-world systems.
            </h2>
            <p style={{ fontSize:14, color:"#6b7280", lineHeight:1.8, marginBottom:14 }}>
              I'm a Computer Science undergraduate at IIIT Kottayam, specializing in Artificial Intelligence and Data
              Science. My work sits at the seam between deep learning research and production-grade full-stack engineering.
            </p>
            <p style={{ fontSize:14, color:"#6b7280", lineHeight:1.8, marginBottom:14 }}>
              I'm currently a research intern at NIT Tiruchirappalli working on computer vision and representation
              learning, and a student researcher at IIIT Kottayam building intrusion detection pipelines on NSL-KDD
              and CICIDS datasets.
            </p>
            <p style={{ fontSize:14, color:"#6b7280", lineHeight:1.8 }}>
              Beyond research, I love shipping products — from women's safety platforms with local LLMs to adaptive
              learning systems. I care about clean abstractions, competitive programming, and systems that actually
              help people.
            </p>
          </div>
          <div ref={a2Ref} style={a2Style}>
            {[
              ["Education", "B.Tech CS (AI & DS), IIIT Kottayam · 2024–2028"],
              ["Focus", "ML · Full-Stack · System Design · CP"],
              ["Based in", "Pathanamthitta, Kerala, India"],
              ["Currently", "Research Intern, NIT Trichy"],
            ].map(([k, v]) => (
              <div key={k} style={{ borderBottom:"1px solid #111", paddingBottom:20, marginBottom:20 }}>
                <p style={{ fontFamily:"monospace", fontSize:10, color:"#374151", textTransform:"uppercase", letterSpacing:".15em", marginBottom:6 }}>{k}</p>
                <p style={{ fontSize:14, color:"#d1d5db" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════
          SKILLS
      ════════════════════════ */}
      <section id="skills" style={{ ...S, borderTop:"1px solid #111" }}>
        <div ref={skRef} style={skStyle}>
          <SectionHeading num="02 —" title="Skills" />
          <h2 style={{ fontFamily:"'DM Serif Display', Georgia, serif", fontSize:"clamp(24px,3vw,32px)", fontWeight:400, color:"#f9fafb", marginBottom:8 }}>
            A toolkit spanning research and shipping.
          </h2>
          <p style={{ fontSize:14, color:"#4b5563", marginBottom:40 }}>
            The stack I reach for across ML pipelines, full-stack products, and systems work.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:16 }}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="skill-card">
                <p style={{ fontFamily:"monospace", fontSize:10, color:"#374151", textTransform:"uppercase", letterSpacing:".15em", marginBottom:16 }}>{cat}</p>
                <ul style={{ listStyle:"none" }}>
                  {items.map(s => (
                    <li key={s} style={{ display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#6b7280", marginBottom:8 }}>
                      <span style={{ width:4, height:4, borderRadius:"50%", background:"#2a2a2a", flexShrink:0 }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════
          PROJECTS
      ════════════════════════ */}
      <section id="projects" style={{ ...S, borderTop:"1px solid #111" }}>
        <div ref={prRef} style={prStyle}>
          <SectionHeading num="03 —" title="Projects" />
          <h2 style={{ fontFamily:"'DM Serif Display', Georgia, serif", fontSize:"clamp(24px,3vw,32px)", fontWeight:400, color:"#f9fafb", marginBottom:8 }}>
            Selected work, from research to shipped products.
          </h2>
          <p style={{ fontSize:14, color:"#4b5563", marginBottom:40 }}>
            A mix of applied ML, full-stack systems, and research prototypes.
          </p>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {PROJECTS.map(p => (
              <div key={p.name} className="proj-card">
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:16, marginBottom:12 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                    {/* abbr badge */}
                    <div style={{
                      width:44, height:44, borderRadius:8, flexShrink:0,
                      background: p.color + "18",
                      border: `1px solid ${p.color}44`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontFamily:"monospace", fontSize:10, color: p.color, letterSpacing:".05em",
                    }}>{p.abbr}</div>
                    <div>
                      <h3 style={{ fontSize:15, fontWeight:500, color:"#f9fafb", marginBottom:2 }}>{p.name}</h3>
                      <span style={{ fontFamily:"monospace", fontSize:11, color:"#374151" }}>{p.year}</span>
                    </div>
                  </div>
                  {p.status && (
                    <span style={{ fontFamily:"monospace", fontSize:10, color:"#4b5563", border:"1px solid #1f1f1f", borderRadius:99, padding:"3px 10px", flexShrink:0, whiteSpace:"nowrap" }}>
                      {p.status}
                    </span>
                  )}
                </div>

                <p style={{ fontSize:13, color:"#6b7280", lineHeight:1.7, marginBottom:12, paddingLeft:58 }}>
                  {p.desc}
                </p>

                <div style={{ paddingLeft:58, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
                  <div>
                    {p.tags.map(t => <Tag key={t} label={t} />)}
                  </div>
                  {(p.github || p.demo) && (
                    <div style={{ display:"flex", gap:12 }}>
                      {p.github && (
                        <a href={p.github} style={{ fontFamily:"monospace", fontSize:11, color:"#555", transition:"color .2s" }}
                          onMouseEnter={e=>e.target.style.color="#ccc"} onMouseLeave={e=>e.target.style.color="#555"}>
                          GitHub →
                        </a>
                      )}
                      {p.demo && p.demo !== "#" && (
                        <a href={p.demo} style={{ fontFamily:"monospace", fontSize:11, color:"#555", transition:"color .2s" }}
                          onMouseEnter={e=>e.target.style.color="#ccc"} onMouseLeave={e=>e.target.style.color="#555"}>
                          Live Demo →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════
          EXPERIENCE
      ════════════════════════ */}
      <section id="experience" style={{ ...S, borderTop:"1px solid #111" }}>
        <div ref={exRef} style={exStyle}>
          <SectionHeading num="04 —" title="Experience & Achievements" />
          <h2 style={{ fontFamily:"'DM Serif Display', Georgia, serif", fontSize:"clamp(24px,3vw,32px)", fontWeight:400, color:"#f9fafb", marginBottom:48 }}>
            Research, hackathons, and recognitions.
          </h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>

            {/* Timeline */}
            <div style={{ position:"relative", paddingLeft:20, borderLeft:"1px solid #1f1f1f" }}>
              {EXPERIENCE.map((e, i) => (
                <div key={i} style={{ position:"relative", marginBottom: i < EXPERIENCE.length-1 ? 40 : 0 }}>
                  <div className="exp-dot" />
                  <p style={{ fontFamily:"monospace", fontSize:10, color:"#374151", letterSpacing:".1em", marginBottom:4 }}>{e.period}</p>
                  <h3 style={{ fontSize:15, fontWeight:500, color:"#f9fafb", marginBottom:3 }}>{e.role}</h3>
                  <p style={{ fontSize:13, color:"#6b7280", marginBottom:10 }}>
                    {e.org}{e.sub && <span style={{ color:"#2a2a2a" }}> — {e.sub}</span>}
                  </p>
                  <ul style={{ listStyle:"none" }}>
                    {e.points.map(pt => (
                      <li key={pt} style={{ display:"flex", gap:10, fontSize:13, color:"#4b5563", marginBottom:5 }}>
                        <span style={{ color:"#2a2a2a", flexShrink:0 }}>–</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <p style={{ fontFamily:"monospace", fontSize:10, color:"#374151", textTransform:"uppercase", letterSpacing:".15em", marginBottom:20 }}>Achievements</p>
              <ul style={{ listStyle:"none" }}>
                {ACHIEVEMENTS.map(a => (
                  <li key={a} style={{ display:"flex", gap:12, fontSize:13, color:"#6b7280", borderBottom:"1px solid #111", paddingBottom:12, marginBottom:12 }}>
                    <span style={{ color:"#ca8a04", flexShrink:0 }}>★</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════
          CONTACT
      ════════════════════════ */}
      <section id="contact" style={{ ...S, borderTop:"1px solid #111" }}>
        <div ref={coRef} style={coStyle}>
          <SectionHeading num="05 —" title="Contact" />
          <h2 style={{ fontFamily:"'DM Serif Display', Georgia, serif", fontSize:"clamp(24px,3vw,32px)", fontWeight:400, color:"#f9fafb", marginBottom:8 }}>
            Let's build something.
          </h2>
          <p style={{ fontSize:14, color:"#4b5563", marginBottom:48 }}>
            Open to internships, research collaborations, and full-time SDE / AI roles.
          </p>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48 }}>
            {/* Contact links */}
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {[
                { label:"Email", value:"shivhashakthiy@gmail.com", href:"mailto:shivhashakthiy@gmail.com" },
                { label:"GitHub", value:"github.com/shivhashakthiy", href:"https://github.com/" },
                { label:"LinkedIn", value:"linkedin.com/in/shivhashakthiy", href:"https://linkedin.com/" },
                { label:"Location", value:"Pathanamthitta, Kerala, India", href:null },
              ].map(({ label, value, href }) => (
                <div key={label} className="contact-item">
                  <p style={{ fontFamily:"monospace", fontSize:10, color:"#374151", letterSpacing:".12em", marginBottom:4 }}>{label}</p>
                  {href
                    ? <a href={href} style={{ fontSize:13, color:"#9ca3af", transition:"color .2s" }}
                        onMouseEnter={e=>e.target.style.color="#e5e7eb"} onMouseLeave={e=>e.target.style.color="#9ca3af"}>
                        {value}
                      </a>
                    : <p style={{ fontSize:13, color:"#6b7280" }}>{value}</p>
                  }
                </div>
              ))}
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div style={{ display:"flex", flexDirection:"column", gap:12, paddingTop:24 }}>
                  <span style={{ fontSize:28, color:"#22c55e" }}>✓</span>
                  <p style={{ fontSize:14, color:"#6b7280" }}>Message sent. I'll get back to you soon.</p>
                </div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {["name","email","subject"].map(f => (
                    <input key={f} className="form-input"
                      type={f==="email"?"email":"text"}
                      placeholder={f.charAt(0).toUpperCase()+f.slice(1)}
                      value={form[f]}
                      onChange={e=>setForm({...form,[f]:e.target.value})}
                      required
                    />
                  ))}
                  <textarea className="form-input"
                    rows={4} placeholder="Message"
                    value={form.message}
                    onChange={e=>setForm({...form,message:e.target.value})}
                    style={{ resize:"none" }}
                    required
                  />
                  <button className="btn-primary" style={{ width:"100%" }} onClick={e=>{e.preventDefault();if(form.name&&form.email&&form.message)setSent(true);}}>
                    Send message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════
          FOOTER
      ════════════════════════ */}
      <footer style={{ borderTop:"1px solid #111", maxWidth:1024, margin:"0 auto", padding:"32px 24px", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:16 }}>
        <p style={{ fontFamily:"monospace", fontSize:11, color:"#1f2937" }}>
          © 2026 T P Shivha Shakthiy. Crafted with curiosity.
        </p>
        <div style={{ display:"flex", gap:24 }}>
          {[["GitHub","https://github.com/"],["LinkedIn","https://linkedin.com/"],["Email","mailto:shivhashakthiy@gmail.com"]].map(([l,h]) => (
            <a key={l} href={h} style={{ fontFamily:"monospace", fontSize:11, color:"#1f2937", transition:"color .2s" }}
              onMouseEnter={e=>e.target.style.color="#6b7280"} onMouseLeave={e=>e.target.style.color="#1f2937"}>
              {l}
            </a>
          ))}
        </div>
      </footer>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger { display: flex !important; }
          #hero > div { grid-template-columns: 1fr !important; }
          #hero > div > div:last-child { display: none !important; }
          #about > div > div, #experience > div > div, #contact > div > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
