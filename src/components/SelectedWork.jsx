import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../data/projects";
import { ProjectLinks } from "./links";

const bySlug = (slug) => PROJECTS.find((p) => p.slug === slug);

/* ── Shared spread parts ───────────────────────────────────────────────────
   Reading order inside every spread: name → what it is → my contribution
   (highlighted) → evidence (large figures) → quieter details → links.       */

function Spread({ no, tone, labelledBy, children }) {
  return (
    <article className={`spread spread--${tone}`} aria-labelledby={labelledBy}>
      {/* Folio: the project number has its own column, so it is never clipped */}
      <p className="spread__no" aria-hidden="true">{no}</p>
      <div className="spread__body">{children}</div>
    </article>
  );
}

function Contribution({ children }) {
  return (
    <div className="contrib">
      <p className="contrib__k">My contribution</p>
      <p className="contrib__v">{children}</p>
    </div>
  );
}

function Evidence({ items }) {
  return (
    <dl className="evidence">
      {items.map(([figure, caption]) => (
        <div key={caption} className="evidence__item">
          <dt>{figure}</dt>
          <dd>{caption}</dd>
        </div>
      ))}
    </dl>
  );
}

function Details({ rows }) {
  return (
    <table className="spec">
      <tbody>
        {rows.map(([k, v, mono]) => (
          <tr key={k}>
            <th scope="row">{k}</th>
            <td className={mono ? "stk" : undefined}>{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ── NeuroBridge: the adaptive engine as a closed loop ─────────────────────
   Stages are the real pipeline from the architecture, in order. The SVG is
   decorative for assistive tech; the numbered list carries the content
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
          const vertical = Math.abs(Math.cos(a)) < 0.2;
          const lx = cx + lr * Math.cos(a);
          const ly = cy + lr * Math.sin(a) + 5 + (vertical ? (Math.sin(a) < 0 ? -10 : 12) : 0);
          const anchor = vertical ? "middle" : Math.cos(a) > 0 ? "start" : "end";
          return (
            <g key={short}>
              <circle cx={x} cy={y} r="12" className={i === 0 ? "loop__node loop__node--start" : "loop__node"} />
              <text x={x} y={y + 4} className="loop__num" textAnchor="middle">{i + 1}</text>
              <text x={lx} y={ly} className="loop__lbl" textAnchor={anchor}>{short}</text>
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
        <p className="cap">The engine I designed: ten stages in order, with outcomes feeding back into personalization.</p>
      </figcaption>
    </figure>
  );
}

function NeuroBridge() {
  const p = bySlug("neurobridge");
  return (
    <Spread no="01" tone="teal" labelledBy="nb-h">
      <div className="nb">
        <div className="spread__text">
          <p className="meta">{p.year} · {p.team} · {p.status}</p>
          <h3 id="nb-h" className="ptitle">Neuro<em>Bridge</em></h3>
          <p className="state">{p.tagline}</p>
          <Contribution>
            Designed and built the adaptive engine — a deterministic 10-stage pipeline — and connected the
            platform&apos;s 11 condition modules to it. Led the ASD module and built the Anxiety module.
          </Contribution>
          <Evidence
            items={[
              ["1,054 / 1,059", "frontend tests passing across 118 files (whole project)"],
              ["Runner-Up", "Girlathon 4.0, 2026 (team)"],
            ]}
          />
          <Details
            rows={[
              ["Team", "Four people built the platform and its condition modules"],
              ["Stack", p.stack.join(" · "), true],
            ]}
          />
          <ProjectLinks project={p} />
        </div>
        <AdaptiveLoop />
      </div>
    </Spread>
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
    <Spread no="02" tone="brass" labelledBy="tr-h">
      <div className="tr">
        <div className="spread__text">
          <p className="meta">{p.year} · Solo · {p.status}</p>
          <h3 id="tr-h" className="ptitle">TRA<em>CE</em></h3>
          <p className="state">{p.tagline}</p>
          <Contribution>
            Solo — I designed, built and deployed the backend: GitHub OAuth with owner-scoped access, a
            deterministic, idempotent sync worker outside the request path, and the PostgreSQL data model.
          </Contribution>
          <Evidence
            items={[
              ["66+", "live GitHub events synced in end-to-end testing"],
              ["Deployed", "FastAPI backend and frontend, Dockerized"],
            ]}
          />
          <Details
            rows={[
              ["In progress", "Deeper developer-intelligence pipelines and additional event-driven infrastructure"],
              ["Stack", p.stack.join(" · "), true],
            ]}
          />
          <ProjectLinks project={p} />
        </div>

        <div className="tr__pipe">
          <p className="label tr__pipe-h">How it works</p>
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
      </div>
    </Spread>
  );
}

/* ── IDS Research: a paper page ─────────────────────────────────────────── */
function IdsResearch() {
  const p = bySlug("network-intrusion-detection-under-class-imbalance");
  const pub = p.publication;
  return (
    <Spread no="03" tone="coral" labelledBy="ids-h">
      <div className="ids">
        <div className="ids__top">
          <div className="spread__text">
            <p className="meta">{p.year} · Research · {p.status}</p>
            <h3 id="ids-h" className="ptitle">IDS <em>Research</em></h3>
            <p className="ids__paper">“{pub.title}”</p>
            <p className="ids__venue">
              <b>{pub.authorship}</b> · {pub.venue} · {pub.status.toLowerCase()} · Paper ID {pub.paperId}
            </p>
          </div>
          <Contribution>
            First author — built the leakage-controlled pipeline, compared two training-only balancing
            strategies across 7 models, and ran the ablations.
          </Contribution>
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
      </div>
    </Spread>
  );
}

/* ── Compact overview: one ruled row per project ─────────────────────────
   Two columns: who/what on the left; contribution, proof and stack on the right.
   The whole row opens the full spread; links inside it keep their own behaviour. */
const OVERVIEW = [
  {
    key: "neurobridge", no: "01", tone: "teal", Spread: NeuroBridge,
    name: <>Neuro<em>Bridge</em></>, plain: "NeuroBridge",
    rows: [
      ["My part", "Designed and built the adaptive engine; led the ASD and Anxiety modules"],
      ["Proof", "1,054 / 1,059 frontend tests passing (whole project) · Runner-Up, Girlathon 4.0 (team)"],
    ],
  },
  {
    key: "trace", no: "02", tone: "brass", Spread: Trace,
    name: <>TRA<em>CE</em></>, plain: "TRACE",
    rows: [
      ["My part", "Solo — design, backend and deployment"],
      ["Proof", "66+ live GitHub events synced end to end · backend and frontend deployed"],
    ],
  },
  {
    key: "network-intrusion-detection-under-class-imbalance", no: "03", tone: "coral", Spread: IdsResearch,
    name: <>IDS <em>Research</em></>, plain: "IDS Research",
    rows: [
      ["My part", "First author · ICTCS 2026 (Springer LNNS), accepted for oral presentation"],
      ["Binary", "98.70% accuracy — shared-feature BiLSTM"],
      ["Multiclass", "96.66% accuracy — DNN with MI + PCA"],
    ],
  },
];

function OverviewRow({ item, onOpen }) {
  const p = bySlug(item.key);
  // Clicks on links or buttons inside the row do their own thing
  const onRowClick = (e) => {
    if (e.target.closest("a, button")) return;
    if (window.getSelection?.().toString()) return; // selecting text is not a click
    onOpen(item.key, e.currentTarget.querySelector(".ov__open"));
  };
  return (
    <article className={`ov ov--${item.tone}`} onClick={onRowClick} aria-labelledby={`ov-${item.key}`}>
      <p className="ov__no" aria-hidden="true">{item.no}</p>
      <div className="ov__main">
        <p className="meta">{p.year} · {p.team || "Research"} · {p.status}</p>
        <h3 id={`ov-${item.key}`} className="ov__name">{item.name}</h3>
        <p className="ov__line">{p.tagline}</p>
        <button type="button" className="ov__open" onClick={(e) => onOpen(item.key, e.currentTarget)}
                aria-haspopup="dialog" aria-label={`Open the full ${item.plain} project`}>
          Open full project <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="ov__facts">
        <dl className="ov__dl">
          {item.rows.map(([k, v]) => (
            <div key={k} className="ov__row"><dt>{k}</dt><dd>{v}</dd></div>
          ))}
          <div className="ov__row"><dt>Stack</dt><dd className="stk">{p.stack.join(" · ")}</dd></div>
        </dl>
        <ProjectLinks project={p} />
      </div>
    </article>
  );
}

/* ── Full spread in an accessible full-screen dialog ──────────────────────
   Native <dialog>.showModal(): focus moves inside, the page behind is inert, Esc closes,
   and focus returns to the control that opened it. The page itself never scrolls while
   it is open, so the reader comes back to exactly where they were. */
function FeatureDialog({ item, onClose }) {
  const ref = useRef(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; });

  // Every way of closing runs the same idempotent handler, immediately:
  // - the buttons call closeNow directly
  // - Esc fires "cancel" synchronously, so it closes here without waiting for the queued "close" event
  // - "close" stays as a fallback for any other native close, ignored if the dialog has since reopened
  useEffect(() => {
    const d = ref.current;
    const onCancel = (e) => {
      e.preventDefault();
      d.close();
      onCloseRef.current();
    };
    const onNativeClose = () => { if (!d.open) onCloseRef.current(); };
    d.addEventListener("cancel", onCancel);
    d.addEventListener("close", onNativeClose);
    return () => {
      d.removeEventListener("cancel", onCancel);
      d.removeEventListener("close", onNativeClose);
    };
  }, []);

  useEffect(() => {
    const d = ref.current;
    if (!item || !d) return;
    if (!d.open) d.showModal();
    d.scrollTop = 0;
    document.documentElement.classList.add("is-locked");
    return () => document.documentElement.classList.remove("is-locked");
  }, [item]);

  const closeNow = () => {
    if (ref.current?.open) ref.current.close();
    onCloseRef.current();
  };

  const Spread = item?.Spread;
  return (
    <dialog
      ref={ref}
      className={item ? `feature feature--${item.tone}` : "feature"}
      aria-labelledby={item ? `feature-${item.key}` : undefined}
    >
      {item && (
        <>
          <div className="feature__bar">
            <button type="button" className="feature__close" onClick={closeNow}>
              <span aria-hidden="true">←</span> Back to projects
            </button>
            <p className="feature__crumb label" id={`feature-${item.key}`}>
              {item.no} / 03 · {item.plain}
            </p>
            <button type="button" className="feature__x" onClick={closeNow} aria-label="Close project">
              <span aria-hidden="true">✕</span>
            </button>
          </div>
          <Spread />
        </>
      )}
    </dialog>
  );
}

export default function SelectedWork() {
  const [openKey, setOpenKey] = useState(null);
  const opener = useRef(null);
  const item = OVERVIEW.find((o) => o.key === openKey) || null;

  const open = (key, trigger) => {
    opener.current = trigger;
    setOpenKey(key);
  };
  const close = () => {
    const trigger = opener.current;
    if (!trigger) return; // already closed (the native close event can arrive after a button close)
    opener.current = null;
    setOpenKey(null);
    // Return focus to the row's own button without moving the page
    trigger.focus({ preventScroll: true });
  };

  return (
    <section id="work" aria-labelledby="work-h" tabIndex={-1} className="section section--full">
      <div className="runhead">
        <h2 id="work-h">Selected <em>work</em></h2>
        <span className="label">Three projects · open any for the full story</span>
      </div>
      <div className="section__body">
        <div className="overview">
          {OVERVIEW.map((o) => <OverviewRow key={o.key} item={o} onOpen={open} />)}
        </div>
      </div>
      <FeatureDialog item={item} onClose={close} />
    </section>
  );
}
