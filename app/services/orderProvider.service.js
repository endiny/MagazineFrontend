/**
 * Created by endiny on 12/05/16.
 */

export default class orderProvider {
    constructor($http) {
        this.getOrders = (callbackSuccess, callbackFail) => {
            return $http.get('http://localhost:9000/api/orders').then(callbackSuccess, callbackFail);
        };

        this.payForOrder = (id, callbackSuccess, callbackFail) => {
            return $http.get('http://localhost:9000/api/orders/pay/'+id).then(callbackSuccess, callbackFail);
        };

        this.revertOrder = (id, callbackSuccess, callbackFail) => {
            return $http.get('http://localhost:9000/api/orders/delete/'+id).then(callbackSuccess, callbackFail);
        }
    }
}