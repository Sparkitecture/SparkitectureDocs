/** An empty service worker! */
self.addEventListener('fetch', function(event) {
    /** An empty fetch handler! */
  });

  self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('sparkitecture-cache').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/README.md',
                '/Docs/mobile.md',
                '/manifest.json',
                '/_layouts/default.HTML',
                '/_config.yml',
                '/styles.css',
                '/Assets/Scripts/swRegister.js',
                '/Assets/Styles/site.css',
                '/Assets/Images/additionalquestions.png',
                '/Assets/Images/categories.png',
                '/Assets/Images/editrating.png',
                '/Assets/Images/icon-36.png',
                '/Assets/Images/icon-48.png',
                '/Assets/Images/icon-72.png',
                '/Assets/Images/icon-96.png',
                '/Assets/Images/icon-144.png',
                '/Assets/Images/icon-192.png',
                '/Assets/Images/navbar-logo.png',
                '/Assets/Images/newapp.png',
                '/Assets/Images/OctocatHelp-sm.png',
                '/Assets/Images/playstorecats1.png',
                '/Assets/Images/playstorecats2.png',
                '/Assets/Images/playstorecats3.png',
                '/Assets/Images/playstorecats4.png',
                '/Assets/Images/playstorerating.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    // if (event.request.url == 'https://sparkitecture.github.io/SparkitectureDocs/Docs/') {
    //     console.info('responding to sw fetch with Service Worker! 🤓');
    //     event.respondWith(fetch(event.request).catch(function (e) {
    //         let out = { test: 'test' };
    //         return new Response(JSON.stringify(out));
    //     }));
    //     return;
    // }
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});