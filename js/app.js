var app = angular.module('trainerApp', ['ngRoute', 'trainerAppControllers']);
var trainerAppControllers = angular.module("trainerAppControllers", ['ngAnimate']);

//Application Routes
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'partials/login.html'
    }).when('/logout', {
        templateUrl: 'partials/login.html'
    }).when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'dashController'
    }).when('/income', {
        templateUrl: 'partials/income.html',
        controller: 'dashController'
    }).when('/reports', {
        templateUrl: 'partials/reports.html',
        controller: 'dashController'
    }).when('/scoreboard', {
        templateUrl: 'partials/scoreboard.html',
        controller: 'dashController'
    }).when('/awards', {
        templateUrl: 'partials/awards.html',
        controller: 'dashController'
    }).when('/account', {
        templateUrl: 'partials/account.html',
        controller: 'dashController'
    }).otherwise({
        redirectTo: '/'
    });
}]);

//Custom Directives
app.directive("dashboardHeader", function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/dash-header.html'
    };
});

app.directive('sidebar', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/sidebar.html'
    };
});
