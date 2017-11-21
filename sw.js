self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('trippy-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/icons/icon.png',
                '/js/main.js'
            ]);
        })
    );
});


self.addEventListener('fetch', function(event) {

    console.log(event.request.url);
    event.respondWith(caches.match(event.request)
        .then(function(response) {
            return response || fetch(event.request);
        })
    );

});