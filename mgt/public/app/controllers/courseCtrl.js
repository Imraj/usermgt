angular.module("CourseControllers",["ngRoute","angular-star-rating","angularSpinner"])

.controller("courseCtrl",function($http,$routeParams,$scope){
	var courseId = $routeParams["courseId"];
	
	var app = this;

	$scope.isReadonly = true; 
    $scope.changeOnHover = false; 
    $scope.maxValue = 5; 
    //$scope.ratingValue = 3; 

    $scope.showSpinner = true;

	$http.post("/localapi/fetch_course",{config_noAuth:true,"courseId":courseId})
		.then(function(data){
			//console.log(data.data.course);
			$scope.ratingValue = data.data.rating; 
			app.courseInfo = data.data.course;
			$scope.showSpinner = false;
			
		})
		.catch(function(err){
			
			$scope.showSpinner = false;
		});

	$http.post("/localapi/fetch_reviews",{config_noAuth:true,"courseId":courseId})
		.then(function(data){
			
			app.reviews = data.data.reviews;
		})
		.catch(function(err){
			
		});

});