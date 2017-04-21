var app = angular.module('ChipperWebApp');


app.controller('itemController', ['$scope', '$http', 'cart', function( $scope, $http, cart) {
    findAll();
    findAllChips();
    findAllSausages();
    findAllBurgers();
    findAllChicken();
    findAllFish();


    $scope.addToCart = function (item) {
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


    function findAll() {
        $http.get('/items')
            .success(function (data) {
                $scope.items = data;
                // console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }

    function findAllChips() {
        $http.get('/items')
            .success(function (data) {
                chipsArray =[];
                data.forEach( function (chip) {
                    if (chip.category_name == "Chips") {
                        chipsArray.push(chip)
                    }
                });
                $scope.chips = chipsArray;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }


    function findAllSausages() {
        $http.get('/items')
            .success(function (data) {
                sausagesArray =[];
                data.forEach( function (sausage) {
                    if (sausage.category_name == "Sausages") {
                        sausagesArray.push(sausage)
                    }
                });
                $scope.sausages = sausagesArray;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }

    function findAllBurgers() {
        $http.get('/items')
            .success(function (data) {
                burgersArray =[];
                data.forEach( function (burger) {
                    if (burger.category_name == "Burgers") {
                        burgersArray.push(burger)
                    }
                });
                $scope.burgers = burgersArray;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }

    function findAllChicken() {
        $http.get('/items')
            .success(function (data) {
                chickenArray =[];
                data.forEach( function (chicken) {
                    if (chicken.category_name == "Chicken") {
                        chickenArray.push(chicken)
                    }
                });
                $scope.chickens = chickenArray;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }

    function findAllFish() {
        $http.get('/items')
            .success(function (data) {
                fishArray =[];
                data.forEach( function (fish) {
                    if (fish.category_name == "Fish") {
                        fishArray.push(fish)
                    }
                });
                $scope.fishs = fishArray;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }

}

]);
