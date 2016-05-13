/**
 * Created by endiny on 12/05/16.
 */
export default class orderController {
    constructor($scope, orderProvider) {
        this.orders = [];
        let gotOrders = (response) => {
            this.orders = response.data.orders;
        };
        let ohNo = (response) => {};
        this.getMagazine = (id) => {
            return $scope.$parent.magazines.find((el) => {
                return el.id === id;
            })
        };
        orderProvider.getOrders(gotOrders, ohNo);

        let orderPaid = (response) => {
            this.orders.find((el) => {return el.id === response.data.id})
                .paid = true;
        };

        let orderDidntPaid = (response) => {

        };

        this.pay = (id) => {
            orderProvider.payForOrder(id, orderPaid, orderDidntPaid);
        }
    };
}