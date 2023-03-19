var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/reset.css',

        './assets/css/style.css',

        './assets/css/header.css',

        './assets/css/main.css',

        './assets/css/footer.css',

        './assets/css/respnsive.css',

        './assets/img/imgSection1.png',
        './assets/img/imgSection2.png',
        './assets/img/Avatar1.png',
        './assets/img/Avatar2.png',
        './assets/img/Avatar3.png',
        './assets/img/imgSection3.png',
        './assets/img/logo.png',
        './assets/img/facebook.png',
        './assets/img/linkedin.png',
        './assets/img/Twitter.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

});