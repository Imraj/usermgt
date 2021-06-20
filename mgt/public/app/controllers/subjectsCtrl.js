angular.module("SubjectsControllers",[])

.controller("subjectsCtrl",function($http,$scope){

	$scope.showSpinner = true;
	var app = this;
	$http.post("/localapi/fetch_subjects",{config_noAuth:true})
		.then(function(data){
			$scope.showSpinner = false;
			
			app.subjects = data.data.subjects;
		})

})

.controller("subjectCtrl",function($http,$scope,$routeParams){

	var app = this;
	var subject = $routeParams["category"]
	app.subject = subject;
	$scope.showSpinner = true
	$http.post("/localapi/fetch_subject_courses",{config_noAuth:true})
		.then(function(data){
			$scope.showSpinner = false
			app.subject_courses = data.data.courses
		})

});