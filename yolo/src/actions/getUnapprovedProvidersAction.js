/**
 * @fileoverview Action for getting unapproved providers.
 */

import { 
    GET_UNAPPROVED_PROVIDER_IS_FAILURE, 
    GET_UNAPPROVED_PROVIDER_IS_SUCCESS, 
    GET_UNAPPROVED_PROVIDER_IS_LOADING 
} from '../types/provider';

export function getUnapprovedProviderList () {
    return(dispatch) => {
        dispatch(loading(true));
        return fetch('/api/admin/approval/list', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': window.localStorage.getItem('token')
            }
        }).then(res=> {
            if(res.status === 200) {
                return res.json().then(res=> {
                    dispatch(loading(false));
                    dispatch(isSuccess(res));
                })
            } else if (res.status === 500) {
                dispatch(loading(false));
                dispatch(isError("Something went wrong from our side. Please try again later."));
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
        type: GET_UNAPPROVED_PROVIDER_IS_LOADING,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: GET_UNAPPROVED_PROVIDER_IS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: GET_UNAPPROVED_PROVIDER_IS_FAILURE,
        payload: err
    }
}