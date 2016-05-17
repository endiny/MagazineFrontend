/**
 * Created by endiny on 06/05/16.
 */

import item from './item/item.directive'
import ItemController from './item/item.controller'
import adminItem from './adminItem/adminItem.directive'
import adminItemController from './adminItem/adminItem.controller'
angular.module('components', [])
    .controller('ItemController', ($scope, cartProvider) => new ItemController($scope, cartProvider))
    .directive('item', () => new item())
    .controller('adminItemController', ($scope, magazineProvider, l10nProvider) =>
        new adminItemController($scope, magazineProvider, l10nProvider))
    .directive('adminItem', () => new adminItem());