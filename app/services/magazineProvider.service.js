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
        };
        
        this.addMagazine = (magazine, callbackSuccess, callbackFail) => {
            magazine.price = magazine.price.toString();
            return $http.post('http://localhost:9000/api/magazine/add', magazine).then(callbackSuccess, callbackFail);
        };
    }
}