import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactItem({ label, value, href }) {
  const content = (
    <span 
      style={{ 
        fontFamily: "var(--fb)", 
        fontSize: "15px", 
        color: "var(--tx)", 
        fontWeight: 400,
        transition: "color 0.2s ease"
      }}
      className={href ? "contact-link-text" : ""}
    >
      {value}
    </span>
  );

  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "6px",
        padding: "20px 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.04)"
      }}
    >
      <span 
        style={{ 
          fontFamily: "var(--fm)", 
          fontSize: "10px", 
          color: "var(--a)", 
          letterSpacing: "0.08em", 
          textTransform: "uppercase" 
        }}
      >
        {label}
      </span>
      {href ? (
        <a 
          href={href} 
          style={{ textDecoration: "none", display: "inline-block" }}
          data-cursor="Open"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

/* ── MAIN EXPORT: Contact Section ── */
export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (form.name && form.email && form.message) {
      setLoading(true);
      setErrorMessage("");

      const SERVICE_ID = "service_m3lotbg";
      const TEMPLATE_ID = "template_ijekv8e";
      const PUBLIC_KEY = "aLMxSEmqYA_mP6f-0";

      // Initialize the SDK directly
      emailjs.init(PUBLIC_KEY);

      // Map the clean React state directly into the payload arguments
      const templateParams = {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
      };

      // Using direct JSON delivery bypassing DOM references
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(
          () => {
            setLoading(false);
            setSent(true);
            setForm({ name: "", email: "", subject: "", message: "" });
          },
          (error) => {
            setLoading(false);
            // Catch the explicit API error string if there's an account/template mismatch
            const detail = error?.text || JSON.stringify(error);
            setErrorMessage(`Transmission failure: ${detail}. Please try again.`);
            console.error("EmailJS Technical Context:", error);
          }
        );
    }
  };

  const contactLinks = [
    { label: "Email", value: "tpshivhashakthiyy@gmail.com", href: "mailto:tpshivhashakthiyy@gmail.com" },
    { label: "GitHub", value: "View GitHub Profile", href: "https://github.com/tp-shivha-shakthiy" },
    { label: "LinkedIn", value: "Connect on LinkedIn", href: "https://linkedin.com/in/t-p-shivha-shakthiy-801723346" },
    { label: "Open to", value: "AI/ML & Software Engineering Roles", href: null },
  ];

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
      {/* Left Column: Asymmetric Stream Identity Context */}
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
          Get In <br />
          <span style={{ color: "var(--tx-2)", fontStyle: "italic" }}>Touch</span>
        </h2>
        Let's connect for AI, ML, software engineering, or research.
        <div style={{ display: "flex", flexDirection: "column", marginTop: "24px" }}>
          {contactLinks.map((link) => (
            <ContactItem 
              key={link.label} 
              label={link.label} 
              value={link.value} 
              href={link.href} 
            />
          ))}
        </div>
      </div>

      {/* Right Column: Premium Monolithic Form Area */}
      <div style={{ flex: "1.2" }}>
        {sent ? (
          <div 
            style={{ 
              padding: "48px 32px", 
              border: "1px solid rgba(255, 255, 255, 0.05)",
              backgroundColor: "rgba(255, 255, 255, 0.01)",
              display: "flex", 
              flexDirection: "column", 
              gap: "12px",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <span style={{ fontSize: "32px", color: "var(--a)" }}>✓</span>
            <p style={{ fontFamily: "var(--fd)", fontSize: "20px", color: "var(--tx-h)", margin: 0 }}>
              Transmission Received
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: "14px", color: "var(--tx-2)", maxWidth: "280px", margin: 0 }}>
              Thank you. I will review your message and reply shortly.
            </p>
            <button 
              onClick={() => setSent(false)}
              style={{
                background: "none",
                border: "none",
                fontFamily: "var(--fm)",
                fontSize: "11px",
                color: "var(--a)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginTop: "16px",
                textDecoration: "underline",
                cursor: "pointer"
              }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit} 
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div className="form-group">
                <input
                  type="text"
                  className="interactive-input"
                  placeholder=" "
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={loading}
                  required
                />
                <label className="interactive-label">Profile Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="interactive-input"
                  placeholder=" "
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={loading}
                  required
                />
                <label className="interactive-label">Email Address</label>
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="interactive-input"
                placeholder=" "
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                disabled={loading}
                required
              />
              <label className="interactive-label">Transmission Subject</label>
            </div>

            <div className="form-group">
              <textarea
                className="interactive-input"
                rows={5}
                placeholder=" "
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ resize: "none" }}
                disabled={loading}
                required
              />
              <label className="interactive-label">Message Payload</label>
            </div>

            {errorMessage && (
              <div 
                style={{ 
                  fontFamily: "var(--fm)", 
                  fontSize: "12px", 
                  color: "#f87171", 
                  background: "rgba(239, 68, 68, 0.05)",
                  border: "1px solid rgba(239, 68, 68, 0.15)",
                  padding: "12px 16px",
                  borderRadius: "2px"
                }}
              >
                {errorMessage}
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary" 
              disabled={loading}
              style={{ 
                width: "100%", 
                padding: "16px", 
                justifyContent: "center",
                opacity: loading ? 0.6 : 1,
                cursor: loading ? "not-allowed" : "pointer"
              }}
            >
              {loading ? "Transmitting Pipeline..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}