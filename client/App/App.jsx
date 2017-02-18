import {h, Component, render} from 'preact'
// import {Container} from 'react-grid-system'
import {AppRoutes} from './App.Routes'
import {Router, browserHistory} from 'react-router'


export class App extends Component {
	constructor() {
		super();
	}

	render(props, state) {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

