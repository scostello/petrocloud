'use strict';

import '../assets/less/app.less';
import angular from 'angular';
import appRoutes from './app.routes';

let app, appName = 'app';

app = angular.module(appName, [appRoutes]);

angular.bootstrap(document.getElementsByTagName('body')[0], [appName]);
