var app = angular.module('ChipperWebApp');


app.controller('mainController', ['$scope', function($scope) {
    // create a message to display in our view
      $scope.cartmes = 'Shopping Cart';
      $scope.regmenu = 'Regular Menu';
      $scope.specmenu = 'Specials';
      $scope.homemes = 'Best place for delicious chipper food.';
     }
  ]);
