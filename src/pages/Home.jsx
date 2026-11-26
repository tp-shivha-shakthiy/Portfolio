import { usePageMeta } from "../hooks/usePageMeta";
import Masthead from "../components/Masthead";
import SelectedWork from "../components/SelectedWork";
import OtherWork from "../components/OtherWork";
import Research from "../components/Research";
import About from "../components/About";
import ContactSection from "../components/ContactSection";

export default function Home() {
  usePageMeta({
    description:
      "Software engineer focused on backend and applied AI. Selected work: NeuroBridge, TRACE and a first-author intrusion-detection paper accepted at ICTCS 2026.",
    path: "/",
  });

  return (
    <>
      <Masthead />
      <main id="main" tabIndex={-1}>
        <SelectedWork />
        <OtherWork />
        <Research />
        <About />
        <ContactSection />
      </main>
    </>
  );
}
