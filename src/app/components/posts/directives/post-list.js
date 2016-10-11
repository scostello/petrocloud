'use strict';

export default function PostListDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            postItems: '='
        },
        template: require('./post-list.html'),
        controller: [PostListController],
        controllerAs: 'ctrl'
    };
}

function PostListController() {}
