var app = angular.module('app');


app.service('playerService', ['$q', '$http', playerService]);


function playerService($q, $http) {

	this.addNewPlayer = function (playerByTeam) {
		
		return $http.post('/api/player', playerByTeam)
			.then(function (response) {
				
				console.log(response);
				return "Player Added!";
				
			}, function (error) {
				console.log(error);
				alert("Could not add player");
				return error;
			});
	};
	
	this.getPlayers = function () {
		
		return $http.get('/api/players')
			.then(function (response) {
				
				return response.data;
			});
	};
	
	this.getPlayerById = function (id) {
		
		return $http.get('/api/player/' + id)
			.then(function (response) {
				
				return response.data;
				
			}, function (error) {
				console.log(error);
				return "sorry, there is no player by that id";
			});
	};
	
};