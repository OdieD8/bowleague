var app = angular.module('app');

app.controller('teamsController', ['$scope', '$state', '$stateParams', 'teamService', 'playerService', 'userService', teamsController]);

function teamsController($scope, $state, $stateParams, teamService, playerService, userService) {

	$scope.getTeams = function () {

        teamService.getTeams()
            .then(function (data) {
				$scope.teams = data;

		});

	};

	$scope.getTeams();

	// $scope.myPlayers = [];

	// $scope.playerAdded = false;

	// $scope.addNewPlayer = function() {

	// 	if($scope.newPlayer === "") {
	// 		alert("Please enter a valid player name");
	// 	}
	// 	else {
	// 		$scope.myPlayers.push($scope.newPlayer);
	// 		$scope.newPlayer = "";
	// 		$scope.playerAdded = true;
	// 	}
	// };

	// $scope.delete = function(array, index) {

	// 	if ($scope.myPlayers.length < 2) {
	// 		$scope.playerAdded = false;
	// 	}
	// 	array.splice(index, 1);
	// };

	$scope.playerAdded = true;

	$scope.postNewTeam = function() {
		// $scope.newTeam.players = $scope.myPlayers;
		teamService.postNewTeam($scope.newTeam).then(function (data) {

			$state.go("home");
			alert($scope.newTeam.name + " added");

		});
	}

	$scope.logout = function () {
      userService.logout();
      $state.go('login');
    };
};
