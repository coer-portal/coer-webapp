import {h} from 'preact'
import './Snackbar.sass'

export class Snackbar extends React.Component {
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
				return {backgroundColor: 'red', color: 'white'};
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

Snackbar.propTypes = {
	Message: React.PropTypes.string.isRequired,
	Type: React.PropTypes.string.isRequired
};


