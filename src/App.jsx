import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";
import NotFoundPage from "./pages/NotFoundPage";

// Scrolls to top on page change, or to the section in the URL hash (e.g. /#projects).
// `key` changes on every navigation, so clicking the same hash link twice still scrolls.
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Wait one tick so the target route has rendered
    const t = setTimeout(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!el) return window.scrollTo(0, 0);
      el.scrollIntoView({ block: "start" });
      // Move focus with the scroll so keyboard and screen-reader users land in the section
      if (el.tabIndex >= 0 || el.hasAttribute("tabindex")) el.focus({ preventScroll: true });
    }, 0);
    return () => clearTimeout(t);
  }, [pathname, hash, key]);
  return null;
}

function Loader() {
  useEffect(() => {
    const loader = document.getElementById("loader");
    if (!loader) return;
    const minTime = 650;
    const start = Date.now();
    const fade = () => {
      const elapsed = Date.now() - start;
      const delay = Math.max(0, minTime - elapsed);
      setTimeout(() => {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 500);
      }, delay);
    };
    fade();
  }, []);
  return null;
}

function Footer() {
  return (
    <footer className="pf-footer">
      <div className="pf-footer__inner">
        <p className="footer-copy">© T P Shivha Shakthiy. Crafted with curiosity.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="pf-root">
      <ScrollManager />
      <Loader />
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex={-1} className="pf-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        {/* Old standalone pages now live as homepage sections; keep their URLs working */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/journey" element={<Navigate to="/#experience" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}
