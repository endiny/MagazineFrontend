/**
 * Created by endiny on 28/04/16.
 */

export default class signUpController {
    constructor(authProvider) {
        this.login = '';
        this.password1 = '';
        this.password2 = '';
        this.name = '';
        this.isHiddenError = true;
        this.isHiddenSuccess = true;
        this.notify = '';
        
        var sendError = (text) => {
            this.notify = text;
            this.isHiddenSuccess = true;
            this.isHiddenError = false;
        };

        this.signUp = () => {
            if (this.password1 != this.password2) {
                sendError('Passwords do not match!');
                return;
            }
            authProvider.signUp({
                login:this.login,
                password:this.password1,
                name:this.name}, signUpSuccess, signUpFail);
        };

        var signUpSuccess = (response) => {
            this.isHiddenSuccess = false;
            this.notify = 'User has been registered!';
        };

        var signUpFail = (response) => {
            sendError(response.data.status);
        };
    }
}