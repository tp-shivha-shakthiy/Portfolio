import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PROFILE, ABOUT, SKILLS } from "../data/profile";
import { FEATURED_PROJECTS, PUBLICATION_PROJECT } from "../data/projects";
import { useFadeIn } from "../hooks/useFadeIn";
import ProjectCard from "../components/ProjectCard";
import ExperienceList from "../components/Experience";
import RecognitionList from "../components/Awards";
import ContactBlock from "../components/Contact";

function Hero() {
  const [textRef, textStyle] = useFadeIn(0.1);

  return (
    <section className="home-hero" aria-labelledby="hero-name">
      <div ref={textRef} style={textStyle} className="home-hero__text">
        <h1 id="hero-name" className="home-hero__name">{PROFILE.name}</h1>
        <p className="home-hero__role">{PROFILE.role}</p>
        <p className="home-hero__bio">{PROFILE.bio}</p>
        <p className="home-hero__edu">{PROFILE.education}</p>
        <div className="home-hero__ctas">
          <Link to="/#contact" className="btn btn--primary">Get in touch</Link>
          <Link to="/#projects" className="btn btn--secondary">View projects</Link>
        </div>
      </div>
      <div className="home-hero__portrait">
        <img src="/profile-small_.png" alt="Portrait of T P Shivha Shakthiy" className="home-hero__img" />
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
