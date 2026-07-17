# T P Shivha Shakthiy

### Software Engineer · Systems Builder

Personal portfolio designed as an engineering specification document — clean, structured, and intentional.

🌐 **Live Portfolio:** https://tp-shivha-shakthiy.vercel.app

---

## About

Software engineer and systems builder with a B.Tech in CSE (AI & DS) from IIIT Kottayam. I build backend systems and full-stack platforms — from REST APIs to production-ready apps, with applied ML when the problem calls for it.

This portfolio is designed to feel like a systems specification: dual-theme (dark/light), routed navigation, and a cohesive visual identity led by software and systems engineering.

---

## Design Direction

The site follows an **engineering specification document** aesthetic:

* Typography: Literata (headings), Inter (body), JetBrains Mono (metadata)
* Dual theme: dark mode (default) with light mode alternate
* Warm paper-tone background in light mode with subtle engineering grid
* Oxblood accent for active status markers
* Clean ruled sections, no gradients, no decorative graphics
* Portrait grounded with glow aura, mask fade, and rim light

---

## Features

* Dual theme with localStorage persistence and anti-flash script
* Theme toggle: `[ ● light / dark ]` status switch in navbar
* Routed navigation (React Router v6) — Home, About, Projects, Journey, Contact
* Responsive design for desktop and mobile
* Featured project card with expandable details (GitHub API integration)
* Project catalogue with case study detail pages
* Fade-in animations via IntersectionObserver
* Sticky footer on all pages

---

## Tech Stack

### Frontend

* React 19
* React Router v7
* JavaScript (ES6+)
* HTML5
* CSS3 (custom properties, no framework)

### Tools

* Vite
* ESLint

### Deployment

* Vercel

---

## Project Structure

```text
src/
├── components/       # Navbar, Contact, Experience, Awards, SectionHeading, ui
├── data/             # projects, experience, status, awards
├── hooks/            # useTheme, useFadeIn
├── pages/            # Home, AboutPage, ProjectsPage, ProjectDetail, ContactPage, JourneyPage
├── App.jsx           # Routes, ScrollToTop, Loader, Footer
└── index.css         # Design tokens, all styling
```

---

## Running Locally

```bash
git clone https://github.com/tp-shivha-shakthiy/Portfolio.git
cd Portfolio
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

---

## Connect

**GitHub:** https://github.com/tp-shivha-shakthiy
**LinkedIn:** https://linkedin.com/in/t-p-shivha-shakthiy-801723346
**Portfolio:** https://tp-shivha-shakthiy.vercel.app
