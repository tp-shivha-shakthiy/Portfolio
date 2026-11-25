import { Link, useLocation } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFoundPage() {
  const { pathname } = useLocation();

  // Vercel serves every path with status 200, so tell search engines not to index this page
  usePageMeta({ title: "Page not found", path: pathname, noindex: true });

  return (
    <section className="not-found">
      <span className="not-found__code">Error 404 · Route not found</span>
      <h1 className="not-found__title">This page doesn&apos;t exist.</h1>
      <p className="not-found__path">
        <span className="not-found__path-k">Requested</span>
        <code>{pathname}</code>
      </p>
      <div className="not-found__links">
        <Link to="/" className="text-link">← Back to home</Link>
        <Link to="/projects" className="text-link">View projects →</Link>
      </div>
    </section>
  );
}
