import React from "react";

const awardsData = [
  {
    title: "Runner-Up — Girlathon 2025",
    context: "Vanta AI",
    year: "2025",
  },
  {
    title: "Top 10 — She Builds Tech 2.0",
    context: "Kerala Startup Mission",
    year: "2025",
  },
  {
    title: "Google Gemini Student Ambassador",
    context: "",
    year: "2026",
  },
  {
    title: "GirlScript Summer of Code Contributor",
    context: "",
    year: "2026",
  },
  {
    title: "School Topper — Grade 12: 99.9%, Grade 10: 97.4%",
    context: "",
    year: "2024",
  },
];

export default function Awards() {
  return (
    <div className="exp-layout">
      <div className="exp-header-col">
        <h2 className="exp-heading">Recognition</h2>
        <p className="exp-intro">
          Selected recognitions across hackathons, fellowships, and academics.
        </p>
      </div>
      <div className="exp-stream">
        <div className="awards-list">
        {awardsData.map((award, idx) => (
          <div key={idx} className="award-row">
            <span className="award-row__idx">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <div className="award-row__body">
              <span className="award-row__title">{award.title}</span>
              {award.context && (
                <span className="award-row__context">{award.context}</span>
              )}
            </div>
            <span className="award-row__year">{award.year}</span>
          </div>
        ))}
        </div>
        <div className="exp-stream-end" />
      </div>
    </div>
  );
}