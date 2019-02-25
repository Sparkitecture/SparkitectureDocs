const version = "0.0.04";
const cacheName = `sparkitecture-cache-${version}`;

self.addEventListener('fetch', function (e) {

  if (!navigator.onLine) {
    e.respondWith(
      caches.match(e.request).then(function (response) {
        return response || fetch(new Request("/SparkitectureDocs/offline.html"));
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
      })
    );
  }
});

// if (!navigator.onLine) {
//   e.respondWith(new Response('<h1> Offline :( </h1>', { headers: { 'Content-Type': 'text/html' } }));
// }

self.addEventListener('install', function (e) {
  if (!navigator.onLine) {
  } else {
    e.waitUntil(
      caches.open(cacheName).then(function (cache) {
        return cache.addAll([
          // '/SparkitectureDocs/',
          '/SparkitectureDocs/offline.html',
          '/SparkitectureDocs/index.html',
          '/SparkitectureDocs/Docs/mobile.html',
          '/SparkitectureDocs/manifest.json',
          'https://tfs.sparkhound.com/Sparkhound/_apis/public/build/definitions/81ae018a-0136-4767-9622-61e13d1d7541/150/badge',
          'https://tfs.sparkhound.com/Sparkhound/_apis/public/build/definitions/81ae018a-0136-4767-9622-61e13d1d7541/151/badge',
          '/SparkitectureDocs/Assets/Styles/site.css',
          '/SparkitectureDocs/Assets/Styles/style.css',
          '/SparkitectureDocs/Assets/Images/offline-dino.gif',
          '/SparkitectureDocs/Assets/Images/additionalquestions.png',
          '/SparkitectureDocs/Assets/Images/categories.png',
          '/SparkitectureDocs/Assets/Images/editrating.png',
          '/SparkitectureDocs/Assets/Images/icon-36.png',
          '/SparkitectureDocs/Assets/Images/icon-48.png',
          '/SparkitectureDocs/Assets/Images/icon-72.png',
          '/SparkitectureDocs/Assets/Images/icon-96.png',
          '/SparkitectureDocs/Assets/Images/icon-144.png',
          '/SparkitectureDocs/Assets/Images/icon-192.png',
          '/SparkitectureDocs/Assets/Images/logo-192.png',
          '/SparkitectureDocs/Assets/Images/logo-512.png',
          '/SparkitectureDocs/Assets/Images/navbar-logo.png',
          '/SparkitectureDocs/Assets/Images/newapp.png',
          '/SparkitectureDocs/Assets/Images/OctocatHelp-sm.jpg',
          '/SparkitectureDocs/Assets/Images/playstorecats1.png',
          '/SparkitectureDocs/Assets/Images/playstorecats2.png',
          '/SparkitectureDocs/Assets/Images/playstorecats3.png',
          '/SparkitectureDocs/Assets/Images/playstorecats4.png',
          '/SparkitectureDocs/Assets/Images/playstorerating.png'
        ])
          .then(() => self.skipWaiting())
          .then(r => console.log('Sparkitecture Docs service worker v%s has installed at', version, new Date().toLocaleTimeString()));
      })
    );
  }
});

self.addEventListener('activate', function (e) {
  // e.waitUntil(
  //   Promise to do this later ;D
  // );
  console.log('Sparkitecture Docs service worker v%s has activated at', version, new Date().toLocaleTimeString());
});
