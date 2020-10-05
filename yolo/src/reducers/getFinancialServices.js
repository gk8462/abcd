/**
 * @fileoverview Reducer for getting all the types of financial services.
 */

import {
    GET_FINANCIAL_SERVICE, GET_FINANCIAL_SERVICE_LOADING_TOGGLE,
    GET_FINANCIAL_SERVICE_NETWORK_ACCESS_SUCCESS, GET_FINANCIAL_SERVICE_NETWORK_ACCESS_FAILURE,
} from '../types/utils';

let defaultState = {
    isLoading: false,
    error: '',
    success: ''
}

const getFinancialServiceReducer = (state=defaultState, action) => {
    if(action.type === GET_FINANCIAL_SERVICE) {
        return {
            ...state
        }
    }
    if(action.type === GET_FINANCIAL_SERVICE_LOADING_TOGGLE) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === GET_FINANCIAL_SERVICE_NETWORK_ACCESS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    if(action.type === GET_FINANCIAL_SERVICE_NETWORK_ACCESS_FAILURE) {
        return {
            ...state,
            error: action.payload
        }
    }
    return state;
}

export default getFinancialServiceReducer;