var app = angular.module('app');


app.service('playerService', ['$q', '$http', playerService]);


function playerService($q, $http) {

	this.addNewPlayer = function (newPlayer) {
		
		return $http.post('/api/player', newPlayer)
			.then(function (response) {
				
				console.log(response);
				return "Player Added!";
				
			}, function (error) {
				console.log(error);
				alert("Could not add player");
				return error;
			});
	};
	
	
	
};