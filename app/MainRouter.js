/**
 * Created by endiny on 20/04/16.
 */
import mainPageController from './views/mainPage/mainPage.controller.js';
import loginController from './views/login/login.controller.js';
import signUpController from './views/signup/signup.controller';
import cartController from './views/cart/cart.controller';
import orderController from './views/orders/orders.controller';
import adminController from './views/admin/admin.controller'

export default function mainRouter($stateProvider, $urlRouterProvider) {
    let checkLogin = ($q, authProvider, $state, $timeout) => {
        if (authProvider.isAuthorized()) {
            return $q.when();
        } else {
            $timeout(() => {$state.go('login')})
        }
        return $q.reject();
    };

    let checkNotLogin = ($q, authProvider, $state, $timeout) => {
        if (!authProvider.isAuthorized()) {
            return $q.when();
        } else {
            $timeout(() => {$state.go('mainPage')})
        }
        return $q.reject();
    };

    let checkIfAdmin = ($q, authProvider, $state, $timeout) => {
        if (authProvider.isAuthorized()) {
            if (authProvider.getRole() == 'admin') {
                return $q.when();
            }
        } else {
            $timeout(() => {$state.go('mainPage')})
        }
        return $q.reject();
    };

    $urlRouterProvider.otherwise("main");
    $stateProvider
        .state('mainPage', {
            url: '/main',
            templateUrl: './views/mainPage/mainPage.template.html',
            controller: ($scope, magazineProvider, cartProvider) =>
                new mainPageController($scope, magazineProvider, cartProvider),
            controllerAs: 'mpc',
            resolve: {
                authenticate: checkLogin
            }
        })
        .state('cart', {
            url: '/cart',
            templateUrl: './views/cart/cart.template.html',
            controller: ($scope, cartProvider) => new cartController($scope, cartProvider),
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
                authenticate: checkNotLogin
            }
        })
        .state('signup', {
            url: '/signup',
            templateUrl: './views/signup/signup.template.html',
            controller: (authProvider) => new signUpController(authProvider),
            controllerAs: 'sc',
            resolve: {
                authenticate: checkNotLogin
            }
        })
        .state('orders', {
            url: '/orders',
            templateUrl: './views/orders/orders.template.html',
            controller: ($scope, orderProvider) => new orderController($scope, orderProvider),
            controllerAs: 'oc',
            resolve: {
                authenticate: checkLogin
            }
        })
        .state('admin', {
            url: '/admin',
            templateUrl: './views/admin/admin.template.html',
            controller: () => new adminController(),
            controllerAs: 'ac',
            resolve: {
                authenticate: checkIfAdmin
            }
            
        });
};