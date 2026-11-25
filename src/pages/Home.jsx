import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PROFILE, ABOUT, SKILLS, resumeMailto } from "../data/profile";
import { FEATURED_PROJECTS, PUBLICATION_PROJECT } from "../data/projects";
import { useFadeIn } from "../hooks/useFadeIn";
import ProjectCard from "../components/ProjectCard";
import ExperienceList from "../components/Experience";
import RecognitionList from "../components/Awards";
import ContactBlock from "../components/Contact";

const GITHUB_ICON =
  "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z";
const LINKEDIN_ICON =
  "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z";

function SocialLinks() {
  const links = [
    { label: "GitHub", href: PROFILE.github, icon: GITHUB_ICON },
    { label: "LinkedIn", href: PROFILE.linkedin, icon: LINKEDIN_ICON },
  ];
  return (
    <ul className="home-hero__social">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} target="_blank" rel="noopener noreferrer" className="social-link"
             aria-label={`${l.label} (opens in a new tab)`}>
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
              <path d={l.icon} fill="currentColor" />
            </svg>
            <span>{l.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  const [textRef, textStyle] = useFadeIn(0.1);

  return (
    <section className="home-hero" aria-labelledby="hero-name">
      <div ref={textRef} style={textStyle} className="home-hero__text">
        <h1 id="hero-name" className="home-hero__name">{PROFILE.name}</h1>
        <p className="home-hero__role">{PROFILE.role}</p>
        <p className="home-hero__bio">{PROFILE.bio}</p>
        <ul className="home-hero__highlights" aria-label="Highlights">
          {PROFILE.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <p className="home-hero__edu">
          {PROFILE.education}
          <br />
          <span className="home-hero__avail">{PROFILE.availability}</span>
        </p>
        <div className="home-hero__ctas">
          <Link to="/#contact" className="btn btn--primary">Get in touch</Link>
          <a href={resumeMailto()} className="btn btn--secondary">Request résumé ↗</a>
          <Link to="/#projects" className="btn btn--secondary">View projects</Link>
        </div>
        <SocialLinks />
      </div>
      <div className="home-hero__portrait">
        <picture>
          <source srcSet="/portrait.webp" type="image/webp" />
          <img
            src="/portrait.png"
            alt="Portrait of T P Shivha Shakthiy"
            className="home-hero__img"
            width={499}
            height={499}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  );
}

function Section({ id, title, aside, children }) {
  return (
    <section id={id} className="home-section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="home-section__head">
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {aside}
      </div>
      {children}
    </section>
  );
}

function Publication({ p }) {
  const pub = p.publication;
  return (
    <article className="pub">
      <p className="pub__kicker">Publication · {pub.authorship}</p>
      <h3 className="pub__title">{pub.title}</h3>
      <p className="pub__venue">
        {pub.venue} · {pub.status} · Paper ID {pub.paperId}
      </p>
      <p className="pub__result">{pub.headline}</p>
      <div className="pcard__links">
        <Link to={`/projects/${p.slug}`} className="text-link" aria-label="Intrusion detection research case study">
          Case study →
        </Link>
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-link text-link--quiet"
             aria-label="Intrusion detection code on GitHub (opens in a new tab)">
            Code ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "T P Shivha Shakthiy — Software Engineer, Backend & Applied AI";
  }, []);

  return (
    <div className="home">
      <div className="home-cover">
        <div className="grain-overlay" aria-hidden="true" />
        <Hero />
      </div>

      <Section
        id="projects"
        title="Selected projects"
        aside={<Link to="/projects" className="text-link">All projects →</Link>}
      >
        <div className="pcard-grid">
          {FEATURED_PROJECTS.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceList />
      </Section>

      <Section id="research" title="Research & recognition">
        <div className="research-grid">
          {PUBLICATION_PROJECT && <Publication p={PUBLICATION_PROJECT} />}
          <div>
            <h3 className="subhead">Recognition</h3>
            <RecognitionList />
          </div>
        </div>
      </Section>

      <Section id="about" title="About">
        <div className="about">
          <div className="about__text">
            {ABOUT.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <dl className="facts facts--skills">
            {SKILLS.map(([k, v]) => (
              <div key={k} className="facts__row">
                <dt>{k}</dt>
                <dd className="facts__stack">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section id="contact" title="Get in touch">
        <ContactBlock />
      </Section>
    </div>
  );
}
