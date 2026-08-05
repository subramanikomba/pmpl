# CARS Cloud App — deploy

Push the contents of this zip to the **pmpl** GitHub repo (root), keeping the
custom domain `service.polyfillmicrons.in`. Files: index.html, config.js,
pmpl-logo.jpg, icon-192.png, icon-512.png, manifest.webmanifest, sw.js, CNAME.

The service worker cache is **cars-cloud-v4** — phones/PWA installs will pull
the new build on next open (may take one refresh).

## What changed in this build (admin + login batch)
1. Company = Company name + Location (no Address). One company → many locations;
   a location name can recur across companies. (Company + Location) is unique.
2. Locations are managed inside **Companies & stock** (separate Locations tab removed).
   Add a company with one or more locations, edit associations, add/remove locations,
   deactivate/delete with safeguards. Company & location fields have generic
   autocomplete (Indian industrial towns + existing companies) and accept new values.
3. Technicians now log in with **Username + Password**. Optional contact email is
   profile-only (not used for login). Internally the username maps to
   `<username>@pmpl.local` for auth.
4. Deleting a technician or company that has historical cycles is blocked with a
   clear message recommending **Deactivate**; history keeps its original
   technician/company/location (snapshotted on each cycle).
5. Reports: filter by Technician / Company / Location (combined), sort key columns,
   click a row to open a **locked, read-only dashboard** of that cycle (Operator board /
   Cycle log / Totals tabs). The HTML report is cumulative with **Prev / Next**.
6. Print/PDF: fixed the blank first page on Letter and uses an efficient multi-column
   layout (fields side-by-side, no wasted right margin).
7. Switching browser tabs and back keeps you on the same screen. Closing the browser
   logs you out (session storage); reopening requires login.
8. Sign-out button has a subtle hover effect.
9. Settings: **Default (all companies)** is the first option and applies globally;
   pick a company to save an override just for it. Override can be removed to fall
   back to Default.
10. Tank level entry uses an in-app modal (no browser `prompt()`); dashboard fields,
    tabs and calculations refresh immediately on change.
11. Authorised PMPL logo used on login, header and reports; PWA icons regenerated.

Backend: Supabase migrations applied (username/email_contact, company active flag,
single global-default settings, location_state); Edge Function `manage-technician`
updated to v6 (username auth). Optional: enable "leaked password protection" in
Supabase Auth settings.
