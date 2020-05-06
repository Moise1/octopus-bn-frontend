import React, { Component, Profiler } from 'react';
import { BrowserRouter as Router, Switch, Route, IndexRoute } from 'react-router-dom';

///

import Login from '../views/Login.View';
import Signup from '../views/SignupPage';
import Confirm from '../views/ConfirmEmail';
import SocialLogin from '../helpers/SocialLogin';
import Lost from '../views/Lost.View';
import DashboardRoot from '../views/Dashboard';
import DashboardHome from '../views/Dashboard/Home';
import Requests from '../views/Dashboard/Requests';
export default class index extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/verify-email" exact component={Confirm} />
				<Route path="/social-login" exact component={SocialLogin} />
				<DashboardRoot>
					<Route
						component={({ match }) => (
							<div>
								<Route path="/dashboard" exact component={DashboardHome} />
								<Route path="/requests" exact component={Requests} />
							</div>
						)}
					/>
				</DashboardRoot>
				<Route component={Lost} />
			</Switch>
		);
	}
}
