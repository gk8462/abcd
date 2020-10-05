/**
 * @fileoverview Action for getting all approved provides.
 */

import { 
    GET_ALL_APPROVED_PROVIDER_IS_LOADING,
    GET_ALL_APPROVED_PROVIDER_IS_SUCCESS,
    GET_ALL_APPROVED_PROVIDER_IS_FAILURE
} from '../types/provider';

export function getAllProviders() {
    return(dispatch) => {
        dispatch(loading(true));
        return fetch('/api/provider/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=> {
            if(res.status === 200) {
                return res.json().then(res=> {
                    dispatch(loading(false));
                    dispatch(isSuccess(res));
                })
            } else if(res.status === 500) {
                dispatch(loading(false));
                dispatch(isError('Something went wrong. Please try again later.'));
            } else {
                dispatch(loading(false));
                return res.json().then(res=> {
                    dispatch(isError(res));
                })
            }
        }).catch(err=> {
            dispatch(loading(false));
            dispatch(isError(err));
        })
    }
}

export function loading(loading) {
    return {
        type: GET_ALL_APPROVED_PROVIDER_IS_LOADING,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: GET_ALL_APPROVED_PROVIDER_IS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: GET_ALL_APPROVED_PROVIDER_IS_FAILURE,
        payload: err
    }
}