/**
 * Created by endiny on 21.04.16.
 */

export default class mainPageController {
    constructor($scope, magazineProvider, cartProvider) {
        var amount = 0;
        var gotIt = (response) => {
            amount = response.data.amount;
            this.magazinesToShow = response.data.magazines;
            $scope.$parent.magazines = this.magazinesToShow;
        };

        var ohNo = (response) => {
        };
        magazineProvider.getMagazines(gotIt, ohNo);
        this.magazinesToShow = [];
        this.addToCart = (id, months) => {
            cartProvider.addToCart(id, months);
        };
        this.load = () => {
            magazineProvider.getMagazines(gotIt, ohNo);
        };

        $scope.$on('getMagazines', () => {
            magazineProvider.getMagazines(gotIt, ohNo);
        });
    }
}