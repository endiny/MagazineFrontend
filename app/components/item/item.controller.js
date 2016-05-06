/**
 * Created by endiny on 06/05/16.
 */

export default class ItemController {
    constructor($scope, cartProvider) {
        $scope.magazine;
        var id = $scope.magazine.id;
        $scope.name = $scope.magazine.name;
        $scope.price = $scope.magazine.price;
        $scope.description = $scope.magazine.description;
        $scope.months = 1;

        $scope.addToCart = () => {
            cartProvider.addToCart(id, $scope.months);
        }
    }
}