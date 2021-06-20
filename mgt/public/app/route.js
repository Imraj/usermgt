var app = angular.module("routeModule",["ngRoute"])

.config(function($routeProvider,$locationProvider){
	
	$routeProvider.

	when("/",{
		templateUrl:"app/views/pages/home.html",
		controller:"homeCtrl",
		controllerAs:"home",

	})

	.when("/register",{
		templateUrl:"app/views/pages/register.html",
		controller : "userCtrl",
		controllerAs : "register",
		authenticated : false,
	})

	.when("/login",{
		templateUrl:"app/views/pages/login.html",
		authenticated : false
	})

	.when("/logout",{
		templateUrl:"app/views/pages/logout.html",
		authenticated : true
	})

	.when("/admin/",{
		templateUrl:"app/views/pages/admin/admin.html",
		controller : "adminCtrl",
		controllerAs : "admin",
		authenticated : true
	})

	.when("/courses",{
		templateUrl:"app/views/pages/courses.html",
		controller : "coursesCtrl",
		controllerAs : "courses",
	})

	.when("/course/:courseId",{
		templateUrl:"app/views/pages/course.html",
		controller : "courseCtrl",
		controllerAs : "course",
	})

	.when("/course/review/new/:courseId",{
		templateUrl:"app/views/pages/new_review.html",
		controller : "reviewCtrl",
		controllerAs : "review",
	})

	.when("/write-a-review",{
		templateUrl:"app/views/pages/write_a_review.html",
		controller : "writeReviewCtrl",
		controllerAs : "writeReview",
	})

	
	.when("/providers",{
		templateUrl:"app/views/pages/providers.html",
		controller : "providersCtrl",
		controllerAs : "providers"
	})	

	.when("/provider/:providerName",{
		templateUrl:"app/views/pages/provider.html",
		controller : "providerCtrl",
		controllerAs : "provider"
	})	

	.when("/subjects",{
		templateUrl:"app/views/pages/subjects.html",
		controller : "subjectsCtrl",
		controllerAs : "subjects"
	})

	.when("/subject/:category",{
		templateUrl:"app/views/pages/subject.html",
		controller : "subjectCtrl",
		controllerAs : "subject"
	})	

	.when("/institutions",{
		templateUrl:"app/views/pages/universities.html",
		controller : "universityCtrl",
		controllerAs : "university"
	})

	.when("/institution/:universityId",{
		templateUrl:"app/views/pages/university.html",
		controller : "uniCtrl",
		controllerAs : "uni"
	})	

	.when("/profile/:userId",{
		templateUrl:"app/views/pages/profile.html",
		controller : "profileCtrl",
		controllerAs : "profile"
	})

	.when("/reset_password",{
		templateUrl:"app/views/pages/reset_password.html",
		controller : "passwordCtrl",
		controllerAs : "password"
	})

	.when("/search",{
		templateUrl:"app/views/pages/search.html",
		controller : "searchCtrl",
		controllerAs : "search"
	})

	.when("/contact",{
		templateUrl:"app/views/pages/contact.html",
		controller : "contactCtrl",
		controllerAs : "contact"
	})

	.when("/facebook/:token",{
		templateUrl:"app/views/pages/users/social/social.html",
		controller : "facebookCtrl",
		controllerAs : "facebook"
	})

	.when("/facebookerror",{
		templateUrl:"app/views/pages/login.html",
		controller : "facebookCtrl",
		controllerAs : "facebook"

	})

	.when("/linkedin/:token",{
		templateUrl:"app/views/pages/users/social/social.html",
		controller : "linkedinCtrl",
		controllerAs : "linkedin"
	})

	.when("/linkedinerror",{
		templateUrl:"app/views/pages/login.html",
		controller : "linkedinCtrl",
		controllerAs : "linkedin"

	})

	.otherwise({'redirectTo':"/"});

	$locationProvider.html5Mode({
		enabled:true,
		requiredBase:false
	});

});

app.run(["$rootScope","Auth","$location",function($rootScope,Auth,$location){
	$rootScope.$on("$routeChangeStart",function(event,next,current){

		if(next.$$route.authenticated == true){
			if(!Auth.isLoggedIn()){
				event.preventDefault();
				$location.path("/login");
			}
		}
		else if(next.$$route.authenticated == false){
			if(Auth.isLoggedIn()){
				event.preventDefault();
				$location.path("/");
			}
		}
		
	});
}]);
