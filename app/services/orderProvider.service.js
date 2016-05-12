/**
 * Created by endiny on 12/05/16.
 */

export default class orderProvider {
    constructor($http) {
        this.getOrders = (callbackSuccess, callbackFail) => {
            return $http.get('http://localhost:9000/api/orders').then(callbackSuccess, callbackFail);
        };
    }
}