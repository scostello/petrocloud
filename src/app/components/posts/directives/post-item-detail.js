'use strict';

export default [postDetailDirective];

function postDetailDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            postDetails: '='
        },
        template: require('./post-item-detail.html'),
        controller: ['commentsService', postDetailController],
        controllerAs: 'ctrl',
        replace: true
    };
}

function postDetailController(commentsService) {
    let vm = this;

    vm.postDetails.comments = commentsService.findPostComments(vm.postDetails.id);
}