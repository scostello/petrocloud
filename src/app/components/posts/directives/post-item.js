'use strict';

export default function PostItemDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            postData: '='
        },
        template: require('./post-item.html'),
        replace: true,
        controller: ['postsService', PostItemController],
        controllerAs: 'ctrl'
    };
}

function PostItemController(postsService) {
    let vm = this;

    vm.toggleLikePost = postsService.toggleLikePost;
}