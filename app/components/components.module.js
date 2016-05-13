/**
 * Created by endiny on 06/05/16.
 */

import item from './item/item.directive'
import ItemController from './item/item.controller'

angular.module('components', [])
    .controller('ItemController', ($scope, cartProvider) => new ItemController($scope, cartProvider))
    .directive('item', () => new item());