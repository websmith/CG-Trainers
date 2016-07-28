var app = angular.module('trainerApp', ['ngRoute', 'trainerAppControllers']);
var trainerAppControllers = angular.module("trainerAppControllers", ['ngAnimate']);

app.config(['$routeProvider', function($routeProvider){

    //Application Routes
    $routeProvider.when('/', {
        templateUrl: 'partials/login.html'
    }).when('/logout', {
        templateUrl: 'partials/login.html'
    }).when('/dashboard', {
        templateUrl: 'partials/dashboard.html'
    }).when('/income', {
        templateUrl: 'partials/income.html'
    }).when('/reports', {
        templateUrl: 'partials/reports.html'
    }).when('/scoreboard', {
        templateUrl: 'partials/scoreboard.html'
    }).when('/awards', {
        templateUrl: 'partials/awards.html'
    }).when('/account', {
        templateUrl: 'partials/account.html'
    }).otherwise({
        redirectTo: '/'
    });

}]);
