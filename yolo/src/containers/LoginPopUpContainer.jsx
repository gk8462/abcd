import React from 'react';
import {connect} from 'react-redux';
import * as userLogin from '../actions/userLoginAction';
import LoginPopUp from '../components/shared/LoginPopUp/LoginPopUp';
import {bindActionCreators} from 'redux';

class LoginPopUpContainer extends React.Component {
    render() {
        return (
            <LoginPopUp userLogin={this.props.userLogin}/>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        userLogin: userLogin.userLogin
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPopUpContainer);