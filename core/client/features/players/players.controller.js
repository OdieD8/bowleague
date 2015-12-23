var app = angular.module('app');

app.controller('playersController', ['$scope', '$state', '$stateParams', 'teamService', 'playerService', playersController]);

function playersController($scope, $state, $stateParams, teamService, playerService) {
	
	var id = $stateParams.id;
	
	$scope.getTeamById = function (id) {
		teamService.getTeamById(id).then(function (data) {
			
			$scope.team = data;
		});
	}
	
	$scope.getTeamById(id);
	
	$scope.addNewPlayer = function () {
		
		$scope.playerByTeam = {
			name: $scope.newPlayer.name,
			team: id
		};
		
		$scope.player = {
			players: $scope.newPlayer.name
		}
		
		playerService.addNewPlayer($scope.playerByTeam).then(function (data) {
		
			$state.go("home");
			alert($scope.playerByTeam.name + " added");
		});
		
		teamService.updatePlayer(id, $scope.player).then(function (data) {
			
			console.log(data);
		});
	};
	
	
	
};