/**
 * @fileoverview Reducer for getting all the approved providers.
 */

let defaultState = {
    isLoading: false,
    error: '',
    success: ''
}

const getProviderProfileReducer = (state=defaultState,action) => {
    
            success: state.success.filter(item=> {
                return item.partnerId === action.payload
            })

    return state;
}

export default getProviderProfileReducer;
