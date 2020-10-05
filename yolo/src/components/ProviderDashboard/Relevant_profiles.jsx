import React from 'react';
import HeaderContainer from '../../containers/headerContainer';
import { 
    Button, Snackbar, Grid,
    Card, Avatar, CardActionArea,
} from '@material-ui/core';

import classNames from "classnames";

import { store } from '../../store';

import log from '../../utils/logger.service'

import {Link} from 'react-router-dom';
import { classList } from '@syncfusion/ej2-base';

import { withStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import CountrySelect from "../select/country";

import Typography from '@material-ui/core/Typography';


export default class Relevant_profiles extends React.Component {
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
  
        //this.props.getAllProviders();
        
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
    

    change = (e) => {
        const { name, value } = e.target;
        switch(name) {
            case 'location':
                this.setState({location: value});
            break;
            case 'name':
                this.setState({name: value});
                break;
            default:
                break;
        }
    }

    handleClose = () => {
        this.setState({dialogOpen: false})
    }

    handleClickOpen = () => {
        this.setState({dialogOpen: true});
    }


    render() {
        
        const { classes } = this.props;

        return (
            
                (this.state.providerData && this.state.providerData.length) ? this.state.providerData.map((itemz, index)=> {


                    return (
                        <span>{itemz.fullName}</span>
                        )
                    }) : <span>We do not have enough data right now. Please check back later.</span>
        
        )

    }
}