let version = '4.3.1';

let cacheName = "TripmeV" + version; 

let filesToCache = [
    '/',
    '/index.html',
    '/index.html?pwa=true',
    '/experiences/hydrogen.html',
    '/experiences/helium.html',

    '/js/hydrogen/sketch.js',
    '/js/hydrogen/shape.js',
    '/js/helium/sketch.js',

    '/css/main.css',
    '/js/main.js',

    '/vendors/p5/p5.sound.min.js',
    '/vendors/p5/p5.dom.min.js',
    '/vendors/p5/p5.min.js',
]

self.addEventListener("install", function(event) {
    console.log(version + ': install event in progress.');
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(filesToCache);
        })
        .then(function() {
            console.log('service worker: install completed');
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('service worker: Activate');
    e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('service worker: Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
    );
    return self.clients.claim();
});