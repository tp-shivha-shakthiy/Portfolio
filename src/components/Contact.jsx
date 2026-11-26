import { PROFILE, resumeMailto } from "../data/profile";

export default function ContactBlock() {
  return (
    <div className="contact">
      <p className="contact__lede">
        {PROFILE.availability} The fastest way to reach me is email or LinkedIn.
      </p>

      <dl className="contact__rows">
        <div className="contact__row">
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${PROFILE.email}`} className="text-link">{PROFILE.email}</a>
          </dd>
        </div>
        <div className="contact__row">
          <dt>LinkedIn</dt>
          <dd>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
              Connect on LinkedIn ↗
            </a>
          </dd>
        </div>
        <div className="contact__row">
          <dt>GitHub</dt>
          <dd>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-link">
              github.com/tp-shivha-shakthiy ↗
            </a>
          </dd>
        </div>
        <div className="contact__row">
          <dt>Resume</dt>
          <dd>
            <a href={resumeMailto()} className="text-link">
              Available on request →
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
