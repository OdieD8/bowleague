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
	
	$scope.postNewTeam = function() {
		teamService.postNewTeam($scope.newTeam).then(function (data) {
			console.log(data);
		})
	}
};