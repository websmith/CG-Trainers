var app = angular.module('trainerApp', ['ngRoute', 'trainerAppControllers']);
var trainerAppControllers = angular.module("trainerAppControllers", ['ngAnimate']);

app.config(['$routeProvider', function($routeProvider){

    //Application Routes
    $routeProvider.when('/', {
        templateUrl: 'partials/login.html'
    }).when('/dashboard', {
        templateUrl: 'partials/dashboard.html'
    }).otherwise({
        redirectTo: '/'
    });

}]);
