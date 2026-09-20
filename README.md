# BuildNext Lands — marketing website

Public marketing site for **BuildNext360** — ERP & CRM for property, land, and construction businesses.

Four routes only:

| Path | Page |
| --- | --- |
| `/` | Home |
| `/platform` | Product capabilities and lifecycle |
| `/demo` | Guided product tour |
| `/book-demo` | Demo request form |

## Setup

```bash
npm install
copy .env.example .env
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Environment

Copy `.env.example`. Values are optional for local development.

```
VITE_SITE_URL=
VITE_DEMO_APP_URL=
VITE_DEMO_API_URL=
```

- `VITE_SITE_URL` — public origin used for canonical URLs and Open Graph (no trailing slash). Also replace the origin in `public/robots.txt` and `public/sitemap.xml` before launch.
- `VITE_DEMO_APP_URL` — live product demo. If empty, the tour stays on-site and the launch action shows “Demo environment link coming soon”.
- `VITE_DEMO_API_URL` — POST endpoint for demo requests. If empty, submissions are validated, shown as recorded, and stored in `localStorage` under `buildnext-lands-demo-requests`.

## Demo form adapter

`src/lib/demoFormAdapter.ts` is the integration point. Wire `VITE_DEMO_API_URL` to your CRM, email, or API. Payload fields match the book-demo form.

## Screenshots

Place WebP files in `public/screenshots/`:

- `dashboard.webp`
- `leads.webp`
- `projects.webp`
- `agreements.webp`
- `payments.webp`
- `recovery.webp`
- `deeds.webp`

Until those files exist, the site shows labeled placeholder frames. Do not drop stock dashboards here.

Recommended export size: 1440×900.

## Accessibility and motion

- Skip link, semantic landmarks, labeled form fields, visible focus
- Keyboard-operable navigation, lifecycle, modules, and demo chapters
- `prefers-reduced-motion` disables grid path animation

## Deploy

Any static host (Cloudflare Pages, Netlify, S3, Nginx). Set the Vite env vars in the host, then `npm run build` and publish `dist/`.
