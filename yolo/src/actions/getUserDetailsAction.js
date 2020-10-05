/**
 * @fileoverview Action for getting user details after login.
 */

import { 
    GET_USER_DETAILS_IS_ERROR,
    GET_USER_DETAILS_IS_LOADING,
    GET_USER_DETAILS_IS_SUCCESS,
} from '../types/details';

export function getUserDetails() {
    return (dispatch) => {
        dispatch(loading(true));
        return fetch('/api/user/details',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': window.localStorage.getItem('token')
            }
        }).then(res=> {
            if(res.status === 200){
                return res.json().then(res=> {
                    dispatch(loading(false));
                    dispatch(isSuccess(res));
                })
            } else if(res.status === 500) {
                dispatch(loading(false));
                dispatch(isError('Something went wrong from our end. Please try again later.'))
            } else {
                dispatch(loading(false));
                dispatch(isSuccess(res));
            }
        }).catch(err=> {
            dispatch(loading(false));
            dispatch(isError(err));
        })
    }
}

export function loading(loading) {
    return {
        type: GET_USER_DETAILS_IS_LOADING,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: GET_USER_DETAILS_IS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: GET_USER_DETAILS_IS_ERROR,
        payload: err
    }
}