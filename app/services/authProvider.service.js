/**
 * Created by endiny on 20/04/16.
 */
export default class authProvider {
    constructor($http, $cookies) {
        let user = null;
        this.getUser = () => {return user};
        this.setUser = (User) => {
            user = User;
            if (user) {
                $cookies.put('user', JSON.stringify(user));
            } else {
                $cookies.remove('user');
            }
        };

        this.isAuthorized = () => {
            return user!=null;
        };

        this.isUserinRole = (role) => {
            return (!user)?false:(user.role===role);
        };

        this.logout = () => {$http.get('http://localhost:9000/api/logout');};

        this.getLogin = () => {return user?user.login:'';};
        this.getRole = () => {return user?user.role:'';};
        this.getName = () => {return user?user.name:'';};
        this.setName = (name) => {user.name = name};

        this.restoreAuthentication = () => {
            var object = $cookies.getObject('user');
            user = object?object:null;
            return object?true:false;
        };

        this.login = (creds, loginSuccess, loginFail) => {
            creds.password = hex_md5(hex_md5(creds.password));
            return $http.post('http://localhost:9000/api/login', creds).then(loginSuccess, loginFail);
        };

        this.signUp = (creds, signUpSuccess, signUpFail) => {
            creds.password = hex_md5(hex_md5(creds.password));
            return $http.post('http://localhost:9000/api/signup', creds).then(signUpSuccess, signUpFail);
        };

        this.updateUser = (creds, updateSuccess, updateFail) => {
            if (creds.password) {
                creds.password = hex_md5(hex_md5(creds.password));
            } else {
                creds.password = 'none';
            }
            return $http.post('http://localhost:9000/api/user/edit',creds).then(updateSuccess, updateFail);
        }
    };
}