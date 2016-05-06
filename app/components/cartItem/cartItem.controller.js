/**
 * Created by endiny on 06/05/16.
 */
export default class CartItemController {
    constructor($scope, cartProvider, magazineProvider) {
        $scope.subscription;
        $scope.name = '';
        $scope.price = 0.0;
        $scope.months = $scope.subscription.months;
        $scope.total = $scope.price*$scope.months;
        magazineProvider.getMagazineById($scope.subscription.id).then(gotIt, ohNo);
        this.gotIt = (response) => {
            $scope.name = response.data.name;
            $scope.price = response.data.price;
            $scope.total = $scope.price*$scope.months;
        };
        this.ohNo = (response) => {
            $scope.name = '';
            $scope.price = 0.0;
            $scope.total = 0.0;
        }
    }
}