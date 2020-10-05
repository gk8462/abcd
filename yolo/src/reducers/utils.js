/**
 * @fileoverview Reducer for utils actions.
 */

import { TOGGLE_LOGIN_DIALOG } from '../types/utils';

let defaultState = {
    loginDialog: false
}

const utilsReducer = (state=defaultState, action)=> {
    if(action.type === TOGGLE_LOGIN_DIALOG) {
        return {
            loginDialog: action.payload
        }
    }
    return state;
}

export default utilsReducer;