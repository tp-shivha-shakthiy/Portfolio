import React from "react";

export default function SectionHeading({ num, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
      <span style={{ fontFamily: "monospace", fontSize: 11, color: "#333", letterSpacing: "0.15em" }}>{num}</span>
      <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
      <span style={{ fontFamily: "monospace", fontSize: 11, color: "#444", textTransform: "uppercase", letterSpacing: "0.15em" }}>{title}</span>
    </div>
  );
}