trainerAppControllers.controller('trainerAppController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('data/trainer.min.json').success(function(data) {
        $scope.trainer = data;
        $scope.whichItem = $routeParams.trainerId;

        if ($routeParams.trainerId > 0) {
            $scope.prevItem = Number($routeParams.trainerId)-1;
        } else {
            $scope.prevItem = $scope.projects.length-1;
        }

        if ($routeParams.trainerId < $scope.projects.length-1) {
            $scope.nextItem = Number($routeParams.trainerId)+1;
        } else {
            $scope.nextItem = 0;
        }
    });
}]);
