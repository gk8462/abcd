/**
 * @fileoverview Action for searching by name.
 */

import {
    SEARCH_BY_NAME_IS_FAILURE,
    SEARCH_BY_NAME_IS_SUCCESS,
    SEARCH_BY_NAME_IS_LOADING
} from '../types/search';

export function searchProviderByName (name, location) {
    return (dispatch) => {
        dispatch(loading(true));
        return fetch('/api/common/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                location: location
            }),
        }).then(res=> {
            if(res.status === 200) {
                return res.json().then(res=>{
                    dispatch(loading(false));
                    dispatch(isSuccess(res));
                })
            } else if(res.status === 500) {
                dispatch(loading(false));
                dispatch(isError('Something went wrong from our end. Please try again later.'))
            } else {
                dispatch(loading(false));
                return res.json().then(res=>{
                    dispatch(isError(res));
                })
            }
        }).catch(error => {
            dispatch(loading(false));
            dispatch(isError(error));
        })
    }
}

export function loading(loading) {
    return {
        type: SEARCH_BY_NAME_IS_LOADING,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: SEARCH_BY_NAME_IS_SUCCESS,
        payload: success
    }
}

export function isError(error){
    return {
        type: SEARCH_BY_NAME_IS_FAILURE,
        payload: error
    }
}