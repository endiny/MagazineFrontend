/**
 * Created by endiny on 20/04/16.
 */
import mainPageController from './views/mainPage/mainPage.controller.js';
import loginController from './views/login/login.controller.js';
import signUpController from './views/signup/signup.controller';
import cartController from './views/cart/cart.controller';

export default function mainRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('layout', {
            url: '/',
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('mainPage', {
            url: '/main',
            templateUrl: './views/mainPage/mainPage.template.html',
            controller: ($scope, magazineProvider, cartProvider) =>
                new mainPageController($scope, magazineProvider, cartProvider),
            controllerAs: 'mpc'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: './views/cart/cart.template.html',
            controller: ($scope, cartProvider) => new cartController($scope, cartProvider),
            controllerAs: 'cc'
        })
        .state('login', {
            url: '/login',
            templateUrl: './views/login/login.template.html',
            controller: (authProvider, $rootScope, $state) =>
                new loginController(authProvider, $rootScope, $state),
            controllerAs: 'lc'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: './views/signup/signup.template.html',
            controller: (authProvider) => new signUpController(authProvider),
            controllerAs: "sc"
        });
};