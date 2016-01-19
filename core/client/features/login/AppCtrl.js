angular.module('app')
.controller('AppCtrl', function ($scope, $state, userService, AUTH_EVENTS) {
    $scope.$on(AUTH_EVENTS.notAuthenticated, function (event) {
      userService.logout();
      $state.go('login');
     	alert("Please login again ");
    });
  });
