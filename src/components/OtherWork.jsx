import { PROJECTS } from "../data/projects";
import { ProjectLinks } from "./links";

const vanta = PROJECTS.find((p) => p.slug === "vanta-ai");
const reid = PROJECTS.find((p) => p.slug === "st-hf-vvi-reid");

const ROWS = [
  {
    p: vanta,
    name: "VantaAI",
    meta: `${vanta.year} · ${vanta.team.toLowerCase()}`,
    part: vanta.role,
    figure: "97.2%",
    caption: "fuzzy Q&A matching accuracy on 144 test queries, 0 false positives",
  },
  {
    p: reid,
    name: "ReID",
    meta: `${reid.year} · research internship`,
    part: "Designed the core ST-HF modules, including Adaptive STHPF with a learned frequency-selection gate · co-developed with one teammate",
    figure: "4-variant",
    caption: "cutoff ablation, with cross-modality evaluation (CMC, Rank-k, mAP)",
  },
];

/* Two quieter projects: same reading order as the spreads, smaller scale. */
export default function OtherWork() {
  return (
    <section id="other" aria-labelledby="other-h" tabIndex={-1} className="section section--full">
      <div className="runhead">
        <h2 id="other-h">Also <em>built</em></h2>
        <span className="label">Other projects</span>
      </div>
      <div className="section__body">
        <div className="rows">
          {ROWS.map(({ p, name, meta, part, figure, caption }) => (
            <article key={p.slug} className="row" aria-labelledby={`row-${p.slug}`}>
              <div>
                <p className="label row__meta">{meta}</p>
                <h3 id={`row-${p.slug}`}>{name}</h3>
              </div>
              <div>
                <p className="row__what">{p.tagline}</p>
                <p className="row__role"><span className="row__k">My part</span>{part}</p>
              </div>
              <div>
                <p className="row__fig">{figure}</p>
                <p className="row__cap">{caption}</p>
                <ProjectLinks project={p} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
