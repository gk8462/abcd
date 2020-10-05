import {
    SEARCH_BY_NAME,
    SEARCH_BY_NAME_IS_FAILURE,
    SEARCH_BY_NAME_IS_SUCCESS,
    SEARCH_BY_NAME_IS_LOADING
} from '../types/search';

let defaultState = {
    isLoading: false,
    error: '',
    success: ''
}

const searchProviderByNameReducer = (state=defaultState, action) => {
    if(action.type === SEARCH_BY_NAME) {
        return {
            ...state
        }
    }
    if(action.type === SEARCH_BY_NAME_IS_FAILURE) {
        return {
            ...state,
            error: action.payload
        }
    }
    if(action.type === SEARCH_BY_NAME_IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === SEARCH_BY_NAME_IS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    return state;
}

export default searchProviderByNameReducer;
