var app = angular.module('myApp', []);

app.controller('BrowseDataController', function($scope, $http) {
    $scope.records = [];
    $scope.currentIndex = 0;

    $scope.retrieveData = function() {
        $http.get('http://localhost:3000/get-records')
            .then(function(response) {
                var data = response.data;
                if(data.msg === "SUCCESS"){
                    $scope.records = data.reviews;
                    $scope.currentRecord = $scope.records[0];
                } else {
                    console.error(data.msg);
                }
            }, function(error) {
                console.error('Error fetching data:', error);
            });
    };

    $scope.retrieveData();

    $scope.nextRecord = function() {
        if ($scope.currentIndex < $scope.records.length - 1) {
            $scope.currentIndex++;
            $scope.currentRecord = $scope.records[$scope.currentIndex];
        }
    };

    $scope.previousRecord = function() {
        if ($scope.currentIndex > 0) {
            $scope.currentIndex--;
            $scope.currentRecord = $scope.records[$scope.currentIndex];
        }
    };

    $scope.deleteRecord = function(deleteID) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/delete-record',
            data: { id: deleteID },
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
        })
        .then(function(response) {
            console.log('Record deleted:', response);
            $scope.retrieveData();
        }, function(error) {
            console.error('Error deleting record:', error);
        });
    };
});
