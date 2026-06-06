import React from "react";

/* ── SUB-COMPONENT: Editorial Row ── */
function ExperienceRow({ item }) {
  return (
    <div 
      style={{ 
        display: "flex",
        gap: "48px",
        padding: "36px 0",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
        alignItems: "flex-start"
      }}
    >
      {/* Left Column: Subtle Muted Meta Data */}
      <div style={{ width: "140px", flexShrink: 0, paddingTop: "4px" }}>
        <span 
          style={{ 
            fontFamily: "var(--fm)", 
            fontSize: "11px", 
            color: "var(--tx-2)", // Changed from bright amber to a soft, premium gray 
            letterSpacing: "0.06em",
            display: "block",
            marginBottom: "6px"
          }}
        >
          {item.period}
        </span>
        <span 
          style={{ 
            fontFamily: "var(--fb)", 
            fontSize: "12px", 
            color: "var(--tx-2)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 500,
            opacity: 0.8
          }}
        >
          {item.org}
        </span>
      </div>

      {/* Right Column: Main Content Block */}
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "16px" }}>
          <h3 
            style={{ 
              fontFamily: "var(--fd)", 
              fontSize: "22px", 
              fontWeight: 400, 
              color: "var(--tx-h)", // Warm, soft heading tone
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: "-0.01em"
            }}
          >
            {item.role}
          </h3>
          {item.sub && (
            <span 
              style={{ 
                fontFamily: "var(--fb)", 
                fontSize: "13px", 
                color: "var(--tx-2)",
                fontStyle: "italic",
                fontWeight: 300
              }}
            >
              — {item.sub} {/* Removed the techy '//' and replaced with a premium dash */}
            </span>
          )}
        </div>

        <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {item.points.map((pt, idx) => (
            <li 
              key={idx} 
              style={{ 
                fontFamily: "var(--fb)", 
                fontSize: "14px", 
                color: "var(--tx)", 
                lineHeight: "1.75", 
                position: "relative",
                paddingLeft: "18px"
              }}
            >
              {/* Subtle accent color used as a quiet bullet point rather than a harsh tech icon */}
              <span style={{ position: "absolute", left: 0, color: "var(--a)", opacity: 0.5, fontSize: "12px" }}>—</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── MAIN EXPORT ── */
export default function ExperienceSection({ experienceData, achievementsData }) {
  return (
    <div 
      style={{ 
        display: "flex",
        gap: "80px", // Pushed columns apart for dramatic whitespace spacing
        marginTop: "32px",
        alignItems: "start",
        width: "100%",
        background: "transparent"
      }}
    >
      
      {/* Left Segment: Experience Stream */}
      <div style={{ flex: "1.2", display: "flex", flexDirection: "column" }}>
        {experienceData.map((e, i) => (
          <ExperienceRow key={i} item={e} />
        ))}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.04)" }} />
      </div>

      {/* Right Segment: Minimalist Laurels Index */}
      <div 
        style={{ 
          flex: "0.8",
          borderLeft: "1px solid rgba(255, 255, 255, 0.04)", 
          paddingLeft: "48px",
          position: "sticky",
          top: "140px"
        }}
      >
        <p 
          style={{ 
            fontFamily: "var(--fm)", 
            fontSize: "10px", 
            color: "var(--a)", // Golden amber used tastefully on headers only
            letterSpacing: "0.25em", 
            textTransform: "uppercase",
            margin: "0 0 28px 0"
          }}
        >
          Selected Laurels
        </p>

        <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
          {achievementsData.map((achievement, idx) => (
            <li 
              key={idx} 
              style={{ 
                display: "flex",
                gap: "16px",
                alignItems: "flex-start"
              }}
            >
              {/* Zero-padded indexes rendered in ultra-muted grey tone */}
              <span 
                style={{ 
                  fontFamily: "var(--fm)", 
                  fontSize: "10px", 
                  color: "var(--tx-2)", 
                  opacity: 0.4,
                  paddingTop: "2px"
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span 
                style={{ 
                  fontFamily: "var(--fb)", 
                  fontSize: "13.5px", 
                  lineHeight: "1.65", 
                  color: "var(--tx)" 
                }}
              >
                {achievement}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}