/**
 * @fileoverview Action for approving provider from admin side.
 */

import {
    PROVIDER_APPROVAL_IS_FAILURE,
    PROVIDER_APPROVAL_IS_SUCCESS,
    PROVIDER_APPROVAL_IS_LOADING
} from '../types/provider';

export function approverProviders (email, approve) {
    return (dispatch)=> {
        dispatch(loading(true));
        return fetch('/api/admin/approve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': window.localStorage.getItem('token')
            },
            body: JSON.stringify({
                email: email,
                approved: approve
            })
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
        type: PROVIDER_APPROVAL_IS_LOADING,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: PROVIDER_APPROVAL_IS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: PROVIDER_APPROVAL_IS_FAILURE,
        payload: err
    }
}