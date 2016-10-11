'use strict';

import angular from 'angular';
import dataservice from './dataservice';

export default angular.module('app.core', [])
    .constant('BASE_URL', 'http://jsonplaceholder.typicode.com')
    .factory('dataservice', dataservice)
    .name;