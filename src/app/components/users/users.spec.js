'use strict';

import angular from 'angular';
import users from './users.module';

describe('users', () => {

    describe('usersService', () => {
        let service;

        beforeEach(() => {
            angular.mock.module(users);

            angular.mock.inject(($controller) => {
                service = $controller('usersService', {});
            });
        });

        it('should contain the starter url', () => {
            expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
        });
    });
});
