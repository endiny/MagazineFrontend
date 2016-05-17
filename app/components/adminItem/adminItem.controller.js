/**
 * Created by endiny on 16/05/16.
 */
export default class adminItemController {
    constructor($scope, magazineProvider, l10nProvider) {
        $scope.isEditHidden = true;
        $scope.isAlertSuccess = true;
        $scope.isAlertHidden = true;
        $scope.notifyMessage = '';

        let updateOkay = (response) => {
            $scope.notifyMessage = $scope.bundle.magazineUpdate;
            $scope.isAlertSuccess = true;
            $scope.isAlertHidden = false;
            $scope.isEditHidden = true;
        };
        let updateNope = (response) => {
            $scope.notifyMessage = $scope.bundle.magazineUpdateError;
            $scope.isAlertSuccess = false;
            $scope.isAlertHidden = false;
        };
        $scope.update = () => {
            $scope.isAlertHidden = true;
            magazineProvider.update($scope.magazine, updateOkay, updateNope);
        };

        $scope.showEditDialog = () => {
            $scope.isEditHidden = !$scope.isEditHidden;
        };

        let removeOkay = (response) => {
            $scope.notifyMessage = $scope.bundle.magazineRemove;
            $scope.isAlertSuccess = true;
            $scope.isAlertHidden = false;
            $scope.magazines.splice($scope.magazines.findIndex((el) => {
                return $scope.magazine.id===el.id}),
                1);
        };
        let removeNope = (response) => {
            $scope.notifyMessage = $scope.bundle.magazineRemoveError;
            $scope.isAlertSuccess = false;
            $scope.isAlertHidden = false;
        };
        $scope.remove = () => {
            $scope.isAlertHidden = true;
            magazineProvider.remove($scope.magazine.id, removeOkay, removeNope);
        }
    }
}