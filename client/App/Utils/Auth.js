import {Promise} from 'bluebird'

module.exports = {
	isLoggedIn: () => {
		if (window.localStorage && window.sessionStorage) {
			let accesstoken = sessionStorage.getItem('accesstoken') || localStorage.getItem('accesstoken'),
				_id = sessionStorage.getItem('_id') || localStorage.getItem('_id'),
				_deviceid = sessionStorage.getItem('_deviceid') || localStorage.getItem('_deviceid');

			let headers = new Headers({
				'_apikey': 'TESTING',
				'content-type': 'application/json',
				'accesstoken': accesstoken,
				'_deviceid': _deviceid
			});
			return fetch('http://localhost:5000/validate-token/student', {
				method: 'POST',
				mode: 'cors',
				cache: false,
				headers: headers,
				body: JSON.stringify({
					_id: _id
				})
			}).then(res => {
				return res.text()
			}).then(result => {
				let parsedResult = JSON.parse(result);
				if (parsedResult.error != 0) {
					return Promise.reject(new Error(1))
				} else {
					return Promise.resolve(0)
				}
			})
		} else {
			return Promise.reject(new Error(404))
		}
	}
};
