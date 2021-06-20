angular.module("UserControllers",["UserServices","angularSpinner"])

.controller('userCtrl',function($http,$location,$timeout,$location,User){
	
	var app = this;
	this.regUser = function(regData){
		app.errorMsg = false;
		app.loading = true;
		
		User.create(app.regData).then(function(data){
			
			if(data.data.success){
				app.loading = false;
				app.successMsg = data.data.message + "...Redirecting";
				$timeout(function(){
					$location.path("/login"); 
				},2000);
			}else{
				app.loading = false;
				app.errorMsg = data.data.message;
			}

		});
	}

})

.controller("facebookCtrl",function($routeParams,Auth,$location,$window){
	
	var app = this;

	if($window.location.pathname == "/facebookerror"){
		app.errorMsg = "Facebook email not found in database";
	}else{
		Auth.facebook($routeParams.token);
		$location.path("/");
	}
	
})

.controller("linkedinCtrl",function($routeParams,Auth,$location,$window){
	
	var app = this;

	if($window.location.pathname == "/linkedinerror"){
		app.errorMsg = "Linkedin email not found in database";
	}else{
		Auth.facebook($routeParams.token);
		$location.path("/");
	}
	
})

.controller('passwordCtrl',function(){
	
});