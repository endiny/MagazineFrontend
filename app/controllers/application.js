/**
 * Created by endiny on 28/04/16.
 */

export default class ApplicationController {
    constructor($scope, authProvider, cartProvider) {
        $scope.login = '';
        $scope.role = '';
        $scope.name = '';
        $scope.logged = false;

        this.loginSuccess = (user) => {
            $scope.login = user.login;
            $scope.role = user.role;
            $scope.name = user.name;
            $scope.logged = true;
        };

        if (authProvider.getUser()) {
            this.loginSuccess(authProvider.getUser());
        }

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