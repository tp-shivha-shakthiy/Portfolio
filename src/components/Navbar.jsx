import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const NAV = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Journey", path: "/journey" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [theme, toggleTheme] = useTheme();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: "1px solid var(--br)",
        background: "var(--nav-bg)",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav
        style={{
          padding: "0 120px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          aria-label="Home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <img
            src="/logo.png"
            alt="Home"
            style={{ height: 32, objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "var(--fm)",
              fontSize: 8,
              color: "var(--a)",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              border: "1px solid var(--a-bd)",
              padding: "2px 6px",
              borderRadius: 2,
            }}
          >
            Home
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">
          {NAV.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`nav-link${isActive(n.path) ? " active" : ""}`}
              style={{ textDecoration: "none" }}
            >
              {n.label}
            </Link>
          ))}

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className={`theme-toggle__opt${theme === "light" ? " theme-toggle__opt--active" : ""}`}>
              light
            </span>
            <span className="theme-toggle__pip" />
            <span className={`theme-toggle__opt${theme === "dark" ? " theme-toggle__opt--active" : ""}`}>
              dark
            </span>
          </button>
        </div>

        {/* Mobile Burger Trigger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", color: "var(--tx-2)", alignItems: "center", gap: 6 }}
          className="burger"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="16" x2="17" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
          <span style={{ fontFamily: "var(--fm)", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Flyout */}
      {menuOpen && (
        <div
          style={{
            background: "var(--bg-1)",
            borderTop: "1px solid var(--br)",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <Link
            to="/"
            aria-label="Home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              marginBottom: 8,
            }}
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Home"
              style={{ height: 32, objectFit: "contain" }}
            />
            <span
              style={{
                fontFamily: "var(--fm)",
                fontSize: 8,
                color: "var(--a)",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                border: "1px solid var(--a-bd)",
                padding: "2px 6px",
                borderRadius: 2,
              }}
            >
              Home
            </span>
          </Link>
          {NAV.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className="nav-link"
              style={{ textAlign: "left", textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <button
            className="theme-toggle"
            onClick={() => { toggleTheme(); setMenuOpen(false); }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            style={{ alignSelf: "flex-start" }}
          >
            <span className={`theme-toggle__opt${theme === "light" ? " theme-toggle__opt--active" : ""}`}>
              light
            </span>
            <span className="theme-toggle__pip" />
            <span className={`theme-toggle__opt${theme === "dark" ? " theme-toggle__opt--active" : ""}`}>
              dark
            </span>
          </button>
        </div>
      )}
    </header>
  );
}
