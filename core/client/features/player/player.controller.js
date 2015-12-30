var app = angular.module('app');

app.controller('playerController', ['$scope', '$state', '$stateParams', 'playerService', playerController]);

function playerController($scope, $state, $stateParams, playerService) {

	var id = $stateParams.id;

	$scope.getPlayerById = function (id) {
		playerService.getPlayerById(id).then(function (data) {

			var counter = 0;
			
			//Game Ones
			var gamesOneArr = data.games.gm1.map(function (game) {
				return game.gm1;
			});
			var totalGm1 = 0;
			gamesOneArr.forEach(function (e) {
				totalGm1 += e;
				counter++;
			});
			data.totalGm1 = totalGm1;
			
			//Game Twos
			var gamesTwoArr = data.games.gm2.map(function (game) {
				return game.gm2;
			});
			var totalGm2 = 0;
			gamesTwoArr.forEach(function (e) {
				totalGm2 += e;
				counter++;
			});
			data.totalGm2 = totalGm2;
			
			//Game Threes
			var gamesThreeArr = data.games.gm3.map(function (game) {
				return game.gm3;
			});
			var totalGm3 = 0;
			gamesThreeArr.forEach(function (e) {
				totalGm3 += e;
				counter++;
			});
			data.totalGm3 = totalGm3;
			
			//Average
			var playerAverage = (data.totalGm1 + data.totalGm2 + data.totalGm3) / counter;
			data.average = playerAverage;
			
			//Total Pins
			var totalPins = data.totalGm1 + data.totalGm2 + data.totalGm3;
			data.totaPins = totalPins;

			data.gamesPlayed = counter;

			$scope.player = data;

		});
	};

	$scope.getPlayerById(id);

	$scope.updateGames = function() {
		
		console.log($scope.games);
		
		var series = $scope.games.gm1 + $scope.games.gm2 + $scope.games.gm3;
		$scope.games.series = series;

		if ($scope.games === undefined || $scope.games.gm1 === undefined || $scope.games.gm2 === undefined || $scope.games.gm3 === undefined) {
			alert("Please enter required player stats");
		}
		else {
			playerService.updateGames(id, $scope.games).then(function (data) {
				
				alert("Games Added");
				console.log(data);
				$state.go("home");
			});
		}
	};
	
	//Need function to remove player from team - removePlayer()
	
};