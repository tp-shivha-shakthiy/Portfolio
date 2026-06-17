import React from "react";

const mobileStyles = `
  @media (max-width: 768px) {
    .skills-layout {
      flex-direction: column !important;
      gap: 24px !important;
    }
    .skills-anchor {
      position: static !important;
      top: unset !important;
    }
    .skills-anchor h2 {
      font-size: 26px !important;
    }
    .skills-row {
      flex-direction: column !important;
      gap: 12px !important;
    }
    .skills-cat-label {
      width: 100% !important;
    }
  }
`;

export default function Skills({ skillsData }) {
  return (
    <>
      <style>{mobileStyles}</style>
      <div
        className="skills-layout"
        style={{
          display: "flex",
          gap: "64px",
          marginTop: "40px",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {/* Left Anchor Column */}
        <div
          className="skills-anchor"
          style={{ flex: "0.8", position: "sticky", top: "140px" }}
        >
          <h2
            style={{
              fontFamily: "var(--fd)",
              fontSize: "32px",
              fontWeight: 400,
              color: "var(--tx-h)",
              lineHeight: "1.25",
              margin: 0,
            }}
          >
            Technical Competencies
          </h2>
          <p
            style={{
              fontFamily: "var(--fb)",
              fontSize: "14px",
              color: "var(--tx-2)",
              lineHeight: "1.6",
              marginTop: "20px",
              maxWidth: "280px",
            }}
          >
            A focused set of skills for machine learning pipelines and modular
            full-stack engineering.
          </p>
        </div>

        {/* Right Column: Skill Rows */}
        <div style={{ flex: "1.2", display: "flex", flexDirection: "column" }}>
          {Object.entries(skillsData).map(([cat, items]) => (
            <div
              key={cat}
              className="skills-row"
              style={{
                display: "flex",
                gap: "40px",
                padding: "24px 0",
                borderTop: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              {/* Category Label */}
              <div className="skills-cat-label" style={{ width: "160px", flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: "11px",
                    color: "var(--a)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "block",
                    paddingTop: "2px",
                  }}
                >
                  {cat}
                </span>
              </div>

              {/* Skill Items */}
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 24px" }}>
                  {items.map((s, idx) => (
                    <div
                      key={s}
                      style={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--fm)",
                          fontSize: "10px",
                          color: "var(--tx-2)",
                          opacity: 0.35,
                        }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--fb)",
                          fontSize: "14.5px",
                          color: "var(--tx)",
                          fontWeight: 400,
                        }}
                      >
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.04)" }} />
        </div>
      </div>
    </>
  );
}