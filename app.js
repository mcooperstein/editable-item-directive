var app = angular.module('myApp', [])

app.directive('makeEditable', function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'make-editable.html',
        scope: true,
        link: function ($scope, element, attrs) {
            $scope.editingStatus = false;
            $scope.buttonText = 'Edit';
            $scope.contentStatus = true;
            $scope.toggleEdit = function () {
                if ($scope.editingStatus == false) {
                    $scope.editingStatus = true;
                    $scope.buttonText = 'Save';
                    $scope.contentStatus = false;
                } else {
                    $scope.editingStatus = false;
                    $scope.buttonText = 'Edit';
                    $scope.contentStatus = true;
                }
            };
        }
    };
});
