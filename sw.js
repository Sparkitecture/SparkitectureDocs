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
        // '/SparkitectureDocs/#',
        // '/SparkitectureDocs/#getting-started',
        // '/SparkitectureDocs/#prerequisites',
        // '/SparkitectureDocs/#installing-prerequisites',
        // '/SparkitectureDocs/#installing-nodejs-and-npm',
        // '/SparkitectureDocs/#installing-the-angular-cli',
        // '/SparkitectureDocs/#setting-up-sparkitecture',
        // '/SparkitectureDocs/#setting-up-the-server-solution-web-project',
        // '/SparkitectureDocs/#setting-up-a-local-database',
        // '/SparkitectureDocs/#running-the-web-app',
        // '/SparkitectureDocs/#running-with-the-angular-cli',
        // '/SparkitectureDocs/#common-operations',
        // '/SparkitectureDocs/#create-a-new-component',
        // '/SparkitectureDocs/#adding-a-search-row',
        // '/SparkitectureDocs/#built-with',
        // '/SparkitectureDocs/#contributors',
        // '/SparkitectureDocs/#angular-cli-cheat-sheet',
        // '/SparkitectureDocs/Docs/mobile#mobile',
        // '/SparkitectureDocs/Docs/mobile#app-store',
        // '/SparkitectureDocs/Docs/mobile#create-a-new-app',
        // '/SparkitectureDocs/Docs/mobile#set-rating-app-store',
        // '/SparkitectureDocs/Docs/mobile#set-category-app-store',
        // '/SparkitectureDocs/Docs/mobile#play-store',
        // '/SparkitectureDocs/Docs/mobile#set-rating-play-store',
        // '/SparkitectureDocs/Docs/mobile#set-category-play-store',
        '/SparkitectureDocs/index.html',
        '/SparkitectureDocs/README.md',
        '/SparkitectureDocs/Docs/mobile.md',
        '/SparkitectureDocs/sw.js',
        '/SparkitectureDocs/manifest.json',
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
