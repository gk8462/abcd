import React from 'react';
import { 
    ExpansionPanel, ExpansionPanelDetails,
    ExpansionPanelSummary,ExpansionPanelActions,
    Chip, Button, Divider, Icon, Typography,
    Snackbar
} from '@material-ui/core';

import AdminHeader from '../shared/adminHeader/adminHeader';
import AdminApprovalContainer from '../../containers/adminApprovalContainer';

import AdminDashboardContent from './AdminDashboardContent.jsx'


export default class AdminDashboard extends React.Component {

    constructor(props) {
        super();
        this.state = {
            unapprovedProviders: []
        }
    }


    componentDidMount() {
        document.title = 'Yoloj - Admin Dashboard';
    }


    
    render() {
        return (
            <div>
                <AdminHeader />


                <div class="content" style={{paddingTop:100}}>

                    <div class="left_content">
                        <AdminDashboardContent/>
                    </div>

                    <div class="right_content box_shadow">
                        <br/><Typography variant="body" style={{color: '#4d4d4d'}}>Statistical Data</Typography>
                        <br/><br/><Divider/>
                        <br/>    
                    </div>

                    
                    
                </div>

            </div>
        )
    }
}