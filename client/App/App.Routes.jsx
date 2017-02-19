import {h} from 'preact'
import {Route, IndexRoute} from 'react-router'
import {App} from './App.jsx'
import Auth from './Utils/Auth'

const requireAuth = (nextState, replace, callback) => {
	Auth.isLoggedIn().catch(error => {
		if (error.message == 1) {
			replace(`login`);
			callback();
		}
		if (error.message == 404) {
			replace(`unsupported-browser`);
			callback();
		}
	})
};

export const AppRoutes = (
	<Route component={App}>
		<Route path="/" getComponent={(location, cb) => {
			require.ensure([], () => {
				cb(null, require('./Dashboard/Dashboard').default)
			}, "Dashboard");
		}} onEnter={requireAuth}/>
		<Route path="login" getComponent={(location, cb) => {
			require.ensure([], () => {
				cb(null, require('./Login/Login').default)
			}, "Login")
		}}/>
	</Route>
);