import { ABOUT, ABOUT_EDUCATION, SKILLS } from "../data/profile";
import { EXPERIENCE } from "../data/experience";

/*
  Cut-out portrait standing in a violet glow, with the first name set large in the band
  above the head: the name stays readable and never sits across the face.
*/
export default function About() {
  const [lede, approach] = ABOUT;
  return (
    <section id="about" aria-labelledby="about-h" tabIndex={-1} className="section section--full">
      <div className="runhead">
        <h2 id="about-h"><em>About</em></h2>
        <span className="label">Bio · education · experience · skills</span>
      </div>

      <div className="section__body">
      <div className="about">
        <figure className="portrait">
          <span className="portrait__word" aria-hidden="true">Shivha</span>
          <picture>
            <source srcSet="/portrait.webp" type="image/webp" />
            <img src="/portrait.png" alt="Portrait of Shivha Shakthiy" width="499" height="499" loading="lazy" decoding="async" />
          </picture>
        </figure>

        <div className="about__body">
          <p className="about__lede">{lede}</p>
          <p className="about__p">{approach}</p>

          <dl className="cv">
            <div className="cv__row">
              <dt>Education</dt>
              <dd>{ABOUT_EDUCATION}</dd>
            </div>
            <div className="cv__row">
              <dt>Experience</dt>
              <dd>
                <ul className="cv__exp">
                  {EXPERIENCE.map((e) => (
                    <li key={e.role}>
                      <b>{e.role}</b> — {e.org}
                      <span>{e.period}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="cv__row">
              <dt>Skills</dt>
              <dd>
                <ul className="cv__skills">
                  {SKILLS.map(([group, list]) => (
                    <li key={group}><span>{group}</span>{list}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      </div>
    </section>
  );
}
