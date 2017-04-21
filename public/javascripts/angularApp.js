var app = angular.module('ChipperWebApp', ['ngRoute']);

app.factory('cart', function() {
    var cart = [];
    var cartQty = [];
    var cartTotal = 0;

    return {
        cart:cart,
        cartQty:cartQty,
        cartTotal: cartTotal
    }
});

app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.ejs',
                controller  : 'mainController'
            })

            // route for the menu page
            .when('/menu', {
                templateUrl : 'pages/menu.ejs',
                controller  : 'itemController'
            })

            // route for the specials page
            .when('/special', {
                templateUrl : 'pages/specialmenu.ejs',
                controller  : 'specialController'
            })

            // route for the cart page
            .when('/cart', {
                templateUrl : 'pages/cart.ejs',
                controller  : 'cartController',
                controller  : 'specialController'
            })

    });


  
  


