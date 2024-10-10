// action.js
import * as ACTION_TYPES from './action_types';

export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS,
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE,
}

export const success = () => ({
    type: ACTION_TYPES.SUCCESS
});

// Action for failed operations
export const failure = () => ({
    type: ACTION_TYPES.FAILURE
});

// Action to handle user input
export const userInput = (text) => ({
    type: ACTION_TYPES.USER_INPUT,
    payload: text,
});

// Actions for login
export const loginSuccess = (user) => ({
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error) => ({
    type: ACTION_TYPES.LOGIN_FAILURE,
    payload: error,
});

// Actions for profile management
export const addProfile = (profile) => ({
    type: ACTION_TYPES.ADD_PROFILE,
    payload: profile,
});

export const removeProfile = (profileId) => ({
    type: ACTION_TYPES.REMOVE_PROFILE,
    payload: profileId,
});

export const setDbProfile = (profiles) => ({
    type: ACTION_TYPES.SET_DB_PROFILE,
    payload: profiles,
});

export const removeDbProfile = (profileId) => ({
    type: ACTION_TYPES.REMOVE_DB_PROFILE,
    payload: profileId,
});

// Actions for posts
export const fetchDbPosts = (postId) => ({
    type: ACTION_TYPES.FETCH_DB_POSTS,
    payload: postId,
});
export const removeDbPosts = (postId) => ({
    type: ACTION_TYPES.REMOVE_DB_POSTS,
    payload: postId,
});

// Actions for comments
export const fetchPostsComments = () => ({
    type: ACTION_TYPES.FETCH_POSTS_COMMENTS,
});

export const removePostsComments = (commentId) => ({
    type: ACTION_TYPES.REMOVE_POSTS_COMMENTS,
    payload: commentId,
});
