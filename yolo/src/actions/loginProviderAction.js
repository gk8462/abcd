/**
 * @fileoverview Action for Provider login.
 */

import {
    PROVIDER_LOGIN_LOADING_TOGGLE,
    PROVIDER_LOGIN_IS_FAILURE, 
    PROVIDER_LOGIN_IS_SUCCESS
} from '../types/provider';

export function providerLogin(email, password) {
    return (dispatch) => {
        dispatch(loading(true));
        return fetch('/api/auth/provider/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
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
        type: PROVIDER_LOGIN_LOADING_TOGGLE,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: PROVIDER_LOGIN_IS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: PROVIDER_LOGIN_IS_FAILURE,
        payload: err
    }
}