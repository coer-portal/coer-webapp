import {h, Component} from 'preact'
import {LoginForm} from '../components/LoginForm/LoginForm'
import {Snackbar} from '../components/Snackbar/Snackbar'
import './Login.sass'

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state._id = '';
		this.state.password = '';
		this.state.usertype = 'Student';
		this.state.Snackbar = '';
		this.state.RememberUser = false;
		this.HandleFormSubmit = this.HandleFormSubmit.bind(this);
		this.HandleIDChange = this.HandleIDChange.bind(this);
		this.HandlePasswordChange = this.HandlePasswordChange.bind(this);
		this.HandleUserType = this.HandleUserType.bind(this);
		this.HandleRememberUser = this.HandleRememberUser.bind(this);
	}

	HandleIDChange(e) {
		e.preventDefault();
		this.setState({
			_id: e.target.value
		})
	}

	HandlePasswordChange(e) {
		e.preventDefault();
		this.setState({
			password: e.target.value
		})
	}

	HandleUserType(e) {
		this.setState({
			usertype: e.target.value
		});
		console.log(e.target.checked)
	}

	HandleRememberUser(e) {
		this.setState({
			RememberUser: e.target.checked
		});
	}

	HandleFormSubmit(e) {
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
		fetch('http://localhost:5000/login/' + this.state.usertype.toLowerCase(), Request)
			.then(result => {
				return result.text()
			})
			.then(body => {
				try {
					let parseBody = JSON.parse(body);
					if (parseBody.error != "E101") {
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
							Snackbar: <Snackbar
								Message={parseBody['message']}
								Type={!parseBody.error ? 'success' : "error"}/>
						});
						setTimeout(() => {
							this.setState({
								Snackbar: ''
							});
						}, 3000)
					} else {
						this.setState({
							Snackbar: <Snackbar
								Message={"Please Enter Valid Data"}
								Type="error"/>
						});
						setTimeout(() => {
							this.setState({
								Snackbar: ''
							});
						}, 3000)
					}
				} catch (e) {
					console.error(e);
				}
			})
			.catch(error => {
					console.log(error);
				}
			);
	}

	render(props, state) {
		return (
			<div className="Login">
				<h1 className="Header">{state.usertype} Login</h1>
				<LoginForm
					id={state._id}
					password={state.password}
					HandleIDChange={this.HandleIDChange}
					HandlePasswordChange={this.HandlePasswordChange}
					onClick={this.HandleFormSubmit}
					UserTypeOnClick={this.HandleUserType}
					RememberMeOnClick={this.HandleRememberUser}
				/>
				<div className="SnackbarWrapper">
					{this.state.Snackbar}
				</div>
			</div>
		)
	}
}