'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appCore from './core/core.module';
import appPosts from './components/posts/posts.module';
import appUsers from './components/users/users.module';

export default angular.module('app.config', [uiRouter, appCore, appPosts, appUsers])
    .config(['$locationProvider', '$stateProvider', config])
    .name;

function config($locationProvider, $stateProvider) {
    $stateProvider.state('app', {
            url: '',
            template: require('./layout/shell.html'),
            resolve: {
                posts: ['dataservice', 'postsService', (dataservice, postsService) => {
                    return dataservice.getPostItems()
                        .then((posts) => {
                            return postsService.setPosts(posts);
                        });
                }],
                users: ['dataservice', 'usersService', (dataservice, usersService) => {
                    return dataservice.getUsers()
                        .then((users) => {
                            return usersService.setUsers(users);
                        });
                }],
                comments: ['dataservice', (dataservice) => {
                    return dataservice.getComments();
                }]
            }
        })
        .state('app.posts', {
            url: '/',
            views: {
                'content@app': {
                    template: '<post-list post-items="vm.mappedPosts"></post-list>',
                    controller: ['mappedPosts', function (mappedPosts) {
                        this.mappedPosts = mappedPosts;
                    }],
                    controllerAs: 'vm',
                    resolve: {
                        mappedPosts: ['usersService', 'postsService', (usersService, postsService) => {
                            return postsService.mapUsersToPosts(usersService.getUsers());
                        }]
                    }
                }
            }
        })
        .state('app.posts.details', {
            url: 'posts/:postId',
            views: {
                'content@app': {
                    template: '<post-item-detail post-details="vm.postDetails"></post-item-detail>',
                    controller: ['postDetails', function (postDetails) {
                        this.postDetails = postDetails;
                    }],
                    controllerAs: 'vm',
                    resolve: {
                        postDetails: ['$stateParams', 'postsService', ($stateParams, postsService) => {
                            return postsService.findPost($stateParams.postId);
                        }]
                    }
                }
            }
        })
        .state('app.userdetail', {
            url: '/users/:userId',
            views: {
                'content@app': {
                    template: '<user-detail user-details="vm.userDetails"></user-detail>',
                    controller: ['userDetails', function (userDetails) {
                        this.userDetails = userDetails;
                    }],
                    controllerAs: 'vm',
                    resolve: {
                        userDetails: ['$stateParams', 'usersService', ($stateParams, usersService) => {
                            return usersService.findUser($stateParams.userId);
                        }]
                    }
                }
            }
        });

    $locationProvider.html5Mode(true);
}