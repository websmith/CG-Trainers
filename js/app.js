var app = angular.module('trainerApp', ['ngRoute', 'trainerAppControllers']);
var trainerAppControllers = angular.module("trainerAppControllers", ['ngAnimate']);

//Application Routes
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    }).when('/logout', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    }).when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'dashController'
    }).when('/income', {
        templateUrl: 'partials/income.html',
        controller: 'incomeController'
    }).when('/reports', {
        templateUrl: 'partials/reports.html',
        controller: 'reportsController'
    }).when('/scoreboard', {
        templateUrl: 'partials/scoreboard.html',
        controller: 'scoreboardController'
    }).when('/awards', {
        templateUrl: 'partials/awards.html',
        controller: 'awardsController'
    }).when('/account', {
        templateUrl: 'partials/account.html',
        controller: 'accountController'
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

app.directive("sidebar", function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/sidebar.html'
    };
});
