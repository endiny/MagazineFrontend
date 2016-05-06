/**
 * Created by endiny on 06/05/16.
 */

export default class magazineProvider {
    constructor($http) {
        this.getMagazines = (callbackSuccess, callbackFail) => {
            return $http.get('http://localhost:9000/api/magazine').then(callbackSuccess, callbackFail);
        };

        this.getMagazineById = (id, callbackSuccess, callbackFail) => {
            return $http.get('http://localhost:9000/api/magazine/id/' + id).then(callbackSuccess, callbackFail);
        }
    }
}