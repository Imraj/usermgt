angular.module("AdminControllers",["AdminServices","angularSpinner","angularUtils.directives.dirPagination"])

.controller("adminCtrl",function($http,Admin,$location,Auth){

	Auth.getUser().then(function(data){
				if(data.data.role == "user"){
					$location.path("/");
				}
	});

	$http.post("/localapi/fetch_users").then(function(data){
		app.users = data.data.users;
		
	});

	$http.post("/localapi/fetch_subjects_level0").then(function(data){
		//console.log(data.data.subjects)
		app.subjects = data.data.subjects
	})

	var app = this;
	this.addProvider = function(provider){
		Admin.addProvider(app.provider).then(function(data){
			var providerStatus = data.data.success;
			if(providerStatus){
				app.providerSuccessMsg = data.data.message;
			}else{
				app.providerErrorMsg = data.data.message;
			}
		});
	}

	this.addSubject = function(subjectData){
		//console.log(app.subjectData)
		Admin.addSubject(app.subjectData).then(function(data){
			var subjectStatus = data.data.success;
			if(subjectStatus){
				app.subjectSuccessMsg = data.data.message;
			}else{
				app.subjectErrorMsg = data.data.message;
			}
		});
	}


	this.fetchEdXCourses = function(){
		//console.log("EdX button clicked");
		var proxyurl = "https://cors-anywhere.herokuapp.com/";
		var baseurl = "https://courses.edx.org/api/courses/v1/courses/";
		for(var k=0;k<=614;k++){
			if(k == 0){
				$http.get(proxyurl+baseurl)
					.then(function(data){
						console.log("Fetching edX courses");
						$http.post("/localapi/store_edx",data)
							.then(function(data){
								console.log("Data sent");
								console.log(data);
							})
							.catch(function(err){
								console.log("Error occured");
							});
						console.log("EdX Courses");
						console.log(data);
					})
					.catch(function(err){
						console.log("EdX Error");
						console.log(err);
					});
			}else{
				var burl = baseurl + "?page=" + k
				$http.get(proxyurl+burl)
					.then(function(data){
						console.log("Fetching edX courses");
						$http.post("/localapi/store_edx",data)
							.then(function(data){
								console.log("Data sent");
								console.log(data);
							})
							.catch(function(err){
								console.log("Error occured");
							});
						console.log("EdX Courses");
						console.log(data);
					})
					.catch(function(err){
						console.log("EdX Error");
						console.log(err);
					});
			}
		}
		
	}	

	this.fetchUdacityCourses = function(){
		
		Admin.fetchUdacityCourses()
			.then(function(data){
				console.log("Fetching udacity");
				Admin.storeUdacityCourses(data)
					.then(function(data){

					})
					.catch(function(err){

					})
			})
			.catch(function(err){
				
			});
	}

	this.fetchFutureLearnCourses = function(){
		console.log("futurelearn clicked");
		$http.post("/localapi/fetch_futurelearn")
					.then(function(data){

					})
					.catch(function(err){

					});
	}




});