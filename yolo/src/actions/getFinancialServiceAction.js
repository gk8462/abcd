/**
 * @fileoverview Action for getting financial services.
 */

import {
    GET_FINANCIAL_SERVICE_LOADING_TOGGLE,
    GET_FINANCIAL_SERVICE_NETWORK_ACCESS_SUCCESS, 
    GET_FINANCIAL_SERVICE_NETWORK_ACCESS_FAILURE
} from '../types/utils';

export function getFinancialServiceList() {
    return (dispatch) => {
        dispatch(loading(true));
        return fetch('/api/common/services', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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
                dispatch(isError(res.statusText));
            }
        }).catch(err=> {
            dispatch(loading(false));
            dispatch(isError(err));
        })
    }
}

export function loading(loading) {
    return {
        type: GET_FINANCIAL_SERVICE_LOADING_TOGGLE,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: GET_FINANCIAL_SERVICE_NETWORK_ACCESS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: GET_FINANCIAL_SERVICE_NETWORK_ACCESS_FAILURE,
        payload: err
    }
}