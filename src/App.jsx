import { useState, useEffect, useRef } from "react";
import { NAV } from "./data/nav";
import { SKILLS } from "./data/skills";
import { PROJECTS } from "./data/projects";
import { EXPERIENCE } from "./data/experience";
import { ACHIEVEMENTS } from "./data/achievements";

import { useFadeIn } from "./hooks/useFadeIn";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceSection from "./components/Experience";
import ContactSection from "./components/Contact";

import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";

export default function Portfolio() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const ids = ["hero", ...NAV.map(n => n.toLowerCase())];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [hRef,     hStyle]     = useFadeIn(0.1);
  const [h2Ref,    h2Style]    = useFadeIn(0.15);
  const [h3Ref,    h3Style]    = useFadeIn(0.2);
  const [hBtnRef,  hBtnStyle]  = useFadeIn(0.25);
  const [hChipRef, hChipStyle] = useFadeIn(0.3);
  const [hImgRef,  hImgStyle]  = useFadeIn(0.2);

  const [aRef,  aStyle]  = useFadeIn(0);
  const [a2Ref, a2Style] = useFadeIn(0.1);
  const [skRef, skStyle] = useFadeIn(0);
  const [prRef, prStyle] = useFadeIn(0);
  const [exRef, exStyle] = useFadeIn(0);
  const [coRef, coStyle] = useFadeIn(0);

  /* ── custom cursor — instant snap ── */
  const cursorRef     = useRef(null);
  const cursorDotRef  = useRef(null);
  const cursorTextRef = useRef(null);
  
  useEffect(() => {
    const move = e => {
      const x = e.clientX, y = e.clientY;
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate(${x - 20}px,${y - 20}px)`;
      if (cursorDotRef.current)
        cursorDotRef.current.style.transform = `translate(${x - 4}px,${y - 4}px)`;
    };

    const onEnter = e => {
      const el = e.target.closest('a,button,[data-cursor]');
      if (!el) return;
      cursorRef.current?.classList.add('cursor-ring--hover');
      const label = el.dataset.cursor || el.textContent?.trim().slice(0, 12) || '';
      if (cursorTextRef.current) {
        cursorTextRef.current.textContent = label;
        cursorTextRef.current.style.opacity = label ? '1' : '0';
      }
    };
    const onLeave = () => {
      cursorRef.current?.classList.remove('cursor-ring--hover');
      if (cursorTextRef.current) cursorTextRef.current.style.opacity = '0';
    };
    const onDown = () => cursorRef.current?.classList.add('cursor-ring--click');
    const onUp   = () => cursorRef.current?.classList.remove('cursor-ring--click');

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover",  onEnter);
    document.addEventListener("mouseout",   onLeave);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover",  onEnter);
      document.removeEventListener("mouseout",   onLeave);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
    };
  }, []);

  const S = { maxWidth: 1050, margin: "0 auto", padding: "130px 32px" };

  return (
    <div className="pf-root">

      {/* Grain overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Custom cursor */}
      <div className="cursor-ring" ref={cursorRef}>
        <span className="cursor-ring__text" ref={cursorTextRef} />
      </div>
      <div className="cursor-dot" ref={cursorDotRef} />

      <Navbar active={active} goto={goto} isDarkMode={true} />

      {/* ╔══════════════ HERO ══════════════╗ */}
      <section id="hero" className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-left">
            

            <div ref={h2Ref} style={h2Style}>
              <h1 className="hero-name">
                <span className="hero-name__first">T P Shivha </span>
                <span className="hero-name__last">Shakthiy</span>
              </h1>
            </div>

            <div ref={h3Ref} style={h3Style}>
              <p className="hero-descriptor">AI &amp; Full-Stack Developer</p>
              <p className="hero-bio">
                Computer Science undergraduate focused on building intelligent systems 
                and full-stack applications. I work across machine learning and software engineering, 
                translating models into working systems.
              </p>
            </div>

            <div ref={hBtnRef} style={hBtnStyle} className="hero-ctas">
              <button className="btn-primary" onClick={() => goto("projects")}>
                View Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-text" onClick={() => goto("contact")}>
                Contact →
              </button>
            </div>

            <div ref={hChipRef} style={hChipStyle} className="hero-tags">
              {["B.Tech CSE (AI & DS)", "AI Researcher", "Systems Builder "].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div ref={hImgRef} style={hImgStyle} className="hero-right">
            <div className="id-card">
              <div className="id-card__topbar">
                <span className="id-dot id-dot--r" /><span className="id-dot id-dot--y" /><span className="id-dot id-dot--g" />
                <span className="id-card__filename">identity.sys</span>
              </div>
              <div className="id-card__content">
  
  <img 
    src="/profile-small.jpeg" 
    alt="T P Shivha Shakthiy" 
    className="id-photo" 
  />
  
  <p className="id-fullname">T P Shivha Shakthiy</p>
  <p className="id-subtitle">From Models To Systems</p>
  <hr className="id-rule" />
  
  
                {[
                  ["INSTITUTION", "IIIT Kottayam"],
                  ["DEGREE",      "B.Tech CS · AI & DS"],
                  ["STATUS",      "Building"],
                  ["DOMAIN ", "Applied AI Systems"],
                ].map(([k, v]) => (
                  <div key={k} className="id-row">
                    <span className="id-row__k">{k}</span>
                    <span className="id-row__v">{v}</span>
                  </div>
                ))}
              </div>
              <div className="id-card__shine" />
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll__line" />
          <span>scroll</span>
        </div>

        <div className="hero-wordmark" aria-hidden="true">SHIVHA</div>
      </section>

      {/* ╔══════════════ ABOUT ══════════════╗ */}
      <section id="about" style={{ ...S, borderTop: "1px solid var(--border)" }}>
        <div ref={aRef} style={aStyle}>
          <SectionHeading num="01" title="About" />
        </div>
        <div className="about-grid">
          <div ref={aRef} style={aStyle}>
            <h2 className="about-headline">
              Engineering at the<br />
              intersection of AI<br />
              <em>and real-world systems.</em>
            </h2>
            <p className="body-text mt-5">
              I’m a Computer Science undergraduate focusing on Artificial Intelligence and Data Science. 
              I work across deep learning and full-stack engineering, moving between building models and turning them into working systems.
            </p>
            <p className="body-text mt-4">
              I like building end-to-end systems—not just experiments. 
              I focus on clean design, solid structure, and making things that actually work outside of notebooks.

I prefer simple, intentional solutions over unnecessary complexity, 
and and I keep iterating until things feel solid and reliable.            
            </p>
          </div>
          <div ref={a2Ref} style={a2Style} className="about-meta">
            {[
              ["Education",  "Computer Science & Engineering (AI & Data Science)\n2024–2028"],
              ["Focus Area", "Applied AI · Machine Learning · Software Engineering "],
              ["Currently",   "ML Research Intern Building Computer Vision & Deep Learning Systems"],
            ].map(([k, v]) => (
              <div key={k} className="meta-row">
                <span className="meta-key">{k}</span>
                <span className="meta-val">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════ SKILLS ══════════════╗ */}
      <section id="skills" style={{ ...S, borderTop: "1px solid var(--border)" }}>
        <div ref={skRef} style={skStyle}>
          <SectionHeading num="02" title="Skills" />
          <Skills skillsData={SKILLS} />
        </div>
      </section>

      {/* ╔══════════════ PROJECTS ══════════════╗ */}
      <section id="projects" style={{ ...S, borderTop: "1px solid var(--border)" }}>
        <div ref={prRef} style={prStyle}>
          <SectionHeading num="03" title="Projects" />
          <Projects projectsData={PROJECTS} isDarkMode={true} />
        </div>
      </section>

      {/* ╔══════════════ EXPERIENCE ══════════════╗ */}
<section id="experience" style={{ ...S, borderTop: "1px solid var(--border)" }}>
  <div ref={exRef} style={exStyle}>
    
    {/* ── UPDATED: Replacing generic header with the premium image_a78ec3.png style ── */}
    <div 
      style={{ 
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        position: "sticky", 
        top: "140px"
      }}
    >
      {/* Small Section Index Marker */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center", opacity: 0.4 }}>
        <span style={{ fontFamily: "var(--fm)", fontSize: "11px" }}>04</span>
        <span style={{ fontFamily: "var(--fm)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Section</span>
      </div>

      {/* Main Asymmetric Serif Heading */}
      <div>
        <h2 
          style={{ 
            fontFamily: "var(--fd)", 
            fontSize: "38px", 
            fontWeight: 400, 
            color: "var(--tx-h)", 
            lineHeight: "1.15",
            margin: 0
          }}
        >
          Professional
        </h2>
        <h2 
          style={{ 
            fontFamily: "var(--fd)", 
            fontSize: "38px", 
            fontWeight: 400, 
            color: "var(--tx-2)", 
            fontStyle: "italic",
            lineHeight: "1.15",
            margin: "4px 0 0 0"
          }}
        >
          Experience
        </h2>
      </div>

      {/* Narrative Subtitle */}
      <p 
        style={{ 
          fontFamily: "var(--fb)", 
          fontSize: "13px", 
          color: "var(--tx-2)", 
          lineHeight: "1.7", 
          margin: "8px 0 0 0",
          opacity: 0.8,
          maxWidth: "240px"
        }}
      >
        Research and engineering experiences spanning computer vision, cybersecurity, machine learning, 
        and applied AI across academic and industry-oriented projects.
      </p>
    </div>

    {/* The component you like, now fitting perfectly into the grid */}
    <ExperienceSection
      experienceData={EXPERIENCE}
      achievementsData={ACHIEVEMENTS}
      isDarkMode={true}
    />
  </div>
</section>

      {/* ╔══════════════ CONTACT ══════════════╗ */}
      <section id="contact" style={{ ...S, borderTop: "1px solid var(--border)" }}>
        <div ref={coRef} style={coStyle}>
          <SectionHeading num="05" title="Contact" />
          <ContactSection isDarkMode={true} />
        </div>
      </section>

      {/* ╔══════════════ FOOTER ══════════════╗ */}
      <footer className="pf-footer">
        <div className="pf-footer__inner">
          <p className="footer-copy">© T P Shivha Shakthiy. Crafted with curiosity.</p>
          <p className="footer-copy footer-copy--center">AI · Security · Real-world Impact</p>
          <div className="footer-links">
            {[
              ["GitHub",   "https://github.com/tp-shivha-shakthiy"],
              ["LinkedIn", "https://linkedin.com/in/t-p-shivha-shakthiy-801723346"],
              ["Email",    "mailto:tpshivhashakthiyy@gmail.com"],
            ].map(([l, h]) => (
              <a key={l} href={h} className="footer-link">{l}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}