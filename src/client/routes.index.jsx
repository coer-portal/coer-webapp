import React from 'react'
import {IndexRoute, Route} from 'react-router'
import {HomePageLayout} from '../client/components/HomePageLayout/HomePageLayout.jsx'
import {HomeButtonBox} from '../client/components/HomeButtonBox/HomeButtonBox.jsx'
import {LoginBox} from '../client/components/LoginBox/LoginBox.jsx'

module.exports = (
	<Route path="/" component={HomePageLayout}>
		<IndexRoute component={HomeButtonBox}/>
		<Route path="/login/:user" component={LoginBox}></Route>
	</Route>
);