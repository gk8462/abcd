/**
 * @fileoverview Reducer for getting countries list.
 */
import { 
    GET_COUNTRIES_LIST, GET_COUNTRIES_LOADING_TOGGLE, 
    GET_COUNTRIES_NETWORK_ACCESS_SUCCESS, GET_COUNTRIES_NETWORK_ACCESS_FAILURE 
} from '../types/utils';

let defaultState = {
    isLoading: false,
    error: '',
    success: '',
    countries: []
}

const getCountriesReducer = (state=defaultState, action) => {
    if(action.type === GET_COUNTRIES_LIST) {
        return {
            ...state
        }
    }
    if(action.type === GET_COUNTRIES_LOADING_TOGGLE) {
        return {
            ...state,
            isLoading: action.loading
        }
    }
    if(action.type === GET_COUNTRIES_NETWORK_ACCESS_SUCCESS) {
        return {
            ...state,
            countries: action.payload

        }
    }
    if(action.type === GET_COUNTRIES_NETWORK_ACCESS_FAILURE) {
        return {
            ...state,
            error: action.err
        }
    }
    return state;
}

export default getCountriesReducer;