import reducer1 from './reducer1';
import authReducer from './authReducer';
import postsReducer from './postReducer';
import userReducer from './userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    reducer1: reducer1,
    authReducer: authReducer,
    userReducer: userReducer,
    postsReducer: postsReducer
})

export default rootReducer