var CACHE_NAME = 'my-cache-v1';
var urlsToCache = [
  '/',
];

self.addEventListener('install', function(event) {
  //perform install steps
  event.waitUntill(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('loaded cache');
      return cache.addAll(urlsToCache);
    })
  );
});
