/**
 * @fileoverview Reducer for approving an unapproved provider from admin side.
 */

import {
    GET_UNAPPROVED_PROVIDER,
    GET_UNAPPROVED_PROVIDER_IS_FAILURE, 
    GET_UNAPPROVED_PROVIDER_IS_SUCCESS, 
    GET_UNAPPROVED_PROVIDER_IS_LOADING 
} from '../types/provider';

let defaultState = {
    isLoading: false,
    error: '',
    success: ''
}

const getUnapprovedProvidersReducer = (state=defaultState, action) => {
    if(action.type === GET_UNAPPROVED_PROVIDER){
        return {
            ...state
        }
    }
    if(action.type === GET_UNAPPROVED_PROVIDER_IS_FAILURE) {
        return {
            ...state,
            error: action.payload
        }
    }
    if(action.type === GET_UNAPPROVED_PROVIDER_IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === GET_UNAPPROVED_PROVIDER_IS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    return state;
}

export default getUnapprovedProvidersReducer;