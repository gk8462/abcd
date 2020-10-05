/**
 * @fileoverview Action for Admin Login 
 */

import { 
    ADMIN_LOGIN_IS_ERROR,
    ADMIN_LOGIN_IS_LOADING, ADMIN_LOGIN_IS_SUCCESS
} from '../types/admin';

export function adminLogin(email, password) {
    return (dispatch) => {
        dispatch(loading(true));
        return fetch('/api/admin/login', {
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
                return res.json().then(res=>{
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
        type: ADMIN_LOGIN_IS_LOADING,
        payload: loading
    }
}

export function isError(err) {
    return {
        type: ADMIN_LOGIN_IS_ERROR,
        payload: err
    }
}

export function isSuccess(success) {
    return {
        type: ADMIN_LOGIN_IS_SUCCESS,
        payload: success
    }
}