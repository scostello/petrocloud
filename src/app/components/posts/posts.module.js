'use strict';

import angular from 'angular';
import postsService from './posts.service';
import postList from './directives/post-list';
import postItem from './directives/post-item';
import postItemDetail from './directives/post-item-detail';

export default angular.module('app.posts', [])
    .factory('postsService', postsService)
    .directive('postList', postList)
    .directive('postItem', postItem)
    .directive('postItemDetail', postItemDetail)
    .name;
