const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html',"./images/1.png"]

const self = this;
// INSTALLATION SERVICE WORKER
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache');

            return cache.addAll(urlsToCache)
        })
    )
});
// LISTEN FOR REQUEST
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(()=>{
            return fetch(event.request)
                .catch(() => caches.match('offline.html'))
        })

    )

});

// ACTIVATE THE SERVICE WORKER
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);


    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)){
                    return caches.delete(cacheName)
                }
            })
        )).catch((err) => {
            console.log("error: ", err);
        })
    )
});