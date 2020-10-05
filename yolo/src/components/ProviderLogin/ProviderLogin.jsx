import React from 'react';
import HeaderContainer from '../../containers/headerContainer';
import './ProviderLogin.css';
import {
    Grid, Container,
    Card, TextField,
    CardHeader, CardContent, CardActions,
    Snackbar, Button, Typography
} from '@material-ui/core';
import { history, store } from '../../store';
import log from '../../utils/logger.service';


import {Link} from 'react-router-dom';
import logo from "../../assets/img/Logo.png";


var button_style={

    backgroundColor: '#0099cc', 
    color: '#fff',
    padding: '10px 0px 10px 0px',
    width: '80%',
    borderRadius: '1px'


}


export default class ProviderLogin extends React.Component {
    constructor(props) {
        super();
      
        this.state = {
            email: '',
            setemail:'',
            password: '',
            errorMessage: '',
            open: false,
            errors: {
                email: '',
                password: ''
            }
        }
    }

    componentDidMount() {
        document.title = 'Yolo - Provider Login';
        log('User is on Provider Login')

    }
    
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({open: false});
    };
    
    navigateToDashboard = () => {
        history.push('/provider/dashboard');
    }

    change = (e) => {
        const { name, value } = e.target;
        let errors = this.state.errors;
        switch(name) {
            case 'email':
                errors.email = value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) ? '' : 'Invalid Email Address';
                break;
            case 'password':
                errors.password = value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/) ? '' : 'Password should be atleast 7 characters with alphanumeric characters';
                break;
            default:
                break;
                
        }
        this.setState({errors, [name]: value}, ()=> {
            return null;
        });
    }

    login = (e) => {
        e.preventDefault();
        this.props.providerLogin(this.state.email, this.state.password);
        store.subscribe(()=> {
            if(store.getState().providerLogin.error) {
                this.setState({
                    open: true
                })
                this.setState({
                    errorMessage: store.getState().providerLogin.error
                })
            } else {
                console.log("provider profile",store.getState().providerLogin.success.partnerData)
                window.localStorage.setItem('token', store.getState().providerLogin.success.token);
                //setName(store.getState().providerLogin.success[0].name);
                window.localStorage.setItem('providerProfile', true);
                //window.localStorage.setItem('setemail',store.getState().providerLogin.success.email);
                window.localStorage.setItem('providerId',store.getState().providerLogin.success.providerId);
                //console.log("provider id  is-----",store.getState().providerLogin.success.providerId);
                window.localStorage.setItem('providerData',JSON.stringify(store.getState().providerLogin.success.partnerData));

                history.push('/');
            }
        })
    }

    render() {
        return(
            <div>
                <HeaderContainer />
          
                
                <div class="section box_shadow">


                    <div class="login_background">
                        
                        <div class="sub_login_background" >

                            <div class="sub_section_content_login_background">
                                
                                <br/>
                                <Typography variant="h5">Yoloj <img src ={logo} style={{width: '16px', height: '16px'}}/></Typography>

                                <br/><br/>
                                <Typography variant="body" style={{fontSize: '24px'}}>
                                    Manage your<br/> personal & professional Identity
                                </Typography>
                                <br/><br/>

                                <Typography varian="subtitle1" style={{fontSize: '13px'}}>
                                    Yolos delivers you the exquisite service by providing you the platform<br/>
                                    to build your peronal & professional identity to manage your individual and business<br/>
                                    expertises all over the world.
                                </Typography>

                            </div>

                        </div>

                    </div>


                    <div class="sub_section">

                        <div class="login_section">

                        <img src ={logo}/>
                    
                            <br/><br/>

                            <Typography variant="caption" style={{fontSize: '18px', color: '#4dd4d4d'}}>
                                Welcome Back Provider
                            </Typography>

                            <CardContent>
                                <form noValidate autoCapitalize="off" onSubmit={(e) => this.login(e)}>
                                    <TextField
                                        id="email"
                                        label="Enter your Email Address"
                                        variant="outlined"
                                        name="email"
                                        type="email"
                                        size="small"
                                        error={this.state.errors.email}
                                        helperText={this.state.errors.email}
                                        autoFocus
                                        required
                                        onChange={(e)=> this.change(e)}
                                        value={this.state.email}
                                        style={{marginBottom: 15,width: '80%',borderRadius: '1px'}}
                                    />
                                    
                                    <TextField
                                        id="password"
                                        label="Enter your password"
                                        variant="outlined"
                                        name="password"
                                        fullWidth
                                        size="small"
                                        type="password"
                                        error={this.state.errors.password}
                                        helperText={this.state.errors.password}
                                        autoFocus
                                        required
                                        onChange={(e)=> this.change(e)}
                                        value={this.state.password}
                                        style={{marginBottom: 15,width: '80%',borderRadius: '1px'}}
                                    />


                                <Button variant="contained" type="submit" fullWidth style={button_style}>SIGN IN</Button>
                                </form>


                            </CardContent>
                        
                                    
                        </div>

                        <div class="forget_section">
                            <label>Don't have an account ?</label>
                            <Link to={this.navigateToRegister}>&nbsp;Sign Up</Link>
                        </div>

                    </div>





                </div>


                <br/><br/>


                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={5000}
                    onClose={(e,r)=>this.handleClose(e,r)}
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