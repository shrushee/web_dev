const CACHE_NAME = 'simple-pwa-cache-v1';
const urlsToCache = [
  '/web_dev/simple-pwa/index.html',
  '/web_dev/simple-pwa/manifest.json',
  '/web_dev/simple-pwa/app.js',
  '/web_dev/simple-pwa/service-worker.js',
  '/web_dev/simple-pwa/icon.png'
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

