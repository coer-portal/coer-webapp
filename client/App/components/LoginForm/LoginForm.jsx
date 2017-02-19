import {h, Component} from 'preact'
import {Link} from 'react-router'
import './LoginForm.sass'

export class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state.isStudentChecked = true;
		this.state.isWardenChecked = false;
		this.HandleUserTypeButtons = this.HandleUserTypeButtons.bind(this);
	}

	HandleUserTypeButtons(e) {
		if (e.target.value == "Student") {
			this.setState({
				isStudentChecked: true,
				isWardenChecked: false
			})
		} else {
			this.setState({
				isStudentChecked: false,
				isWardenChecked: true
			})
		}
		this.props.UserTypeOnClick(e)
	}

	render(props, state) {
		return (
			<form className="LoginForm">
				<label>
					COER ID<br/>
					<div className="LoginIDWrapper">
						<input
							type="text"
							value={props.id}
							placeholder="COER ID"
							onChange={props.HandleIDChange}
							className="LoginIDInput"
							autofocus
							required/>
					</div>
				</label>
				<br/>
				<label>
					Password<br/>
					<div className="LoginPasswordWrapper">
						<input
							type="password"
							value={props.password}
							placeholder="Password"
							onChange={props.HandlePasswordChange}
							className="LoginPasswordInput"
							required
						/>
						<Link to="/forgot-password" className="ForgotLink">Forgot?</Link>
					</div>
				</label>
				<br/>
				<div>
					<input type="checkbox" onClick={props.RememberMeOnClick}/> Remember Me
				</div>
				<br/>
				<div className="UserTypeRadioGroup">
					<div>
						<input type="radio" name="UserType" value="Student" onClick={this.HandleUserTypeButtons}
							   checked={this.state.isStudentChecked}/> Student
					</div>
					<div>
						<input type="radio" name="UserType" value="Warden" onClick={this.HandleUserTypeButtons}
							   checked={this.state.isWardenChecked}/> Warden
					</div>
				</div>
				<br/>
				<div className="RegisterLink">
					<Link to="/register">New Here? Register Now!</Link>
				</div>
				<br/>
				<div className="LoginButtonWrapper">
					<input
						type="button"
						value="Login"
						onClick={props.onClick}
						className="LoginButton"
					/>
				</div>
			</form>
		)
	}
}