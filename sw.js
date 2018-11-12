const cacheName = 'restaurant-v1';
let urlsToCache = [
    './',
    './index.html',
    './restaurant.html',
    './data/restaurants.json',
    './css/.',
    './img/.',
    '.index.html/.'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('loaded cache');
      return cache.addAll(urlsToCache);
    })
    .catch(error => {
    console.log('Error caching files ' + error);
  })
  );
});

self.addEventListener('fetch', event => {
event.respondWith(
  caches.open(cacheName)
        .then(cache => cache.match(event.request))
        .then(response => {
        return response || fetch(event.request);
})
);
});
