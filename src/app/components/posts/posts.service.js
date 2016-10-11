'use strict';

import _ from 'lodash';

export default [postsService];

function postsService() {
    let $posts = {};

    return {
        setPosts,
        toggleLikePost,
        findPost,
        mapUsersToPosts
    };

    function setPosts(posts) {
        if (posts) {
            $posts = posts;
        }

        return $posts;
    }

    function getPosts() {
        return $posts;
    }

    function toggleLikePost(postId) {
        let post = findPost(postId);
        if (!post) {
            return;
        }

        post.isLiked = !post.isLiked;
    }

    function findPost(postId) {
        return _.find($posts, {id: _.parseInt(postId)});
    }

    function mapUsersToPosts(users) {
        $posts = getPosts().map((post) => {
            post.user = _.find(users, {id: post.userId});
            return post;
        });
        return $posts;
    }
}