const CACHE_NAME = 'my-cache-v1';
// files to be cached
let ulrsToCache = [
    './',
    './index.html',
    './restaurant.html',
    './data/restaurants.json',
    './js/.', // all javascript files
    './css/.', // all css files
    './img/.', // all images
    '.index.html/.' // all restaurant pages
]

self.addEventListener('install', event => {
  //perform install steps
  event.waitUntill(
    caches.open(CACHE_NAME).then(cache => {
      console.log('loaded cache');
      return cache.addAll(urlsToCache);
    })
    .catch(error => {
    console.log('Error caching files ' + error);
  })
  );
});
