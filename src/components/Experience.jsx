import { Link } from "react-router-dom";
import { EXPERIENCE } from "../data/experience";

export default function ExperienceList() {
  return (
    <ol className="exp-list">
      {EXPERIENCE.map((e) => (
        <li key={e.role + e.org} className="exp-item">
          <div className="exp-item__meta">
            <span className="exp-item__period">{e.period}</span>
            <span className="exp-item__org">{e.org}</span>
          </div>
          <div className="exp-item__body">
            <h3 className="exp-item__role">
              {e.role}
              {e.sub && <span className="exp-item__sub"> — {e.sub}</span>}
            </h3>
            <ul className="dash-list">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            {e.link && (
              <Link to={e.link} className="text-link" aria-label={`${e.role} at ${e.org}: case study`}>
                Case study →
              </Link>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
