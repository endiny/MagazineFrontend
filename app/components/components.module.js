/**
 * Created by endiny on 06/05/16.
 */

import item from './item/item.directive'
import ItemController from './item/item.controller'
import CartItemController from './cartItem/cartItem.controller'
import cartItem from './cartItem/cartItem.directive'

angular.module('components', [])
    .controller('ItemController', ($scope, cartProvider) => new ItemController($scope, cartProvider))
    .directive('item', () => new item())
    .controller('CartItemController', ($scope, cartProvider, magazineProvider) =>
        new CartItemController($scope, cartProvider, magazineProvider))
    .directive('cartItem', () => new cartItem());