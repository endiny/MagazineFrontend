/**
 * Created by endiny on 16/05/16.
 */
export default class adminController {
    constructor($scope, magazineProvider, l10nProvider) {
        this.bundle = l10nProvider.currentBundle.admin;
        $scope.$watch(() => l10nProvider.currentBundle, () => {this.bundle = l10nProvider.currentBundle.admin;});

        this.isNotifyHidden = true;
        this.isDanger = false;
        this.notifyText = '';
        this.magazinesToShow = $scope.$parent.magazines;
        $scope.$watch(() => $scope.$parent.magazines, () => {this.magazinesToShow = $scope.$parent.magazines});

        this.newMagazine = {
            name: '',
            description: '',
            price: 1.0
        };
        this.isCreateMagazineHidden = true;
        this.showCreateMagazine = () => {this.isCreateMagazineHidden = !this.isCreateMagazineHidden};

        this.magazineAdded = (response) => {
            this.isDanger = false;
            this.notifyText = this.bundle.magazineAdd;
            this.isNotifyHidden = false;
            $scope.$parent.magazines.unshift(response.data.magazine);
        };
        this.magazineNotAdded = (response) => {
            this.isDanger = true;
            this.notifyText = this.bundle.magazineAddError;
            this.isNotifyHidden = false;
        };
        this.addMagazine = () => {
            this.notifyHidden = true;
            magazineProvider.addMagazine(this.newMagazine, this.magazineAdded, this.magazineNotAdded);
        };
    }
}