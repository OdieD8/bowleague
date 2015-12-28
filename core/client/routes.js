var app = angular.module('app');

app.config(['$stateProvider', '$urlRouterProvider', routing]);

function routing($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .otherwise('/home');


    $stateProvider
        
        .state('login', {
            url: '/login',
            templateUrl: '/features/login/login.template.html',
            controller: 'loginController'
        })
        
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
            
        .state('teams', {
            url: '/teams',
            templateUrl: './features/teams/teams.template.html',
            controller: 'teamsController'
        })
        
        .state('addTeam', {
            url: '/addTeam',
            templateUrl: './features/teams/addTeam.template.html',
            controller: 'teamsController'
        })
        
        .state('players', {
            url: '/players',
            templateUrl: './features/players/players.template.html',
            controller: 'playersController'
        })
        
        .state('addPlayer', {
            url: '/addPlayer/:id',
            templateUrl: './features/players/addPlayer.template.html',
            controller: 'playersController'
        })      
   
        .state('Player', {
            url: '/Player/:id',
            templateUrl: './features/player/player.template.html',
            controller: 'playerController'
        })  
};