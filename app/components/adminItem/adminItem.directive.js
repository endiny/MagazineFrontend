/**
 * Created by endiny on 06/05/16.
 */

export default class adminItem {
    constructor() {
        return {
            name: 'adminItem',
            restrict: 'E',
            scope: {
                magazine: '=',
                magazines: '=',
                bundle: '='
            },
            controller: 'adminItemController',
            controllerAs: 'aic',
            templateUrl: './components/adminItem/adminItem.template.html',
            link: ($scope) => {}
        }
    }
}