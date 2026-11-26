import { PROFILE, resumeMailto } from "../data/profile";
import { ExtLink } from "./links";

/* The address is the headline. Résumé goes out by email on request — never as a public file. */
export default function ContactSection() {
  const [user, domain] = PROFILE.email.split("@");
  return (
    <section id="contact" aria-labelledby="contact-h" tabIndex={-1} className="contact paper">
      <h2 id="contact-h" className="label">Write to me</h2>
      <a className="contact__mail" href={`mailto:${PROFILE.email}`}>
        {user}<wbr />@{domain}
      </a>
      <div className="contact__row">
        <ul className="contact__links">
          <li><ExtLink href={PROFILE.linkedin} label="LinkedIn">LinkedIn ↗</ExtLink></li>
          <li><ExtLink href={PROFILE.github} label="GitHub">GitHub ↗</ExtLink></li>
          <li><a className="link" href={resumeMailto()}>Résumé on request ✉</a></li>
        </ul>
        <p className="avail">{PROFILE.availability}</p>
      </div>
    </section>
  );
}
