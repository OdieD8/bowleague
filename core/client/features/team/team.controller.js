var app = angular.module('app');


app.controller('teamController', ['$scope', '$stateParams', 'teamService', teamController]);

function teamController($scope, $stateParams, teamService) {
	
		var id = $stateParams.id;
		
		$scope.getTeamById = function(id) {
			teamService.getTeamById(id).then(function(response) {
				$scope.team = response;
			});
		};

		$scope.getTeamById(id);

		$scope.updateMatch = function() {
	
			teamService.updateMatch(id, $scope.matches).then(function(response) {
				console.log(response);
			});
		}






	
}