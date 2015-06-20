var app = angular.module('app', []);

app.controller('firstCtrl', function($scope, myFactory) {
  console.log('firstCtrl');
  $scope.myFactory = myFactory;
  $scope.hello = 'hello world';
});

app.controller('secondCtrl', function($scope, myFactory) {
  console.log('secondCtrl');
  $scope.myFactory = myFactory;
  $scope.hello = 'hello world';
});

app.factory('myFactory', function() {
  return {
    hello: 'hello world'
  };
});
