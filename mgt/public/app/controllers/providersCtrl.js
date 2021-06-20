angular.module("ProvidersControllers",["AdminServices","angularSpinner"])

.controller("providersCtrl",function(Admin,$scope,$http,Auth){

	var app = this;
	$scope.showSpinner = true;
	
	Admin.fetchProviders().then(function(data){
		$scope.showSpinner = false;
		app.providers = data.data.providers;
	});

	$http.post("/localapi/follower_check").then(function(data){
		var fp = [];
		if(data.data.success){
			var fprov = data.data.providers;
			for(i=0;i<fprov.length;i++){
				fp[i] = fprov[i]._provider;
			}
		}
		app.fp = fp;
		
	})

	app.followProvider = function(providerId){
		if(Auth.isLoggedIn){
			$http.post("/localapi/follow_provider",{"providerId":providerId}).then(function(data){
				if(data.data.success){
					app.successMsg = data.data.message;
				}else{
					app.errorMsg = data.data.message;
				}
			})
		}else{
			app.errorMsg = "You need to be logged in to continue"
		}
		
		
	};

});