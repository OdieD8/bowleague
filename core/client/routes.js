var app = angular.module('app');

app.config(['$stateProvider', '$urlRouterProvider', routing]);

function routing($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .otherwise('/home');


    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                main: {
                    templateUrl: './features/home/home.template.html',
                    controller: 'homeController'
                }
            }
        });
}