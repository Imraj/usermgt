angular.module("AdminServices",["ngResource"])

.factory("Admin",function($http,$resource){
	
	adminFactory = {}
	
	adminFactory.addProvider = function(providerData){
		return $http.post("/localapi/add_provider",providerData);
	}

	adminFactory.addSubject = function(subjectData){
		return $http.post("/localapi/add_subject",subjectData)
	}

	adminFactory.fetchProviders = function(){
		return $http.post("/localapi/fetch_providers",{config_noAuth:true});
	}

	adminFactory.fetchEdXCourses = function(){
		var proxyurl = "https://cors-anywhere.herokuapp.com/";
		var baseurl = "https://courses.edx.org/api/courses/v1/courses/";
		var numPages = 614;
		var results = [];

		$http.get(proxyurl+baseurl,{noAuth:true}).then(function(data){
			console.log(data);
			results.push(data);
		});
		//var url = "https://courses.edx.org/api/courses/v1/courses/?page=";
		for(var idx = 1;idx <= numPages;idx++){
			var url = "https://courses.edx.org/api/courses/v1/courses/?page="+idx;
			$http.get(proxyurl+url,{noAuth:true}).then(function(data){
				results.push(data);
				console.log(data);
			});
		}
		
		return results;
	}

	adminFactory.fetchUdacityCourses = function(){
		//var url = "https://jsonplaceholder.typicode.com/posts/1";
		var url = "https://www.udacity.com/public-api/v0/courses";
		return $http.get(url,{noAuth:true});
	}

	adminFactory.storeUdacityCourses = function(data){
		return $http.post("/localapi/store_udacity",data);
	}

	adminFactory.fetchCourseraCourses = function(){
		return $http.get("/localapi/fetch_coursera");
	}

	adminFactory.fetchFutureLearnCourses = function(){
		return $http.get("/localapi/fetch_futurelearn");
	}

	return adminFactory;
});