angular.module("UniversityControllers",["angularUtils.directives.dirPagination"])

.controller("universityCtrl",function($http,$scope){

	var app = this;
	$scope.showSpinner= true;
	$http.post("/localapi/fetch_university",{config_noAuth:true})
		 .then(function(data){
		 	$scope.showSpinner = false;
		 	app.universities = data.data.universities;
		 	
		 });

})

.controller("uniCtrl",function($http,$routeParams,$scope){

	var app = this;
	var university = $routeParams["universityId"];
	app.university = university;
	$scope.showSpinner = true;
	$http.post("/localapi/fetch_university_courses",{config_noAuth:true,"university":university})
		 .then(function(data){
		 	$scope.showSpinner = false;
		 	app.courses = data.data.courses;
		 });

});