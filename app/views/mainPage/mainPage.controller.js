/**
 * Created by endiny on 21.04.16.
 */

export default class mainPageController {
    constructor($scope, magazineProvider, cartProvider) {
        var magazines = [];
        var amount = 0;
        var gotIt = (response) => {
            amount = response.data.amount;
            magazines = response.data.magazines;
            this.magazinesToShow = magazines;
        };

        var ohNo = (response) => {
            //todo oh my god something must be here, or mustn't
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