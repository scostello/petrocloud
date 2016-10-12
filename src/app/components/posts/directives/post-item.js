'use strict';

export default [postItemDirective];

function postItemDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            postData: '='
        },
        template: require('./post-item.html'),
        replace: true,
        controller: ['postsService', postItemController],
        controllerAs: 'ctrl'
    };
}

function postItemController(postsService) {
    let vm = this;

    vm.toggleLikePost = postsService.toggleLikePost;
}