/**
 * @fileoverview Reducer for userlogin.
 */
import {
    LOGIN_USER,
    USER_LOGIN_LOADING_TOGGLE,
    USER_LOGIN_NETWORK_ACCESS_SUCCESS, 
    USER_LOGIN_NETWORK_ACCESS_FAILURE
} from '../types/auth';

let defaultState = {
    email: '',
    password: '',
    isLoading: false,
    error: '',
    success: ''
}

const userLoginReducer = (state=defaultState, action) => {
    if(action.type === LOGIN_USER) {
        return {
            ...state,
            email: action.email,
            password: action.password
        }
    }
    if(action.type === USER_LOGIN_LOADING_TOGGLE) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === USER_LOGIN_NETWORK_ACCESS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    if(action.type === USER_LOGIN_NETWORK_ACCESS_FAILURE) {
        return {
            ...state,
            error: action.payload
        }
    }
    return state;
}

export default userLoginReducer;