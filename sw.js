const CACHE_NAME = "bookmark-app-cache"

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(
                [
                    './index.html',
                    './style.css',
                    './script.js',
                    './icon.png',
                    './iconx512.png'
                ]
            )
        })
    )
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request);
        })
    );
});
