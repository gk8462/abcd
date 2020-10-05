import React from 'react';
import { connect } from 'react-redux';
import * as userRegisterReducer from '../actions/registerUserAction';
import * as getCountriesReducer from '../actions/getUtilsAction';

import Register from '../components/Register/Register';
import { bindActionCreators } from 'redux';

class RegisterContainer extends React.Component {
    render() {
        return <Register 
            userRegister={this.props.userRegister}
            getCountries={this.props.getCountriesList}
        />
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       userRegister: userRegisterReducer.registerUser,
       getCountriesList: getCountriesReducer.getCountriesList,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(RegisterContainer);