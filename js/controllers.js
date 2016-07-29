trainerAppControllers.controller('loginController', ['$scope', function($scope) {
    $scope.title = 'Trainer Login';
}]).controller('dashController', ['$scope', '$rootScope', function($scope, rootScope) {
    $scope.title = 'Trainer Dashboard';
    angular.element(document).ready(function() {
        site.dashboard.initSidebar();
    });


}]).controller('incomeController', ['$scope', function($scope) {
    $scope.title = 'Trainer Income';
}]).controller('reportsController', ['$scope', function($scope) {
    $scope.title = 'Trainer Reports';
}]).controller('scoreboardController', ['$scope', function($scope) {
    $scope.title = 'Trainer Scoreboard';
}]).controller('awardsController', ['$scope', function($scope) {
    $scope.title = 'Trainer Awards';
}]).controller('accountController', ['$scope', function($scope) {
    $scope.title = 'Trainer Account';
}]);
