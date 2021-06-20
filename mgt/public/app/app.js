angular.module("myApp",["routeModule","HomeControllers","UserControllers","UserServices",
	"ngAnimate","mainController","authServices","AdminControllers","AdminServices",
	"ProvidersControllers","ProviderControllers","CourseControllers","ReviewControllers",
	"WriteReviewControllers","ProfileControllers","UniversityControllers","ContactControllers",
	"SubjectsControllers"])

.config(function($httpProvider,$sceDelegateProvider){
	
	$httpProvider.interceptors.push("AuthInterceptors");

});