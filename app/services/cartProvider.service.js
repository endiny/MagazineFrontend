/**
 * Created by endiny on 06/05/16.
 */
export default class cartProvider {
    constructor($http) {
        var order = new Map();
        var order_array;
        this.addToCart = (mId, mMonths) => {
            if (order.has(mId)) {
                mMonths += order.get(mId);
            }
            order.set(mId, mMonths);
        };
        this.removeFromCart = (mId) => {
            order.delete(mId);
        };
        this.editInCart = (mId, mMonths) => {
            if (!order.has(mId)) {
                return this.addToCart(mId, mMonths)
            }
            order.set(mId, mMonths);
        };

        this.submitOrder = (shipAddress, callbackSuccess, callbackFail) => {
            return $http.post('http://localhost:9000/api/orders/add',
                JSON.stringify({address:shipAddress, order:this.getCart()}))
                .then(callbackSuccess, callbackFail);
        };

        this.getCart = () => {
            order_array = [];
            order.forEach(addMapEntryToArray);
            return order_array;
        };

        var addMapEntryToArray = (value, key) => {
            order_array.push({id:key, months:value});
        };
        
        this.dropCart = () => {
            order = new Map();
        }
    };
}