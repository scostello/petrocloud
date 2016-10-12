'use strict';

import _ from 'lodash';

export default [usersService];

function usersService() {
    let $users = [];

    return {
        setUsers,
        getUsers,
        findUser,
        updateUser,
        mapPostsToUsers
    };

0    /**
     * Adds users into memory for sharing across application
     * @param users
     * @returns {Array}
     */
    function setUsers(users) {
        if (users) {
            $users = users;
        }
        return $users;
    }

    /**
     * Returns stored users
     * @returns {Array}
     */
    function getUsers() {
        return $users;
    }

    /**
     * Attempts to find a user by their userId
     * @param userId
     */
    function findUser(userId) {
        return _.find($users, {id: _.parseInt(userId)});
    }

    /**
     * Updates a user by their id and a new user object
     * @param userId
     * @param updatedUser
     * @returns {*}
     */
    function updateUser(userId, updatedUser) {
        let user = findUser(userId);
        if (!user) {
            return;
        }
        user = _.clone(updatedUser);
        return user;
    }

    /**
     * Will add a 'posts' property for each user
     * @param posts
     * @returns {Array}
     */
    function mapPostsToUsers(posts) {
        $users = getUsers().map((user) => {
            user.posts = _.find(posts, {userId: user.userId});
            return user;
        });
        return $users;
    }
}
