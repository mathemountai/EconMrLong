const CACHE_NAME = "econmrlong-cache-v1";
const urlsToCache = [
  "/EconMrLong/",
  "/EconMrLong/index.html",
  "/EconMrLong/manifest.json",
  "/EconMrLong/service-worker.js",
  "/EconMrLong/icons/icon-192x192.png",
  "/EconMrLong/icons/icon-512x512.png"
];

// Install service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch and serve files from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return caches.match("/EconMrLong/index.html");
      });
    })
  );
});

// Clear old caches when a new version is available
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
