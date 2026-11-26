import { PROFILE, resumeMailto } from "../data/profile";
import { ExtLink } from "./links";

/* Closing spread: availability as the headline, the address as the call to action.
   Résumé goes out by email on request — never as a public file. */
export default function ContactSection() {
  const [user, domain] = PROFILE.email.split("@");
  return (
    <section id="contact" aria-labelledby="contact-h" tabIndex={-1} className="contact paper section--full">
      <p className="label">Contact</p>
      <h2 id="contact-h" className="contact__h">
        Open to software engineering <em>internships and full-time roles.</em>
      </h2>
      <p className="contact__lead">Write to me</p>
      <a className="contact__mail" href={`mailto:${PROFILE.email}`}>
        {user}<wbr />@{domain}
      </a>
      <div className="contact__row">
        <ul className="contact__links">
          <li><ExtLink href={PROFILE.linkedin} label="LinkedIn">LinkedIn ↗</ExtLink></li>
          <li><ExtLink href={PROFILE.github} label="GitHub">GitHub ↗</ExtLink></li>
          <li><a className="link" href={resumeMailto()}>Résumé on request ✉</a></li>
        </ul>
        <p className="contact__where">Kerala, India · IST (UTC+5:30)</p>
      </div>
    </section>
  );
}
