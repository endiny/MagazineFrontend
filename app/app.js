/**
 * Created by endiny on 20/04/16.
 */

import '../bower_components/jshash/build/md5.min'
import angular from 'angular';
import '../bower_components/angular-cookies/angular-cookies'
import '../node_modules/angular-ui-router/release/angular-ui-router'
import mainRouter from './MainRouter';
import './services/factories.module.js';
import './consts/consts.module'
import './components/components.module'
import ApplicationController from './controllers/application'

angular.module('shopMagazine', ['ngCookies', 'ui.router', 'services', 'consts', 'components'])
    .config(($httpProvider) => {
        $httpProvider.defaults.withCredentials = true;
    })
    .config(mainRouter)
    .run((authProvider, magazineProvider, $rootScope) => {
        let gotIt = (response) => {
            $rootScope.magazines = response.data.magazines;
        };

        let ohNo = (response) => {
        };
        if (authProvider.restoreAuthentication()) {
            magazineProvider.getMagazines(gotIt, ohNo);
        }
    })
    .controller('ApplicationController', ($scope, authProvider, cartProvider) =>
        new ApplicationController($scope, authProvider, cartProvider));
