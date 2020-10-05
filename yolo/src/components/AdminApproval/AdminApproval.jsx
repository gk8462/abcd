import React from 'react';
import { 
    ExpansionPanel, ExpansionPanelDetails,
    ExpansionPanelSummary,ExpansionPanelActions,
    Chip, Button, Divider, Icon, Typography,
    Snackbar
} from '@material-ui/core';
import { store } from '../../store';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {Link} from 'react-router-dom';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';


import '../AdminDashboard/AdminDashboard.css';

var approval_link_style={
    fontSize: '14px',
    color: '#4d4d4d',
    fontweight: 'bold',
    textDecoration: 'underline'
}

export default class AdminApproval extends React.Component {

    constructor(props) {
        super();
        this.state = {
            unapprovedProviders: [],
            open: false,
            errorMessage: ''
        }
    }

    componentDidMount() {
        document.title = "Yoloj - Admin Approval Panel";
        this.props.getProviderList();
        store.subscribe(()=> {
            this.setState({unapprovedProviders: store.getState().getUnapproved.success});
        })
    }

    handleAccept = (email, state) => {
        this.props.approveProvider(email, state);
        store.subscribe(()=>{
            if(store.getState().approveProvider.error) {
                this.setState({open: true});
                this.setState({errorMessage: store.getState().approveProvider.error});
            } else {
                this.setState({open: true});
                this.setState({errorMessage: "Provider successfully Approved"});
            }
        })
        this.props.getProviderList();
    }

    handleReject = (email, state) => {
        this.props.approveProvider(email, state);
    }

    handleClose = (e, r) => {
        this.setState({open: false});
    }

    render() {
        return(
            <div>
                {
                    (this.state.unapprovedProviders && this.state.unapprovedProviders.length) ? this.state.unapprovedProviders.map((item, index)=> {
                        return (
                            <div class="unapproved_providers_div" key={index}>

                                <div class="unapproved_providers_div_left">
                                    <img class="avatar_image" src={item.providerIdentityImg}/>
                                </div>

                                
                                <div class="unapproved_providers_div_right">

                                <Typography variant="body" style={{fontSize: '13px'}} color="text">
                                    <strong><span style={{color: '#006699'}}>{item.fullName}</span></strong> has joined Yoloj. From {item.City}  
                                    &nbsp;& has requested to approve for the verification.
                                </Typography> 
                                <br/>

                                <Typography variant="caption">
                                    Works at {item.OrganizationName}&nbsp;
                                </Typography>

                                <Typography variant="caption" style={{color: '#4d4d4d'}}>  
                                    <AccessTimeIcon style={{fontSize:'12px'}}/>&nbsp;
                                    {item.createdOn}
                                </Typography>     
                                

                                <br/>
                                

                                <Link color="primary" style={approval_link_style} onClick={() => this.handleAccept(item.email, true)}>
                                    Approve&nbsp;<DoneIcon style={{fontSize: '12px'}}/>
                                </Link>&nbsp;
                                <Link color="primary" style={approval_link_style} onClick={() => this.handleReject(item.email, false)}>
                                    Reject&nbsp;<CloseIcon style={{fontSize: '13px'}}/>
                                </Link>&nbsp;
                                
                                </div>    


                            </div>
                            
                        )
                    }) : <span>No new Providers to approve.</span>
                }
             


                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={5000}
                    handleClose={(e,r)=>this.handleClose(e, r)}
                    message={this.state.errorMessage}
                    action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={(e,r)=>this.handleClose(e,r)}>
                        Hide
                        </Button>
                    </React.Fragment>
                    }
                />
            </div>
        )
    }
}
