angular.module("WriteReviewControllers",["angularUtils.directives.dirPagination","angularSpinner"])

.controller("writeReviewCtrl",function($http,$routeParams,$scope,Auth,$location){
	
	var app =this;
	app.courses = [];
	app.pageno = 1;
	app.total_count = 0;
	$scope.showSpinner = true;
	//app.showSpinner = true;
	$http.post("/localapi/fetch_courses",{config_noAuth:true})
		.then(function(data){

			app.all_course = data.data.all_course
			$scope.showSpinner = false;
			
	});

});