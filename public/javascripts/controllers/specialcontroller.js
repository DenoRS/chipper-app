/**
 * Created by Dennis on 11/04/2017.
 */

var app = angular.module('ChipperWebApp');

app.controller('specialController', ['$scope', '$http', 'cart',  function($scope, $http, cart) {
    findAllSpecials();

    function findAllSpecials() {
        $http.get('/specials')
            .success(function (data) {
                $scope.specials = data;
                // console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }


    $scope.addSpecialToCart = function (item) {
        cart.cartTotal = cart.cartTotal + 1;
        console.log(cart.cart.length);
        if(cart.cart.length==0){

            cart.cart.push(item);
            cart.cartQty.push(1);

            alert('Item added.');
            return;

        }

        if(cart.cart.length!=0){
            console.log('Cart is not empty');

            var itemfound = cart.cart.some(function (el, i) {
                console.log(el);

                if (el._id == item._id) {

                    console.log(i);

                    cart.cartQty[i] = cart.cartQty[i] + 1;
                    $scope.CartCount = cart.cartTotal;
                    console.log(el[i]);

                    return el;
                }
            });

            if(!itemfound) {
                cart.cart.push(item);
                cart.cartQty.push(1);
                $scope.CartCount = cart.cartTotal;
            }

        }

        console.log(cart.cart);
        console.log(cart.cartQty);
        console.log(cart.cartTotal);



    };

}
]);