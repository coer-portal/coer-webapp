import React from 'react'
import {IndexRoute, Route} from 'react-router'
import HomePageLayout from '../client/components/HomePageLayout/HomePageLayout'

module.exports = (
	<Route path="/" component={HomePageLayout}>
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