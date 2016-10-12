'use strict';

import _ from 'lodash';

export default [commentsService];

function commentsService() {
    let $comments = [];

    return {
        setComments,
        findPostComments
    };

    /**
     * Adds comments into memory for sharing across application
     * @param comments
     * @returns {Array}
     */
    function setComments(comments) {
        if (comments) {
            $comments = comments;
        }

        return $comments;
    }

    /**
     * Finds comments associated with the post's id
     * @param postId
     * @returns {Array}
     */
    function findPostComments(postId) {
        return _.filter($comments, {postId: _.parseInt(postId)});
    }
}
