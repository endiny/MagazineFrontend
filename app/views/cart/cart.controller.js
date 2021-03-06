/**
 * Created by endiny on 06/05/16.
 */
export default class CartController {
    constructor($scope, cartProvider, l10nProvider) {
        this.magazines = [];
        this.orderPrice = 0;
        this.order = cartProvider.getCart();
        this.hideOrderForm = true;
        this.address = '';
        this.orderIsEmpty = true;
        this.hideSuccess = true;
        this.hideFail = true;
        this.bundle = l10nProvider.getBundle().cart;
        $scope.$watch(() => l10nProvider.currentBundle, () => {
            this.bundle = l10nProvider.currentBundle.cart;
        });
        $scope.$watch(() => this.magazines, () => {
            this.orderPrice = 0;
            this.orderIsEmpty = this.magazines.length === 0;
            for (let i of this.magazines) {
                this.orderPrice+=(i.months * i.price);
            }
        }, true);

        this.createOrder = () => {
            this.hideOrderForm = !this.hideOrderForm;
        };
        this.getMagazine = (id) => {
            return $scope.$parent.magazines.find((el) => {
                return el.id === id;
            })
        };

        for (let item of this.order) {
            var magazine = this.getMagazine(item.id);
            this.magazines.push({id:item.id, months:item.months, price:magazine.price, name:magazine.name});
        }
        this.submitOrder = () => {
            this.hideSuccess = true;
            this.hideFail = true;
            for (let i of this.magazines) {
                cartProvider.editInCart(i.id, i.months);
            }
            cartProvider.submitOrder(this.address, this.gotIt, this.ohNo);
        };

        this.gotIt = () => {
            this.hideSuccess = false;
            cartProvider.dropCart();
        };

        this.ohNo = () => {
            this.hideFail = false;
        };

        this.removeFromCart = (id) => {
            this.magazines.splice(this.magazines.findIndex((el) => {return el.id===id}), 1);
            cartProvider.removeFromCart(id);
        }
    }
}