angular
	.module('eggApp')
	.controller('EggsController', EggsController);

	EggsController.$inject = ['$http', '$routeParams', '$window'];

	function EggsController($http, $routeParams, $window){
		var self = this;
		self.eggs = "Its Working!!!";
	}