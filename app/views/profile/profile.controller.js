/**
 * Created by endiny on 13/05/16.
 */
export default class profileController {
    constructor($scope, authProvider, l10nProvider) {
        this.login = authProvider.getLogin();
        this.name = authProvider.getName();
        this.password = '';
        this.password1 = '';
        this.isHiddenError = true;
        this.isHiddenSuccess = true;
        this.notify = '';

        let sendError = (text) => {
            this.notify = text;
            this.isHiddenError = false;
        };

        this.bundle = l10nProvider.getBundle().profile;
        $scope.$watch(() => l10nProvider.currentBundle, () => {
            this.bundle = l10nProvider.currentBundle.profile;
        });

        let updated = () => {
            this.isHiddenSuccess = false;
            this.notify = this.bundle.changed;
            authProvider.setName(this.name);
        };
        let errorUpdate = (response) => {
            sendError(this.bundle.couldnot);
        };
        this.updateProfile = () => {
            this.isHiddenError = true;
            this.isHiddenSuccess = true;
            if (this.password !== this.password1) {
                return sendError(this.bundle.notmatch);
            }
            authProvider.updateUser({password:this.password, name:this.name}, updated, errorUpdate);
        };
    }
}