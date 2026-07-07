# Rami Abdul Hamid — Portfolio

Single-page developer portfolio. React 19 + Vite + Tailwind CSS v4 + Framer Motion.
Dark mode by default with a persisted light-mode toggle, fully responsive
(360px → 1440px+), keyboard navigable, reduced-motion aware.

## Editing content

Everything editable lives in **`src/data/content.js`** — name, links, bio,
skills, projects, and the experience timeline.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run lint       # eslint
```

## Deploy to Vercel

Option A — Git integration (recommended):

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite. Accept the defaults
   (build: `vite build`, output: `dist`) and hit **Deploy**.

Option B — CLI:

```bash
npm i -g vercel
vercel           # preview deployment
vercel --prod    # production
```

## Structure

```
src/
├── data/content.js        # ← all text, links, projects, timeline
├── hooks/useTheme.js      # dark/light toggle, persisted to localStorage
├── components/
│   ├── Navbar.jsx         # glass nav, scroll progress, active section, mobile menu
│   ├── Hero.jsx           # aurora background, rotating headline, CTAs
│   ├── About.jsx          # bio, portrait, badges, stats
│   ├── Skills.jsx         # grouped skill cards
│   ├── Projects.jsx       # case-study cards + earlier builds
│   ├── ProjectModal.jsx   # problem → solution → result dialog
│   ├── Experience.jsx     # vertical timeline
│   ├── Contact.jsx        # mailto form + channels
│   ├── Footer.jsx
│   └── ui/                # Reveal, SectionHeader, Magnetic, BrandIcons
└── index.css              # design tokens (light/dark), fonts, aurora keyframes
```
