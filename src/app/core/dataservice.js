'use strict';

export default ['$http', 'BASE_URL', dataservice];

function dataservice($http, BASE_URL) {

    return {
        getPostItems,
        getUsers,
        saveUser,
        getComments
    };

    /**
     * Attempts to retrieve a lists of posts via XHR
     * @returns {*}
     */
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

    /**
     * Attempts to retrieve a lists of users via XHR
     * @returns {*}
     */
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

    /**
     * Posts a user's information to the API via XHR
     * @param user
     * @returns {*}
     */
    function saveUser(user) {
        return $http.post([BASE_URL, 'users'].join('/'), user)
            .then(_saveUserComplete)
            .catch(_saveUserFailed);

        function _saveUserComplete(response) {
            return response.data;
        }

        function _saveUserFailed(error) {
            return error;
        }
    }

    /**
     * Attempts to retrieve a lists of comments via XHR
     * @returns {*}
     */
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