var app = angular.module('myModule',[]);

app.controller('myController', ['$scope', function($scope){
	$scope.testMessage = "Just a test, y'all";
}]);