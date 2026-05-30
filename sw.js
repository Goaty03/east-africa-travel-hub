const CACHE_NAME = 'eath-v1';
const urlsToCache = [
  '/east-africa-travel-hub/',
  '/east-africa-travel-hub/index.html',
  '/east-africa-travel-hub/privacy-policy.html',
  '/east-africa-travel-hub/affiliate-disclosure.html',
  '/east-africa-travel-hub/css/style.css',
  '/east-africa-travel-hub/js/main.js',
  '/east-africa-travel-hub/js/blog-data.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => Promise.all(
      names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
    ))
  );
});
