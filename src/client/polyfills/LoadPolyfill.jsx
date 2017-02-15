import Promise from 'bluebird'

const PolyfillTests = [
	{
		test: () => !global.fetch,
		load: () => {
			return new Promise(resolve => {
				require.ensure([], () => {
					resolve({
						fetch: require('whatwg-fetch')
					});
				}, 'polyfills-fetch');
			});
		}
	}
];

export default function loadPolyfill() {
	if (PolyfillTests.some(polyfill => polyfill.test())) {
		let polyfillFns = [];
		PolyfillTests.forEach(polyfill => {
			if (polyfill.test()) {
				polyfillFns.push(polyfill.load());
			}
		});
	}
};