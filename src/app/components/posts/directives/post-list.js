'use strict';

export default [postListDirective];

function postListDirective() {
    return {
        restrict: 'AE',
        bindToController: {
            postItems: '='
        },
        template: require('./post-list.html'),
        controller: [postListController],
        controllerAs: 'ctrl'
    };
}

function postListController() {}
