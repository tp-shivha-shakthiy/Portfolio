import { Link } from "react-router-dom";

/* External link: opens in a new tab and says so to assistive technology. */
export function ExtLink({ href, children, label, className = "link" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label ? `${label} (opens in a new tab)` : undefined}
    >
      {children}
    </a>
  );
}

/* The standard link row under a project: case study, code, live demo. */
export function ProjectLinks({ project, className = "plinks" }) {
  const name = project.shortTitle || project.title;
  return (
    <p className={className}>
      <Link className="link" to={`/projects/${project.slug}`} aria-label={`${name} case study`}>
        Case study
      </Link>
      {project.github && (
        <ExtLink href={project.github} label={`${name} source code on GitHub`}>Code ↗</ExtLink>
      )}
      {project.demo && (
        <ExtLink href={project.demo} label={`${name} live demo`}>Live ↗</ExtLink>
      )}
    </p>
  );
}
