let version = 3.4;

var filesToCache = [
    '/',
    '/index.html',
    '/experiences/hydrogen.html',
    '/experiences/helium.html',

    '/js/hydrogen/sketch.js',
    '/js/hydrogen/shape.js',
    '/js/helium/sketch.js',

    '/css/main.css',

    '/vendors/p5/p5.sound.min.js',
    '/vendors/p5/p5.dom.min.js',
    '/vendors/p5/p5.min.js',
    
    '/vendors/bootstrap/css/bootstrap.min.css',
    '/vendors/font-awesome/css/font-awesome.min.css'
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