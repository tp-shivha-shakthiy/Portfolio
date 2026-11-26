import { Link, useLocation } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { SiteHeader } from "../components/SiteChrome";

export default function NotFoundPage() {
  const { pathname } = useLocation();

  // Vercel serves every path with status 200, so tell search engines not to index this page
  usePageMeta({ title: "Page not found", path: pathname, noindex: true });

  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="plain">
        <p className="label">404 · Page not found</p>
        <h1 className="plain__title">This page doesn&apos;t exist.</h1>
        <p className="plain__path">Requested <code>{pathname}</code></p>
        <p className="plinks">
          <Link to="/" className="link">← Home</Link>
          <Link to="/#work" className="link">Selected work</Link>
        </p>
      </main>
    </>
  );
}
