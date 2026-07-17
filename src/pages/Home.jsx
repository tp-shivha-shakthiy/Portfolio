import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { STATUS, GITHUB_USER } from "../data/status";
import { useFadeIn } from "../hooks/useFadeIn";

const FEATURED_PROJECT = {
  name: "Vanta AI — AI-Powered Women Safety Platform",
  result: "Full-stack web application developed by a three-member team to support victims of image-based abuse through AI-assisted guidance, reporting tools, and privacy-focused system design.",
  stack: ["React", "Express.js", "Firebase", "Supabase", "Phi-3"],
  link: `https://github.com/${GITHUB_USER}/VantaAI`,
  demo: "https://vanta-ai-eight-eight.vercel.app",
};
function SpecHeader() {
  const [ref, style] = useFadeIn(0.1);
  return (
    <div ref={ref} style={style} className="spec-header">
      <div className="spec-header__left">
        <span className="spec-header__label">System Specification</span>
        <span className="spec-header__sep">·</span>
        <span className="spec-header__meta">Doc No: TPSS-2026</span>
        <span className="spec-header__sep">·</span>
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
  const triggerRef = useRef(null);

  return (
    <div className="doc-header">
      <span className="doc-header__status">system.active</span>

      <div className="doc-header__build">
        <div
          ref={triggerRef}
          className="build-trigger"
          onClick={() => setExpanded(!expanded)}
          onFocus={() => setExpanded(true)}
          onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setExpanded(false); }}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          aria-label={`${FEATURED_PROJECT.name}. ${expanded ? "Collapse" : "Expand"} for details.`}
        >
          <span className="build-trigger__head">
            <span className="build-pip" />
            <span className="build-trigger__label">Featured</span>
          </span>
          <span className="build-trigger__name">{FEATURED_PROJECT.name}</span>

          <div className={`build-details${expanded ? " build-details--open" : ""}`}>
            <p className="build-details__commit">{FEATURED_PROJECT.result}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
              {FEATURED_PROJECT.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
              <a
                href={FEATURED_PROJECT.link}
                target="_blank"
                rel="noopener noreferrer"
                className="build-details__link"
                onClick={(e) => e.stopPropagation()}
              >
                View repository →
              </a>
              {FEATURED_PROJECT.demo && (
                <a
                  href={FEATURED_PROJECT.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="build-details__link"
                  onClick={(e) => e.stopPropagation()}
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
