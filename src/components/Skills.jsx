import React from "react";

export default function Skills({ skillsData }) {
  return (
    <div 
      style={{ 
        display: "flex", 
        gap: "64px", 
        marginTop: "40px", 
        alignItems: "flex-start",
        width: "100%"
      }}
    >
      {/* Left Anchor Column: Big Context Title Statement */}
      <div style={{ flex: "0.8", position: "sticky", top: "140px" }}>
        <h2 
          style={{ 
            fontFamily: "var(--fd)", 
            fontSize: "32px", 
            fontWeight: 400, 
            color: "var(--tx-h)", 
            lineHeight: "1.25",
            margin: 0
          }}
        >
          Technical <br />
          <span style={{ color: "var(--tx-2)", fontStyle: "italic" }}>Competencies</span>
        </h2>
        <p 
          style={{ 
            fontFamily: "var(--fb)", 
            fontSize: "14px", 
            color: "var(--tx-2)", 
            lineHeight: "1.6", 
            marginTop: "20px", 
            maxWidth: "280px" 
          }}
        >
          A focused set of skills for machine learning pipelines and modular full-stack engineering.
        </p>
      </div>

      {/* Right Column: Dynamic Borderless Stack Stream */}
      <div style={{ flex: "1.2", display: "flex", flexDirection: "column" }}>
        {Object.entries(skillsData).map(([cat, items]) => (
          <div 
            key={cat} 
            style={{ 
              display: "flex", 
              gap: "40px", 
              padding: "24px 0", 
              borderTop: "1px solid rgba(255, 255, 255, 0.04)" 
            }}
          >
            {/* Category Title Header Block */}
            <div style={{ width: "160px", flexShrink: 0 }}>
              <span 
                style={{ 
                  fontFamily: "var(--fm)", 
                  fontSize: "11px", 
                  color: "var(--a)", 
                  letterSpacing: "0.08em", 
                  textTransform: "uppercase",
                  display: "block",
                  paddingTop: "2px"
                }}
              >
                {cat}
              </span>
            </div>

            {/* Inline list stack elements */}
            <div style={{ flexGrow: 1 }}>
              <div 
                style={{ 
                  display: "flex", 
                  flexWrap: "wrap", 
                  gap: "12px 24px" // Clean row/column wrap separation parameters
                }}
              >
                {items.map((s, idx) => (
                  <div 
                    key={s} 
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "8px"
                    }}
                  >
                    <span 
                      style={{ 
                        fontFamily: "var(--fm)", 
                        fontSize: "10px", 
                        color: "var(--tx-2)", 
                        opacity: 0.35 
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span 
                      style={{ 
                        fontFamily: "var(--fb)", 
                        fontSize: "14.5px", 
                        color: "var(--tx)", 
                        fontWeight: 400 
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
        {/* Closing clean bottom border rule line */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.04)" }} />
      </div>
    </div>
  );
}