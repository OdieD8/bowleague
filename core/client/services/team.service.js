var app = angular.module('app');

app.service('teamService', ['$q', '$http', teamService]);

function teamService($q, $http) {

    this.getTeams = function () {

        return $http.get('/api/teams')
            .then(function(response) {
    
                return response.data;
            });
    };

    this.getTeamById = function(id) {

        return $http.get('/api/team/' + id)
            .then(function(response) {

                return response.data;

            }, function(error) {

                console.log(error);
                return "sorry, there is no team by that id";
            });
    };

    this.postNewTeam = function(newTeam) {

        return $http.post('/api/team', newTeam)
            .then(function(response) {

                return "Team Added!";

            }, function(error) {
                console.log(error);
                alert("Could not add team. Make sure you have at least five players");
                return error;
            });
    };
    
    this.updateMatch = function(id, match) {

        return $http.put('/api/team/' + id, match)
            .then(function(response) {
                
                return response.data;
                
            }, function(error) {
                console.log(error);
                return error;
            });
    };
    
    
    // this.updatePlayer = function(id, player) {

    //     return $http.put('/api/teamPlayer/' + id, player)
    //         .then(function(response) {
    //             return response.data;
    //             console.log(response.data);
    //         }, function(error) {
    //             console.log(error);
    //             return error;
    //         });
    // };
    
    this.removeTeam = function(id) {
        
        return $http.delete('/api/team/' + id)
            .then(function(response) {
                return "Team Removed!";
            }, function(error) {
                console.log(error);
                return error;
            });  
    };
};