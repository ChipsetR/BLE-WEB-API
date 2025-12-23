const CACHE_NAME = 'esp32-ble-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// هنگام نصب Service Worker، فایل‌ها را کش می‌کنیم
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  );
});

// هنگام بارگذاری صفحات، ابتدا کش را چک می‌کنیم
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  );
});
