let cacheName = 'v12:static';

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
	if (!event.request.url.indexOf('manifest.json') && event.request.url.indexOf('coer-portal.ishanjain.me') && !event.request.url.indexOf('coer-backend.ishanjain.me')) {
		event.respondWith(
			caches.match(event.request).then(function (response) {
				return response || fetch(event.request).then(function (resp) {
						return caches.open(cacheName).then(function (cache) {
							cache.put(event.request, resp.clone());
							return resp;
						})
					});
			})
		);
	}
});