import React from 'react'
import {Link} from 'react-router'
import {Container, Row, Col} from 'react-grid-system'
import axios from 'axios'

import './LoginBox.sass'

export default class LoginBox extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.attemptLogin = this.attemptLogin.bind(this);
		this.handleIdInput = this.handleIdInput.bind(this);
		this.handlePasswordInput = this.handlePasswordInput.bind(this);
		this.state = {
			_id: '',
			password: '',
			userType: 'student',
			Login: {
				disabled: true,
				Class: 'LoginBoxFormSubmit disabled'
			}
		}
	}

	handleIdInput(e) {
		e.preventDefault();
		this.setState({
			_id: e.target.value
		});
		if (this.state.password.length > 4 && parseInt(e.target.value.toString().length) === 8) {
			this.state.Login = {
				disabled: false,
				Class: "LoginBoxFormSubmit"
			}
		} else {
			this.state.Login = {
				disabled: true,
				Class: "LoginBoxFormSubmit disabled"
			}
		}
	}

	handlePasswordInput(e) {
		e.preventDefault();
		this.setState({
			password: e.target.value
		});
		if (e.target.value.length > 4 && parseInt(this.state._id.toString().length) === 8) {
			this.state.Login = {
				disabled: false,
				Class: "LoginBoxFormSubmit"
			}
		} else {
			this.state.Login = {
				disabled: true,
				Class: "LoginBoxFormSubmit disabled"
			}
		}
	}

	attemptLogin(e) {
		e.preventDefault();
		console.log(this.state._id);
		console.log(this.state.password);
		axios.post("http://coer-backend.ishanjain.me:8080/login/student", {
			_id: this.state._id,
			password: this.state.password
		}).then(result => {
			console.log(result);
		}).catch(error => {
			console.error(error);
		});
	}

	render() {

		return (
			<Container className="LoginBox">
				<Row className="LoginBoxHeader">
					<h1>Login</h1>
				</Row>
				<Row className="LoginBoxForm">
					<Row>
						<Col offset={{xs: 2, sm: 3, md: 4, lg: 4}} xs={8} sm={6} md={4} lg={4}
							 className="LoginBoxInput">
							<input type="text" value={this.state._id} name="coerid" placeholder="COER ID"
								   required onChange={this.handleIdInput} className="InputField"/>
						</Col>
					</Row>
					<Row>
						<Col offset={{xs: 2, sm: 3, md: 4, lg: 4}} xs={8} sm={6} md={4} lg={4}
							 className="LoginBoxInput LoginBoxPasswordInput">
							<Col xs={9} sm={10} className="PasswordInputFieldWrapper">
								<input type="password" value={this.state.password} name="password" required
									   placeholder="Password" onChange={this.handlePasswordInput}
									   className="InputField"/>
							</Col>
							<Col xs={3} sm={2} className="PasswordInputFieldWrapper">
								<Link to="/forgot-password">Forgot?</Link>
							</Col>
						</Col>
					</Row>
					<Row>
						<Col offset={{xs: 2, sm: 3, md: 4, lg: 4}} xs={8} sm={6} md={4} lg={4}
							 className="LoginBoxRegisterWrapper">
							<Link to="/register"><h3>New Here? Register Now</h3></Link>
						</Col>
					</Row>
					<Row>
						<Col offset={{xs: 2, sm: 3, md: 4, lg: 4}} xs={8} sm={6} md={4} lg={4}
							 className="LoginBoxFormSubmitWrapper">
							<button type="submit" onClick={this.attemptLogin} className={this.state.Login.Class}
									disabled={this.state.Login.disabled}>Login
							</button>
						</Col>
					</Row>
				</Row>
			</Container>
		)
	}
}