'use strict';

import _ from 'lodash';

export default [commentsService];

function commentsService() {
    let $comments = {};

    return {
        setComments,
        findPostComments
    };

    function setComments(comments) {
        if (comments) {
            $comments = comments;
        }
    }

    function findPostComments(postId) {
        return _.filter($comments, {postId: _.parseInt(postId)});
    }
}
