'use strict';

export default [userDetailDirective];

function userDetailDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            userDetails: '='
        },
        template: require('./user-detail.html'),
        controller: ['dataservice', 'postsService', 'usersService', userDetailController],
        controllerAs: 'ctrl',
        replace: true
    };
}

function userDetailController(dataservice, postsService, usersService) {
    let vm = this;

    vm.toggleEditable = function () {
        vm.isEditing = !vm.isEditing;
    };

    vm.saveUser = (user) => {
        vm.isSaving = true;
        vm.errorMessage = '';
        dataservice.saveUser({
                id: user.id,
                name: user.name,
                address: user.address,
                phone: user.phones,
                website: user.website,
                company: user.company
            })
            .then((updatedUser) => {
                vm.isEditing = false;
                usersService.updateUser(updatedUser.id, updatedUser);
            })
            .catch((error) => {
                vm.errorMessage = 'There was an issue saving the user!';
            })
            .finally(() => {
                vm.isSaving = false;
            })
    };

    vm.userDetails.posts = postsService.findUserPosts(vm.userDetails.id);
    vm.userDetails.addressDisplay = [vm.userDetails.address.street, vm.userDetails.address.suite, vm.userDetails.address.street + ',', vm.userDetails.address.zipcode].join(' ');
}