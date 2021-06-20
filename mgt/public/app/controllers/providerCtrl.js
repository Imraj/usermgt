angular.module("ProviderControllers",["AdminServices","ngRoute",'jkAngularRatingStars',
				'angularUtils.directives.dirPagination',"angular-star-rating","angularSpinner"])

.controller("providerCtrl",function(Admin,$http,$routeParams,$scope){
	
	$scope.isReadonly = true; 
    $scope.changeOnHover = true; 
    $scope.maxValue = 5; 
    //$scope.ratingValue = 0; 

    $scope.showSpinner = true;

	var prov = $routeParams["providerName"];
	var app = this;
	$http.post("/localapi/fetch_all_courses",{config_noAuth:true,"prov":prov}).then(function(data){
		$scope.showSpinner = false;
		if(data.data.success){
			app.courseInfo = data.data.courseInfo;
			app.providerInfo = data.data.providerInfo;
			$scope.ratingValue = 4;
			console.log("Rating Values below :");
			
		}
	})

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