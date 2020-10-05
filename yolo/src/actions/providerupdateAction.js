/**
 * @fileoverview Action for user updates
 */

import { 
    PROVIDER_UPDATE_IS_ERROR, 
    PROVIDER_UPDATE_IS_LOADING, 
    PROVIDER_UPDATE_IS_SUCCESS 
} from '../types/provider';

export function providerUpdate(name) {
    return(dispatch) => {
        dispatch(loading(true));
        return fetch('/api/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': window.localStorage.getItem('token')
            },
            body: JSON.stringify({

                name: name,
         
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
        type: PROVIDER_UPDATE_IS_LOADING,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: PROVIDER_UPDATE_IS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: PROVIDER_UPDATE_IS_ERROR,
        payload: err
    }
}