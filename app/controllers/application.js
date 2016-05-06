/**
 * Created by endiny on 28/04/16.
 */

export default class ApplicationController {
    constructor($scope, ROLES, authProvider) {
        $scope.login = '';
        $scope.role = '';
        $scope.name = '';
        $scope.logged = false;

        $scope.$on('userLogged', (event, user) => {
            $scope.login = user.login;
            $scope.role = user.role;
            $scope.name = user.name;
            $scope.logged = true;
        });

        $scope.logout = () => {
            $scope.login = '';
            $scope.role = '';
            $scope.name = '';
            $scope.logged = false;
            authProvider.setUser(null);
        };
    }
}