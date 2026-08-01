# Kanishka Krishna — Portfolio

A dark-mode, glassmorphism portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Stack

- **React 18** + **Vite** — fast dev server, instant HMR
- **Tailwind CSS** — custom design tokens (see `tailwind.config.js`)
- **Framer Motion** — page-load choreography, scroll reveals, hover micro-interactions
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev       # starts local dev server, usually http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    ui/               # reusable primitives: Button, GlassCard, SectionHeading, Reveal, StatCounter
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    ProjectCard.jsx
    Achievements.jsx
    Contact.jsx
    Footer.jsx
  data/
    portfolio.js      # ALL content lives here — edit this file to update copy, links, projects, stats
  App.jsx
  index.css
  main.jsx
public/
  resume.pdf           # served at /resume.pdf, linked from the Hero "Resume" button
```

## Before you deploy — update these

Open `src/data/portfolio.js` and replace the placeholder URLs marked `// TODO`:

- `profile.links.github`
- `profile.links.linkedin`
- `profile.links.codeforces`
- `profile.links.leetcode`
- `projects[].github` / `projects[].demo`

Swap `public/resume.pdf` for an updated copy any time — the filename and route stay the same.

## Design notes

- **Palette**: near-black ink background (`#08080D`), indigo → violet gradient accent, green signal color for "available" states and CF/LeetCode data.
- **Type**: Space Grotesk (display/headings), Inter (body), JetBrains Mono (labels, stats, code-style UI).
- **Signature element**: the Hero's floating `status.sh` glass terminal — a live "whoami / fetch --stats" panel that echoes the Achievements section's data-driven identity.
- Respects `prefers-reduced-motion`; all interactive elements have visible focus states.

## Deploying

Any static host works after `npm run build` (output in `dist/`): Vercel, Netlify, GitHub Pages, Cloudflare Pages.
