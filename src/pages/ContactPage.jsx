import { useEffect } from "react";
import ContactSection from "../components/Contact";

const S = { padding: "32px 120px" };

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — T P Shivha Shakthiy";
  }, []);

  return (
    <section style={{ ...S, paddingTop: 80 }}>
      <ContactSection />
    </section>
  );
}
