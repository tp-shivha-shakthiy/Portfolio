# T P Shivha Shakthiy

### Software Engineer · Backend & Applied AI

Personal portfolio designed as an engineering specification document — clean, structured, and intentional.

🌐 **Live Portfolio:** https://tp-shivha-shakthiy.vercel.app

---

## About

Backend-focused software engineer and B.Tech CSE (AI & Data Science) student at IIIT Kottayam (expected 2028). I build APIs and data pipelines with Python, FastAPI, PostgreSQL and Docker — with applied ML when the problem calls for it.

The site keeps an engineering-spec look (serif headings, monospace labels, grid paper, ruled sections) but is organised for quick reading: one homepage with selected projects, experience, research, about and contact, plus a case study per project.

---

## Design Direction

The site follows an **engineering specification document** aesthetic:

* Typography: Literata (headings), Inter (body), JetBrains Mono (metadata)
* Dual theme: dark mode (default) with light mode alternate
* Warm paper-tone background in light mode with subtle engineering grid
* Status dots by meaning: green = done, amber = in progress
* Clean ruled sections; WCAG AA contrast in both themes

---

## Features

* Single-page overview: hero, selected projects, experience, research & recognition, about, contact
* Built-in terminal (`help`, `ls`, `cat trace`, `paper`, `contact`…) that prints the same data as the page
* Project cards with role, stack and proof; case studies with problem, what I built, architecture, decisions and results
* Old `/about`, `/journey` and `/contact` URLs redirect to homepage sections
* Dual theme with localStorage persistence and an anti-flash script
* Accessibility: one H1 per page, skip link, visible focus, reduced-motion support, AA contrast
* SEO: per-page title, description and canonical URL, Open Graph image, sitemap and robots.txt
* Optimised assets: sized logo variants and a WebP portrait

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
├── components/       # Navbar, ProjectCard, Terminal, Experience, Awards (recognition), Contact
├── data/             # projects, experience, profile (bio, skills, recognition)
├── hooks/            # useTheme, useFadeIn, usePageMeta
├── pages/            # Home, ProjectsPage, ProjectDetail, NotFoundPage
├── App.jsx           # Routes, redirects, scroll handling, loader, footer
└── index.css         # Design tokens and all styling
public/               # Favicons, OG image, logo sizes, portrait, robots.txt, sitemap.xml
design/               # Full-size logo source (not deployed)
```

Content lives in `src/data/`. Figures that still need confirming sit in each project's `unconfirmed` list, marked `TODO(owner)`, and are not rendered.

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
