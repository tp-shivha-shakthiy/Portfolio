export function FieldLabel({ children }) {
  return (
    <span
      style={{
        fontFamily: "var(--fm)",
        fontSize: 10,
        color: "var(--a)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        display: "block",
        marginBottom: 4,
      }}
    >
      {children}
    </span>
  );
}

export function FieldText({ children }) {
  return (
    <p
      style={{
        fontFamily: "var(--fb)",
        fontSize: 13,
        color: "var(--tx)",
        lineHeight: "1.7",
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

export function DashList({ items }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      {items.map((d, i) => (
        <li
          key={i}
          style={{
            fontFamily: "var(--fb)",
            fontSize: 13,
            color: "var(--tx)",
            lineHeight: "1.65",
            position: "relative",
            paddingLeft: 16,
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              color: "var(--a)",
              opacity: 0.5,
              fontSize: 11,
            }}
          >
            —
          </span>
          {d}
        </li>
      ))}
    </ul>
  );
}

export function Pill({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: "var(--fm)",
        fontSize: 11,
        color: "var(--tx-2)",
        border: "1px solid var(--br-2)",
        padding: "5px 14px",
        borderRadius: 4,
        textDecoration: "none",
        transition: "color 0.2s, border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--a)";
        e.currentTarget.style.borderColor = "var(--a-bd)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--tx-2)";
        e.currentTarget.style.borderColor = "var(--br-2)";
      }}
    >
      {children}
    </a>
  );
}


const pageStyles = `
  .pj-overview-body { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .pj-metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
  @media (max-width: 768px) {
    .pj-overview-body { grid-template-columns: 1fr !important; }
    .pj-metrics-grid { grid-template-columns: 1fr !important; }
    .pj-case-body { padding-left: 0 !important; }
  }
`;

export function PageStyles() {
  return <style>{pageStyles}</style>;
}
