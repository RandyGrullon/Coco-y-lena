/* Service worker de Ñ & Ü: la app funciona sin internet una vez abierta.
   - Página: primero la red (para recibir actualizaciones) y, sin conexión, la copia guardada.
   - Voces (audio/*.mp3) y tipografías: primero la copia guardada; se guardan la primera vez que se piden. */
const V = "nyu-v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

async function cacheFirst(req) {
  const c = await caches.open(V);
  const hit = await c.match(req);
  if (hit) return hit;
  const r = await fetch(req);
  if (r.ok || r.type === "opaque") c.put(req, r.clone());
  return r;
}

async function networkFirst(req) {
  const c = await caches.open(V);
  try {
    const r = await fetch(req);
    if (r.ok) c.put(req, r.clone());
    return r;
  } catch (e) {
    return (await c.match(req)) || (await c.match("./")) || Response.error();
  }
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.origin === location.origin && u.pathname.includes("/audio/")) return e.respondWith(cacheFirst(req));
  if (u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com") return e.respondWith(cacheFirst(req));
  if (u.origin === location.origin) return e.respondWith(networkFirst(req));
});
