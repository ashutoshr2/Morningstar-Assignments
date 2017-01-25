///<reference path="JS/angular.min.js">
var myapp = angular.module('mymodule', []);
myapp.controller('controller1', function($scope, $window) {
    $scope.RedirectToBooksPage = function() {
        $window.location.href = "BooksPage.html";
    };
    $scope.RedirectToHomepage = function() {
        $window.location.href = "HomePage.html";
    };
    $scope.RedirectToAboutusPage = function() {
        $window.location.href = "AboutUs.html";
    };
    $scope.RedirectToContactusPage = function() {
        $window.location.href = "ContactUsPage.html";
    };
});

function init() {
    alert("You are on Books Page");
}
myapp.controller("myController", function($scope, $http, $window) {
    $http({
        method: 'Get',
        url: 'https://api.myjson.com/bins/13aflv'

    }).then(function(response) {
        $scope.books = response.data;

        $scope.sortColumn = 'ISBN';
        $scope.reverseSort = false;
        $scope.sortData = function(column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }
        $scope.getSortClass = function(column){
            if($scope.sortColumn == column){
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            }
        return '';
        }
    });

    $scope.getdetail = function() {
        $scope.getbookdetail = this.book;
        window.location.assign("orderpage.html#ISBN=" + $scope.getbookdetail.ISBN);
    }
});

myapp.controller("myController2", function($scope, $location, $http) {
    var url = window.location.href;
    var res = url.split("=");
    $scope.filter = res[1];
    $scope.weDontLike = function(filter) {
        return filter;
    }

    $http({
        method: 'Get',
        url: 'https://api.myjson.com/bins/13aflv'

    }).then(function(response) {
        $scope.forparticularbooks = response.data;

    });

});