/**
 * @fileoverview Reducer for getting user details.
 */

import { 
    GET_USER_DETAILS,
    GET_USER_DETAILS_IS_ERROR,
    GET_USER_DETAILS_IS_LOADING,
    GET_USER_DETAILS_IS_SUCCESS,
} from '../types/details';

let defaultState = {
    isLoading: false,
    error: '',
    success: ''
}

const getUserDetailsReducer = (state=defaultState, action) => {
    if(action.type === GET_USER_DETAILS) {
        return {
            ...state
        }
    }
    if(action.type === GET_USER_DETAILS_IS_ERROR) {
        return {
            ...state,
            error: action.payload
        }
    }
    if(action.type === GET_USER_DETAILS_IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === GET_USER_DETAILS_IS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    return state;
}

export default getUserDetailsReducer;