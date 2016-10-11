'use strict';

export default function UserDetailDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            userDetails: '='
        },
        template: require('./user-detail.html'),
        controller: ['$scope', UserDetailController],
        controllerAs: 'ctrl',
        replace: true
    };
}

function UserDetailController($scope) {
    let vm = this;

    $scope.$watch(function () {
        return vm.userForm.$dirty;
    }, function (oldValue, newValue) {
        vm.canSave = newValue;
    });

    vm.toggleEditable = function () {
        vm.isEditing = !vm.isEditing;
    };

    vm.changeHappened = function () {
        console.log('Changing');
    };
}