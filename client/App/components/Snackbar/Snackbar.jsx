import {h, Component} from 'preact'
import './Snackbar.sass'

export class Snackbar extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			isVisible: "show"
		};
		this.SetColor = this.SetColor.bind(this);
	}

	componentWillUnmount() {
		this.state.isVisible = ""
	}

	SetColor(type) {
		let choice = {
			'error': () => {
				return {backgroundColor: '#e71d36', color: 'white'};
			},
			'success': () => {
				return {backgroundColor: 'green', color: 'white'};
			}
		};

		if (choice.hasOwnProperty(type)) {
			return choice[type]()
		} else {
			return {backgroundColor: 'white', color: 'black'}
		}
	}

	render() {
		return (
			<div id="Snackbar" className={this.state.isVisible} style={this.SetColor(this.props.Type || "white")}>
				{this.props.Message}
			</div>
		)
	}
}


