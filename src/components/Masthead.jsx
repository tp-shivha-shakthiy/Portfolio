import { PROFILE, resumeMailto } from "../data/profile";
import { ExtLink } from "./links";

const SECTIONS = [
  ["#work", "Selected work", "NeuroBridge · TRACE · IDS"],
  ["#other", "Also built", "VantaAI · ReID"],
  ["#research", "Research & recognition", "paper · 7 honours"],
  ["#about", "About", "bio · experience"],
  ["#contact", "Contact", "email"],
];

/*
  Newspaper masthead: a dateline, the name across the page, a double rule,
  then three columns — introduction, how to reach me, and what is on the page.
*/
export default function Masthead() {
  return (
    <header className="mast paper" id="top">
      <div className="mast__dateline label">
        <span>Portfolio · 2026</span>
        <span>Kerala, India</span>
      </div>

      <h1 className="mast__name">
        <span>Shivha</span> <em>Shakthiy</em>
      </h1>
      <div className="mast__rule" aria-hidden="true" />
      <p className="mast__role">
        Software Engineer <span aria-hidden="true">—</span><span className="sr-only">,</span> <em>Backend &amp; Applied AI</em>
      </p>

      <div className="mast__cols">
        <div className="mast__intro">
          <p className="mast__lede">
            Backend-focused engineer building reliable APIs and data pipelines with Python, FastAPI,
            PostgreSQL and Docker — <em>with applied ML when the problem calls for it.</em>
          </p>
          <p className="mast__sub">{PROFILE.highlights[0]}.</p>
        </div>

        <div className="mast__reach">
          <h2 className="label">Reach me</h2>
          <ul className="reach">
            <li><a href={`mailto:${PROFILE.email}`}>Email</a><span aria-hidden="true">✉</span></li>
            <li><ExtLink href={PROFILE.linkedin} label="LinkedIn" className="">LinkedIn</ExtLink><span aria-hidden="true">↗</span></li>
            <li><ExtLink href={PROFILE.github} label="GitHub" className="">GitHub</ExtLink><span aria-hidden="true">↗</span></li>
            <li><a href={resumeMailto()}>Résumé on request</a><span aria-hidden="true">✉</span></li>
          </ul>
          <p className="avail">{PROFILE.availability}</p>
        </div>

        <nav className="mast__toc" aria-label="On this page">
          <h2 className="label">On this page</h2>
          <ol className="toc">
            {SECTIONS.map(([href, name, hint]) => (
              <li key={href}>
                <a href={href}>
                  {name} <span>{hint}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <a href="#work" className="mast__next">
        <span className="label">Selected work</span>
        <span className="mast__next-list">NeuroBridge · TRACE · IDS Research</span>
        <span className="mast__next-arrow" aria-hidden="true">↓</span>
      </a>
    </header>
  );
}
