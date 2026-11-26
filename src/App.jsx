import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFoundPage from "./pages/NotFoundPage";
import { SiteFooter } from "./components/SiteChrome";

// Scrolls to top on page change, or to the section in the URL hash (e.g. /#work).
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
      if (el.hasAttribute("tabindex")) el.focus({ preventScroll: true });
    }, 0);
    return () => clearTimeout(t);
  }, [pathname, hash, key]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <a href="#main" className="skip-link">Skip to content</a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        {/* Older URLs: the project index and standalone pages now live as homepage sections */}
        <Route path="/projects" element={<Navigate to="/#work" replace />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/journey" element={<Navigate to="/#about" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </>
  );
}
