import React, { useState } from "react";
import { NAV } from "../data/nav";

export default function Navbar({ active, goto }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    goto(id);
    setMenuOpen(false);
  };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: "1px solid #111", background: "rgba(8,8,8,.85)", backdropFilter: "blur(12px)" }}>
      <nav style={{ maxWidth: 1024, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => handleNavClick("hero")} style={{ fontFamily: "monospace", fontSize: 13, color: "#848181", letterSpacing: ".15em" }}>
           Build. Refine. Evolve. <span style={{ color: "#acb2a9" }}></span>
        </button>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">
          {NAV.map(n => (
            <button 
              key={n} 
              className={`nav-link${active === n.toLowerCase() ? " active" : ""}`} 
              onClick={() => handleNavClick(n.toLowerCase())}
            >
              {n}
            </button>
          ))}
          
        </div>

        {/* Mobile Burger Trigger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", color: "#aaa" }} className="burger">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen
              ? <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              : <><line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="16" x2="17" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>
            }
          </svg>
        </button>
      </nav>

      {/* Mobile Flyout */}
      {menuOpen && (
        <div style={{ background: "#0d0d0d", borderTop: "1px solid #111", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {NAV.map(n => (
            <button 
              key={n} 
              className="nav-link" 
              style={{ textAlign: "left" }} 
              onClick={() => handleNavClick(n.toLowerCase())}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}