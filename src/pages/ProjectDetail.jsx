import { useParams, Link } from "react-router-dom";
import { PROJECTS, statusTone } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

function CaseSection({ title, children }) {
  return (
    <section className="case__section">
      <h2 className="case__label">{title}</h2>
      {children}
    </section>
  );
}

function DashList({ items }) {
  return (
    <ul className="dash-list">
      {items.map((d) => (
        <li key={d}>{d}</li>
      ))}
    </ul>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = PROJECTS.find((pr) => pr.slug === slug);

  usePageMeta({
    title: p ? p.title : "Project not found",
    description: p ? p.tagline : undefined,
    path: `/projects/${slug}`,
    noindex: !p,
  });

  if (!p) {
    return (
      <div className="page page--center">
        <h1 className="page__title">Project not found</h1>
        <Link to="/projects" className="text-link">← Back to projects</Link>
      </div>
    );
  }

  const isTeam = p.team && p.team !== "Solo" && p.built?.length > 0;
  const hasWriteup =
    p.solution || p.impact || p.challenges?.length || p.lessons?.length || p.notes?.length;

  return (
    <article className="page case">
      <Link to="/projects" className="text-link text-link--quiet case__back">← All projects</Link>

      {/* div, not <header>: legacy navbar CSS clears backgrounds inside every header */}
      <div className="case__head">
        <div className="pcard__head">
          <span
            className="pcard__icon pcard__icon--lg"
            aria-hidden="true"
            style={{ background: p.color + "18", border: `1px solid ${p.color}44`, color: p.color }}
          >
            {p.abbr}
          </span>
          <div className="pcard__titles">
            <h1 className="case__title">{p.title}</h1>
            <span className="pcard__meta">
              {p.year}
              <span className="pcard__sep" aria-hidden="true">·</span>
              <span className={`status-dot status-dot--${statusTone(p.status)}`} aria-hidden="true" />
              {p.status}
            </span>
          </div>
        </div>

        <p className="case__summary">{p.summary}</p>

        <dl className="facts">
          {p.publication && (
            <div className="facts__row">
              <dt>Paper</dt>
              <dd>
                “{p.publication.title}” — {p.publication.authorship.toLowerCase()} · {p.publication.venue} ·{" "}
                {p.publication.status} · Paper ID {p.publication.paperId}
              </dd>
            </div>
          )}
          {p.role && (
            <div className="facts__row">
              <dt>Role</dt>
              <dd>{p.role}</dd>
            </div>
          )}
          {p.team && (
            <div className="facts__row">
              <dt>Team</dt>
              <dd>{p.team}</dd>
            </div>
          )}
          <div className="facts__row">
            <dt>Stack</dt>
            <dd className="facts__stack">{p.stack.join(" · ")}</dd>
          </div>
        </dl>

        {(p.github || p.demo || p.paper) && (
          <div className="pcard__links">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-link"
                 aria-label={`${p.title} source code on GitHub (opens in a new tab)`}>
                Code ↗
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-link"
                 aria-label={`${p.title} live demo (opens in a new tab)`}>
                Live demo ↗
              </a>
            )}
            {p.paper && (
              <a href={p.paper} target="_blank" rel="noopener noreferrer" className="text-link">
                Paper ↗
              </a>
            )}
          </div>
        )}
        {p.demo && p.demoNote && (
          <p className="case__note">
            <span className="case__note-k">Note</span>
            {p.demoNote}
          </p>
        )}
      </div>

      {isTeam && (
        <p className="case__note">
          <span className="case__note-k">Team project</span>
          “What I built” is my part. The other sections describe the whole system.
        </p>
      )}

      <CaseSection title="Problem">
        <p className="case__text">{p.problem}</p>
      </CaseSection>

      {p.built?.length > 0 && (
        <CaseSection title="What I built">
          <DashList items={p.built} />
        </CaseSection>
      )}

      <CaseSection title="Architecture">
        <p className="case__text case__flow">{p.architecture}</p>
      </CaseSection>

      {p.engineeringDecisions?.length > 0 && (
        <CaseSection title="Key engineering decisions">
          <DashList items={p.engineeringDecisions} />
        </CaseSection>
      )}

      {p.results?.length > 0 && (
        <CaseSection title="Results">
          <ul className="results-grid">
            {p.results.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </CaseSection>
      )}

      {hasWriteup && (
        <details className="case__more">
          <summary>Full write-up — solution, impact, challenges and lessons</summary>
          {p.solution && (
            <>
              <h3 className="case__sublabel">Solution</h3>
              <p className="case__text">{p.solution}</p>
            </>
          )}
          {p.impact && (
            <>
              <h3 className="case__sublabel">Impact</h3>
              <p className="case__text">{p.impact}</p>
            </>
          )}
          {p.challenges?.length > 0 && (
            <>
              <h3 className="case__sublabel">Challenges</h3>
              <DashList items={p.challenges} />
            </>
          )}
          {p.lessons?.length > 0 && (
            <>
              <h3 className="case__sublabel">Lessons learned</h3>
              <DashList items={p.lessons} />
            </>
          )}
          {p.notes?.length > 0 && (
            <>
              <h3 className="case__sublabel">Other details</h3>
              <DashList items={p.notes} />
            </>
          )}
        </details>
      )}

      <Link to="/projects" className="text-link case__back case__back--end">← All projects</Link>
    </article>
  );
}
