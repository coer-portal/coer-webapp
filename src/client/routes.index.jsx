import React from 'react'
import {IndexRoute, Route} from 'react-router'


module.exports = (
	<Route path="/" getComponent={(location, cb) => {
		require.ensure([], () => {
			cb(null, require('../client/components/HomePageLayout/HomePageLayout').default)
		});
	}}>
		<IndexRoute getComponent={(location, cb) => {
			require.ensure([], () => {
				cb(null, require('../client/components/HomeButtonBox/HomeButtonBox').default)
			});
		}}/>
		<Route path="/login/:user" getComponent={(location, cb) => {
			require.ensure([], () => {
				cb(null, require('../client/components/LoginBox/LoginBox').default)
			});
		}}/>
	</Route>
);