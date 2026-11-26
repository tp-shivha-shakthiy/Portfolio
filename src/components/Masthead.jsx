import { PROFILE, resumeMailto } from "../data/profile";
import { ExtLink } from "./links";

const SECTIONS = [
  ["#work", "Selected work"],
  ["#other", "Also built"],
  ["#research", "Research & recognition"],
  ["#about", "About"],
  ["#contact", "Contact"],
];

const GITHUB_ICON =
  "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z";
const LINKEDIN_ICON =
  "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z";

function Icon({ d }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path d={d} fill="currentColor" />
    </svg>
  );
}

/*
  Newspaper masthead: dateline, the name across the page, a double rule and the role.
  Below: the introduction with its actions on the left, and a quiet page index on the right.
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

          <div className="actions">
            <a className="btn btn--primary" href={`mailto:${PROFILE.email}`}>Get in touch</a>
            <a className="btn" href={resumeMailto()} aria-label="Request résumé by email">
              Request résumé <span aria-hidden="true">↗</span>
            </a>
            <a className="btn" href="#work">View projects</a>
          </div>

          <ul className="socials">
            <li>
              <ExtLink href={PROFILE.github} label="GitHub" className="social">
                <Icon d={GITHUB_ICON} /> GitHub
              </ExtLink>
            </li>
            <li>
              <ExtLink href={PROFILE.linkedin} label="LinkedIn" className="social">
                <Icon d={LINKEDIN_ICON} /> LinkedIn
              </ExtLink>
            </li>
          </ul>
        </div>

        <nav className="mast__toc" aria-label="On this page">
          <h2 className="label">On this page</h2>
          <ol className="toc">
            {SECTIONS.map(([href, name], i) => (
              <li key={href}>
                <a href={href}>
                  <span className="toc__n" aria-hidden="true">0{i + 1}</span>
                  {name}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
