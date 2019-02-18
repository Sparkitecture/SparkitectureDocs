navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function (registration) {
    console.log('SW, registered with scope: ', registration.scope);
});