import React from 'react';
import { Component, Fragment } from "react";
import Grid from '@material-ui/core/Grid';
import { TextField, Button, Typography, LinearProgress, FormGroup } from '@material-ui/core';
import HeaderContainer from '../../containers/headerContainer';


class Search extends Component {

    state = {
        url :"",
        loading : false,
        redirect : false,
        cartItems : []
    }

    render() {

        return (
            <div>
                {this.loading &&
                <LinearProgress/>}
                <HeaderContainer />
                <Grid>
                <TextField 
                id="standard-basic"  
                placeholder="Search for Individual.." 
                variant="outlined" 
                fullWidth 
                style={{margin:"10px"}}
                onKeyPress={(ev) => {
                    console.log(`Pressed keyCode ${ev.key}`);
                    if (ev.key === 'Enter') {
                      // Do code here
                      alert("Searching")
                      this.setState({loading:true})
                      ev.preventDefault();
                    }
                  }}/>

                </Grid>
                </div>
        );
    }
}

export default Search;