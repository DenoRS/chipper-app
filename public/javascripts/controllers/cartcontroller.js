/**
 * Created by Dennis on 13/04/2017.
 */

var app = angular.module('ChipperWebApp');

app.controller('cartController', ['$scope', '$http', 'cart',  function($scope, $http, cart) {
    $scope.message = 'Order';

    $scope.cart = cart.cart;

    //$scope.totalPrice = totalPrice();
    //$scope.cartTotal = cart.cartTotal;

    console.log(cart.cart);
    /////////////////////////////////

    //Return cart quantity//
    $scope.qty = function qty(item){
        var cartIndex = cart.cart.indexOf(item);
        return cart.cartQty[cartIndex];
    }

    //Total price of items//
    function totalPrice() {
        var prices = [];

        cart.cart.forEach(function (item) {
            var cartIndex = cart.cart.indexOf(item);
            prices.push(item.price * cart.cartQty[cartIndex]);
        });

        return eval(prices.join('+'));
    }

    $scope.totalPrice = totalPrice();

    //Increase item quantity//
    $scope.addQty = function(item) {
        var cartIndex = cart.cart.indexOf(item);

        cart.cartQty[cartIndex] = cart.cartQty[cartIndex] +1;

        $scope.totalPrice = totalPrice();
        cart.cartTotal = cart.cartTotal +1;

        $scope.cartTotal = cart.cartTotal;

        return cart.cartQty[cartIndex];

    };

    //Decrease item quantity//
    $scope.removeQty = function(item) {
        var cartIndex = cart.cart.indexOf(item);

        if(cart.cartQty[cartIndex] > 0) {
            cart.cartQty[cartIndex] = cart.cartQty[cartIndex] - 1;

            $scope.totalPrice = totalPrice();
            cart.cartTotal = cart.cartTotal - 1;

            $scope.cartTotal = cart.cartTotal;
        }

        return cart.cartQty[cartIndex];
    };

    $scope.cartTotal = cart.cartTotal;

    //Remove an item from the cart//
    $scope.remove = function(item) {
        var cartIndex = cart.cart.indexOf(item);
        if (cartIndex > -1) {
            cart.cart.splice(cartIndex, 1);

            cart.cartTotal = cart.cartTotal-cart.cartQty[cartIndex];
            cart.cartQty.splice(cartIndex, 1);

            $scope.totalPrice = totalPrice();
            $scope.cartTotal = cart.cartTotal;

            console.log(cart.cartTotal);
        }

    };

}]);