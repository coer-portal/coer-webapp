import {h, Component} from 'preact'
import {LoginForm} from '../components/LoginForm/LoginForm'
import './Login.sass'

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state._id = '';
		this.state.password = '';
		this.state.shouldLoginBeDisabled = false;
		this.HandleFormSubmit = this.HandleFormSubmit.bind(this);
		this.HandleIDChange = this.HandleIDChange.bind(this);
		this.HandlePasswordChange = this.HandlePasswordChange.bind(this);
	}

	HandleIDChange(e) {
		e.preventDefault();
		this.state._id = e.target.value
	}

	HandlePasswordChange(e) {
		e.preventDefault();
		this.state.password = e.target.value
	}

	HandleFormSubmit(e) {
		e.preventDefault();
		this.setState({
			password: ''
		});
	}

	render(props, state) {
		return (
			<div className="Login">
				<h1 className="Header">Student Login</h1>
				<LoginForm
					id={state._id}
					password={state.password}
					HandleIDChange={this.HandleIDChange}
					HandlePasswordChange={this.HandlePasswordChange}
					isLoginDisabled={this.state.shouldLoginBeDisabled}
					onClick={this.HandleFormSubmit}
				/>
			</div>
		)
	}
}