
angular.module('eggsApp')
	.config(['$routeProvider', config]);

	function config($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl: "index.html",
			controller: "EggsController",
			controllerAs: "eggsCtrl"
	})
	.otherwise({
		redirectTo: '/'
	});
}