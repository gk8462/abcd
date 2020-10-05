/**
 * @fileoverview Reducer for approving a provider.
 */
import {
    PROVIDER_APPROVAL_IS_FAILURE,
    PROVIDER_APPROVAL_IS_SUCCESS,
    PROVIDER_APPROVAL_IS_LOADING,
    PROVIDER_APPROVAL
} from '../types/provider';

let defaultState = {
    isLoading: false,
    error: '',
    success: ''
}

const approveProviderReducer = (state=defaultState, action) => {
    if(action.type === PROVIDER_APPROVAL){
        return {
            ...state
        }
    }
    if(action.type === PROVIDER_APPROVAL_IS_FAILURE) {
        return {
            ...state,
            error: action.payload
        }
    }
    if(action.type === PROVIDER_APPROVAL_IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === PROVIDER_APPROVAL_IS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    return state;
}

export default approveProviderReducer;