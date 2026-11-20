# Deploy for FREE (no credit card)

**v2 — fully expanded edition.** Every one of the 196 chapters now carries a
three-part deep dive, a diagram, real code examples, field pitfalls, key terms,
three interview answers and an interactive 3-question quiz. Your reading
progress and quiz scores persist in the browser.

This is a standard Next.js 16 site with **no database, no API keys, no server secrets** —
so it deploys free on every major platform in minutes.

---

## Option 1 — Vercel (recommended, what designed-to-scale.vercel.app uses)

Free Hobby plan. No credit card. Unlimited personal projects.

### Via GitHub (best — auto-redeploys when you push)

1. Unzip this folder.
2. Go to **github.com** → sign up free → click **New repository** → name it
   `effortless-series` → Create.
3. On the new repo page, click **"uploading an existing file"** → drag ALL files
   and folders from inside the unzipped folder (src, public, package.json,
   next.config.ts, tsconfig.json, postcss.config.mjs, .gitignore) →
   **Commit changes**.
4. Go to **vercel.com** → **Sign Up with GitHub** (no card needed).
5. Click **Add New... → Project** → **Import** your `effortless-series` repo.
6. Vercel auto-detects Next.js. Leave every setting as default → **Deploy**.
7. Done. Your site is live at `https://effortless-series-<your-name>.vercel.app`
   Every future `git push` redeploys automatically.

### Via Vercel CLI (no GitHub needed)

```bash
npm install -g vercel
cd effortless-series-site   # the unzipped folder
npm install                 # optional local check
vercel                      # login in browser, accept defaults
# production:
vercel --prod
```

---

## Option 2 — Netlify

1. Push to GitHub (steps 1–3 above).
2. **app.netlify.com** → sign up with GitHub (free, no card) →
   **Add new site → Import an existing project**.
3. Build command: `npm run build` · Publish directory: `.next`
   (Netlify auto-detects Next.js via its plugin — defaults just work).
4. Deploy → live at `https://<name>.netlify.app`.

Or without GitHub: `npm i -g netlify-cli && netlify deploy --build --prod`.

---

## Option 3 — Cloudflare Pages

1. Push to GitHub (steps 1–3 above).
2. **dash.cloudflare.com** → free account (no card) → **Workers & Pages →
   Create → Pages → Connect to Git**.
3. Framework preset: **Next.js** → Deploy.
   Live at `https://<name>.pages.dev`.

---

## Option 4 — GitHub Pages (static, needs one extra step)

Since this site is 100% client-side, you can also export it as a static site:

1. In `next.config.ts` add `output: "export"` and `images: { unoptimized: true }`.
2. Run `npm run build` → the `out/` folder is your static site.
3. Push `out/` to a GitHub repo → Settings → Pages → Deploy from branch.
   Live at `https://<user>.github.io/<repo>/`.
   (Use this only if you want GitHub-only hosting; Options 1–3 are better.)

---

## Custom domain (optional, still free hosting)

On Vercel/Netlify/Cloudflare: Project → Settings → Domains → add your domain.
You only pay for the domain itself (~$10/year at Namecheap/Cloudflare) —
hosting, HTTPS, and CDN stay free.

## Run locally first (optional)

```bash
npm install
npm run dev     # http://localhost:3000
```

Requires Node.js 18.18+ (Node 20 LTS recommended).
