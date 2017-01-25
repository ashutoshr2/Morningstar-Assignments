var app = angular.module('app', []);
app.controller("myController", function ($scope, $http, $window) {
    $http({
        method: 'Get',
        url: 'http://rpsbeta.morningstar.com/api/v2/167975617/documents?fields=Id,Title,Authors(Id,Name),keywords(name)&format=json'
      /*url:'http://myjson.com/15khh1'*/
    }).then(function (response) {
        $scope.requestData = response.data;

    });
});
app.directive('gridView', function () {
    function parseSelectedCols(str) {
        var i;
        var paresedCols = str.split(",");
        for (i = 0; i < paresedCols.length; i++) {
            paresedCols[i] = paresedCols[i];
        }
        return paresedCols;
    }
    return {
        template: '<table border=1>'+
   '<tr>'+
      '<th ng-repeat="onlyselectedcol in selectedCols">{{ angular.forEach(alldata[onlyselectedcol], function (value, key) {'+
           '$scope.names.push(value.name);}}}</th>'+

   '</tr>'+
   '<tr ng-repeat="alldata in data">'+
      '<td ng-repeat="onlyselectedcol in selectedCols">{{alldata[onlyselectedcol]}}</td>'+
   '</tr>'+
'</table>'/*+
'{{selectedCols}}'+
'{{data}}*/,
        restrict: 'E',
        scope: {
            data: '='
        },
        link: function (scope, elem, attrs) {
            scope.selectedCols = parseSelectedCols(attrs.headers);
        }
    };
});