import { Link } from "react-router-dom";
import { statusTone } from "../data/projects";

// One card layout for every project: what it is and links on the left; role, stack, proof on the right.
export default function ProjectCard({ p, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  const teamSuffix = p.role && p.team && p.team !== "Solo" ? p.team : null;

  return (
    <article className="pcard">
      <div className="pcard__main">
        <div className="pcard__head">
          <span
            className="pcard__icon"
            aria-hidden="true"
            style={{ background: p.color + "18", border: `1px solid ${p.color}44`, color: p.color }}
          >
            {p.abbr}
          </span>
          <div className="pcard__titles">
            <Heading className="pcard__title">{p.title}</Heading>
            <span className="pcard__meta">
              {p.year}
              <span className="pcard__sep" aria-hidden="true">·</span>
              <span className={`status-dot status-dot--${statusTone(p.status)}`} aria-hidden="true" />
              {p.status}
            </span>
          </div>
        </div>

        <p className="pcard__tagline">{p.tagline}</p>

        <div className="pcard__links">
          <Link to={`/projects/${p.slug}`} className="text-link" aria-label={`${p.title} case study`}>
            Case study →
          </Link>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-link--quiet"
              aria-label={`${p.title} source code on GitHub (opens in a new tab)`}
            >
              Code ↗
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-link--quiet"
              aria-label={`${p.title} live demo (opens in a new tab)`}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <dl className="facts pcard__side">
        {p.role ? (
          <div className="facts__row">
            <dt>Role</dt>
            <dd>
              {p.role}
              {teamSuffix && <span className="facts__aside"> · {teamSuffix}</span>}
            </dd>
          </div>
        ) : (
          p.team && (
            <div className="facts__row">
              <dt>Team</dt>
              <dd>{p.team}</dd>
            </div>
          )
        )}
        <div className="facts__row">
          <dt>Stack</dt>
          <dd className="facts__stack">{p.stack.join(" · ")}</dd>
        </div>
        {p.proof?.length > 0 && (
          <div className="facts__row">
            <dt>Proof</dt>
            <dd>
              <ul className="facts__list">
                {p.proof.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>

    </article>
  );
}
