'use strict';

export default function UserDetailDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            userDetails: '='
        },
        template: require('./user-detail.html'),
        controller: ['dataservice', 'postsService', 'usersService', UserDetailController],
        controllerAs: 'ctrl',
        replace: true
    };
}

function UserDetailController(dataservice, postsService, usersService) {
    let vm = this;

    vm.toggleEditable = function () {
        vm.isEditing = !vm.isEditing;
    };

    vm.saveUser = (user) => {
        vm.isSaving = true;
        dataservice.saveUser({
                id: user.id,
                name: user.name,
                address: user.address,
                phone: user.phones,
                website: user.website,
                company: user.company
            })
            .then((response) => {
                vm.isEditing = false;
                usersService.updateUser(user.id, user);
            })
            .catch((error) => {

            })
            .finally(() => {
                vm.isSaving = false;
            })
    };

    vm.userDetails.posts = postsService.findUserPosts(vm.userDetails.id);
    vm.userDetails.addressDisplay = [vm.userDetails.address.street, vm.userDetails.address.suite, vm.userDetails.address.street + ',', vm.userDetails.address.zipcode].join(' ');
}