import React, { useState, useRef } from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../actions/index";

const Profile = () => {

	const { user: currentUser } = useSelector((state) => state.auth);
        const [password, setPassword] = useState("");

	if (!currentUser) {
		return <Redirect to="/login" />;
	}

        const handleSubmit = (e) => {
		e.preventDefault();
	
		setLoading(true);
		
		dispatch(updatePassword(password))
		.then(() => {
			props.history.push("/profile");
			window.location.reload();
		})
		.catch(() => {
			setLoading(false);
		});
		
	};
        const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	return(
		<section id="content">
			<div class="container">
				<div class="row">cd 
						<form role="form" class="profile-form" onSubmit={this.handleSubmit}> 	
							<div class="row show-hide-message" ng-show="main.successMsg">
								<div class="alert alert-success"></div>
							</div>
						
							<div class="form-group">
								<input type="username" readonly name="username" value={currentUser.username} id="username" class="form-control input-lg"   tabindex="1"/>
							</div>

							<div class="form-group">
								<input type="age" readonly name="age" id="age" value={currentUser.age} class="form-control input-lg"  tabindex="2"/>
							</div>

							<div class="form-group">
								<input type="password" value={this.state.password} onChange={this.updatePassword} class="form-control input-lg" id="pwd" placeholder="Password"  tabindex="3"/>
							</div>

							<div class="form-group">
								<input type="submit" class="btn btn-success" />
							</div>

						</form>
				</div>
			</div>
		</section>
	)

};

export default Profile
