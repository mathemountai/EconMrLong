const CACHE_NAME = "econmrlong-cache-v1";
const urlsToCache = [
  "./", // Relative path to root
  "./index.html",
  "./manifest.json",
  "./service-worker.js",
  "./Icons/icon-192x192.png", // Correct path to icons
  "./Icons/icon-512x512.png"  // Correct path to icons
];

// ✅ Install service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files:", urlsToCache);
      return cache.addAll(urlsToCache);
    })
  );
});

// ✅ Fetch and serve files from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Serve from cache if available
      if (response) {
        return response;
      }
      // Fetch from network if not available, fallback to index.html when offline
      return fetch(event.request).catch(() => {
        return caches.match("./index.html");
      });
    })
  );
});

// ✅ Clear old caches when a new version is available
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
