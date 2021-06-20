angular.module("ProfileControllers",["ngRoute"])

.controller("profileCtrl",function($http,$routeParams,Auth){


	var app = this;
	var userId = $routeParams["userId"];
	Auth.getUser().then(function(data){
		app.fullname = data.data.fullname;
		app.email = data.data.email;
		
	});

	$http.post("/localapi/profile",{"userId":userId})
		.then(function(data){
			if(data.data.created){
				app.profileData = data.data.profile;
			}	
	});

	$http.post("/localapi/fetch_profile_user_courses",{"userId":userId})
		.then(function(data){
			var status = data.data.success;
			
			app.userCourses = data.data.userCourses
		});

	this.updateProfile = function(profileData){

		$http.post("/localapi/update_profile",{"profileData":profileData}).then(function(data){
			if(data.data.success){
				app.successMsg = data.data.message
			}else{
				app.errorMsg = data.data.message
			}
		})
	}




});