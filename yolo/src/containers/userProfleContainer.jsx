import React from 'react';
import UserProfile from '../components/userProfile/userProfile';
import * as updateUserAction from '../actions/userUpdateAction';
import * as getUserDetailsAction from '../actions/getUserDetailsAction';
import * as getCountriesReducer from '../actions/getUtilsAction';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserProfileContainer extends React.Component {
    render() {
        return(
            <UserProfile 
                userUpdate = {this.props.userUpdate}
                getUserDetails = {this.props.getUserDetails}
                getCountries={this.props.getCountriesList}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        userUpdate: updateUserAction.userUpdate,
        getUserDetails: getUserDetailsAction.getUserDetails,
        getCountriesList: getCountriesReducer.getCountriesList,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserProfileContainer);
