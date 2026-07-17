
function SpecRow({ label, value, href }) {
  return (
    <a
      href={href || undefined}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="contact-spec-row"
    >
      <span className="contact-spec-label">{label}</span>
      <span className="contact-spec-value">{value}</span>
    </a>
  );
}

export default function ContactSection() {
  return (
    <div className="contact-layout">
      {/* Left Column */}
      <div className="contact-left">
        <h2 className="contact-heading">
          Get In <br />
          <span style={{ color: "var(--tx-2)" }}>Touch</span>
        </h2>
        <p className="contact-desc">
          Building backend systems, intelligent applications,<br />
          and production-ready software.<br /><br />
          Available for software engineering opportunities.
        </p>

        <div className="contact-spec-card">
          <SpecRow label="EMAIL" value="tpshivhashakthiy@gmail.com" href="mailto:tpshivhashakthiy@gmail.com" />
          <SpecRow label="GITHUB" value="View GitHub →" href="https://github.com/tp-shivha-shakthiy" />
          <SpecRow label="LINKEDIN" value="Connect on LinkedIn →" href="https://linkedin.com/in/t-p-shivha-shakthiy-801723346" />
          <div className="contact-spec-status">
            <span className="contact-spec-label">STATUS</span>
            <span className="contact-spec-value">
              Open to Software Engineering<br />
              Internships & Full-Time Roles
            </span>
          </div>
        </div>
      </div>

      {/* Right Column — Communication Panel */}
      <div className="contact-right">
        <div className="contact-comm-panel">
          <span className="contact-comm-title">COMMUNICATION</span>

          <div className="contact-comm-row">
            <span className="contact-comm-label">Preferred Contact</span>
            <span className="contact-comm-value">Email</span>
          </div>

          <div className="contact-comm-row">
            <span className="contact-comm-label">Current Focus</span>
            <span className="contact-comm-value">
              Building TRACE —<br />
              Developer Intelligence Platform
            </span>
          </div>

          <div className="contact-comm-row">
            <span className="contact-comm-label">Availability</span>
            <span className="contact-comm-value">
              Open to Software Engineering<br />
              Internships & Full-Time Roles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
