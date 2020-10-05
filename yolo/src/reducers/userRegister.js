import { 
    REGISTER_USER, LOADING_TOGGLE, 
    NETWORK_ACCESS_SUCCESS, NETWORK_ACCESS_FAILURE 
} from '../types/auth';

let defaultState = {
    name: '',
    email: '',
    password: '',
    isLoading: false,
    error: '',
    success: ''
}

const userRegisterReducer = (state=defaultState, action) =>{
    if(action.type === REGISTER_USER) {
        return {
            ...state,
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            password: action.password,
        }
    }
    if(action.type === LOADING_TOGGLE) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === NETWORK_ACCESS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    if(action.type === NETWORK_ACCESS_FAILURE) {
        return {
            ...state,
            error: action.payload
        }
    }
    return state;
}

export default userRegisterReducer;