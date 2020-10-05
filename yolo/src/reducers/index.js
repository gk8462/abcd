/**
 * @fileoverview Root reducer.
 */

import { combineReducers } from 'redux';

import isLoggedInReducer from './isLoggedIn';
import userRegisterReducer from './userRegister';
import userLoginReducer from './userLogin';
import getCountriesReducer from './getCountries';
import getFinancialServiceReducer from  './getFinancialServices';
import getBusinessTypeReducer from './getBusinessTypes';
import registerProviderReducer from  './providerRegister';
import loginProviderReduer from './providerLogin';
import searchProviderByNameReducer from './searchProvidersByName';
import adminLoginReducer from './adminLogin';
import getUserDetailsReducer from './getUserDetails';
import utilsReducer from './utils';
import getUnapprovedProvidersReducer from './getUnapprovedList';
import approveProviderReducer from './approveProvider';
import updateUserReducer from './userUpdate';
import getAllApprovedProviderReducer from './getAllProvider';

export default combineReducers({
    getCountries: getCountriesReducer,
    isLoggedIn: isLoggedInReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    getFinancialService: getFinancialServiceReducer,
    getBusinessTypes: getBusinessTypeReducer,
    registerProvider: registerProviderReducer,
    providerLogin: loginProviderReduer,
    searchProviderByName: searchProviderByNameReducer,
    adminLogin: adminLoginReducer,
    getUserDetails: getUserDetailsReducer,
    utils: utilsReducer,
    getUnapproved: getUnapprovedProvidersReducer,
    approveProvider: approveProviderReducer,
    userUpdate: updateUserReducer,
    getAllApprovedProvider: getAllApprovedProviderReducer
});
