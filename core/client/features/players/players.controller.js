var app = angular.module('app');

app.controller('playersController', ['$scope', '$state', '$filter', '$stateParams', 'teamService', 'playerService', 'userService', 'uiGridConstants', playersController]);

function playersController($scope, $state, $filter, $stateParams, teamService, playerService, userService, uiGridConstants) {

	var id = $stateParams.id;

	$scope.addNewPlayer = function () {

		$scope.playerByTeam = {
			name: $scope.newPlayer.name,
			team: id
		};

		// $scope.player = {
		// 	players: $scope.newPlayer.name
		// }

		$scope.newPlayer.name = "";

		playerService.addNewPlayer($scope.playerByTeam).then(function (data) {

			var result = confirm("Add Another Player?");
			if (result) {
				$state.go("addPlayer", { id: id });
			}
			else {
				$state.go("home");
				alert($scope.playerByTeam.name + " added");
			}
		});

		// teamService.updatePlayer(id, $scope.player).then(function (data) {

		// 	console.log(data);
		// });
	};

	$scope.getPlayers = function () {

		playerService.getPlayers()
			.then(function (data) {

				$scope.players = data;

		});
	};

	 $scope.gridOptions = {
        data: "players",
        enableFiltering: true,
        enableSorting: true,
        columnDefs: [
            {
                name: 'Name',
                field: 'name',
                cellTemplate: '<div class="ui-grid-cell-contents"><a href="#/player/{{row.entity._id}}">{{ COL_FIELD }}</a></div>',
                enableFiltering: true,
            },
            {
				name: 'Average',
				field: 'average',
				sort: {
                	direction: uiGridConstants.DESC,
                    priority: 0
                },
				enableFiltering: false
			},
			{
				name: 'High Game',
				field: 'highGame',
			    enableFiltering: false
			},
			{
                name: 'Team',
                field: 'team.name',
                enableFiltering: true
            }
            // { name: 'Total Pins', field: 'totalPins', enableFiltering: false}
        ]
    };

	$scope.getPlayers();

	$scope.logout = function () {
      userService.logout();
      $state.go('login');
    };

};
