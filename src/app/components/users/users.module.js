'use strict';

import angular from 'angular';
import usersService from './users.service';
import userDetail from './directives/user-detail';

export default angular.module('users', [])
    .factory('usersService', usersService)
    .directive('userDetail', userDetail)
    .name;
