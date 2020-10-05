/**
 * @fileoverview Action for city updates
 */

import {
    UPDATE_CITY_LOADING_TOGGLE,
    UPDATE_CITY_NETWORK_ACCESS_SUCCESS,
    UPDATE_CITY_NETWORK_ACCESS_FAILURE
} from '../types/utils';

export function cityUpdate(city,name) {
    return (dispatch) => {
        dispatch(loading(true));
        return fetch('/api/common/city', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                city: city,
                name: name
            })
        }).then(res => {
            if (res.status === 200) {
                return res.json().then(res => {
                    dispatch(loading(false));
                    dispatch(isSuccess(res));
                })
            } else if (res.status === 500) {
                dispatch(loading(false));
                dispatch(isError(res.statusText));
            } else {
                dispatch(loading(false));
                return res.json().then(res => {
                    dispatch(isError(res));
                })
            }
        }).catch(err => {
            dispatch(loading(false));
            dispatch(isError(err));
        })
    }
}

export function loading(loading) {
    return {
        type: UPDATE_CITY_LOADING_TOGGLE,
        payload: loading
    }
}

export function isSuccess(success) {
    return {
        type: UPDATE_CITY_NETWORK_ACCESS_SUCCESS,
        payload: success
    }
}

export function isError(err) {
    return {
        type: UPDATE_CITY_NETWORK_ACCESS_FAILURE,
        payload: err
    }
}