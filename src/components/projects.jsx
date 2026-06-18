import { PROJECTS } from "../data/projects";

const mobileStyles = `
  @media (max-width: 768px) {
    .proj-card {
      padding: 16px !important;
    }
    .proj-desc {
      padding-left: 0 !important;
      margin-top: 12px !important;
    }
    .proj-footer {
      padding-left: 0 !important;
    }
  }
`;

function Tag({ label }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        fontSize: 11,
        fontFamily: "monospace",
        border: "1px solid #2a2a2a",
        borderRadius: 4,
        color: "#888",
        marginRight: 4,
        marginBottom: 4,
      }}
    >
      {label}
    </span>
  );
}

export default function Projects({ prRef, prStyle }) {
  return (
    <>
      <style>{mobileStyles}</style>
      <div ref={prRef} style={prStyle}>
        <h2>Projects</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {PROJECTS.map((p) => (
            <div
  key={p.name}
  className="proj-card"
  style={{
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    borderRadius: 0,
    padding: 24,
    background: "transparent",
  }}
>
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <div style={{ display: "flex", gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 8,
                      background: p.color + "18",
                      border: `1px solid ${p.color}44`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "monospace",
                      fontSize: 10,
                      color: p.color,
                      flexShrink: 0,
                    }}
                  >
                    {p.abbr}
                  </div>

                  <div>
                    <h3 style={{ fontSize: 15, color: "#f9fafb" }}>
                      {p.name}
                    </h3>
                    <span style={{ fontFamily: "monospace", fontSize: 11 }}>
                      {p.year}
                    </span>
                  </div>
                </div>

                {p.status && (
                  <span
                    style={{
                      fontSize: 10,
                      fontFamily: "monospace",
                      border: "1px solid #1f1f1f",
                      padding: "3px 10px",
                      borderRadius: 99,
                      color: "#4b5563",
                      flexShrink: 0,
                      alignSelf: "flex-start",
                    }}
                  >
                    {p.status}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className="proj-desc"
                style={{
                  fontSize: 13,
                  color: "#6b7280",
                  marginBottom: 12,
                  paddingLeft: 58,
                }}
              >
                {p.desc}
              </p>

              {/* Tags + Links */}
              <div
                className="proj-footer"
                style={{
                  paddingLeft: 58,
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <div>
                  {p.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  {p.github && (
                    <a
                      href={p.github}
                      style={{ fontFamily: "monospace", fontSize: 11 }}
                    >
                      GitHub →
                    </a>
                  )}

                  {p.demo && p.demo !== "#" && (
                    <a
                      href={p.demo}
                      style={{ fontFamily: "monospace", fontSize: 11 }}
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}