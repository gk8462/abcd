import React from 'react';
import AdminDashboard from '../components/AdminDashboard/AdminDashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminApproval from '../actions/approveProviderAction';
import * as getUnapprovedList from '../actions/getUnapprovedProvidersAction';

class AdminDashboardContainer extends React.Component {
    render() {
        return(
            <AdminDashboard 
                getProviderList={this.props.getProviderList}
                approveProvider={this.props.approveProvider}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getProviderList: getUnapprovedList.getUnapprovedProviderList,
        approveProvider: adminApproval.approverProviders
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AdminDashboardContainer);
