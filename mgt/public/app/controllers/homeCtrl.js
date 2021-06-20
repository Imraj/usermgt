angular.module("HomeControllers",["angularUtils.directives.dirPagination","angularSpinner"])

.controller("homeCtrl",function($http,$scope,$location){

	var app = this;
	$http.post("/localapi/fetch_random_courses",{config_noAuth:true}).then(function(data){
		app.randomCourses = data.data.results
	})

	this.searchClicked = function(searchQuery){
			$scope.showSpinner = true;
			if(searchQuery.length > 0){
				
				$location.path("/search").search("query",searchQuery)
				
			}
	}

})

.controller("searchCtrl",function($http,$scope,$routeParams){

	var app = this;
	var query = $routeParams["query"];
	$scope.showSpinner = true;
	$http.post("/localapi/search",{config_noAuth:true,"search":query}).then(function(data){
		$scope.showSpinner = false;
		app.results = data.data.results;
	});

});