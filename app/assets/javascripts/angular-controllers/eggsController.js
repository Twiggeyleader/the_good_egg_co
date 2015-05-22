angular
	.module('eggsApp')
	.controller('EggsController', EggsController);

	EggsController.$inject = ['$http', '$routeParams', '$windows'];

	function EggsController($http, $routeParams, $windows){
		var self = this;
		self.eggs = "Its Working!!!";
	}