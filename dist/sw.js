var cacheName = 'v3:static';

self.addEventListener('install', function (e) {
	e.waitUntil(
		caches.open(cacheName).then(function (cache) {
			return cache.addAll([
				'./',
				'./index.css',
				'./main.js',
				'./commons.js',
				'./assets/bg_login.png',
			]).then(function () {
				self.skipWaiting();
			});
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request).then(function (resp) {
					return caches.open(cacheName).then(function (cache) {
						cache.put(event.request, response.clone());
						return response;
					})
				});
		})
	);
});