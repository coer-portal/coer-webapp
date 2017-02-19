import {h, Component, render} from 'preact'
import '../Style/defaults.sass'
import './App.sass'

export class App extends Component {
	constructor() {
		super();
	}

	render(props, state) {
		return (
			<div className="App">
				<h1 className="PageHeader">COER PORTAL</h1>
				{this.props.children}
			</div>
		)
	}
}

