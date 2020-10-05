/**
 * @fileoverview Action for getting all the business types.
 */

import { 
    GET_BUSINESS_TYPE_SERVICE_LOADING_TOGGLE,
    GET_BUSINESS_TYPE_SERVICE_NETWORK_ACCESS_SUCCESS,
    GET_BUSINESS_TYPE_SERVICE_NETWORK_ACCESS_FAILURE
} from '../types/utils';

export function getBusinessTypes() {
    return(dispatch) => {
        dispatch(loading(true));
        return fetch('/api/common/business', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=> {
            console.log(res)
            if(res.status === 200) {
                return res.json().then(res=> {
                    console.log(res);
                    dispatch(loading(false));
                    dispatch(isSuccess(res));
                })
            } else if(res.status === 500) {
                dispatch(loading(false));
                dispatch(isError('Something went wrong from our end. Please try again later.'))
            } else {
                dispatch(loading(false));

                return res.json().then(res=> {
                    console.log(res);
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
        type: GET_BUSINESS_TYPE_SERVICE_LOADING_TOGGLE,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: GET_BUSINESS_TYPE_SERVICE_NETWORK_ACCESS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: GET_BUSINESS_TYPE_SERVICE_NETWORK_ACCESS_FAILURE,
        payload: err
    }
}