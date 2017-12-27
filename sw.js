let version = 4.0;

var filesToCache = [
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
    console.log('hydrogenV' + version + ': install event in progress.');
    event.waitUntil(
        caches.open(version + 'fundamentals')
        .then(function(cache) {
            return cache.addAll(filesToCache);
        })
        .then(function() {
            console.log('WORKER: install completed');
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