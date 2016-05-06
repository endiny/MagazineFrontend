/**
 * Created by endiny on 06/05/16.
 */

export default class item {
    constructor(cartProvider) {
        return {
            name: 'item',
            restrict: 'E',
            scope: {
                magazine: '='
            },
            controller: 'ItemController',
            controllerAs: 'ic',
            templateUrl: './views/mainPage/item.template.html',
            link: ($scope, cartProvider) => {}
        }
    }
}