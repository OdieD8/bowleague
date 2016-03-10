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
	
	this.updateGames = function(id, games) {
		
		return $http.put('/api/player/' + id, games)
			.then(function(response) {
				
				return response.data;
				console.log(response.data);
				
			}, function(error) {
				console.log(error);
				return error;
			});
	};
	
	this.updateAverage = function(id, average) {
		
		return $http.put('/api/players/' + id, average)
			.then(function(response) {
				
				return response.data;
				console.log(response.data);
				
			}, function(error) {
				console.log(error);
				return error;
			});
	};
	
	this.updateHighGame = function(id, highGame) {
	
		return $http.put('/api/playerHighGame/' + id, highGame)
			.then(function(response) {
			
			return response.data;
		}, function(error) {
			return error;
		});
	};
	
	this.updateHighSeries = function(id, highSeries) {
	
		return $http.put('/api/playerHighSeries/' + id, highSeries)
			.then(function(response) {
		
			return response.data;
		}, function(error) {
		
			return error;
		});
	};
	
	this.removePlayer = function(id) {
		
		return $http.delete('/api/player/' + id)
			.then(function(response) {
				
				console.log(response);
				return "Player Removed";
				
			}, function(error) {
				console.log(error);
				return error;
			});
	};
	
	this.getPlayersByTeamId = function(id) {
		
		return $http.get('/api/players/' + id)
			.then(function(response) {
				
				return response.data;
				console.log(response.data);
				
			}, function(error) {
				console.log(error);
				return error;
			});
	};
	
	this.removePlayersByTeamId = function(id) {
		
		return $http.delete('/api/players/' + id)
			.then(function(response) {
				
				console.log(response);
			}, function(error) {
				console.log(error);
				return error;
			});
	};
	
};