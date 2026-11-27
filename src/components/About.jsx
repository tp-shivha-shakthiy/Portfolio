import { ABOUT, ABOUT_EDUCATION, SKILLS } from "../data/profile";
import { EXPERIENCE } from "../data/experience";

/*
  Editorial introduction: the cut-out portrait under its name on the left; on the right,
  the biography leads, then education, experience and skills as quieter reference groups.
  The name has its own band above the head, so neither covers the other.
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
            <div className="about__bio">
              <p className="about__lede">{lede}</p>
              <p className="about__p">{approach}</p>
            </div>

            <section className="about__group" aria-labelledby="about-edu">
              <h3 id="about-edu" className="about__k">Education</h3>
              <p className="about__edu">{ABOUT_EDUCATION}</p>
            </section>

            <section className="about__group" aria-labelledby="about-exp">
              <h3 id="about-exp" className="about__k">Experience</h3>
              <ul className="xp">
                {EXPERIENCE.map((e) => (
                  <li key={e.role} className="xp__item">
                    <p className="xp__role">{e.role}</p>
                    <p className="xp__org">{e.org}</p>
                    <p className="xp__when">{e.period}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="about__group about__group--quiet" aria-labelledby="about-skills">
              <h3 id="about-skills" className="about__k">Skills</h3>
              <dl className="skills">
                {SKILLS.map(([group, list]) => (
                  <div key={group} className="skills__row">
                    <dt>{group}</dt>
                    {/* Keep each "·" attached to the item before it, so a wrapped line never starts with a dot */}
                    <dd>{list.replaceAll(" · ", " · ")}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
