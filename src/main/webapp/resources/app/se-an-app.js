/**
 * Created by Matthew on 11/24/2016.
 */

var getAnalysisPattern = 'https://sestation.herokuapp.com/api/analysis/get/';
var seAnApp = angular.module('seAnApp', ['chart.js']);
seAnApp.config(function() {
});

seAnApp.controller('mainCtrl', ['$scope', '$http',  '$location', function($scope, $http, $location){
    $scope.directoryList = [];
    $scope.directorySizeList = [];
    $scope.imageList = [];
    $scope.sitemapList = [];
    $scope.analysis = {};
    $scope.init = function(){
        $http.get(getAnalysisPattern + $location.absUrl().split('/')[4] + '/')
            .success(function(data) {
                $scope.analysis = data;
                $scope.imageList = data.imageList.split('\n');
                $scope.directoryList = data.directoryList.split('\n');

                $scope.sitemapList = data.sitemapList.split('\n');
                $scope.directorySizeList = data.directorySizeList.split('\n');
                console.log($scope.directorySizeList[0]);
            });

    };

}]);
