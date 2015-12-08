var app = angular.module('app');


app.service('teamService', ['$q', '$http', teamService]);


function teamService($q, $http) {

    this.getTeams = function () {

        return $http.get('/api/team')
            .then(function (response) {
                return response.data;
            });
    };


    this.getTeamById = function (id) {

        return $http.get('/api/team/' + id)
            .then(function (response) {

                console.log(response);
                return response.data;
            }, function (error) {

                console.log(error);
                return "sorry, there is nobody by that id";
            });
    };


    this.postNewTeam = function (Team) {

        return $http.post('/api/team', Team)
            .then(function (response) {

                console.log(response);
                return "Team Added!";
            }, function (error) {
                console.log(error);
                return error;
            });
    };

}