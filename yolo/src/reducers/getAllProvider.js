/**
 * @fileoverview Reducer for getting all the approved providers.
 */
import { 
    GET_ALL_APPROVED_PROVIDER,
    GET_ALL_APPROVED_PROVIDER_IS_LOADING,
    GET_ALL_APPROVED_PROVIDER_IS_SUCCESS,
    GET_ALL_APPROVED_PROVIDER_IS_FAILURE
} from '../types/provider';

import { 
    FILTER_PROVIDER_BY_COUNTRY, FILTER_PROVIDER_BY_SEARCH,
    FILTER_BY_FINANCIAL_SERVICES, FILTER_BY_BUSINESS_SERVICES
} from '../types/utils';

let defaultState = {
    isLoading: false,
    error: '',
    success: ''
}

const getAllApprovedProviderReducer = (state=defaultState, action) => {
    if(action.type === GET_ALL_APPROVED_PROVIDER) {
        return {
            ...state
        }
    }
    if(action.type === GET_ALL_APPROVED_PROVIDER_IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === GET_ALL_APPROVED_PROVIDER_IS_FAILURE) {
        return {
            ...state,
            error: action.payload
        }
    }
    if(action.type === GET_ALL_APPROVED_PROVIDER_IS_SUCCESS) {
        return {
            ...state,
            success: action.payload
        }
    }
    if(action.type === FILTER_PROVIDER_BY_COUNTRY) {
        return {
            ...state,
            success: state.success.filter(item=> {
                return item.country === action.payload
            })
        }
    }
    if(action.type === FILTER_PROVIDER_BY_SEARCH) {
        switch(action.payload.selectedCategory) {
            case 'orgName':
                return {
                    ...state,
                    success: state.success.filter(item=> {
                        return item.OrganizationName.indexOf(action.payload.item) > - 1
                    })
                }
            case 'name':
                return {
                    ...state,
                    success: state.success.filter(item=> {
                        return item.fullName.indexOf(action.payload.item) > - 1
                    })
                }
            default:
                return {
                    ...state
                }
        }
    }
    if(action.type === FILTER_BY_FINANCIAL_SERVICES) {
        return {
            ...state,
            success: state.success.filter(item=> {
                return item.servicesOffered.includes(action.payload)
            })
        }
    }
    if(action.type === FILTER_BY_BUSINESS_SERVICES) {
        return {
            ...state,
            success: state.success.filter(item=> {
                return item.partnerType === action.payload
            })
        }
    }
    return state;
}

export default getAllApprovedProviderReducer;
