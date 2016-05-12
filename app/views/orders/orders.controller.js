/**
 * Created by endiny on 12/05/16.
 */
export default class orderController {
    constructor($scope, orderProvider) {
        this.orders = [];
        let gotIt = (response) => {
            this.orders = response.data.orders;
        };
        let ohNo = (response) => {};
        this.getMagazine = (id) => {
            return $scope.$parent.magazines.find((el) => {
                return el.id === id;
            })
        };
        orderProvider.getOrders(gotIt, ohNo);
    };
}