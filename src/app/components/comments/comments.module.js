'use strict';

import angular from 'angular';
import commentsService from './comments.service';

export default angular.module('app.comments', [])
    .factory('commentsService', commentsService)
    .name;
