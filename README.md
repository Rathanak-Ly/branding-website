# Nova — Branding Studio (Landing Page)

A small static landing page built with plain **HTML, CSS, and JavaScript** —
the same languages a Squarespace site delivers to the browser. Used to test the
hosting and deployment process.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Page structure (nav, hero, about, services, contact, footer) |
| `styles.css` | Styling — dark theme, responsive layout, mobile menu |
| `script.js` | Interactivity + a live hosting-status indicator |

## Run locally

No build step or dependencies needed. Either open `index.html` directly, or
serve it with a local web server:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

Static files — host anywhere (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
No build command required; publish directory is the project root.
