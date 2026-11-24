import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NotFoundPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = "Page Not Found — T P Shivha Shakthiy";
  }, []);

  return (
    <section className="not-found">
      <span className="not-found__code">Error 404 · Route not found</span>
      <h1 className="not-found__title">This page doesn&apos;t exist.</h1>
      <p className="not-found__path">
        <span className="not-found__path-k">Requested</span>
        <code>{pathname}</code>
      </p>
      <div className="not-found__links">
        <Link to="/" className="page-next">← Back to home</Link>
        <Link to="/projects" className="page-next">View projects →</Link>
      </div>
    </section>
  );
}
