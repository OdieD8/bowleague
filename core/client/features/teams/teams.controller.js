var app = angular.module('app');

app.controller('teamsController', ['$scope', '$stateParams', 'teamService', teamsController]);

function teamsController($scope, $stateParams, teamService) {
	
	$scope.getTeams = function () {
        
        teamService.getTeams()
            .then(function (data) {
				$scope.teams = data;
		
		});
	
	};
	
	$scope.getTeams();
	
	$scope.myPlayers = [];
	
	$scope.addNewPlayer = function() {
		$scope.myPlayers.push($scope.newPlayer);
		$scope.newPlayer = "";
	};
	
	$scope.postNewTeam = function() {
		$scope.newTeam.players = $scope.myPlayers;
		teamService.postNewTeam($scope.newTeam).then(function (data) {
			console.log(data);
		})
	}
};