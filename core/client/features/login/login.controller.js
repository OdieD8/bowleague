angular.module('app')

  .controller('loginController', function ($scope, userService, $state) {
    $scope.user = {
      name: '',
      password: ''
    };

    $scope.login = function () {
      userService.login($scope.user).then(function (msg) {
        $state.go('home');
      }, function (errMsg) {
        alert("Login failed! " + errMsg);
        });
    };
  })

/*   .controller('RegisterCtrl', function ($scope, userService, $state) {
    $scope.user = {
      name: '',
      password: ''
    };

    $scope.signup = function () {
      userService.register($scope.user).then(function (msg) {
        $state.go('outside.login');
        alert("User Registered");
        });
      }, function (errMsg) {
        alert("Registration failed! " + errMsg);
        };
  }) */

