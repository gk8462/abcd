/**
 * @fileoverview Reducer for getting all the types of business.
 */

import { GET_BUSINESS_TYPE, 
    GET_BUSINESS_TYPE_SERVICE_LOADING_TOGGLE,
    GET_BUSINESS_TYPE_SERVICE_NETWORK_ACCESS_SUCCESS,
    GET_BUSINESS_TYPE_SERVICE_NETWORK_ACCESS_FAILURE
} from '../types/utils';

let defaultState = {
    isLoading : false,
    error:'',
    success: ''
}

const getBusinessTypeReducer = (state=defaultState, action) => {
    if(action.type === GET_BUSINESS_TYPE) {
        return {...state}
    }
    if(action.type === GET_BUSINESS_TYPE_SERVICE_LOADING_TOGGLE) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === GET_BUSINESS_TYPE_SERVICE_NETWORK_ACCESS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    if(action.type === GET_BUSINESS_TYPE_SERVICE_NETWORK_ACCESS_FAILURE) {
        return {
            ...state,
            error: action.payload
        }
    }
    return state;
}

export default getBusinessTypeReducer;
