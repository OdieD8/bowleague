var app = angular.module('app');


app.controller('homeController', ['$scope', 'teamService', homeController]);


function homeController($scope, teamService) {

    $scope.getTeams = function () {
        
        teamService.getTeams()
            .then(function (data) {
                
                for (var i = 0; i < data.length; i++) {
                    
                    //Points Won
                    var ptsWonArr = data[i].matches.map(function(match) {
                        return match.ptsWon;
                    });    
                    var totalPtsWon = 0;
                    ptsWonArr.forEach(function(e) {
                        totalPtsWon += e;
                    });
                    data[i].totalPtsWon = totalPtsWon;
                    
                    //Points Lost
                    var ptsLostArr = data[i].matches.map(function(match) {
                        return match.ptsLost;
                    });
                    var totalPtsLost = 0;
                    ptsLostArr.forEach(function(e) {
                        totalPtsLost += e;
                    });
                    data[i].totalPtsLost = totalPtsLost;
                    
                    //Total Pins
                    var totalPinsArr = data[i].matches.map(function(match) {
                        return match.totalPins;
                    });
                    var totalPins = 0;
                    totalPinsArr.forEach(function(e) {
                        totalPins += e;
                    });
                    data[i].totalPins = totalPins;
                }
                
                console.log(data);                
                $scope.teams = data;
            });
    };
    
    $scope.getTeams();

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
                players: $scope.players,
                matches: $scope.matches
            };
            teamService.postNewTeam(newTeam)
                .then(function (data) {

                    $scope.flash = data;
                });
            $scope.name = "";
            $scope.players = [];
            $scope.matches = [];
        }

    };
}