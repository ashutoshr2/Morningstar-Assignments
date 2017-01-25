///<reference path="JS/angular.min.js">
var myapp = angular.module('mymodule', []);
myapp.controller('controller1', function($scope, $window) {/*
$scope.controllerProperty="This is a controller specififc property";
*/});

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
        window.location.assign("CustomOrderPage.html#ISBN=" + $scope.getbookdetail.ISBN);
    }
});


myapp.directive('bookTableHeaderInclude',[function(){
    function linkFunction($scope,elem,attrs,$window){
    $scope.RedirectToBooksPage = function() {
        window.location.assign("BooksPage.html");
    };
    $scope.RedirectToHomepage = function() {
        window.location.assign("HomePage.html");
    };
    $scope.RedirectToAboutusPage = function() {
        window.location.assign("AboutUs.html");
    };
    $scope.RedirectToContactusPage = function() {
        window.location.assign("ContactUsPage.html");
    };
    }
    return{
        templateUrl:"OnlineBookHeader.html",
        /*restrict:"C"*/ //Restrict as a class
        /*restrict:"E"*///Restrict as a elment
        restrict:'A',
        link:linkFunction
        /*template:'<ul><li><a ng-click="RedirectToHomepage()" class="active" href="">Home</a></li><li><a ng-click="RedirectToBooksPage()">Books</a></li><li><a ng-click="RedirectToContactusPage()">Contact Us</a></li><li><a ng-click="RedirectToAboutusPage()">About Us</a></li></ul>'*/
    };
}]);
/*
myapp.directive('linkAndScope',[function(){
    function linkFunction1($scope,elem,attrs,$window){
            $scope.name="Hello World";
            $scope.changeName=function(newName){
                $scope.name=$scope.controllerProperty;
            }
    
    }
    return{
        templateUrl:"OnlineBookHeader.html",
*/        /*restrict:"C"*/ //Restrict as a class
        /*restrict:"E"*///Restrict as a elment
/*        restrict:'A',
        link:linkFunction1,
        template:'<span ng-click="changeName()">Current Text:{{name}}</span>'
*/        /*template:'<ul><li><a ng-click="RedirectToHomepage()" class="active" href="">Home</a></li><li><a ng-click="RedirectToBooksPage()">Books</a></li><li><a ng-click="RedirectToContactusPage()">Contact Us</a></li><li><a ng-click="RedirectToAboutusPage()">About Us</a></li></ul>'*/
/*    };
}]);
*/


myapp.directive('bookTableInclude',[function(){
    return{
        templateUrl:"BooksPagetable.html"
        /*template:'<ul><li><a ng-click="RedirectToHomepage()" class="active" href="">Home</a></li><li><a ng-click="RedirectToBooksPage()">Books</a></li><li><a ng-click="RedirectToContactusPage()">Contact Us</a></li><li><a ng-click="RedirectToAboutusPage()">About Us</a></li></ul>'*/
    };
}]);

myapp.directive('particularBookOrder',[function(){
    return{
        templateUrl:"ParticularOrder.html"
        /*template:'<ul><li><a ng-click="RedirectToHomepage()" class="active" href="">Home</a></li><li><a ng-click="RedirectToBooksPage()">Books</a></li><li><a ng-click="RedirectToContactusPage()">Contact Us</a></li><li><a ng-click="RedirectToAboutusPage()">About Us</a></li></ul>'*/
    };
}]);


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