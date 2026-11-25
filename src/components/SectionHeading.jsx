
export default function SectionHeading({ title, as = "h2" }) {
  const Tag = as;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
      <Tag style={{ fontFamily: "var(--fm)", fontSize: 11, fontWeight: 400, color: "var(--tx-2)", textTransform: "uppercase", letterSpacing: "0.15em", margin: 0 }}>{title}</Tag>
      <div aria-hidden="true" style={{ flex: 1, height: 1, background: "var(--br)" }} />
    </div>
  );
}