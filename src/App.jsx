import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";
import JourneyPage from "./pages/JourneyPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
      <ScrollToTop />
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
