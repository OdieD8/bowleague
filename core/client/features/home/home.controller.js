var app = angular.module('app');


app.controller('homeController', ['$scope', 'teamService', homeController]);


function homeController($scope, teamService) {

    $scope.test = "Is this really working?";
    
    $scope.getTeams = function () {

        teamService.getTeams()
            .then(function (data) {

                $scope.teams = data;
            });
    };


    $scope.getTeamById = function (id) {

        teamService.getTeamById(id)
            .then(function (data) {

                $scope.team = data;
            });
    };


    $scope.postNewTeam = function () {

        if (!$scope.name) {
            $scope.flash = "Please enter a new team";
        }

        else {
            var newTeam = {
                name: $scope.name,
                age: $scope.age
            };
            teamService.postNewTeam(newTeam)
                .then(function (data) {

                    $scope.flash = data;
                });
            $scope.name = "";
            $scope.age = "";
        }

    };
}