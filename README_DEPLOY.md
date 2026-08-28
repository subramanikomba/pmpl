# CARS Cloud App — deploy (v8 baseline)

Static PWA for GitHub Pages. Backend: Supabase (project cjejgtqpkjquthvjmaod).
Custom domain service.polyfillmicrons.in.

## v8-4 (Report viewer: single-line identity strip)
- The on-screen report viewer shows ONE compact line under the letterhead:
  Date · Train/Process · Technician · Company / Location · Status
  e.g. "2026-08-05 · Plating · Kamlesh Patil · Gabriel India Ltd / Khandsa · Completed"
- Replaces the two-card block from v8-3 (kept compact: ~19px tall, no extra scrolling).
- Desktop: all five on one line. Mobile (<=640px): wraps naturally, no horizontal overflow.
- No duplication: the nav counter now shows position only ("1 / 2") instead of repeating these fields.
- Values come from the SAME report data used by print (cycle_date, data.train/train,
  data.technician_name, client/location snapshots, status). No data or logic change.
- PRINT UNCHANGED: strip hidden via @media print; print CSS block and printAll builder
  are byte-identical to the v8 baseline.

## v8-2 (Chemical Stock matrix + tweaks)
- Matrix layout (one row per location, grouped chemical columns, one Save per location),
  low-stock REORDER/OK badges, "kg" unit hints, and a company total row.

Scope: front-end only. NO database change. All other CARS functions are byte-identical to v8.
