var app = angular.module('app');


app.controller('teamController', ['$scope', '$state', '$stateParams', 'teamService', 'playerService', 'userService', teamController]);

function teamController($scope, $state, $stateParams, teamService, playerService, userService) {

        var id = $stateParams.id;

        $scope.getTeamById = function (id) {
                teamService.getTeamById(id).then(function (data) {

                        //Points Won
                        var ptsWonArr = data.matches.map(function (match) {
                                return match.ptsWon;
                        });
                        var totalPtsWon = 0;
                        ptsWonArr.forEach(function(e) {
                                totalPtsWon += e;
                        });
                        data.totalPtsWon = totalPtsWon;

                        //Points Lost
                        var ptsLostArr = data.matches.map(function (match) {
                                return match.ptsLost;
                        });
                        var totalPtsLost = 0;
                        ptsLostArr.forEach(function(e) {
                                totalPtsLost += e;
                        });
                        data.totalPtsLost = totalPtsLost;

                        //Total Pins
                        var totalPinsArr = data.matches.map(function (match) {
                                return match.totalPins;
                        });
                        var totalPins = 0;
                        totalPinsArr.forEach(function(e) {
                                totalPins += e;
                        });
                        data.totalPins = totalPins;

                        $scope.team = data;

                        playerService.getPlayersByTeamId(id).then(function (data) {

                                $scope.team.players = data;
                        });

                });
        };

        $scope.getTeamById(id);

        $scope.updateMatch = function() {

                if ($scope.matches === undefined || $scope.matches.ptsWon === undefined || $scope.matches.ptsLost === undefined || $scope.matches.totalPins === undefined) {
                        alert("Please enter required team stats");
                }
                else {
                        teamService.updateMatch(id, $scope.matches).then(function(data) {

                                alert("Match Added");
                                $state.go("home");
                        });
                }
        };

        $scope.removeTeam = function () {

                var result = confirm("Are you sure you want to remove this team?");
                if (result) {
                        teamService.removeTeam(id).then(function (data) {
                                console.log(data);

                        });
                        playerService.removePlayersByTeamId(id).then(function (data) {

                                $state.go("home");
                        });
                }
        };

	$scope.logout = function () {
      userService.logout();
      $state.go('login');
    };


};
