import React from 'react';
import ProviderLogin from '../components/ProviderLogin/ProviderLogin';
import { connect } from 'react-redux';
import * as providerLoginAction from '../actions/loginProviderAction';
import { bindActionCreators } from 'redux';

class ProviderLoginContainer extends React.Component {
    render() {
        
        return(
            <ProviderLogin 
                providerLogin = {this.props.providerLogin}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        providerLogin: providerLoginAction.providerLogin
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(ProviderLoginContainer);