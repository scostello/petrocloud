'use strict';

export default function PostDetailDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            postDetails: '='
        },
        template: require('./post-item-detail.html'),
        controller: [PostDetailController],
        controllerAs: 'ctrl',
        replace: true
    };
}

function PostDetailController() {
    let vm = this;
    console.log(vm.details);
}