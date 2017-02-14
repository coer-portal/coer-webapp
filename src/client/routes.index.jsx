import React from 'react'
import {IndexRoute, Route} from 'react-router'
import {HomePageLayout} from '../client/components/HomePageLayout/HomePageLayout'
import {HomeButtonBox} from '../client/components/HomeButtonBox/HomeButtonBox'
import {LoginBox} from '../client/components/LoginBox/LoginBox'

module.exports = (
	<Route path="/" component={HomePageLayout}>
		<IndexRoute component={HomeButtonBox}/>
		<Route path="/login/:user" component={LoginBox}></Route>
	</Route>
);