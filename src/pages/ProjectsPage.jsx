import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import SectionHeading from "../components/SectionHeading";

function ProjectRow({ p }) {
  return (
    <Link to={`/projects/${p.slug}`} className="cat-row">
      <div className="cat-row__head">
        <div className="cat-row__icon" style={{
          background: p.color + "18",
          border: `1px solid ${p.color}44`,
          color: p.color,
        }}>
          {p.abbr}
        </div>
        {p.type === "deep-dive" && (
          <span className="cat-row__type-tag">Deep dive</span>
        )}
        <div className="cat-row__title-group">
          <h3 className="cat-row__title">{p.title}</h3>
          <span className="cat-row__year">{p.year}</span>
        </div>
      </div>

      <div className="cat-row__fields">
        <div className="cat-row__field">
          <span className="cat-row__label">Type</span>
          <span className="cat-row__value">{p.category}</span>
        </div>
        <div className="cat-row__field">
          <span className="cat-row__label">Status</span>
          <span className="cat-row__value cat-row__value--status">
            <span className="cat-dot" />
            {p.status}
          </span>
        </div>
        <div className="cat-row__field">
          <span className="cat-row__label">Impact</span>
          <span className="cat-row__value">{p.metric || "—"}</span>
        </div>
      </div>

      <p className="cat-row__summary">{p.summary}</p>

      <span className="cat-row__cta">Read case study →</span>
    </Link>
  );
}

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "System Catalogue — T P Shivha Shakthiy";
  }, []);

  return (
    <section className="catalogue">
      <SectionHeading title="System Catalogue" />
      <p className="catalogue__intro">
Full-stack systems, applied ML pipelines, and end-to-end software —
          each project a complete case study.
      </p>
      <div className="catalogue__list">
        {PROJECTS.map((p) => (
          <ProjectRow key={p.slug} p={p} />
        ))}
      </div>
      <Link to="/journey" className="page-next">Continue exploring →</Link>
    </section>
  );
}
