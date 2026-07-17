import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { FieldLabel, FieldText, DashList, Pill, PageStyles } from "../components/ui";

const S = { padding: "70px 120px" };

function MetricCard({ m }) {
  return (
    <div
      style={{
        fontFamily: "var(--fb)",
        fontSize: 13,
        color: "var(--tx)",
        padding: "14px 16px",
        border: "1px solid var(--br)",
        borderRadius: 4,
        lineHeight: "1.55",
      }}
    >
      {m}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = PROJECTS.find((pr) => pr.slug === slug);

  useEffect(() => {
    if (p) document.title = `${p.title} — T P Shivha Shakthiy`;
    else document.title = "Project Not Found";
  }, [p]);

  if (!p) {
    return (
      <section style={{ ...S, paddingTop: 120, textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--fd)", fontSize: 28, color: "var(--tx-h)" }}>Project not found</h2>
        <Link to="/projects" style={{ fontFamily: "var(--fm)", fontSize: 12, color: "var(--a)", marginTop: 16, display: "inline-block" }}>
          ← Back to projects
        </Link>
      </section>
    );
  }

  return (
    <>
      <PageStyles />
      <section style={{ ...S, paddingTop: 120 }}>
        <Link
          to="/projects"
          style={{
            fontFamily: "var(--fm)",
            fontSize: 11,
            color: "var(--tx-2)",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: 32,
          }}
        >
          ← All projects
        </Link>

        {/* hero */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                background: p.color + "18",
                border: `1px solid ${p.color}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--fm)",
                fontSize: 12,
                color: p.color,
                flexShrink: 0,
              }}
            >
              {p.abbr}
            </div>
            <div>
              <h1 style={{ fontFamily: "var(--fd)", fontSize: 28, color: "var(--tx-h)", margin: 0, lineHeight: 1.2 }}>
                {p.title}
              </h1>
              <span style={{ fontFamily: "var(--fm)", fontSize: 12, color: "var(--tx-2)" }}>{p.year}</span>
            </div>
          </div>
          {p.metric && (
            <span
              style={{
                fontFamily: "var(--fm)",
                fontSize: 11,
                color: "var(--a)",
                border: "1px solid var(--a-bd)",
                background: "var(--a-dim)",
                padding: "4px 14px",
                borderRadius: 99,
              }}
            >
              {p.metric}
            </span>
          )}
        </div>

        <p style={{ fontFamily: "var(--fb)", fontSize: 16, color: "var(--tx)", lineHeight: "1.7", maxWidth: 640, marginBottom: 40 }}>
          {p.summary}
        </p>

        {/* overview grid */}
        <div className="pj-overview-body" style={{ marginBottom: 32 }}>
          <div>
            <FieldLabel>Problem</FieldLabel>
            <FieldText>{p.problem}</FieldText>
          </div>
          <div>
            <FieldLabel>Solution</FieldLabel>
            <FieldText>{p.solution}</FieldText>
          </div>
        </div>

        <div style={{ marginBottom: 32 }}>
          <FieldLabel>Impact</FieldLabel>
          <FieldText>{p.impact}</FieldText>
        </div>

        {/* case study body */}
        <div style={{ borderTop: "1px solid var(--br)", paddingTop: 32 }}>
          <div className="pj-case-body">
            <FieldLabel>Architecture</FieldLabel>
            <FieldText>{p.architecture}</FieldText>
          </div>

          <div className="pj-case-body" style={{ marginTop: 24 }}>
            <FieldLabel>Key Engineering Decisions</FieldLabel>
            <div style={{ marginTop: 6 }}>
              <DashList items={p.engineeringDecisions} />
            </div>
          </div>

          {p.challenges?.length > 0 && (
            <div className="pj-case-body" style={{ marginTop: 24 }}>
              <FieldLabel>Challenges</FieldLabel>
              <div style={{ marginTop: 6 }}>
                <DashList items={p.challenges} />
              </div>
            </div>
          )}

          {p.metrics?.length > 0 && (
            <div className="pj-case-body" style={{ marginTop: 24 }}>
              <FieldLabel>Results</FieldLabel>
              <div className="pj-metrics-grid" style={{ marginTop: 8 }}>
                {p.metrics.map((m, i) => (
                  <MetricCard key={i} m={m} />
                ))}
              </div>
            </div>
          )}

          {p.lessons?.length > 0 && (
            <div className="pj-case-body" style={{ marginTop: 24 }}>
              <FieldLabel>Lessons Learned</FieldLabel>
              <div style={{ marginTop: 6 }}>
                <DashList items={p.lessons} />
              </div>
            </div>
          )}
        </div>

        {/* links */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 40, borderTop: "1px solid var(--br)", paddingTop: 24 }}>
          {p.github && <Pill href={p.github}>GitHub →</Pill>}
          {p.demo && p.demo !== "#" && <Pill href={p.demo}>Live Demo →</Pill>}
          {p.paper && <Pill href={p.paper}>Paper →</Pill>}
        </div>
      </section>
    </>
  );
}
