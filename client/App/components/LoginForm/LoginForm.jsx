import {h, Component} from 'preact'
import {Link} from 'react-router'
import './LoginForm.sass'

export class LoginForm extends Component {

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
					<input type="checkbox" onClick={props.RememberMeOnClick} /> Remember Me
				</div>
				<br/>
				<div className="UserTypeRadioGroup">
					<div>
						<input type="radio" name="UserType" value="student" onClick={props.UserTypeOnClick}
							   checked/>
						Student
					</div>
					<div>
						<input type="radio" name="UserType" value="warden" onClick={props.UserTypeOnClick}/> Warden
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