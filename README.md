# Portfolio - Next.js

This is the Next.js (App Router) conversion of the React CRA portfolio project.

## What Changed (CRA → Next.js)

| Before (React CRA) | After (Next.js 14) |
|---|---|
| `react-router-dom` | `next/navigation` + App Router |
| `process.env.REACT_APP_*` | `process.env.NEXT_PUBLIC_*` |
| `<Link to="...">` | `<Link href="...">` |
| `useLocation()` | `usePathname()` |
| `index.css` | `app/globals.css` |
| CRA pages in `/pages/` | App Router in `/app/[route]/page.js` |
| `ReactModal.setAppElement` | `ariaHideApp={false}` on Modal |
| `react-tsparticles` | Removed (optional to re-add) |

## Getting Started

```bash
npm install
cp .env.local.example .env.local
# Fill in your EmailJS credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.js           # Root layout
│   ├── globals.css         # Global styles
│   ├── page.js             # Home route (/)
│   ├── ClientLayout.jsx    # Client-side layout wrapper (darkMode, loading)
│   ├── about/page.js       # /about
│   ├── portfolio/page.js   # /portfolio
│   └── contact/page.js     # /contact
├── components/             # Shared components
│   ├── Cursor.jsx
│   ├── Navigation.jsx
│   ├── Header.jsx
│   ├── ContactForm.jsx
│   ├── MilestoneCard.jsx
│   ├── PortfolioCard.jsx
│   └── ProgressBar.jsx
├── pages/                  # Page content components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Portfolio.jsx
│   └── Contact.jsx
├── assets/                 # SVG files
│   └── svg/
├── data/
│   └── portfolioData.js    # Projects, skills, milestones data
public/
└── images/                 # All images (moved from src/assets)
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in EmailJS credentials.
