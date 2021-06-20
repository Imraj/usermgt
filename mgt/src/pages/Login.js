import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import { login } from "../actions/auth";

const Login = (props) => {

	const form = useRef();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const { isLoggedIn } = useSelector(state => state.auth);
	const { message } = useSelector(state => state.message);

	const dispatch = useDispatch();

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleLogin = (e) => {
		e.preventDefault();
	
		setLoading(true);
		
		dispatch(login(username, password))
		.then(() => {
			props.history.push("/profile");
			window.location.reload();
		})
		.catch(() => {
			setLoading(false);
		});
		
	};

	return(
		<section id="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
						
						<form role="form" class="register-form" onSubmit={this.handleLogin}> 
							
							<div class="row show-hide-message">
								<div class="alert alert-success"></div>
							</div>
							<div class="row show-hide-message">
								<div class="alert alert-danger"></div>
							</div>

							<div class="form-group">
								<input type="username" name="username" value={this.state.username} onChange={onChangeUsername} id="username" class="form-control input-lg" placeholder="Username" ng-model="main.loginData.email" tabindex="1"/>
							</div>

							<div class="form-group">
								<input type="password" class="form-control input-lg" value={this.state.password} onChange={onChangePassword} id="exampleInputPassword1" placeholder="Password" ng-model="main.loginData.password" tabindex="2"/>
							</div>
							
						</form>
					</div>
				</div>
			  </div>
			
		</section>
	)

}

export default Login;
