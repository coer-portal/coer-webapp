exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _reactGridSystem = __webpack_require__(14);

var _Snackbar = __webpack_require__(21);

var _Header = __webpack_require__(20);

var _LoadPolyfill = __webpack_require__(22);

var _LoadPolyfill2 = _interopRequireDefault(_LoadPolyfill);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginBox = function (_React$Component) {
	_inherits(LoginBox, _React$Component);

	function LoginBox(props, context) {
		_classCallCheck(this, LoginBox);

		var _this = _possibleConstructorReturn(this, (LoginBox.__proto__ || Object.getPrototypeOf(LoginBox)).call(this, props, context));

		_this.attemptLogin = _this.attemptLogin.bind(_this);
		_this.handleIdInput = _this.handleIdInput.bind(_this);
		_this.handlePasswordInput = _this.handlePasswordInput.bind(_this);
		_this.handleRememberMeOption = _this.handleRememberMeOption.bind(_this);
		_this.state = {
			_id: '',
			password: '',
			UserType: 'student',
			Login: {
				disabled: true,
				Class: 'LoginBoxFormSubmit disabled'
			},
			SnackbarSpace: "",
			RememberUser: false
		};
		return _this;
	}

	_createClass(LoginBox, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			(0, _LoadPolyfill2.default)();
			if (!window.sessionStorage && !window.sessionStorage) {
				this.setState({
					SnackbarSpace: _react2.default.createElement(_Snackbar.Snackbar, { Message: 'Please Update your Browser!', Type: 'error' }),
					Login: {
						disabled: true
					}
				});
			}
		}
	}, {
		key: 'handleIdInput',
		value: function handleIdInput(e) {
			e.preventDefault();
			this.setState({
				_id: e.target.value
			});
			if (this.state.password.length > 4 && parseInt(e.target.value.toString().length) === 8) {
				this.state.Login = {
					disabled: false,
					Class: "LoginBoxFormSubmit"
				};
			} else {
				this.state.Login = {
					disabled: true,
					Class: "LoginBoxFormSubmit disabled"
				};
			}
		}
	}, {
		key: 'handlePasswordInput',
		value: function handlePasswordInput(e) {
			e.preventDefault();
			this.setState({
				password: e.target.value
			});
			if (e.target.value.length > 4 && parseInt(this.state._id.toString().length) === 8) {
				this.state.Login = {
					disabled: false,
					Class: "LoginBoxFormSubmit"
				};
			} else {
				this.state.Login = {
					disabled: true,
					Class: "LoginBoxFormSubmit disabled"
				};
			}
		}
	}, {
		key: 'handleRememberMeOption',
		value: function handleRememberMeOption(e) {
			this.setState({
				RememberUser: !this.state.RememberUser
			});
		}
	}, {
		key: 'attemptLogin',
		value: function attemptLogin(e) {
			var _this2 = this;

			e.preventDefault();
			var _deviceid = localStorage.getItem('_deviceid');

			var headers = new Headers({
				'content-type': 'application/json',
				'password': this.state.password,
				'_apikey': 'TESTING',
				'_deviceid': _deviceid
			});
			var Request = {
				method: 'POST',
				headers: headers,
				mode: 'cors',
				cache: false,
				body: JSON.stringify({
					_id: this.state._id
				})
			};
			fetch('http://coer-backend.ishanjain.me:8080/login/student', Request).then(function (result) {
				return result.text();
			}).then(function (body) {
				try {
					var parseBody = JSON.parse(body);

					// Set DeviceID
					localStorage.setItem('_deviceid', parseBody.data._deviceid);

					if (_this2.state.RememberUser) {
						if (parseBody.accesstoken) {
							sessionStorage.removeItem('accesstoken');
							localStorage.setItem('accesstoken', parseBody.accesstoken);
						}
						// Set Expire time of 8*60*60 seconds
						localStorage.setItem('expiretime', Math.round(new Date().getTime() / 1000) + 432000);
					}
					if (!_this2.state.RememberUser) {
						if (parseBody.accesstoken) {
							localStorage.removeItem('accesstoken');
							sessionStorage.setItem('accesstoken', parseBody.accesstoken);
						}
					}
					_this2.setState({
						SnackbarSpace: _react2.default.createElement(_Snackbar.Snackbar, {
							Message: parseBody['message'],
							Type: !parseBody.error ? 'success' : "error" })
					});
					setTimeout(function () {
						_this2.setState({
							SnackbarSpace: ''
						});
					}, 3000);
				} catch (e) {
					console.error(e);
				}
			}).catch(function (error) {
				console.log(error);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactGridSystem.Container,
				{ className: 'LoginBox' },
				_react2.default.createElement(_Header.Header, { Title: 'Login' }),
				_react2.default.createElement(
					_reactGridSystem.Row,
					{ className: 'LoginBoxForm' },
					_react2.default.createElement(
						_reactGridSystem.Row,
						null,
						_react2.default.createElement(
							_reactGridSystem.Col,
							{ offset: { xs: 2, sm: 3, md: 4, lg: 4 }, xs: 8, sm: 6, md: 4, lg: 4,
								className: 'LoginBoxInput' },
							_react2.default.createElement('input', { type: 'text', value: this.state._id, name: 'coerid', placeholder: 'COER ID',
								required: true, onChange: this.handleIdInput, className: 'InputField' })
						)
					),
					_react2.default.createElement(
						_reactGridSystem.Row,
						null,
						_react2.default.createElement(
							_reactGridSystem.Col,
							{ offset: { xs: 2, sm: 3, md: 4, lg: 4 }, xs: 8, sm: 6, md: 4, lg: 4,
								className: 'LoginBoxInput LoginBoxPasswordInput' },
							_react2.default.createElement(
								_reactGridSystem.Col,
								{ xs: 9, sm: 10, className: 'PasswordInputFieldWrapper' },
								_react2.default.createElement('input', { type: 'password', value: this.state.password, name: 'password', required: true,
									placeholder: 'Password', onChange: this.handlePasswordInput,
									className: 'InputField'
								})
							),
							_react2.default.createElement(
								_reactGridSystem.Col,
								{ xs: 3, sm: 2, className: 'PasswordInputFieldWrapper' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/forgot-password' },
									'Forgot?'
								)
							)
						)
					),
					_react2.default.createElement(
						_reactGridSystem.Row,
						null,
						_react2.default.createElement(
							_reactGridSystem.Col,
							{ offset: { xs: 2, sm: 3, md: 4, lg: 4 }, xs: 8, sm: 6, md: 4, lg: 4 },
							_react2.default.createElement('input', {
								type: 'checkbox',
								id: 'RememberMe',
								checked: this.state.RememberUser,
								onClick: this.handleRememberMeOption,
								className: 'RememberMeCheckbox'
							}),
							_react2.default.createElement(
								'label',
								{ htmlFor: 'RememberMe' },
								' Remember Me'
							)
						)
					),
					_react2.default.createElement(
						_reactGridSystem.Row,
						null,
						_react2.default.createElement(
							_reactGridSystem.Col,
							{ offset: { xs: 2, sm: 3, md: 4, lg: 4 }, xs: 8, sm: 6, md: 4, lg: 4,
								className: 'LoginBoxRegisterWrapper' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/register' },
								_react2.default.createElement(
									'h3',
									null,
									'New Here? Register Now'
								)
							)
						)
					),
					_react2.default.createElement(
						_reactGridSystem.Row,
						null,
						_react2.default.createElement(
							_reactGridSystem.Col,
							{ offset: { xs: 2, sm: 3, md: 4, lg: 4 }, xs: 8, sm: 6, md: 4, lg: 4,
								className: 'LoginBoxFormSubmitWrapper' },
							_react2.default.createElement(
								'button',
								{ type: 'submit', onClick: this.attemptLogin, className: this.state.Login.Class,
									disabled: this.state.Login.disabled },
								'Login'
							)
						)
					)
				),
				this.state.SnackbarSpace
			);
		}
	}]);

	return LoginBox;
}(_react2.default.Component);

exports.default = LoginBox;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGridSystem = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = exports.Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactGridSystem.Row,
				null,
				_react2.default.createElement(
					'h1',
					null,
					this.props.Title
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

Header.propTypes = {
	Title: _react2.default.PropTypes.string.isRequired
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Snackbar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Snackbar = exports.Snackbar = function (_React$Component) {
	_inherits(Snackbar, _React$Component);

	function Snackbar(props, context) {
		_classCallCheck(this, Snackbar);

		var _this = _possibleConstructorReturn(this, (Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call(this, props, context));

		_this.state = {
			isVisible: "show"
		};
		_this.SetColor = _this.SetColor.bind(_this);
		return _this;
	}

	_createClass(Snackbar, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.state.isVisible = "";
		}
	}, {
		key: 'SetColor',
		value: function SetColor(type) {
			var choice = {
				'error': function error() {
					return { backgroundColor: 'red', color: 'white' };
				},
				'success': function success() {
					return { backgroundColor: 'green', color: 'white' };
				}
			};

			if (choice.hasOwnProperty(type)) {
				return choice[type]();
			} else {
				return { backgroundColor: 'white', color: 'black' };
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'Snackbar', className: this.state.isVisible, style: this.SetColor(this.props.Type || "white") },
				this.props.Message
			);
		}
	}]);

	return Snackbar;
}(_react2.default.Component);

Snackbar.propTypes = {
	Message: _react2.default.PropTypes.string.isRequired,
	Type: _react2.default.PropTypes.string.isRequired
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = loadPolyfill;

var _bluebird = __webpack_require__(27);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PolyfillTests = [{
	test: function test() {
		return !global.fetch;
	},
	load: function load() {
		return new _bluebird2.default(function (resolve) {
			Promise.resolve().then((function () {
				resolve({
					fetch: __webpack_require__(28)
				});
			}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
		});
	}
}];

function loadPolyfill() {
	if (PolyfillTests.some(function (polyfill) {
		return polyfill.test();
	})) {
		(function () {
			var polyfillFns = [];
			PolyfillTests.forEach(function (polyfill) {
				if (polyfill.test()) {
					polyfillFns.push(polyfill.load());
				}
			});
		})();
	}
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "a {\n  text-decoration: none; }\n\n.disabled {\n  opacity: 0.65; }\n\n.LoginBox {\n  padding-top: 30px;\n  font-family: 'sans-serif';\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.LoginBoxForm {\n  padding-top: 20px;\n  width: 100%; }\n\n.LoginBoxInput {\n  height: 2.5em;\n  width: 100%;\n  background: white;\n  border-bottom: 5px solid lightslategrey;\n  margin-bottom: 15px; }\n\n.LoginBoxFormSubmitWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.LoginBoxFormSubmit {\n  font-size: 20px;\n  margin: 15px;\n  padding: 15px 30px 15px 30px;\n  background: orange;\n  color: white;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px; }\n\n.PasswordInputFieldWrapper {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.InputField {\n  padding-left: 5px;\n  background: transparent;\n  font-size: 1.2em;\n  text-align: left;\n  width: 98%;\n  height: 100%; }\n\n.LoginBoxRegisterWrapper {\n  margin-bottom: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n@media screen and (min-width: 400px) and (orientation: portrait) {\n  .LoginBox {\n    padding-top: 40px; } }\n\n@media screen and (min-width: 540px) {\n  .LoginBox {\n    padding-top: 60px; } }\n\n@media screen and (min-width: 750px) {\n  .LoginBox {\n    padding-top: 70px; } }\n\n@media screen and (min-width: 960px) {\n  .LoginBox {\n    padding-top: 80px; } }\n\n@media screen and (min-width: 1140px) {\n  .LoginBox {\n    padding-top: 100px; } }\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "@media screen {\n  #Snackbar {\n    visibility: hidden;\n    min-height: 30px;\n    text-align: center;\n    min-width: 250px;\n    margin-left: -150px;\n    -webkit-border-radius: 2px;\n    -moz-border-radius: 2px;\n    border-radius: 2px;\n    z-index: 1;\n    left: 50%;\n    bottom: 30px;\n    padding: 5px;\n    position: fixed;\n    font-size: 17px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  #Snackbar.show {\n    visibility: visible;\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n    -o-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n  @-webkit-keyframes fadein {\n    from {\n      bottom: 0;\n      opacity: 0;\n      to {\n        bottom: 30px;\n        opacity: 1; } } }\n  @keyframes fadein {\n    from {\n      bottom: 0;\n      opacity: 0; }\n    to {\n      bottom: 30px;\n      opacity: 1; } }\n  @-webkit-keyframes fadeout {\n    from {\n      bottom: 30px;\n      opacity: 1; }\n    to {\n      bottom: 0;\n      opacity: 0; } }\n  @keyframes fadeout {\n    from {\n      bottom: 30px;\n      opacity: 1; }\n    to {\n      bottom: 0;\n      opacity: 0; } } }\n", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(13)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js??ref--1-2!./LoginBox.sass", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js??ref--1-2!./LoginBox.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(13)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js??ref--1-2!./Snackbar.sass", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/lib/loader.js??ref--1-2!./Snackbar.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })
];;