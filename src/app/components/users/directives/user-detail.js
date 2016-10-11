'use strict';

export default function UserDetailDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            userDetails: '='
        },
        template: require('./user-detail.html'),
        controller: ['dataservice', UserDetailController],
        controllerAs: 'ctrl',
        replace: true
    };
}

function UserDetailController(dataservice) {
    let vm = this;

    vm.toggleEditable = function () {
        vm.isEditing = !vm.isEditing;
    };

    vm.saveUser = (user) => {
        vm.isSaving = true;
        dataservice.saveUser(user)
            .then((response) => {
                vm.isEditing = false;
            })
            .catch((error) => {

            })
            .finally(() => {
                vm.isSaving = false;
            })
    };

    vm.userDetails.addressDisplay = [vm.userDetails.address.street, vm.userDetails.address.suite, vm.userDetails.address.street + ',', vm.userDetails.address.zipcode].join(' ');
}