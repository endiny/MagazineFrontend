/**
 * Created by endiny on 12/05/16.
 */
export default class orderController {
    constructor($scope, orderProvider, l10nProvider) {
        this.orders = [];
        this.bundle = l10nProvider.currentBundle.orders;
        $scope.$watch(() => l10nProvider.currentBundle, () => {
            this.bundle = l10nProvider.currentBundle.orders;
        });

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
        let orderDidntPaid = (response) => {};
        this.pay = (id) => {
            orderProvider.payForOrder(id, orderPaid, orderDidntPaid);
        };

        let reverted = (response) => {
            this.orders.splice(this.orders.findIndex((el) => {return el.id === response.data.id}), 1);
        };
        let notReverted = () => {};
        this.revert = (id) => {
            orderProvider.revertOrder(id,)
        }
    };
}