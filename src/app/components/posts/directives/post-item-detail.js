'use strict';

export default function PostDetailDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            postDetails: '='
        },
        template: require('./post-item-detail.html'),
        controller: ['commentsService', PostDetailController],
        controllerAs: 'ctrl',
        replace: true
    };
}

function PostDetailController(commentsService) {
    let vm = this;

    vm.postDetails.comments = commentsService.findPostComments(vm.postDetails.id);
}