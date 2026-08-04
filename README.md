# CARS cloud app — deployment guide
© Polyfill Microns Pvt. Ltd.

## Files in this package (put all of them in the ROOT of the `pmpl` repo)
- index.html — the application
- config.js — public Supabase URL + anon key (safe to publish)
- manifest.webmanifest, sw.js — PWA (installable, offline shell)
- icon-192.png, icon-512.png — app icons
- CNAME — custom domain (service.polyfillmicrons.in)

## 1. Publish on GitHub Pages
1. Upload/commit these files to the `pmpl` repository, in the root folder.
2. Repo → Settings → Pages → Build and deployment → Source: "Deploy from a branch".
3. Branch: `main` (or `master`), folder `/ (root)` → Save.
4. The CNAME file already sets the custom domain to service.polyfillmicrons.in.
   Under Settings → Pages you should see it; tick "Enforce HTTPS" once the
   certificate is issued (can take a few minutes to an hour).

## 2. DNS (at your domain provider for polyfillmicrons.in)
Add ONE record:
- Type: CNAME
- Host/Name: `service`
- Value/Target: `<your-github-username>.github.io`
(Send me your GitHub username and I'll confirm the exact target.)

## 3. First sign-in (admin)
- URL: https://service.polyfillmicrons.in
- Email: polyfillmicrons@outlook.com
- Temporary password: Polyfill@2026
Change this password soon (Supabase dashboard → Authentication → Users, or ask me
to add an in-app "change password" button — a small addition).

## 4. Add technicians (as admin)
Technicians tab → enter name, email, a temporary password, company and location →
Create. Deactivate/Activate from the same list controls their access instantly.
Each technician only ever sees their own cycles; their name/company/location are
stamped on every cycle automatically.

## 5. Company, stock, settings (as admin)
- Company & stock: edit company name/address; set real on-hand kg and low-stock
  alert levels. Completing a cycle auto-deducts the H2SO4 (50%) and NaOH (100%) used.
- Settings: adjust setpoints and the H2SO4/NaOH density tables per company.

## Notes
- All data lives in your Supabase project; the site holds only the public anon key.
- Completed cycles are locked (no edit/delete) at the database level.
- The app works as an installable PWA: open the URL in Chrome → "Add to Home screen".

## v2 update — what changed
- Branding: Polyfill Microns Pvt Ltd + logo shown in the header (right) and login.
  The logo is `logo.svg` — replace that one file with your real artwork (same name) to swap it everywhere.
- Technician dashboard fully restored: 9-step rail with per-step targets and operator
  action cues, live readings, tank board, full cycle log, calculations, validations, workflow.
- Reports now include every field/reading; HTML report reproduces the dashboard layout
  (Live readings / Feed / Treated / Regeneration / Tanks / Totals). Excel = all fields.
  Print/PDF and JSON retained.
- Admin: Technicians (add / edit / activate-deactivate / delete-with-guard),
  Locations (add / rename / activate / delete), Companies (add / edit / delete) with
  each company keeping its own stock and settings.
- To pick up v2 on an already-installed phone: reopen the app (service worker cache bumped to v2).
