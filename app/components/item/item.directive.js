/**
 * Created by endiny on 06/05/16.
 */

export default class item {
    constructor() {
        return {
            name: 'item',
            restrict: 'E',
            scope: {
                magazine: '='
            },
            controller: 'ItemController',
            controllerAs: 'ic',
            templateUrl: './components/item/item.template.html',
            link: ($scope) => {}
        }
    }
}