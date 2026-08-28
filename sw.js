/* CARS cloud PWA service worker — © Polyfill Microns Pvt. Ltd. */
const CACHE = 'cars-cloud-v8-4';
const SHELL = ['./','./index.html','./config.js','./manifest.webmanifest','./pmpl-logo.jpg','./icon-192.png','./icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  // Never cache API / auth / functions or non-GET — always go to network
  if (req.method !== 'GET' || url.hostname.endsWith('supabase.co') || url.pathname.includes('/functions/') || url.hostname.includes('esm.sh') || url.hostname.includes('cloudflare')) {
    return; // default network handling
  }
  // App shell: cache-first, fall back to network
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
  }).catch(() => caches.match('./index.html'))));
});
