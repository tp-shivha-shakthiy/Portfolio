import { Link } from "react-router-dom";
import { RECOGNITION_BY_YEAR } from "../data/profile";
import { PUBLICATION_PROJECT } from "../data/projects";

const pub = PUBLICATION_PROJECT.publication;

/* Research as numbered references; recognition grouped by year. Scores never appear. */
export default function Research() {
  return (
    <section id="research" aria-labelledby="research-h" tabIndex={-1} className="section">
      <div className="runhead">
        <h2 id="research-h">Research &amp; <em>recognition</em></h2>
        <span className="label">Newest first</span>
      </div>

      <div className="rr">
        <div>
          <h3 className="label rr__h">Research</h3>
          <ol className="refs">
            <li>
              <span className="refs__n" aria-hidden="true">[1]</span>
              <div>
                <p className="refs__title">
                  <Link to={`/projects/${PUBLICATION_PROJECT.slug}`}>{pub.title}.</Link>
                </p>
                <p className="refs__meta">
                  {pub.authorship} · {pub.venue} · accepted for oral presentation · 2026
                </p>
              </div>
            </li>
            <li>
              <span className="refs__n" aria-hidden="true">[2]</span>
              <div>
                <p className="refs__title">
                  <Link to="/projects/st-hf-vvi-reid">Video visible-infrared person re-identification.</Link>
                </p>
                <p className="refs__meta">Research Intern, NIT Tiruchirappalli · May – Jul 2026 · core modules and evaluation</p>
              </div>
            </li>
            <li>
              <span className="refs__n" aria-hidden="true">[3]</span>
              <div>
                <p className="refs__title">Reproducing published ML papers.</p>
                <p className="refs__meta">Research Core Member, Enigma Research Club, IIIT Kottayam · since Jan 2025</p>
              </div>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="label rr__h">Recognition</h3>
          <div className="years">
            {RECOGNITION_BY_YEAR.map(([year, items]) => (
              <div key={year} className="year">
                <p className="year__n">{year}</p>
                <ul>
                  {items.map((r) => (
                    <li key={r.title}>
                      <b>{r.title}</b>
                      {r.context && <span>{r.context}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
