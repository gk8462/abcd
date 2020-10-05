/**
 * @fileoverview Reducer for admin login.
 */
import { 
    ADMIN_LOGIN, ADMIN_LOGIN_IS_ERROR,
    ADMIN_LOGIN_IS_LOADING, ADMIN_LOGIN_IS_SUCCESS
} from '../types/admin';

let defaultState = {
    isLoading : false,
    error: '',
    success: ''
}

const adminLoginReducer = (state=defaultState, action) => {
    if(action.type === ADMIN_LOGIN) {
        return {
            ...state
        }
    }
    if(action.type === ADMIN_LOGIN_IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === ADMIN_LOGIN_IS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    if(action.type === ADMIN_LOGIN_IS_ERROR) {
        return {
            ...state,
            error: action.payload
        }
    }
    return state;
}

export default adminLoginReducer;