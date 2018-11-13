self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/data/restaurants.json',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/dbhelper.js',
        '/css/responsive.css',
        '/css/styles.css',
        '/favicon.png',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',        
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
event.respondWith(
  caches.match(event.request).then(response => {
        if (response) {
console.log('found ', event.request, 'in cache');
        return response;
        }
else {
console.log('could not find ', event.request, 'in cache, fetching!');
        return fetch(event.request);
}
})
);
});
