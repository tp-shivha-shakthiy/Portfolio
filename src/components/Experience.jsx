import React from "react";

const mobileStyles = `
  @media (max-width: 768px) {
    .exp-layout {
      flex-direction: column !important;
      gap: 0 !important;
    }
    .exp-header-col {
      position: static !important;
      top: unset !important;
      width: 100% !important;
      flex: none !important;
      margin-bottom: 8px;
    }
    .exp-header-col h2 {
      font-size: 28px !important;
    }
    .exp-stream {
      flex: none !important;
      width: 100% !important;
    }
    .exp-row {
      flex-direction: column !important;
      gap: 8px !important;
      padding: 20px 0 !important;
    }
    .exp-meta {
      width: 100% !important;
    }
    .exp-laurels {
      border-left: none !important;
      border-top: 1px solid rgba(255, 255, 255, 0.06) !important;
      padding-left: 0 !important;
      padding-top: 32px !important;
      margin-top: 16px !important;
      position: static !important;
      top: unset !important;
      flex: none !important;
      width: 100% !important;
    }
  }
`;

function ExperienceRow({ item }) {
  return (
    <div
      className="exp-row"
      style={{
        display: "flex",
        gap: "48px",
        padding: "36px 0",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
        alignItems: "flex-start",
      }}
    >
      <div
        className="exp-meta"
        style={{ width: "140px", flexShrink: 0, paddingTop: "4px" }}
      >
        <span
          style={{
            fontFamily: "var(--fm)",
            fontSize: "11px",
            color: "var(--tx-2)",
            letterSpacing: "0.06em",
            display: "block",
            marginBottom: "6px",
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
            opacity: 0.8,
          }}
        >
          {item.org}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "14px",
            marginBottom: "16px",
            flexWrap: "wrap",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--fd)",
              fontSize: "22px",
              fontWeight: 400,
              color: "var(--tx-h)",
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
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
                fontWeight: 300,
              }}
            >
              — {item.sub}
            </span>
          )}
        </div>

        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {item.points.map((pt, idx) => (
            <li
              key={idx}
              style={{
                fontFamily: "var(--fb)",
                fontSize: "14px",
                color: "var(--tx)",
                lineHeight: "1.75",
                position: "relative",
                paddingLeft: "18px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--a)",
                  opacity: 0.5,
                  fontSize: "12px",
                }}
              >
                —
              </span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ExperienceSection({ experienceData, achievementsData }) {
  return (
    <>
      <style>{mobileStyles}</style>
      <div
        className="exp-layout"
        style={{
          display: "flex",
          gap: "55px",
          marginTop: "32px",
          alignItems: "flex-start",
          width: "100%",
          background: "transparent",
          
        }}
      >
        {/* Col 1: Sticky Header */}
        <div
          className="exp-header-col"
          style={{
            flex: "0 0 220px",
            position: "sticky",
            top: "140px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "center", opacity: 0.4 }}>
            <span style={{ fontFamily: "var(--fm)", fontSize: "11px" }}>04</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--fd)",
              fontSize: "38px",
              fontWeight: 400,
              color: "var(--tx-h)",
              lineHeight: "1.15",
              margin: 0,
            }}
          >
            Experience
          </h2>
          <p
            style={{
              fontFamily: "var(--fb)",
              fontSize: "13px",
              color: "var(--tx-2)",
              lineHeight: "1.7",
              margin: "8px 0 0 0",
              opacity: 0.8,
              maxWidth: "240px",
            }}
          >
            Research and engineering experiences spanning computer vision,
            cybersecurity, machine learning, and applied AI across academic and
            industry-oriented projects.
          </p>
        </div>

        {/* Col 2: Experience Stream */}
        <div
          className="exp-stream"
          style={{ flex: "1.2", display: "flex", flexDirection: "column" }}
        >
          {experienceData.map((e, i) => (
            <ExperienceRow key={i} item={e} />
          ))}
          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.04)" }} />
        </div>

        {/* Col 3: Laurels */}
        <div
          className="exp-laurels"
          style={{
            flex: "0.8",
            borderLeft: "1px solid rgba(255, 255, 255, 0.04)",
            paddingLeft: "48px",
            position: "sticky",
            top: "140px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--fm)",
              fontSize: "10px",
              color: "var(--a)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              margin: "0 0 28px 0",
            }}
          >
            Awards
          </p>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {achievementsData.map((achievement, idx) => (
              <li
                key={idx}
                style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
              >
                <span
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: "10px",
                    color: "var(--tx-2)",
                    opacity: 0.4,
                    paddingTop: "2px",
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--fb)",
                    fontSize: "13.5px",
                    lineHeight: "1.65",
                    color: "var(--tx)",
                  }}
                >
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}