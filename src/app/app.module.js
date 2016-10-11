'use strict';

import '../assets/less/app.less';
import angular from 'angular';
import appConfig from './app.config';

let app, appName = 'app';

app = angular.module(appName, [appConfig]);

angular.bootstrap(document.getElementsByTagName('body')[0], [appName]);
