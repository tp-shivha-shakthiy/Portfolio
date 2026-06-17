import React from "react";

export default function SectionHeading({ num, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
      <span style={{ fontFamily: "var(--fm)", fontSize: 11, color: "var(--a)", letterSpacing: "0.15em" }}>{num}</span>
      <div style={{ flex: 1, height: 1, background: "var(--br)" }} />
      <span style={{ fontFamily: "var(--fm)", fontSize: 11, color: "var(--tx-2)", textTransform: "uppercase", letterSpacing: "0.15em" }}>{title}</span>
    </div>
  );
}