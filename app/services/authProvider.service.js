/**
 * Created by endiny on 20/04/16.
 */
export default class authProvider {
    constructor($http) {
        var user = null;
        this.getUser = () => {return user;}
        this.setUser = (User) => {
            user = User;
        };

        this.isAuthorized = () => {
            return user!=null;
        };

        this.isUserinRole = (role) => {
            return (!user)?false:(user.role===role);
        };

        this.getLogin = () => {return user.login;};
        this.getRole = () => {return user.role;};
        this.getName = () => {return user.name;};

        this.login = (creds, loginSuccess, loginFail) => {
            creds.password = hex_md5(hex_md5(creds.password));
            return $http.post('http://localhost:9000/api/login', creds).then(loginSuccess, loginFail);
        };

        this.signUp = (creds, signUpSuccess, signUpFail) => {
            creds.password = hex_md5(hex_md5(creds.password));
            return $http.post('http://localhost:9000/api/signup', creds).then(signUpSuccess, signUpFail);
        }
    };
}