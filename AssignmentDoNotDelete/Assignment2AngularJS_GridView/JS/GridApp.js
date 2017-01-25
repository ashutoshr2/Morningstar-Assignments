///<reference path="JS/angular.min.js">
var myapp = angular.module('mymodule', []);
myapp.controller('controller1', function($scope, $window) {

});

myapp.controller("myController", function($scope, $http, $window) {
    $http({
        method: 'Get',
        url: 'http://rpsbeta.moningstar.com/api/v2/167975617/documents?fields=Id,Title,Authors(Id,Name),keywords(name)'

    }).then(function(response) {
        $scope.griddata = response.data;
    });

});

myapp.directive('gridTableInclude',[function(){
    return{
        templateUrl:"Table.html"
        
    };
}]);


