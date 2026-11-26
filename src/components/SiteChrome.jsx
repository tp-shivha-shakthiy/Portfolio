import { Link } from "react-router-dom";
import { PROFILE } from "../data/profile";

/* Slim header for inner pages (case studies, 404); the homepage has the full masthead. */
export function SiteHeader() {
  return (
    <header className="bar paper" id="top">
      <Link to="/" className="bar__mark" aria-label="Shivha Shakthiy — home">
        Shivha <em>Shakthiy</em>
      </Link>
      <nav aria-label="Site">
        <ul className="bar__nav">
          <li><Link to="/#work">Work</Link></li>
          <li><Link to="/#research">Research</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="colophon label">
      <span>© 2026 {PROFILE.displayName}</span>
      <a href="#top" className="colophon__top">Back to top ↑</a>
    </footer>
  );
}
