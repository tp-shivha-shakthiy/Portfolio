import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, PUBLICATION_PROJECT } from "../data/projects";
import { EXPERIENCE } from "../data/experience";
import { PROFILE, SKILLS, resumeMailto } from "../data/profile";

/*
  A small, real terminal: every command prints data from src/data/*, so it can never
  disagree with the rest of the site. No fake file system, no decoration-only commands.
*/

const PROMPT = "shivha@portfolio:~$";

const COMMANDS = [
  ["help", "list commands"],
  ["whoami", "who I am, in one screen"],
  ["ls", "list projects"],
  ["cat <project>", "role, stack and results for a project (e.g. cat trace)"],
  ["experience", "roles and what I did"],
  ["paper", "my first-author publication"],
  ["skills", "languages, backend, data, tools"],
  ["contact", "email, LinkedIn, GitHub"],
  ["resume", "how to get my résumé"],
  ["clear", "clear the screen"],
];
const COMMAND_NAMES = ["help", "whoami", "ls", "cat", "experience", "paper", "skills", "contact", "resume", "clear"];
const SUGGESTIONS = ["whoami", "ls", "cat trace", "contact"];

function findProject(query) {
  const q = query.toLowerCase().replace(/\s+/g, "-");
  return PROJECTS.find(
    (p) =>
      p.slug === q ||
      p.slug.startsWith(q) ||
      p.title.toLowerCase().replace(/\s+/g, "-") === q ||
      p.abbr.toLowerCase() === q
  );
}

const Row = ({ k, children }) => (
  <div className="term__row">
    <span className="term__k">{k}</span>
    <span>{children}</span>
  </div>
);

function run(input) {
  const [rawCmd, ...args] = input.trim().split(/\s+/);
  const cmd = (rawCmd || "").toLowerCase();
  const arg = args.join(" ");

  switch (cmd) {
    case "":
      return null;
    case "help":
      return (
        <>
          {COMMANDS.map(([c, d]) => (
            <Row key={c} k={c}>{d}</Row>
          ))}
        </>
      );
    case "whoami":
      return (
        <>
          <div className="term__strong">{PROFILE.name}</div>
          <div>{PROFILE.role}</div>
          <div className="term__dim">{PROFILE.education}</div>
          <div>{PROFILE.bio}</div>
          <div className="term__ok">{PROFILE.availability}</div>
        </>
      );
    case "ls":
    case "projects":
      return (
        <>
          {PROJECTS.map((p) => (
            <Row key={p.slug} k={p.slug}>
              {p.title} <span className="term__dim">— {p.kind === "research" ? "research" : p.status.toLowerCase()}</span>
            </Row>
          ))}
          <div className="term__dim">Tip: cat {PROJECTS[0].slug}</div>
        </>
      );
    case "cat":
    case "open": {
      if (!arg) return <div className="term__err">usage: cat &lt;project&gt; — try `ls` for names</div>;
      const p = findProject(arg);
      if (!p) return <div className="term__err">cat: {arg}: no such project. Try `ls`.</div>;
      return (
        <>
          <div className="term__strong">{p.title} <span className="term__dim">({p.year} · {p.status})</span></div>
          <div>{p.tagline}</div>
          {p.role && <Row k="role">{p.role}{p.team && p.team !== "Solo" ? ` · ${p.team}` : ""}</Row>}
          <Row k="stack">{p.stack.join(", ")}</Row>
          {(p.results?.length ? p.results : p.proof).slice(0, 3).map((r) => (
            <Row key={r} k="result">{r}</Row>
          ))}
          <div className="term__links">
            <Link to={`/projects/${p.slug}`} className="text-link">case study →</Link>
            {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-link">code ↗</a>}
            {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-link">live ↗</a>}
          </div>
        </>
      );
    }
    case "experience":
      return (
        <>
          {EXPERIENCE.map((e) => (
            <div key={e.role + e.org} className="term__block">
              <div className="term__strong">{e.role} <span className="term__dim">@ {e.org} · {e.period}</span></div>
              {e.points.map((pt) => (
                <div key={pt} className="term__item">{pt}</div>
              ))}
            </div>
          ))}
        </>
      );
    case "paper":
    case "research": {
      const pub = PUBLICATION_PROJECT?.publication;
      if (!pub) return <div className="term__err">no publication found</div>;
      return (
        <>
          <div className="term__strong">“{pub.title}”</div>
          <div>{pub.authorship} · {pub.venue} · {pub.status}</div>
          <div className="term__ok">{pub.headline}</div>
          <div className="term__links">
            <Link to={`/projects/${PUBLICATION_PROJECT.slug}`} className="text-link">case study →</Link>
          </div>
        </>
      );
    }
    case "skills":
    case "stack":
      return (
        <>
          {SKILLS.map(([k, v]) => (
            <Row key={k} k={k.toLowerCase()}>{v}</Row>
          ))}
        </>
      );
    case "contact":
      return (
        <>
          <Row k="email"><a href={`mailto:${PROFILE.email}`} className="text-link">{PROFILE.email}</a></Row>
          <Row k="linkedin"><a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">linkedin ↗</a></Row>
          <Row k="github"><a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-link">github ↗</a></Row>
        </>
      );
    case "resume":
      return (
        <div>
          Shared on request — <a href={resumeMailto()} className="text-link">email me for a copy →</a>
        </div>
      );
    default:
      return <div className="term__err">command not found: {rawCmd}. Type `help`.</div>;
  }
}

let nextId = 0;
const entry = (input) => ({ id: nextId++, input, output: input === null ? null : run(input) });

export default function Terminal() {
  const [lines, setLines] = useState(() => [{ ...entry("whoami") }, { id: nextId++, input: null, output: <div className="term__dim">Type `help` for commands.</div> }]);
  const [value, setValue] = useState("");
  const history = useRef([]);
  const historyIdx = useRef(-1);
  const inputRef = useRef(null);
  const screenRef = useRef(null);

  // Keep the newest output in view (inside the terminal only; the page does not scroll)
  useEffect(() => {
    const el = screenRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const submit = (cmd) => {
    const text = cmd.trim();
    if (text) history.current.unshift(text);
    historyIdx.current = -1;
    if (text.toLowerCase() === "clear") {
      setLines([]);
    } else {
      setLines((prev) => [...prev, entry(text)]);
    }
    setValue("");
  };

  const complete = () => {
    const [c, ...rest] = value.split(/\s+/);
    if (rest.length === 0) {
      const hit = COMMAND_NAMES.filter((n) => n.startsWith(c.toLowerCase()));
      if (hit.length === 1) setValue(hit[0] + " ");
    } else if (["cat", "open"].includes(c.toLowerCase())) {
      const q = rest.join(" ").toLowerCase();
      const hit = PROJECTS.filter((p) => p.slug.startsWith(q));
      if (hit.length === 1) setValue(`${c} ${hit[0].slug}`);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit(value);
    } else if (e.key === "Tab" && !e.shiftKey && value.trim()) {
      // Complete only when there is something to complete; an empty Tab still moves focus on
      e.preventDefault();
      complete();
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      const h = history.current;
      if (!h.length) return;
      e.preventDefault();
      const i = e.key === "ArrowUp" ? Math.min(historyIdx.current + 1, h.length - 1) : historyIdx.current - 1;
      historyIdx.current = Math.max(i, -1);
      setValue(historyIdx.current === -1 ? "" : h[historyIdx.current]);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div className="term">
      <div className="term__bar">
        <span className="term__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="term__title">{PROMPT.replace(":~$", "")} — zsh</span>
      </div>

      {/* Clicking anywhere in the screen puts the cursor in the input, like a real terminal */}
      <div className="term__screen" ref={screenRef} onClick={() => inputRef.current?.focus({ preventScroll: true })}>
        <div role="log" aria-live="polite" aria-label="Terminal output">
          {lines.map((l) => (
            <div key={l.id} className="term__entry">
              {l.input !== null && (
                <div className="term__cmd">
                  <span className="term__prompt">{PROMPT}</span> {l.input}
                </div>
              )}
              {l.output && <div className="term__out">{l.output}</div>}
            </div>
          ))}
        </div>
        <form
          className="term__line"
          onSubmit={(e) => {
            e.preventDefault();
            submit(value);
          }}
        >
          <span className="term__prompt" aria-hidden="true">{PROMPT}</span>
          <input
            id="term-input"
            ref={inputRef}
            className="term__input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Terminal command"
            aria-describedby="term-hint"
          />
        </form>
      </div>

      <div className="term__hint" id="term-hint">
        <span>Try:</span>
        {SUGGESTIONS.map((s) => (
          <button key={s} type="button" className="term__chip" onClick={() => submit(s)}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
