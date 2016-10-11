'use strict';

export default ['$http', 'BASE_URL', dataservice];

function dataservice($http, BASE_URL) {

    return {
        getPostItems,
        getPostItem,
        getUsers,
        saveUser,
        getComments
    };

    function getPostItems() {
        return $http.get([BASE_URL, 'posts'].join('/'))
            .then(_getPostItemsComplete)
            .catch(_getPostItemsFailed);

        function _getPostItemsComplete(response) {
            return response.data;
        }

        function _getPostItemsFailed(error) {
            return error;
        }
    }

    function getPostItem(postId) {
        return $http.get([BASE_URL, 'posts', postId].join('/'))
            .then(_getPostItemComplete)
            .catch(_getPostItemFailed);

        function _getPostItemComplete(response) {
            return response.data;
        }

        function _getPostItemFailed(error) {
            return error;
        }
    }

    function getUsers() {
        return $http.get([BASE_URL, 'users'].join('/'))
            .then(_getUsersComplete)
            .catch(_getUsersFailed);

        function _getUsersComplete(response) {
            return response.data;
        }

        function _getUsersFailed(error) {
            return error;
        }
    }

    function saveUser(user) {
        return $http.post([BASE_URL, 'users'].join('/'), {user})
            .then(_saveUserComplete)
            .catch(_saveUserFailed);

        function _saveUserComplete(response) {
            return response.data;
        }

        function _saveUserFailed(error) {
            return error;
        }
    }

    function getComments() {
        return $http.get([BASE_URL, 'comments'].join('/'))
            .then(_getCommentsComplete)
            .catch(_getCommentsFailed);

        function _getCommentsComplete(response) {
            return response.data;
        }

        function _getCommentsFailed(error) {
            return error;
        }
    }
}