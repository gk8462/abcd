/**
 * @fileoverview Reducer for user loggedIn toggle.
 */

let defaultState={
    isLoggedIn: false,
}

/**
 * @exports isLoggedInReducer
 * @description Checks if user is logged in or not
 * @param {*} state 
 * @param {*} action 
 * @returns {*} state
 */
const isLoggedInReducer = (state=defaultState, action)=> {
    if(action.type === 'CHECK_LOGGED_IN') {
        return {
            ...state,
            isLoggedIn: action.isLoggedIn
        }
    }
    return state;
}

export default isLoggedInReducer;