/**
 * Created by endiny on 20/04/16.
 */
import mainPageController from './views/mainPage/mainPage.controller.js';
import loginController from './views/login/login.controller.js';
import signUpController from './views/signup/signup.controller';
import cartController from './views/cart/cart.controller';
import orderController from './views/orders/orders.controller';
import adminController from './views/admin/admin.controller';
import profileController from './views/profile/profile.controller';

export default function mainRouter($stateProvider, $urlRouterProvider) {
    let checkLogin = (authProvider, $state) => {
        authProvider.isAuthorized()
            .then(() => {
            })
            .catch(() => {
                authProvider.setUser(null);
                $state.go('login');
            })
    };

    let checkIfAdmin = (authProvider, $state) => {
        authProvider.isAuthorized()
            .then(() => {
                if (!authProvider.isUserInRole('admin')) {
                    $state.go('mainPage');
                }
            })
            .catch(() => {
                authProvider.setUser(null);
                $state.go('login');
            })
    };

    $urlRouterProvider.otherwise("main");
    $stateProvider
        .state('mainPage', {
            url: '/main',
            templateUrl: './views/mainPage/mainPage.template.html',
            controller: ($scope, magazineProvider, cartProvider, l10nProvider) =>
                new mainPageController($scope, magazineProvider, cartProvider, l10nProvider),
            controllerAs: 'mpc',
            resolve: {
                authenticate: checkLogin
            }
        })
        .state('cart', {
            url: '/cart',
            templateUrl: './views/cart/cart.template.html',
            controller: ($scope, cartProvider, l10nProvider) =>
                new cartController($scope, cartProvider, l10nProvider),
            controllerAs: 'cc',
            resolve: {
                authenticate: checkLogin
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: './views/login/login.template.html',
            controller: (authProvider, $rootScope, $state) =>
                new loginController(authProvider, $rootScope, $state),
            controllerAs: 'lc',
            resolve: {
                authenticate: checkLogin
            }
        })
        .state('admin', {
            url: '/admin',
            templateUrl: './views/admin/admin.template.html',
            controller: ($scope, magazineProvider, l10nProvider) =>
                new adminController($scope, magazineProvider, l10nProvider),
            controllerAs: 'adc',
            resolve: {
                authenticate: checkIfAdmin
            }
        })
        .state('signup', {
            url: '/signup',
            templateUrl: './views/signup/signup.template.html',
            controller: (authProvider) => new signUpController(authProvider),
            controllerAs: 'sc',
        })
        .state('orders', {
            url: '/orders',
            templateUrl: './views/orders/orders.template.html',
            controller: ($scope, orderProvider, l10nProvider) =>
                new orderController($scope, orderProvider, l10nProvider),
            controllerAs: 'oc',
            resolve: {
                authenticate: checkLogin
            }
        })
        .state('profile', {
            url: '/profile',
            templateUrl: './views/profile/profile.template.html',
            controller: ($scope, authProvider, l10nProvider) =>
                new profileController($scope, authProvider, l10nProvider),
            controllerAs: 'pc',
            resolve: {
                authenthicate: checkLogin
            }
        });
}