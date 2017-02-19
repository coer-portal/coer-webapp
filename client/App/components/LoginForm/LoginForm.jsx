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
						disabled={props.isLoginDisabled}
					/>
				</div>
			</form>
		)
	}
}