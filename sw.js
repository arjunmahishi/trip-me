let version = 1;

self.addEventListener("install", function(event) {
    console.log('WORKER: install event in progress.');
    event.waitUntil(
        caches.open(version + 'fundamentals')
        .then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/js/main.js',
            ]);
        })
        .then(function() {
            console.log('WORKER: install completed');
        })
    );
});