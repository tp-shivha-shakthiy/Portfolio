import { PROJECTS } from "../data/projects";
import { ProjectLinks } from "./links";

const vanta = PROJECTS.find((p) => p.slug === "vanta-ai");
const reid = PROJECTS.find((p) => p.slug === "st-hf-vvi-reid");

const ROWS = [
  {
    p: vanta,
    name: "VantaAI",
    meta: `${vanta.year} · ${vanta.team.toLowerCase()}`,
    fact: vanta.proof[0],
  },
  {
    p: reid,
    name: "ReID",
    meta: `${reid.year} · research internship`,
    fact: "Designed Adaptive STHPF with a learned frequency-selection gate",
  },
];

/* Ruled rows: discoverable, but quieter than the three spreads above. */
export default function OtherWork() {
  return (
    <section id="other" aria-labelledby="other-h" tabIndex={-1} className="section">
      <div className="runhead">
        <h2 id="other-h">Also <em>built</em></h2>
        <span className="label">Other projects</span>
      </div>
      <div className="rows">
        {ROWS.map(({ p, name, meta, fact }) => (
          <article key={p.slug} className="row" aria-labelledby={`row-${p.slug}`}>
            <div>
              <h3 id={`row-${p.slug}`}>{name}</h3>
              <p className="label row__meta">{meta}</p>
            </div>
            <div>
              <p className="row__what">{p.tagline}</p>
              <p className="row__role"><span className="label">My part</span> {p.role}{p.team && p.slug === "st-hf-vvi-reid" ? ` · ${p.team.toLowerCase()}` : ""}</p>
            </div>
            <div>
              <p className="row__fact">{fact}</p>
              <ProjectLinks project={p} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
