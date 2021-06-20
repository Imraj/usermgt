angular.module("mainController",["authServices","angular-flexslider","angularSpinner"])

.controller("mainCtrl",function(Auth, $timeout, $location,$rootScope,$scope,$window){
	var app = this;

	$scope.slides = [
				'assets/img/slides/flexslider/1.png',
				'assets/img/slides/flexslider/2.png',
				'assets/img/slides/flexslider/3.png'
			];

	this.searchClicked = function(searchQuery){
			//console.log("Search Clicked")
			$scope.showSpinner = true;
			if(searchQuery.length > 0){
				
				$location.path("/search").search("query",searchQuery)
				
			}
	}

	app.loadme = false;
	$rootScope.$on("$routeChangeStart",function(){
		if(Auth.isLoggedIn()){
			Auth.getUser().then(function(data){
				
				app.fullname = data.data.fullname;
				app.email = data.data.email;
				app.id = data.data.id;
				app.isLoggedIn = true
				app.role = data.data.role
				app.loadme = true;
			});
		}else{
			
			app.isLoggedIn = false;
			app.loadme = true;
		}
		if($location.hash() == '_=_')$location.hash(null);


	});

	this.facebook = function(){
		//console.log($window.location.host)
		//console.log($window.location.protocol)
		$window.location = $window.location.protocol + "//" + $window.location.host + "/auth/facebook";
	}

	this.linkedin = function(){
		//console.log($window.location.host)
		//console.log($window.location.protocol)
		$window.location = $window.location.protocol + "//" + $window.location.host + "/auth/linkedin";
	}

	this.validateUser = function(loginData){
		app.errorMsg = false;
		app.loading = true;
		
		Auth.login(app.loginData).then(function(data){
			
			if(data.data.success){
				app.loading = false;
				app.successMsg = data.data.message + "...Redirecting";
				$timeout(function(){
					$location.path("/"); 
				},2000);
			}else{
				app.loading = false;
				app.errorMsg = data.data.message;
			}

		});
	}

	this.logout = function(){
		Auth.logout();
		$location.path("/logout");
		$timeout(function(){
			$location.path("/")
		},2000);
	}



});