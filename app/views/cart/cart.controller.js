/**
 * Created by endiny on 06/05/16.
 */
export default class CartController {
    constructor($scope, cartProvider) {
        this.magazines = [];
        this.orderPrice = 0;
        this.order = cartProvider.getCart();
        $scope.$watch(() => this.magazines, () => {
            this.orderPrice = 0;
            for (let i of this.magazines) {
                this.orderPrice+=(i.months * i.price);
            }
        }, true);

        //господь всемогущий..
        this.getMagazine = (id) => {
            return $scope.$parent.magazines.find((el) => {
                return el.id === id;
            })
        };

        for (let item of this.order) {
            var magazine = this.getMagazine(item.id);
            this.magazines.push({id:item.id, months:item.months, price:magazine.price, name:magazine.name});
        }

        this.submitOrder = () => {}
    }
}