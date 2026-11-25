import { RECOGNITION } from "../data/profile";

export default function RecognitionList() {
  return (
    <ul className="awards-list">
      {RECOGNITION.map((award) => (
        <li key={award.title} className="award-row">
          <div className="award-row__body">
            <span className="award-row__title">{award.title}</span>
            {award.context && <span className="award-row__context">{award.context}</span>}
          </div>
          <span className="award-row__year">{award.year}</span>
        </li>
      ))}
    </ul>
  );
}
