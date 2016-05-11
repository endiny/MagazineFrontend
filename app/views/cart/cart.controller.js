/**
 * Created by endiny on 06/05/16.
 */
export default class CartController {
    constructor($scope, cartProvider) {
        this.magazines = [];
        this.orderPrice = 0;
        this.order = cartProvider.getCart();

        //господь всемогущий..
        this.getMagazine = (id) => {
            return $scope.$parent.magazines.find((el) => {
                return el.id === id;
            })
        };

        this.order.forEach((el) => {
            var magazine = this.getMagazine(el.id);
            this.magazines.push({id:el.id, months:el.months, price:magazine.price, name:magazine.name});
            this.orderPrice +=(this.magazines[length-1].months * this.magazines[length-1].price);
        });

        this.submitOrder = () => {}
    }
}