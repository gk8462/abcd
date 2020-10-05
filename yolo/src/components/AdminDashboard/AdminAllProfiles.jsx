import React from 'react';
import HeaderContainer from '../../containers/headerContainer';
import { 
    Button, Snackbar, Grid,
    Card, Avatar, CardActionArea,
} from '@material-ui/core';
import { store } from '../../store';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './AdminDashboard.css';


var root= {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
}
var input= {
    flex: 1,
}
var iconButton= {
    padding: 10,
}
var divider= {
    height: 28,
    margin: 4,
}

var table= {
    minWidth: 300,
  }

  export default class AllProfiles extends React.Component {
    constructor(props) {
        super();
        this.state = {
            open: false,
            errorMessage: '',
            providerData: [],
            location: '',
            dialogOpen: false,
            name: ''
        }
    }
    
    componentDidMount () {
        document.title = 'Welcome to Infosys - Yolo Network';
        this.props.getAllProvider();
        store.subscribe(()=>{
            if(store.getState().getAllApprovedProvider.error) {
                this.setState({
                    open: true
                })
                this.setState({
                    errorMessage: String( store.getState().getAllApprovedProvider.error)
                })
            } else {
                this.setState({
                    providerData: store.getState().getAllApprovedProvider.success
                })
            }
        })
    }
    
  
 
  

    render() {
        return(
            <div>  

                <Paper component="form" style={root}>
                <IconButton style={iconButton} aria-label="menu">
                <MenuIcon />
                </IconButton>
                <InputBase
                style={input}
                placeholder="Search for Profiles"
                inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" style={iconButton} aria-label="search">
                <SearchIcon />
                </IconButton>
                <Divider style={divider} orientation="vertical" />
                <IconButton color="primary" style={iconButton} aria-label="directions">
                <DirectionsIcon />
                </IconButton>
                </Paper>


                <TableContainer component={Paper}>
                    <Table style={table} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell>Photo</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>City</TableCell>
                        
                        </TableRow>
                    </TableHead>
                    <TableBody>

                {
                    (this.state.providerData && this.state.providerData.length) ? this.state.providerData.map((itemz, index)=> {

                        return (

                            <div>    
     
                                <TableRow>
                                    <TableCell style={{width: '50px'}}>
                                        <img src={itemz.providerIdentityImg} class="avatar_image"></img>
                                    </TableCell>
                                    <TableCell style={{width: '200px'}}>
                                        {itemz.fullName}
                                    </TableCell>
                                    <TableCell style={{width: '150px'}}>
                                        {itemz.partnerId}
                                    </TableCell>
                                    <TableCell style={{width: '100px'}}>
                                        {itemz.country}
                                    </TableCell>
                                    <TableCell style={{width: '100px'}}>
                                        {itemz.mobileNumber}
                                    </TableCell>
                                    <TableCell style={{width: '100px'}}>
                                        {itemz.createdOn}
                                    </TableCell>      
                                </TableRow>       
                             
                            </div>                
                        )
                    }) : <span>We do not have enough data right now. Please check back later.</span>
                }

                           
                </TableBody>
                </Table>
                </TableContainer>

            </div>
        )
    }
}
