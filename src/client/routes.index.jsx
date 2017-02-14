import React from 'react'
import {IndexRoute, Route} from 'react-router'
import HomePage from '../client/components/HomePage/HomePage'

module.exports = (
	<Route path="/" component={HomePage}>
		<IndexRoute getComponent={(location, cb) => {
			require.ensure([], () => {
				cb(null, require('../client/components/LoginBox/LoginBox').default)
			});
		}}/>
		<Route path="/login/:user" getComponent={(location, cb) => {
			require.ensure([], () => {
				cb(null, require('../client/components/LoginBox/LoginBox').default)
			});
		}}/>
	</Route>
);