navigator.serviceWorker && navigator.serviceWorker.register('/SparkitectureDocs/sw.js').then(function (registration) {
    console.log('SW, registered with scope: ', registration.scope);
});