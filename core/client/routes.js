var app = angular.module('app');

app.config(['$stateProvider', '$urlRouterProvider', routing]);

function routing($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .otherwise('/home');


    $stateProvider
        .state('home', {
            url: '/home',   
            templateUrl: './features/home/home.template.html',
            controller: 'homeController'
        })
            
        .state('team', {
            url: '/team/:id',
            templateUrl: './features/team/team.template.html',
            controller: 'teamController'
                
        })  
}