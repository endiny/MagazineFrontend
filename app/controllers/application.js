/**
 * Created by endiny on 28/04/16.
 */

export default class ApplicationController {
    constructor($scope, authProvider, cartProvider, l10nProvider) {

        $scope.login = '';
        $scope.role = '';
        $scope.name = '';
        $scope.logged = false;
        $scope.isAdmin = false;
        $scope.bundle = l10nProvider.getBundle().topPanel;
        $scope.setLanguage = (lang) => {
            l10nProvider.setLanguage(lang);
            $scope.bundle = l10nProvider.getBundle().topPanel;
        };

        this.loginSuccess = (user) => {
            $scope.$watch(() => authProvider.getName(), () => {
                $scope.name = authProvider.getName()});
            $scope.login = user.login;
            $scope.role = user.role;
            $scope.name = user.name;
            $scope.logged = true;
            $scope.isAdmin = authProvider.getRole() === 'admin';
        };

        authProvider.isAuthorized().then(() => {
            authProvider.restoreAuthentication();
            this.loginSuccess(authProvider.getUser());
        });

        $scope.$on('userLogged', (event, user) => {
            this.loginSuccess(user);
        });

        $scope.logout = () => {
            authProvider.logout();
            $scope.login = '';
            $scope.role = '';
            $scope.name = '';
            $scope.logged = false;
            authProvider.setUser(null);
            cartProvider.dropCart();
            window.location.reload();
        };
    }
}