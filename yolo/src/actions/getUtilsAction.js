/**
 * @fileoverview Action for utilities
 */

import { 
    GET_COUNTRIES_LOADING_TOGGLE, 
    GET_COUNTRIES_NETWORK_ACCESS_FAILURE, 
    GET_COUNTRIES_NETWORK_ACCESS_SUCCESS
} from '../types/utils';

export function getCountriesList () {
    return(dispatch) => {
        dispatch(loading(true));
        return fetch('/api/common/countries', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res=> {
            if(res.status === 200) {
                return res.json().then(res=> {
                    dispatch(loading(false));
                    dispatch(isSuccess(res));
                })
            } else if(res.status === 500) {
                dispatch(loading(false));
                dispatch(isError('Something went wrong from our end. Please try again later.'))
            } else {
                dispatch(loading(false));
                dispatch(isError(res.statusText));
            }
        }).catch(err=>{
            dispatch(loading(false));
            dispatch(isError(err));
        })
    }
}

export function loading(loading) {
    return {
        type: GET_COUNTRIES_LOADING_TOGGLE,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: GET_COUNTRIES_NETWORK_ACCESS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: GET_COUNTRIES_NETWORK_ACCESS_FAILURE,
        payload: err
    }
}