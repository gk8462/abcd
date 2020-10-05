/**
 * @fileoverview Action for user updates
 */

import { 
    USER_UPDATE_IS_ERROR, 
    USER_UPDATE_IS_LOADING, 
    USER_UPDATE_IS_SUCCESS 
} from '../types/user';

export function userUpdate(email, name, phone_number, country, photo) {
    return(dispatch) => {
        dispatch(loading(true));
        return fetch('/api/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': window.localStorage.getItem('token')
            },
            body: JSON.stringify({
                email: email,
                name: name,
                phone_number: phone_number,
                //country: country,
                //photo: photo
            })
        }).then(res=> {
            if(res.status === 200) {
                return res.json().then(res=>{
                    dispatch(loading(false));
                    dispatch(isSuccess(res));
                })
            } else if (res.status === 500) {
                dispatch(loading(false));
                dispatch(isError(res.statusText));
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
        type: USER_UPDATE_IS_LOADING,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: USER_UPDATE_IS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: USER_UPDATE_IS_ERROR,
        payload: err
    }
}