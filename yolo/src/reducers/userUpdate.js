/**
 * @fileoverview Reducer for user update.
 */

import { 
    USER_UPDATE,
    USER_UPDATE_IS_ERROR, 
    USER_UPDATE_IS_LOADING, 
    USER_UPDATE_IS_SUCCESS 
} from '../types/user';

let defaultState = {
    isLoading: false,
    success: '',
    error: ''
}

const updateUserReducer = (state=defaultState, action) => {
    if(action.type === USER_UPDATE) {
        return {
            ...state
        }
    }
    if(action.type === USER_UPDATE_IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === USER_UPDATE_IS_ERROR) {
        return {
            ...state,
            error: action.payload

        }
    }
    if(action.type === USER_UPDATE_IS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    return state;
}

export default updateUserReducer;