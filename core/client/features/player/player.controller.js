var app = angular.module('app');

app.controller('playerController', ['$scope', '$state', '$stateParams', 'playerService', playerController]);

function playerController($scope, $state, $stateParams, playerService) {

	var id = $stateParams.id;

	$scope.getPlayerById = function (id) {
		playerService.getPlayerById(id).then(function (data) {

			
		});
	};
};