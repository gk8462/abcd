/**
 * @fileoverview Action for register Admins.
 */

import { 
    LOADING_TOGGLE, 
    NETWORK_ACCESS_FAILURE,
    NETWORK_ACCESS_SUCCESS 
} from '../types/auth';

export function registerAdmin (name, email, password, phone_number) {
    return(dispatch) => {
        dispatch(loading(true));
        return fetch('/api/admin/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone_number: phone_number
            })
        }).then(res=>{
            if(res.status === 201) {
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
        }).catch(error=> {
            dispatch(loading(false));
            dispatch(isError(error));
        })
    }
}

export function loading(loading) {
    return {
        type: LOADING_TOGGLE,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: NETWORK_ACCESS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: NETWORK_ACCESS_FAILURE,
        payload: err
    }
}