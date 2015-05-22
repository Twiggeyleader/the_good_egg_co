angular
	.module('eggApp')
	.controller('EggsController', EggsController);

	EggsController.$inject = ['$http', '$routeParams', '$window'];

	function EggsController($http, $routeParams, $windows){
		var self = this;
		self.eggs = "Its Working!!!";
	}