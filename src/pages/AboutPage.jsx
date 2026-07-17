import { useEffect } from "react";

const S = { padding: "24px 120px" };

export default function AboutPage() {
  useEffect(() => {
    document.title = "About — T P Shivha Shakthiy";
  }, []);

  return (
    <>
      <section style={{ ...S, paddingTop: 30 }}>
        <div className="about-layout">
          <div className="about-photo-col">
            <div className="about-photo-frame">
              <img
                src="/profile-small_.png"
                alt="T P Shivha Shakthiy"
                className="about-photo"
              />
            </div>
            
          </div>

          <div className="about-text-col">
            <h1 className="about-name">T P Shivha Shakthiy</h1>
            <p className="about-role">SOFTWARE ENGINEER · APPLIED ML</p>

            <div className="about-bio">
              <p>
                I build software with an engineer's mindset. Every project begins
                with understanding the system before writing the first line of code.
              </p>
              <p>
                My focus is backend engineering and full-stack systems — designing
                REST APIs with FastAPI and Node.js, modeling schemas in PostgreSQL,
                and building end-to-end platforms with React on the frontend. I've
                also applied this same systems thinking to ML pipelines when the
                problem called for it. I enjoy architectures that are simple to
                reason about, resilient under real-world constraints, and easy for
                other engineers to maintain.
              </p>
              <p>
                I'm a B.Tech Computer Science (AI & Data Science) undergraduate at IIIT Kottayam, expected to graduate in 2028. Right now I'm building TRACE, a backend platform that turns GitHub activity into developer skill graphs.
              </p>
              <p className="about-stack">
                Core stack: C++, Python, JavaScript · FastAPI, Node.js (Express), React, PostgreSQL, MySQL, Docker · Git, REST API design, System Design
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
