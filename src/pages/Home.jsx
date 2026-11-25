import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { STATUS, GITHUB_USER } from "../data/status";
import { useFadeIn } from "../hooks/useFadeIn";

const FEATURED_PROJECT = {
  name: "NeuroBridge — Adaptive Support Platform for Neurodivergent Individuals",
  result:
    "Adaptive platform designed to personalize task support and interventions for neurodivergent individuals through real-time user-state modeling, reasoning, and context-aware planning.",
  stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
  link: `https://github.com/Civora-Forge/NeuroBridge`,
  demo: "https://neuro-bridge-olive.vercel.app",
};
function SpecHeader() {
  const [ref, style] = useFadeIn(0.1);
  return (
    <div ref={ref} style={style} className="spec-header">
      <div className="spec-header__left">
        <span className="spec-header__label">System Specification</span>
        <span className="spec-header__sep" aria-hidden="true">·</span>
        <span className="spec-header__meta">Doc No: TPSS-2026</span>
        <span className="spec-header__sep" aria-hidden="true">·</span>
        <span className="spec-header__meta">Rev {STATUS.revision}</span>
      </div>
    </div>
  );
}

function Hero() {
  const [nameRef, nameStyle] = useFadeIn(0.15);
  const [bioRef, bioStyle] = useFadeIn(0.2);
  const [tagRef, tagStyle] = useFadeIn(0.25);

  return (
    <section className="home-hero">
      <div className="home-hero__text">
        <div ref={nameRef} style={nameStyle}>
          <h1 className="home-hero__name">T P Shivha Shakthiy</h1>
          <p className="home-hero__role">Software Engineer · Applied ML</p>
        </div>
        <div ref={bioRef} style={bioStyle}>
          <p className="home-hero__bio">
           Building backend systems and full-stack platforms — from REST APIs to production-ready apps, with applied ML when the problem calls for it.
          </p>
        </div>
        <div ref={tagRef} style={tagStyle} className="home-hero__tags">
          {["Software Engineer", "Systems Builder", "B.Tech CSE (AI & DS)"].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
      <div className="home-hero__portrait">
        <img
          src="/profile-small_.png"
          alt="T P Shivha Shakthiy"
          className="home-hero__img"
        />
      </div>
    </section>
  );
}

function DocHeader() {
  const [expanded, setExpanded] = useState(false);

  // Hover-to-expand only for real mouse pointers. Touch and pen ignore enter/leave
  // and go through the button's click, so a tap can't open-then-immediately-close.
  const onPointerEnter = (e) => {
    if (e.pointerType === "mouse") setExpanded(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse") return;
    // Don't hide content that currently holds keyboard focus (e.g. a tabbed-to link)
    const focused = document.activeElement;
    if (e.currentTarget.contains(focused) && focused.matches(":focus-visible")) return;
    setExpanded(false);
  };

  return (
    <div className="doc-header">
      <span className="doc-header__status">system.active</span>

      <div className="doc-header__build">
        <div
          className="build-trigger"
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setExpanded(false); }}
        >
          <button
            type="button"
            className="build-trigger__toggle"
            aria-expanded={expanded}
            aria-controls="featured-details"
            onClick={() => setExpanded((v) => !v)}
          >
            <span className="build-trigger__head">
              <span className="build-pip" aria-hidden="true" />
              <span className="build-trigger__label">Featured</span>
            </span>
            <span className="build-trigger__name">{FEATURED_PROJECT.name}</span>
          </button>

          <div
            id="featured-details"
            className={`build-details${expanded ? " build-details--open" : ""}`}
          >
            <p className="build-details__commit">{FEATURED_PROJECT.result}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
              {FEATURED_PROJECT.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0 20px", marginTop: 6 }}>
              <a
                href={FEATURED_PROJECT.link}
                target="_blank"
                rel="noopener noreferrer"
                className="build-details__link"
              >
                View repository →
              </a>
              {FEATURED_PROJECT.demo && (
                <a
                  href={FEATURED_PROJECT.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="build-details__link"
                >
                  Live demo →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr className="doc-header__rule" />
      {[
        ["INSTITUTION", STATUS.institution],
        ["DEGREE", STATUS.degree],
        ["DOMAIN", STATUS.domain],
      ].map(([k, v]) => (
        <div key={k} className="doc-header__row">
          <span className="doc-header__row-k">{k}</span>
          <span className="doc-header__row-v">{v}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "T P Shivha Shakthiy — Software Engineer";
  }, []);

  return (
    <div className="home-cover">
      <div className="home-cover-marks" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <SpecHeader />
      <Hero />
      <DocHeader />
      <p className="home-also-building">
        Also building: <a href={`https://github.com/${GITHUB_USER}/trace`} target="_blank" rel="noopener noreferrer">TRACE</a>, a backend developer-analytics platform →
      </p>
      <Link to="/projects" className="home-explore">
        Explore all projects →
      </Link>
    </div>
  );
}
