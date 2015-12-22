var app = angular.module('app');

app.controller('playersController', ['$scope', '$state', '$stateParams', 'teamService', playersController]);

function playersController($scope, $state, $stateParams, teamService) {
	
	var id = $stateParams.id;
	
	$scope.getTeamById = function (id) {
		teamService.getTeamById(id).then(function (data) {
			
			$scope.team = data;
		});
	}
	
	$scope.getTeamById(id);
	
	$scope.addNewPlayer = function () {
		
		if($scope.newPlayer === "") {
			alert("Please enter a valid player name");
		}
		else {
			playerService.addNewPlayer($scope.newPlayer).then(function (data) {
				$scope.newPlayer.name = $scope.newPlayer;
				console.log(data);
				$state.go("team({id: team._id})");
				alert($scope.newPlayer.name + " added");
			})
			$scope.newPlayer = "";
		}
	};
	
	
	
};