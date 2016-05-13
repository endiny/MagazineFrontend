/**
 * Created by endiny on 21.04.16.
 */

export default class mainPageController {
    constructor($scope, magazineProvider, cartProvider, l10nProvider) {
        
        let gotIt = (response) => {
            $scope.$parent.magazines = response.data.magazines;
            this.magazinesToShow = $scope.$parent.magazines;
        };

        let ohNo = (response) => {
        };
        if (!$scope.$parent.magazines) {
            magazineProvider.getMagazines(gotIt, ohNo);
        }
        this.magazinesToShow = $scope.$parent.magazines;
        this.addToCart = (id, months) => {
            cartProvider.addToCart(id, months);
        };
    }
}