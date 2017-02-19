let cacheName = 'v5:static';

self.addEventListener('install', function (e) {
	e.waitUntil(
		caches.open(cacheName).then(function (cache) {
			return cache.addAll([
				'./',
				'./main.js',
				'./commons.js',
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
						cache.put(event.request, resp.clone());
						return response;
					})
				});
		})
	);
});