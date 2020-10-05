import React from 'react';
import { connect } from 'react-redux';
import * as userLogin from '../actions/userLoginAction';

import Login from '../components/Login/Login';
import { bindActionCreators } from 'redux';

class LoginContainer extends React.Component {
    render() {
        return (<Login 
            userLogin = {this.props.userLogin}
        />)
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        userLogin: userLogin.userLogin
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginContainer);