var app = angular.module('app');

app.controller('playerController', ['$scope', '$state', '$stateParams', 'playerService', playerController]);

function playerController($scope, $state, $stateParams, playerService) {

	var id = $stateParams.id;

	$scope.getPlayerById = function (id) {
		playerService.getPlayerById(id).then(function (data) {

			var counter = 0;
			
			//Game Ones
			var gamesOneArr = data.games.map(function (game) {
				return game.gm1;
			});
			var totalGm1 = 0;
			gamesOneArr.forEach(function (e) {
				totalGm1 += e;
				counter++;
			});
			data.totalGm1 = totalGm1;
			
			//Game Twos
			var gamesTwoArr = data.games.map(function (game) {
				return game.gm2;
			});
			var totalGm2 = 0;
			gamesTwoArr.forEach(function (e) {
				totalGm2 += e;
				counter++;
			});
			data.totalGm2 = totalGm2;
			
			//Game Threes
			var gamesThreeArr = data.games.map(function (game) {
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
			// data.average = Math.round(playerAverage * 1) / 1;
			
			if(playerAverage === NaN) {
				data.average = 0;
			}
			 
			if(playerAverage) {
				data.average = Math.round(playerAverage * 1) / 1;
			}
			
			//Total Pins
			var totalPins = data.totalGm1 + data.totalGm2 + data.totalGm3;
			data.totalPins = totalPins;

			data.gamesPlayed = counter;

			$scope.player = data;
			
			playerService.updateAverage(id, data);

		});
	};

	$scope.getPlayerById(id);

	$scope.updateGames = function() {

		if ($scope.games === undefined || $scope.games.gm1 === undefined || $scope.games.gm2 === undefined || $scope.games.gm3 === undefined) {
			alert("Please enter required player stats");
		}
		else {
			
			var series = parseInt($scope.games.gm1) + parseInt($scope.games.gm2) + parseInt($scope.games.gm3);
			$scope.games.series = series;
			playerService.updateGames(id, $scope.games).then(function (data) {
				
				alert("Games Added");
				console.log(data);
				$state.go("players");
				
			});
		}
	};
	
	$scope.removePlayer = function() {
		
		var result = confirm("Are you sure you want ot remove this player?");
		if (result) {
			playerService.removePlayer(id).then(function (data) {
				console.log(data);
				$state.go("home");
				
			});
		}
	};
	
};