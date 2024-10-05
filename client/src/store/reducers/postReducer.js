import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    posts: [],
comments: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_DB_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case ACTION_TYPES.REMOVE_DB_POSTS:
            return {
                ...state,
                posts: []
            }
        case ACTION_TYPES.ADD_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case ACTION_TYPES.REMOVE_PROFILE:
            return {
                ...state,
                profile: null
            }
        case ACTION_TYPES.SET_DB_PROFILE:
            return {
                ...state,
                dbProfile: action.payload
            }
        case ACTION_TYPES.REMOVE_DB_PROFILE:
            return {
                ...state,
                dbProfile: null
            }
        default:
            return state
    }
}

export default authReducer