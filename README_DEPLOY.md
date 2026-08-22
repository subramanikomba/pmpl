# CARS Cloud App — deploy

Static PWA for GitHub Pages. Backend: Supabase (project cjejgtqpkjquthvjmaod).
Custom domain service.polyfillmicrons.in. Files: index.html, config.js, pmpl-logo.jpg,
icon-192.png, icon-512.png, manifest.webmanifest, sw.js, CNAME.
Deploy = push these files to the repo; the service worker cache version forces client refresh.

## v9 (HRMS Phase 1a — additive; CARS unchanged)
- profiles: + designation, pan, access_attendance, access_cars. Existing technicians backfilled access_cars=true, access_attendance=true.
- Technician management extended to Employee management (Designation, PAN, Module Access: Attendance/CARS). Edge Function manage-technician v9 (derives role technician/employee from CARS access; backward compatible).
- New tables: org_profile (owner company for salary slips), payroll_settings (calendar, PT, allowance/bonus rules, holidays) — RLS mirrors the existing settings pattern.
- New admin screen: Payroll Settings. Non-admin navigation is now module-access-driven (CARS still shown for technicians).
- CARS cycle entry, reports, printing, companies/stock, settings: byte-identical, untouched.
