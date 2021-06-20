angular.module("UserServices",[])

.factory("User",function($http){

	userFactory = {};

	userFactory.create = function(regData){
		return $http.post("/localapi/register",regData);
	};

	return userFactory;

});