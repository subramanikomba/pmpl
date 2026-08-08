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

## v5 corrections (styling + report/print + reports table)
1. Dashboard: active train shown in orange (title + outlined selector); status legend
   now shows coloured Green/Red/Amber dots, spaced and readable; reminder cards have
   their left status bar, a visible progress bar and styled action buttons; Discard is
   light-red with red text; Technician / Company / Location shown in a prominent bar.
2. Cycle view: Prev/Next hidden in single-record view; the print button is labelled "Print".
3. Print layout includes Notes, Totals, Reminders & Flags, Completed date/time, and a
   PMPL letterhead header (logo + company name + tagline + salmon rule) so it reads as a
   company report. (Full postal address/phone can be added on request.)
4. Reports open in an in-app full-screen panel with a clear ✕ Close button (and Print),
   instead of a bare browser tab — the app menu is one click away.
5. Reports table: added a Time column; sorting limited to Date, Time, Technician,
   Company, Location, Train and Status; roomier row spacing.
6. Technician email is a contact-only field with basic format validation; it is never
   used for login or identity (login is Username + Password).

Service worker cache: cars-cloud-v5.

## v6 corrections
1. Dashboard header train type (ETCHING/PLATING) now updates live when the train is toggled.
2. Reminders & Flags progress bar: no-progress track is light grey (blends with card) instead of dark.
3. Print: company-header separator restored (drawn as a border so it prints reliably).
Also: all test data cleared from the database (cycles, technicians, companies, locations, stock,
company settings overrides). Admin login and global default settings preserved; schema/auth/code unchanged.

Service worker cache: cars-cloud-v6.
