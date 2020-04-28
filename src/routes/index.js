import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/styles.scss';
import Login from '../views/Login.View';
import Dashboard from '../views/Dashboard';
import Signup from '../views/SignupPage';
import Confirm from '../views/ConfirmEmail';
import SocialLogin from '../helpers/SocialLogin';
import Lost from '../views/Lost.View';

export default class index extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/verify-email" exact component={Confirm} />
				<Route path="/social-login" exact component={SocialLogin} />
				<Route component={Lost} />
			</Switch>
		);
	}
}