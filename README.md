# Sri Buddharaju — Portfolio

A modern, fully-responsive personal portfolio for **Sri Ramachandra Raju Buddharaju**,
Senior Salesforce Developer & Technical Lead.

Built with **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion**.
Pre-configured to deploy on **Netlify** *and* **GitHub Pages**.

---

## ✨ Features

- Hero with animated gradient mesh background, scroll-progress bar, and live status badge
- Sticky navigation with active-section indicator and accessible mobile drawer
- Sections: **About · Skills · Experience · Projects · Certifications · Contact**
- Resume-driven content (single source of truth in `src/data/*.ts`)
- Light / dark mode with no FOUC (theme applied before paint)
- Smooth scroll, motion-reduce respect, full keyboard accessibility
- Mobile-first, scales beautifully from 360px to 4K
- SEO-friendly metadata + Open Graph image
- Tiny bundle, no analytics or trackers

---

## 🧱 Tech Stack

| Concern        | Tool                                |
| -------------- | ----------------------------------- |
| Framework      | React 18                            |
| Build          | Vite 5                              |
| Language       | TypeScript 5                        |
| Styling        | Tailwind CSS 3                      |
| Animation      | Framer Motion 11                    |
| Icons          | lucide-react                        |
| Deployment     | Netlify · GitHub Pages              |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Production build (Netlify / custom domain)
npm run build
npm run preview

# Production build for GitHub Pages (sets the correct base path)
npm run build:gh
```

> **Tip:** Customize all your content in [`src/data/`](src/data/). Nothing is
> hard-coded inside components — update the data files and the site updates
> everywhere.

---

## 📝 Content & Customization

| File                            | Purpose                                                 |
| ------------------------------- | ------------------------------------------------------- |
| `src/data/profile.ts`           | Name, headline, links, summary, hero badges             |
| `src/data/navigation.ts`        | Section IDs and labels for the navbar                   |
| `src/data/skills.ts`            | Skill categories shown in the Skills section            |
| `src/data/experience.ts`        | Timeline content for the Experience section             |
| `src/data/projects.ts`          | Featured projects, metrics, stack, accent color         |
| `src/data/certifications.ts`    | Certifications grid + filter categories                 |
| `src/data/achievements.ts`      | Hero stats + About-section highlight cards              |
| `tailwind.config.js`            | Brand colors, fonts, animations                         |
| `index.html`                    | `<title>`, meta description, OG tags                    |
| `public/Sri_Buddharaju_Resume.pdf` | Drop your résumé here for the “Download résumé” button |

---

## 🌐 Deployment

This project is configured to deploy to **both** Netlify and GitHub Pages without
any code changes. The same `dist/` works for either; only the `base` path
changes.

### Option 1 — Netlify (recommended)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**.
3. Pick your repo. Build settings are auto-detected from
   [`netlify.toml`](./netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**. Done. SPA fallback, asset caching, and security headers
   are handled by `netlify.toml` and `public/_redirects`.

### Option 2 — GitHub Pages

The repo includes a workflow at
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) that:

1. Builds with `DEPLOY_TARGET=gh-pages` so Vite uses
   `/<repo-name>/` as the base path.
2. Copies `index.html` to `404.html` for SPA-style deep links on Pages.
3. Adds `.nojekyll` so files starting with `_` are served.
4. Publishes via the official `actions/deploy-pages` action.

To enable:

1. Push the repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow runs and your site will be available at
   `https://<your-username>.github.io/<repo-name>/`.

> If you rename the repo, the workflow auto-uses the current repo name via the
> `GH_PAGES_REPO` env var. Run `npm run build:gh` locally with
> `GH_PAGES_REPO=your-repo-name` if you ever need to test the Pages build by
> hand.

### Custom domain

Drop a `CNAME` file into `public/` containing your domain (e.g.
`buddharaju.dev`) for either platform. On GitHub Pages, also set
`base: '/'` by leaving `DEPLOY_TARGET` unset on the build step.

---

## ♿ Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)
- Visible focus rings on every interactive element
- Skip-to-content link, ARIA labels for icon-only buttons
- Color-contrast validated for both light and dark themes
- `prefers-reduced-motion` respected globally

---

## 🔒 Security & Privacy

- No third-party trackers, no analytics, no cookies
- Strict security headers configured for Netlify (`netlify.toml`)
- All external links use `rel="noopener noreferrer"`

---

## 🧹 Scripts

```bash
npm run dev        # Vite dev server
npm run build      # Production build (base = "/")
npm run build:gh   # Production build (base = "/<repo>/")
npm run preview    # Preview the production build locally
```

---

Built with care by Sri Buddharaju.
