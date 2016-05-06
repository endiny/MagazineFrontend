/**
 * Created by endiny on 06/05/16.
 */

export default class cartItem {
    constructor() {
        return {
            name: 'cartItem',
            restrict: 'E',
            scope: {
                subscription: '='
            },
            controller: 'CartItemController',
            controllerAs: 'cic',
            templateUrl: './views/cart/cart_item.template.html',
            link: ($scope) => {}
        }
    }
}