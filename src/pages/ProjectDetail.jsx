import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import { SiteHeader } from "../components/SiteChrome";
import { ExtLink } from "../components/links";

function Block({ title, children }) {
  return (
    <section className="case__block">
      <h2 className="label case__label">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Dashes({ items }) {
  return (
    <ul className="dashes">
      {items.map((d) => <li key={d}>{d}</li>)}
    </ul>
  );
}

/* Case study: same broadsheet language as the homepage, tinted with the project's accent. */
export default function ProjectDetail() {
  const { slug } = useParams();
  const p = PROJECTS.find((pr) => pr.slug === slug);

  usePageMeta({
    title: p ? p.shortTitle || p.title : "Project not found",
    description: p ? p.tagline : undefined,
    path: `/projects/${slug}`,
    noindex: !p,
  });

  if (!p) {
    return (
      <>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="plain">
          <p className="label">Not found</p>
          <h1 className="plain__title">There is no project at this address.</h1>
          <Link to="/#work" className="link">← Selected work</Link>
        </main>
      </>
    );
  }

  const isTeam = p.team && p.team !== "Solo";
  const hasWriteup = p.solution || p.impact || p.challenges?.length || p.lessons?.length || p.notes?.length;

  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className={`case case--${p.accent}`}>
        <header className="case__head paper">
          <Link to="/#work" className="link case__back">← Selected work</Link>
          <p className="meta">{p.year} · {p.status}</p>
          <h1 className="case__title">{p.title}</h1>
          <p className="case__summary">{p.summary}</p>

          <table className="spec case__spec">
            <tbody>
              {p.publication && (
                <tr>
                  <th scope="row">Paper</th>
                  <td>
                    “{p.publication.title}” — {p.publication.authorship} · {p.publication.venue} ·{" "}
                    {p.publication.status} · Paper ID {p.publication.paperId}
                  </td>
                </tr>
              )}
              {p.role && <tr><th scope="row">My part</th><td>{p.role}</td></tr>}
              {isTeam && <tr><th scope="row">Team</th><td>{p.team}</td></tr>}
              <tr><th scope="row">Stack</th><td className="stk">{p.stack.join(" · ")}</td></tr>
            </tbody>
          </table>

          {(p.github || p.demo) && (
            <p className="plinks">
              {p.github && <ExtLink href={p.github} label={`${p.title} source code on GitHub`}>Code ↗</ExtLink>}
              {p.demo && <ExtLink href={p.demo} label={`${p.title} live demo`}>Live demo ↗</ExtLink>}
            </p>
          )}
          {p.demo && p.demoNote && <p className="case__note"><b>Note</b> {p.demoNote}</p>}
        </header>

        <div className="case__body">
          {p.publication?.results && (
            <Block title="Results">
              <table className="res res--case">
                <caption className="sr-only">Results by task; each task uses a different model.</caption>
                <thead><tr><th scope="col">Task</th><th scope="col">Result and model</th></tr></thead>
                <tbody>
                  {p.publication.results.map(([task, line]) => (
                    <tr key={task}><th scope="row">{task}</th><td>{line}</td></tr>
                  ))}
                </tbody>
              </table>
              <p className="case__fine">{p.publication.dataset}</p>
            </Block>
          )}

          {isTeam && (
            <p className="case__note">
              <b>Team project</b> “What I built” is my part. The other sections describe the whole system.
            </p>
          )}

          <Block title="Problem"><p className="case__text">{p.problem}</p></Block>
          {p.built?.length > 0 && <Block title="What I built"><Dashes items={p.built} /></Block>}
          <Block title="Architecture"><p className="case__text case__flow">{p.architecture}</p></Block>
          {p.engineeringDecisions?.length > 0 && (
            <Block title="Engineering decisions"><Dashes items={p.engineeringDecisions} /></Block>
          )}
          {p.results?.length > 0 && !p.publication && (
            <Block title="Results"><Dashes items={p.results} /></Block>
          )}
          {p.results?.length > 0 && p.publication && (
            <Block title="All findings"><Dashes items={p.results} /></Block>
          )}

          {hasWriteup && (
            <details className="case__more">
              <summary>Full write-up — solution, impact, challenges and lessons</summary>
              {p.solution && (<><h3 className="case__sub">Solution</h3><p className="case__text">{p.solution}</p></>)}
              {p.impact && (<><h3 className="case__sub">Impact</h3><p className="case__text">{p.impact}</p></>)}
              {p.challenges?.length > 0 && (<><h3 className="case__sub">Challenges</h3><Dashes items={p.challenges} /></>)}
              {p.lessons?.length > 0 && (<><h3 className="case__sub">Lessons</h3><Dashes items={p.lessons} /></>)}
              {p.notes?.length > 0 && (<><h3 className="case__sub">Other details</h3><Dashes items={p.notes} /></>)}
            </details>
          )}

          <Link to="/#work" className="link case__back case__back--end">← Selected work</Link>
        </div>
      </main>
    </>
  );
}
