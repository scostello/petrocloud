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

    function setUsers(users) {
        if (users) {
            $users = users;
        }

        return $users;
    }

    function getUsers() {
        return $users;
    }

    function findUser(userId) {
        return _.find($users, {id: _.parseInt(userId)});
    }

    function updateUser(userId, updatedUser) {
        let user = findUser(userId);
        if (!user) {
            return;
        }
        user = updatedUser;
        return user;
    }

    function mapPostsToUsers(posts) {
        posts = _.clone(posts);
        $users = getUsers().map((user) => {
            user.posts = _.find(posts, {userId: user.userId});
            return user;
        });
        return $users;
    }
}
