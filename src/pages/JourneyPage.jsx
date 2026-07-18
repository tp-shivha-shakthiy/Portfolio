import { useEffect } from "react";
import { Link } from "react-router-dom";
import ExperienceSection from "../components/Experience";
import Awards from "../components/Awards";

const S = { padding: "48px 120px" };

export default function JourneyPage() {
  useEffect(() => {
    document.title = "Journey — T P Shivha Shakthiy";
  }, []);

  return (
    <>
      <section style={{ ...S, paddingTop: 100 }}>
        <ExperienceSection />
      </section>
      <section style={{ ...S, borderTop: "1px solid var(--br)" }}>
        <Awards />
      </section>
      <div className="page-next-wrap">
        <Link to="/contact" className="page-next">Continue exploring →</Link>
      </div>
    </>
  );
}
