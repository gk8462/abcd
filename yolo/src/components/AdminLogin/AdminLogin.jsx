import React from 'react';
import { 
    Grid, Container,
    Card, TextField, Typography,
    CardHeader, CardContent,
    Button, Snackbar,Link
} from '@material-ui/core';
import HeaderContainer from '../../containers/headerContainer';
import { history, store } from '../../store';

import logo from "../../assets/img/Logo.png";
import './AdminLogin.css';



var button_style={

    backgroundColor: '#ff9933', 
    color: '#fff',
    padding: '10px 0px 10px 0px',
    width: '80%',
    borderRadius: '1px'


}



export default class AdminLogin extends React.Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
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
        document.title = 'Yolo - Admin Login';
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({open: false});
    };

    login = (e) => {
        e.preventDefault();
        this.props.adminLogin(this.state.email, this.state.password);
        store.subscribe(()=> {
            if(store.getState().adminLogin.error) {
                this.setState({
                    open: true
                })
                this.setState({
                    errorMessage: store.getState().adminLogin.error
                })
            }
            if(store.getState().adminLogin.success.status === true) {
                window.localStorage.setItem('token', store.getState().adminLogin.success.token);
                history.push('/admin/dashboard');
            }
        })
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

    render() {
        return(
            <div>
                <HeaderContainer />


                <div class="section box_shadow">

                <div class="login_background" >
                    
                <div class="sub_login_background" >

                <div class="sub_section_content_login_background">
                                
                                <br/>
                                <Typography variant="h5">YoloJ <img src ={logo} style={{width: '16px', height: '16px'}}/></Typography>

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
                    Admin Sign In
                </Typography>    

                <Grid container
                    className="rootLoginHead"
                    alignItems="center"
                    justify="center"
                    alignContent="center">
                    <Grid item
                        xs={12} 
                        alignContent="center" 
                        container
                        justify="center" 
                        alignItems="center"
                    >
                        <Container fixed>
                           
                                <CardContent>
                                    <form noValidate autoCapitalize="off" onSubmit={(e) => this.login(e)}>
                                        <TextField
                                            id="email"
                                            label="Enter your Email Address"
                                            name="email"
                                            type="email"
                                            fullWidth
                                            variant="outlined"
                                            size="small"
                                            className="labelRoot"
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
                                            name="password"
                                            fullWidth
                                            variant="outlined"
                                            size="small"
                                            type="password"
                                            error={this.state.errors.password}
                                            helperText={this.state.errors.password}
                                            autoFocus
                                            required
                                            onChange={(e)=> this.change(e)}
                                            style={{marginBottom: 50}}
                                            value={this.state.password}
                                            style={{marginBottom: 15,width: '80%',borderRadius: '1px'}}
                                    />
                                    <Button variant="contained" type="submit" fullWidth style={button_style} type="submit">Login</Button>
                                   </form>
                                </CardContent>
                         
                        </Container>
                    </Grid>
                </Grid>

                </div>


                </div>

                </div>



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