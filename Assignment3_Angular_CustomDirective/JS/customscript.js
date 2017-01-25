var app = angular.module('app', []);
app.controller("myController", function ($scope, $http, $window) {
    $http({
        method: 'Get',
        url: 'https://api.myjson.com/bins/q2cvp'
    }).then(function (response) {
        $scope.requestData = response.data;
                for (var i=0, j=$scope.requestData.length; i<j; i++) {
    $scope.requestData[i].Authors = $scope.requestData[i].Authors.map(function(item) {return item.Name;}).join(',');
    $scope.requestData[i].Keywords = $scope.requestData[i].Keywords.map(function(item) {return item.Name;}).join(',');
}

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
        template: 
        `<table border=1>
   <tr>
      <th ng-repeat="onlyselectedcol in selectedCols">{{onlyselectedcol}}</th>
   </tr>
   <tr ng-repeat="alldata in data">
      <td ng-repeat="onlyselectedcol in selectedCols">{{alldata[onlyselectedcol]}}</td>
   </tr>
</table>`
,

        restrict: 'E',
        scope: {
            data: '='
        },
        link: function (scope, elem, attrs) {
            scope.selectedCols = parseSelectedCols(attrs.headers);
        }
    };
});