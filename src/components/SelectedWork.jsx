import { PROJECTS } from "../data/projects";
import { ProjectLinks } from "./links";

const bySlug = (slug) => PROJECTS.find((p) => p.slug === slug);

/* ── NeuroBridge: the adaptive engine as a closed loop ─────────────────────
   Stages are the real pipeline from the architecture, in order. The SVG is
   decorative for assistive tech; the numbered list below it carries the content
   (visible on narrow screens, where the ring drops its labels). */
const LOOP = [
  ["context", "Context engine"],
  ["runtime", "Adaptive runtime"],
  ["user state", "User-state model"],
  ["reasoning", "Deterministic reasoning"],
  ["policy & safety", "Policy, conflict, preference and safety evaluation"],
  ["hysteresis", "Hysteresis"],
  ["planning", "Intervention planning"],
  ["adaptive UI", "Adaptive UI"],
  ["reflection", "Outcome and reflection"],
  ["personalization", "Tier-9 personalization"],
];

function AdaptiveLoop() {
  const cx = 350, cy = 225, r = 150, lr = 176;
  return (
    <figure className="loop">
      <svg viewBox="0 0 700 450" aria-hidden="true" focusable="false">
        <circle cx={cx} cy={cy} r={r} className="loop__ring" />
        <circle cx={cx} cy={cy} r={r - 40} className="loop__ring loop__ring--inner" />
        {LOOP.map(([short], i) => {
          const a = -Math.PI / 2 + (i * 2 * Math.PI) / LOOP.length;
          const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
          const lx = cx + lr * Math.cos(a), ly = cy + lr * Math.sin(a) + 5;
          const anchor = Math.abs(Math.cos(a)) < 0.2 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
          return (
            <g key={short}>
              <circle cx={x} cy={y} r="12" className={i === 0 ? "loop__node loop__node--start" : "loop__node"} />
              <text x={x} y={y + 4} className="loop__num" textAnchor="middle">{i + 1}</text>
              <text x={lx} y={ly + (Math.abs(Math.cos(a)) < 0.2 ? (Math.sin(a) < 0 ? -10 : 12) : 0)} className="loop__lbl" textAnchor={anchor}>
                {short}
              </text>
            </g>
          );
        })}
        <text x={cx} y={cy - 4} className="loop__core" textAnchor="middle">adaptive</text>
        <text x={cx} y={cy + 26} className="loop__core loop__core--acc" textAnchor="middle">engine</text>
      </svg>
      <figcaption>
        <ol className="loop__legend">
          {LOOP.map(([short, full]) => <li key={short}>{full}</li>)}
        </ol>
        <p className="cap">The ten stages run in order; outcomes feed back into personalization.</p>
      </figcaption>
    </figure>
  );
}

function NeuroBridge() {
  const p = bySlug("neurobridge");
  return (
    <article className="spread spread--teal nb" aria-labelledby="nb-h">
      <span className="spread__no" aria-hidden="true">1</span>
      <div className="spread__text">
        <p className="meta">{p.year} · {p.team} · {p.status}</p>
        <h3 id="nb-h" className="ptitle">Neuro<em>Bridge</em></h3>
        <p className="state">{p.tagline}</p>
        <table className="spec">
          <tbody>
            <tr>
              <th scope="row">My part</th>
              <td>
                Architected and built the adaptive engine, and connected the platform&apos;s 11 condition
                modules to it. Led the ASD module and built the Anxiety module.
              </td>
            </tr>
            <tr>
              <th scope="row">Team</th>
              <td>Four people built the platform and its condition modules; Runner-Up at Girlathon 4.0 (2026).</td>
            </tr>
            <tr>
              <th scope="row">Tests</th>
              <td>1,054 of 1,059 frontend tests passing (whole project, 118 test files)</td>
            </tr>
            <tr>
              <th scope="row">Stack</th>
              <td className="stk">{p.stack.join(" · ")}</td>
            </tr>
          </tbody>
        </table>
        <ProjectLinks project={p} />
      </div>
      <AdaptiveLoop />
    </article>
  );
}

/* ── TRACE: the pipeline, marked by state ───────────────────────────────── */
const PIPE = [
  ["GitHub OAuth", "sign-in and owner-scoped access", "built"],
  ["GitHub API", "source of activity", "external"],
  ["FastAPI", "REST backend", "built"],
  ["Async sync worker", "deterministic, idempotent sync outside the request path", "built"],
  ["PostgreSQL", "developer, repository and activity model", "built"],
  ["Analytics layer", "deeper developer intelligence", "dev"],
];

function Trace() {
  const p = bySlug("trace");
  return (
    <article className="spread spread--brass tr" aria-labelledby="tr-h">
      <span className="spread__no" aria-hidden="true">2</span>
      <div className="tr__pipe">
        <ol className="vpipe" aria-label="TRACE pipeline">
          {PIPE.map(([name, what, state]) => (
            <li key={name} className={`vpipe__step vpipe__step--${state}`}>
              {name}
              <small>
                {what}
                <span className="sr-only">
                  {state === "built" ? " (working now)" : state === "dev" ? " (in development)" : " (external service)"}
                </span>
              </small>
            </li>
          ))}
        </ol>
        <ul className="vpipe__key" aria-hidden="true">
          <li className="vpipe__key--built">working now</li>
          <li className="vpipe__key--external">external</li>
          <li className="vpipe__key--dev">in development</li>
        </ul>
      </div>
      <div className="spread__text">
        <p className="meta">{p.year} · Solo · {p.status}</p>
        <h3 id="tr-h" className="ptitle">TRA<em>CE</em></h3>
        <p className="state">{p.tagline}</p>
        <table className="spec">
          <tbody>
            <tr><th scope="row">My part</th><td>Solo — design, backend and deployment</td></tr>
            <tr>
              <th scope="row">Working now</th>
              <td>
                GitHub OAuth with owner-scoped access · deterministic, idempotent sync that never duplicates
                records · 66+ live GitHub events synced in end-to-end testing · backend and frontend deployed with Docker
              </td>
            </tr>
            <tr>
              <th scope="row">In progress</th>
              <td>Deeper developer-intelligence pipelines and additional event-driven infrastructure</td>
            </tr>
            <tr><th scope="row">Stack</th><td className="stk">{p.stack.join(" · ")}</td></tr>
          </tbody>
        </table>
        <ProjectLinks project={p} />
      </div>
    </article>
  );
}

/* ── IDS Research: a paper page ─────────────────────────────────────────── */
function IdsResearch() {
  const p = bySlug("network-intrusion-detection-under-class-imbalance");
  const pub = p.publication;
  return (
    <article className="spread spread--coral ids" aria-labelledby="ids-h">
      <span className="spread__no" aria-hidden="true">3</span>
      <div className="ids__top">
        <div>
          <p className="meta">{p.year} · {pub.authorship} · {p.status}</p>
          <h3 id="ids-h" className="ptitle">IDS <em>Research</em></h3>
        </div>
        <div>
          <p className="ids__paper">“{pub.title}”</p>
          <p className="ids__venue">
            {pub.authorship} · {pub.venue} · {pub.status.toLowerCase()} · Paper ID {pub.paperId}
          </p>
        </div>
      </div>

      <div className="ids__grid">
        <div>
          <table className="res">
            <caption className="sr-only">Results reported in the paper, by task. Each task uses a different model.</caption>
            <thead>
              <tr><th scope="col">Task</th><th scope="col">Accuracy</th><th scope="col">Model and other metrics</th></tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Binary<small>normal vs attack</small></th>
                <td className="res__big">98.70%<small className="res__unit" aria-hidden="true">accuracy</small></td>
                <td>Shared-feature BiLSTM<small>95.10% F1 · 99.92% AUC</small></td>
              </tr>
              <tr>
                <th scope="row">Multiclass<small>normal + 9 attack types</small></th>
                <td className="res__big">96.66%<small className="res__unit" aria-hidden="true">accuracy</small></td>
                <td>DNN with MI + PCA<small>97.29% weighted F1</small></td>
              </tr>
            </tbody>
          </table>
          <ProjectLinks project={p} />
        </div>

        <div>
          <p className="label">The problem: class imbalance</p>
          <figure className="imb">
            <div className="imb__track" role="img" aria-label="About 87 percent of records are normal traffic and about 13 percent are attacks">
              <i /><i />
            </div>
            <figcaption className="imb__legend"><span>~87% normal</span><span>~13% attacks</span></figcaption>
          </figure>
          <ul className="ids__facts">
            <li><b>UNSW-NB15</b>, 2.54M records, 10 traffic classes</li>
            <li>Rarest class, <b>Worms</b>: 174 samples</li>
            <li>Stratified 80:20 split · 5-fold CV · held-out test set</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-h" tabIndex={-1} className="section">
      <div className="runhead">
        <h2 id="work-h">Selected <em>work</em></h2>
        <span className="label">Three projects</span>
      </div>
      <NeuroBridge />
      <Trace />
      <IdsResearch />
    </section>
  );
}
