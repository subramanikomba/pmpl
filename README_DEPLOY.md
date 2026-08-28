# CARS Cloud App — deploy (v8 baseline)

Static PWA for GitHub Pages. Backend: Supabase (project cjejgtqpkjquthvjmaod).
Custom domain service.polyfillmicrons.in.

## v8-5 (Report viewer: remove redundant nav Print button)
- Removed the Print button from the report viewer's dark navigation bar (id 'prn') and its
  now-orphaned window.print() handler. The nav bar keeps Prev / Next and the position counter.
- KEPT unchanged: the Print and Close buttons on the modal top bar (these print the report
  iframe), and the "Print / PDF" button in the Reports screen.
- Printing functionality and report layout unchanged.

## v8-4 (Report viewer: single-line identity strip)
- One compact line under the letterhead:
  Date · Train/Process · Technician · Company / Location · Status. Wraps on mobile; hidden in print.

## v8-2 (Chemical Stock matrix + tweaks)
- Matrix layout, low-stock REORDER/OK badges, "kg" unit hints, company total row.

Scope: front-end only. NO database change. All other CARS functions byte-identical to v8.
