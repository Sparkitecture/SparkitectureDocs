//version: This comment initiates a cache refresh when changed
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  ); 
});

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('sparkitecture-cache').then(function (cache) {
      return cache.addAll([
        '/SparkitectureDocs/',
        '/SparkitectureDocs/index.html',
        '/SparkitectureDocs/README.md',
        '/SparkitectureDocs/Docs/mobile.md',
        '/SparkitectureDocs/Docs/mobile.html',
        '/SparkitectureDocs/manifest.json',        
        'https://tfs.sparkhound.com/Sparkhound/_apis/public/build/definitions/81ae018a-0136-4767-9622-61e13d1d7541/150/badge',
        'https://tfs.sparkhound.com/Sparkhound/_apis/public/build/definitions/81ae018a-0136-4767-9622-61e13d1d7541/151/badge',
        '/SparkitectureDocs/Assets/Styles/site.css',
        '/SparkitectureDocs/Assets/Styles/style.css',
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
      ]);
    })
  );
});

self.addEventListener('activate', function(e){
  // e.waitUntil(
  //   Promise to do this later ;D
  // );
  console.log('Sparkitecture Docs service worker has activated');
});
