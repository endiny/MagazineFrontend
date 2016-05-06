/**
 * Created by endiny on 06/05/16.
 */

export default class ItemController {
    constructor($scope, cartProvider) {
        $scope.magazine;
        $scope.name = $scope.magazine.name;
        $scope.price = $scope.magazine.price;
        $scope.description = $scope.magazine.description;
        $scope.months = 1;

        $scope.addToCart = () => {
            cartProvider.addToCart($scope.magazine.id, $scope.months);
        }
    }
}