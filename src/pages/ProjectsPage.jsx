import { FEATURED_PROJECTS, MORE_PROJECTS, RESEARCH_PROJECTS } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { usePageMeta } from "../hooks/usePageMeta";

function Group({ id, title, projects }) {
  if (!projects.length) return null;
  return (
    <section className="projects-group" aria-labelledby={id}>
      <h2 id={id} className="section-title section-title--sm">{title}</h2>
      <div className="pcard-grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} headingLevel={3} />
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  usePageMeta({
    title: "Projects",
    description:
      "Backend, full-stack and applied-ML projects — TRACE, NeuroBridge, Vanta AI — plus research case studies, each with role, stack and results.",
    path: "/projects",
  });

  return (
    <div className="page">
      <h1 className="page__title">Projects</h1>
      <p className="page__intro">
        Selected engineering work first, then research. Each card says what I built; the case
        study has the architecture, decisions and results.
      </p>
      <Group id="selected" title="Selected" projects={FEATURED_PROJECTS} />
      <Group id="more" title="More projects" projects={MORE_PROJECTS} />
      <Group id="research-projects" title="Research" projects={RESEARCH_PROJECTS} />
    </div>
  );
}
