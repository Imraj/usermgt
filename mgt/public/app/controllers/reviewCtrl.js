angular.module("ReviewControllers",["angular-star-rating","angularSpinner"])

.controller("reviewCtrl",function($http,$routeParams,$scope,Auth,$location){
	
	var app = this;
	var courseId = $routeParams["courseId"];

	if(!Auth.isLoggedIn()){
		$location.path("/login");
	}

	$scope.showSpinner = true;
	$http.post("/localapi/fetch_course",{"courseId":courseId}).then(function(data){
		$scope.showSpinner = false;
		app.courseInfo = data.data.course;
	});

	$scope.isReadonly = false; 
    $scope.changeOnHover = true; 
    $scope.maxValue = 5; 
    $scope.ratingValue = 0; 		

	this.submitReview = function(reviewData){
		$scope.showSpinner = true;
		$http.post("/localapi/submit_review",{"courseId":courseId,"reviewData":reviewData,"rating":$scope.ratingValue})
			.then(function(data){
				$scope.showSpinner = false;
				var status = data.data.success;
				if(status){
					app.reviewSuccessMsg = data.data.message;
				}else{
					app.reviewErrorMsg = data.data.message;
				}
		});
	}

});