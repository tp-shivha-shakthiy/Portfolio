import { useState, useRef, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// Links jump to homepage sections; "Projects" also counts as active on /projects pages
const NAV = [
  { label: "Projects", path: "/#projects", activeFor: "/projects" },
  { label: "Experience", path: "/#experience" },
  { label: "About", path: "/#about" },
  { label: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [theme, toggleTheme, setTheme] = useTheme();
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const menuItemsRef = useRef([]);

  const isActive = (pathOrItem) => {
    if (pathOrItem === "/") return pathname === "/";
    return Boolean(pathOrItem.activeFor && pathname.startsWith(pathOrItem.activeFor));
  };

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    triggerRef.current?.focus();
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      if (!prev) return true;
      triggerRef.current?.focus();
      return false;
    });
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }

      if (e.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const items = menuItemsRef.current.filter(Boolean);
        if (!items.length) return;
        const idx = items.indexOf(document.activeElement);
        const next =
          e.key === "ArrowDown"
            ? (idx + 1) % items.length
            : (idx - 1 + items.length) % items.length;
        items[next]?.focus();
      }
    };

    const handlePointerDown = (e) => {
      if (!panelRef.current) return;
      if (panelRef.current.contains(e.target)) return;
      closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    const timer = setTimeout(() => {
      menuItemsRef.current[0]?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      clearTimeout(timer);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main">
        <Link to="/" aria-label="Home" className="site-logo">
          <img src="/logo-88.png" alt="" width={44} height={44} className="site-logo__img" />
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {NAV.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`nav-link${isActive(n) ? " active" : ""}`}
              aria-current={isActive(n) ? "page" : undefined}
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
            <span className="theme-toggle__pip" aria-hidden="true" />
            <span className={`theme-toggle__opt${theme === "dark" ? " theme-toggle__opt--active" : ""}`}>
              dark
            </span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          ref={triggerRef}
          onClick={toggleMenu}
          className="nav-trigger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu-panel"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              </>
            )}
          </svg>
          <span className="nav-trigger__label">Menu</span>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {menuOpen && (
          <div
            ref={panelRef}
            id="mobile-menu-panel"
            role="dialog"
            aria-label="Navigation menu"
            className="nav-panel"
          >
            <div className="nav-panel__header">
              <span className="nav-panel__title">Menu</span>
            </div>

            <div className="nav-panel__items">
              <Link
                to="/"
                ref={(el) => { menuItemsRef.current[0] = el; }}
                className={`nav-panel__item${isActive("/") ? " nav-panel__item--active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-panel__idx" aria-hidden="true">00</span>
                <span className="nav-panel__label">Home</span>
              </Link>
              {NAV.map((n, i) => (
                <Link
                  key={n.path}
                  to={n.path}
                  ref={(el) => { menuItemsRef.current[i + 1] = el; }}
                  className={`nav-panel__item${isActive(n) ? " nav-panel__item--active" : ""}`}
                  onClick={closeMenu}
                >
                  <span className="nav-panel__idx" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="nav-panel__label">{n.label}</span>
                </Link>
              ))}
            </div>

            <div className="nav-panel__divider" />

            <div className="nav-panel__theme">
              <span className="nav-panel__theme-label">Theme</span>
              <div className="nav-panel__theme-opts">
                <button
                  ref={(el) => { menuItemsRef.current[NAV.length + 1] = el; }}
                  className={`nav-panel__theme-opt${theme === "light" ? " nav-panel__theme-opt--active" : ""}`}
                  onClick={() => { setTheme("light"); closeMenu(); }}
                  aria-pressed={theme === "light"}
                >
                  <span className="nav-panel__theme-pip" aria-hidden="true" />
                  Light
                </button>
                <button
                  ref={(el) => { menuItemsRef.current[NAV.length + 2] = el; }}
                  className={`nav-panel__theme-opt${theme === "dark" ? " nav-panel__theme-opt--active" : ""}`}
                  onClick={() => { setTheme("dark"); closeMenu(); }}
                  aria-pressed={theme === "dark"}
                >
                  <span className="nav-panel__theme-pip" aria-hidden="true" />
                  Dark
                </button>
              </div>
            </div>
          </div>
      )}
    </header>
  );
}
