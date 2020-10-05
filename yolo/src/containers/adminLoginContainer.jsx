import React from 'react';
import AdminLogin from '../components/AdminLogin/AdminLogin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminLogin from '../actions/adminLoginAction';

class AdminLoginContainer extends React.Component {
    render() {
        return(
            <AdminLogin 
                adminLogin ={this.props.adminLogin}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        adminLogin: adminLogin.adminLogin
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AdminLoginContainer);
