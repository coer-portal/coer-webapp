import React from 'react'
import {Link} from 'react-router'
import {Container, Row, Col} from 'react-grid-system'
import {Snackbar} from '../Snackbar/Snackbar'
import {Header} from '../Header/Header'
import loadPolyfill from '../../polyfills/LoadPolyfill'
import './LoginBox.sass'

export default class LoginBox extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.attemptLogin = this.attemptLogin.bind(this);
		this.handleIdInput = this.handleIdInput.bind(this);
		this.handlePasswordInput = this.handlePasswordInput.bind(this);
		this.handleRememberMeOption = this.handleRememberMeOption.bind(this);
		this.state = {
			_id: '',
			password: '',
			UserType: 'student',
			Login: {
				disabled: true,
				Class: 'LoginBoxFormSubmit disabled'
			},
			SnackbarSpace: "",
			RememberUser: false
		}
	}

	componentDidMount() {
		loadPolyfill();
		if (!window.sessionStorage && !window.sessionStorage) {
			this.setState({
				SnackbarSpace: <Snackbar Message="Please Update your Browser!" Type="error"/>,
				Login: {
					disabled: true
				}
			});
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

	handleRememberMeOption(e) {
		this.setState({
			RememberUser: !this.state.RememberUser
		})
	}

	attemptLogin(e) {
		e.preventDefault();
		let _deviceid = localStorage.getItem('_deviceid');

		let headers = new Headers({
			'content-type': 'application/json',
			'password': this.state.password,
			'_apikey': 'TESTING',
			'_deviceid': _deviceid
		});
		let Request = {
			method: 'POST',
			headers: headers,
			mode: 'cors',
			cache: false,
			body: JSON.stringify({
				_id: this.state._id
			})
		};
		fetch('http://localhost:5000/login/student', Request)
			.then(result => {
				return result.text()
			})
			.then(body => {
				try {
					let parseBody = JSON.parse(body);

					// Set DeviceID
					localStorage.setItem('_deviceid', parseBody.data._deviceid);

					if (this.state.RememberUser) {
						if (parseBody.accesstoken) {
							sessionStorage.removeItem('accesstoken');
							localStorage.setItem('accesstoken', parseBody.accesstoken);
						}
						// Set Expire time of 8*60*60 seconds
						localStorage.setItem('expiretime', Math.round((new Date()).getTime() / 1000) + 432000);
					}
					if (!this.state.RememberUser) {
						if (parseBody.accesstoken) {
							localStorage.removeItem('accesstoken');
							sessionStorage.setItem('accesstoken', parseBody.accesstoken);
						}
					}
					this.setState({
						SnackbarSpace: <Snackbar
							Message={parseBody['message']}
							Type={!parseBody.error ? 'success' : "error"}/>
					});
					setTimeout(() => {
						this.setState({
							SnackbarSpace: ''
						});
					}, 3000)
				} catch (e) {
					console.error(e);
				}
			})
			.catch(error => {
					console.log(error);
				}
			);
	}

	render() {
		return (
			<Container className="LoginBox">
				<Header Title="Login"/>
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
									   className="InputField"
								/>
							</Col>
							<Col xs={3} sm={2} className="PasswordInputFieldWrapper">
								<Link to="/forgot-password">Forgot?</Link>
							</Col>
						</Col>
					</Row>
					<Row>
						<Col offset={{xs: 2, sm: 3, md: 4, lg: 4}} xs={8} sm={6} md={4} lg={4}>
							<input
								type="checkbox"
								id="RememberMe"
								checked={this.state.RememberUser}
								onClick={this.handleRememberMeOption}
								className="RememberMeCheckbox"
							/>
							<label htmlFor="RememberMe"> Remember Me</label>
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
				{this.state.SnackbarSpace}
			</Container>
		)
	}
}