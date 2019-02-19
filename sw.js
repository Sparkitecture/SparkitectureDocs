
self.addEventListener('fetch', function (event) {
 
    return;  
});

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('sparkitecture-cache').then(function (cache) {
      return cache.addAll([
        '/index.html',
        '/README.md',
        '/Docs/mobile.md',
        '/manifest.json',
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
        '/Assets/Images/OctocatHelp-sm.jpg',
        '/Assets/Images/playstorecats1.png',
        '/Assets/Images/playstorecats2.png',
        '/Assets/Images/playstorecats3.png',
        '/Assets/Images/playstorecats4.png',
        '/Assets/Images/playstorerating.png'
      ]);
    })
  );
});
