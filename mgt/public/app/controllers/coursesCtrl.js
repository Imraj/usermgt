angular.module("CoursesControllers",[])

.controller("CoursesCtrl",function($http){

	this.fetchUdacityCourses = function(){
		$http.get("/fetch_udacity").then(function(data){
			
		});
	}

});