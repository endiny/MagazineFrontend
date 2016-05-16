/**
 * Created by endiny on 20/04/16.
 */

export default class loginController {
    constructor(authProvider, $rootScope, $state) {
        this.user = '';
        this.password = '';
        this.notify = '';
        this.isHidden = true;

        let sendError = (text) => {
            this.notify = text;
            this.isHidden = false;
        };
        
        this.login = () => {
            authProvider.login({login: this.user, password: this.password},
                (response) => {
                    console.log(response);
                    authProvider.setUser(response.data);
                    $rootScope.$broadcast('userLogged', authProvider.getUser());
                    $rootScope.$broadcast('getMagazines');
                    $state.go('mainPage');
                },
                (response) => {
                    console.log(response);
                    sendError('Incorrect login and password');
                });
        };
    }
}