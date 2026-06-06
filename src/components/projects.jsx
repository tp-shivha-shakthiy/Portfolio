import { PROJECTS } from "../data/projects";

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
    <section id="projects">
      <div ref={prRef} style={prStyle}>
        <h2>Projects</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              style={{
                border: "1px solid #141414",
                borderRadius: 10,
                padding: 24,
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
                    }}
                  >
                    {p.status}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
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
    </section>
  );
}