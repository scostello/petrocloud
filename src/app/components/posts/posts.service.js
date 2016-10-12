'use strict';

import _ from 'lodash';

export default [postsService];

function postsService() {
    let $posts = [];

    return {
        setPosts,
        toggleLikePost,
        findPost,
        findUserPosts,
        mapUsersToPosts
    };

    /**
     * Adds posts into memory for sharing across application
     * @param posts
     * @returns {Array}
     */
    function setPosts(posts) {
        if (posts) {
            $posts = posts;
        }

        return $posts;
    }

    /**
     * Returns stored posts
     * @returns {Array}
     */
    function getPosts() {
        return $posts;
    }

    /**
     * Will toggle a post as liked or not
     * @param postId
     */
    function toggleLikePost(postId) {
        let post = findPost(postId);
        if (!post) {
            return;
        }

        post.isLiked = !post.isLiked;
    }

    /**
     * Attempts to find a post by their postId
     * @param postId
     */
    function findPost(postId) {
        return _.find($posts, {id: _.parseInt(postId)});
    }

    /**
     * Finds posts associated with the user's id
     * @param userId
     * @returns {Array}
     */
    function findUserPosts(userId) {
        return _.filter($posts, {userId: _.parseInt(userId)});
    }

    /**
     * Adds a 'user' associated with each post
     * @param users
     * @returns {Array}
     */
    function mapUsersToPosts(users) {
        $posts = getPosts().map((post) => {
            post.user = _.find(users, {id: post.userId});
            return post;
        });
        return $posts;
    }
}