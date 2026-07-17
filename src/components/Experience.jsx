
import { EXPERIENCE } from "../data/experience";

function ExperienceRow({ item }) {
  return (
    <div
      className="exp-row"
      style={{
        display: "flex",
        gap: "48px",
        padding: "36px 0",
        borderTop: "1px solid var(--br)",
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

export default function ExperienceSection() {
  return (
    <div className="exp-layout">
      {/* Col 1: Sticky Header */}
      <div className="exp-header-col">
        <h2 className="exp-heading">Experience</h2>
        <p className="exp-intro">
          Engineering and research experience spanning backend systems, computer
          vision, cybersecurity, and applied machine learning, with a focus on
          building reproducible software, scalable pipelines, and
          production-oriented tooling.
        </p>
      </div>

      {/* Col 2: Experience Stream */}
      <div className="exp-stream">
        {EXPERIENCE.map((e, i) => (
          <ExperienceRow key={i} item={e} />
        ))}
        <div className="exp-stream-end" />
      </div>
    </div>
  );
}