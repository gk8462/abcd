/**
 * @fileoverview Reducer for provider register.
 */

import {
    PROVIDER_REGISTER, PROVIDER_REGISTER_IS_FAILURE,
    PROVIDER_REGISTER_IS_SUCCESS, PROVIDER_REGISTER_LOADING_TOGGLE
} from '../types/provider';

let defaultState = {
    isLoading: false,
    error: '',
    success: ''
}

const registerProviderReducer = (state=defaultState, action) => {
    if(action.type === PROVIDER_REGISTER) {
        return {
            ...state
        }
    }
    if(action.type === PROVIDER_REGISTER_IS_FAILURE) {
        return {
            ...state,
            error: action.payload
        }
    }
    if(action.type === PROVIDER_REGISTER_IS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    if(action.type === PROVIDER_REGISTER_LOADING_TOGGLE) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    return state;
}

export default registerProviderReducer;