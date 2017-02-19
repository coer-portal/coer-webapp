import {h, Component, render} from 'preact'
import {AppRoutes} from './App/App.Routes'
import {Router, browserHistory} from 'react-router'

render(
	<Router history={browserHistory} routes={AppRoutes}></Router>,
	document.getElementById('root'),
	document.getElementById('loader')
);