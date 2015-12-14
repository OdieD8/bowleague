var app = angular.module('app');


app.controller('teamController', ['$scope', '$state', '$stateParams', 'teamService', teamController]);

function teamController($scope, $state, $stateParams, teamService) {

        var id = $stateParams.id;

        $scope.getTeamById = function (id) {
        teamService.getTeamById(id).then(function (data) {
                        
                //Points Won
                var ptsWonArr = data.matches.map(function (match) {
                        return match.ptsWon;
                });
                var totalPtsWon = 0;
                ptsWonArr.forEach(function (e) {
                        totalPtsWon += e;
                });
                data.totalPtsWon = totalPtsWon;
                        
                //Points Lost
                var ptsLostArr = data.matches.map(function (match) {
                        return match.ptsLost;
                });
                var totalPtsLost = 0;
                ptsLostArr.forEach(function (e) {
                        totalPtsLost += e;
                });
                data.totalPtsLost = totalPtsLost;
                        
                //Total Pins
                var totalPinsArr = data.matches.map(function (match) {
                        return match.totalPins;
                });
                var totalPins = 0;
                totalPinsArr.forEach(function (e) {
                        totalPins += e;
                });
                data.totalPins = totalPins;

                $scope.team = data;
        });
        };

        $scope.getTeamById(id);

        $scope.updateMatch = function () {

                teamService.updateMatch(id, $scope.matches).then(function (data) {
                        alert("Match Added");
                        console.log(data);
                        $state.go("home");
                });
        };

        $scope.removeTeam = function () {
                var result = confirm("Are you sure you want to remove this team?");
                        if (result) {
                                teamService.removeTeam(id).then(function (data) {
                                console.log(data);
                                $state.go("home");
                                
                        });
                }     
        };




};