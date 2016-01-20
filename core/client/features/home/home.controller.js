var app = angular.module('app');


app.controller('homeController', ['$scope', '$state', '$filter', '$http', 'teamService', 'userService', 'uiGridConstants', 'database', homeController]);

function homeController($scope, $state, $filter, $http, teamService, userService, uiGridConstants, database) {

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
                $scope.teams = data;
            });
    };

    $scope.gridOptions = {
        data: "teams",
        enableFiltering: true,
        enableSorting: true,
        columnDefs: [
            {
                name: 'Name',
                field: 'name',
                cellTemplate: '<div class="ui-grid-cell-contents"><a href="#/team/{{row.entity._id}}">{{ COL_FIELD }}</a></div>',
                enableFiltering: true,
                enableSorting: false
            },
            {
                name: 'Points Won',
                field: 'totalPtsWon',
                sort: {
                    direction: uiGridConstants.DESC,
                    priority: 0
                },
                enableFiltering: false
            },
            { name: 'Points Lost', field: 'totalPtsLost', enableFiltering: false},
            { name: 'Total Pins', field: 'totalPins', enableFiltering: false}
        ]
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

	$scope.destroySession = function () {
      userService.logout();
    };

    $scope.getInfo = function () {
      $http.get(database + '/api/memberinfo').then(function (result) {
        $scope.memberinfo = result.data.msg;
      });
    };

    $scope.logout = function () {
      userService.logout();
      $state.go('login');
    };

};
