import React from 'react';
import { TextField, Button, Dialog, Grid, Link } from '@material-ui/core'
import { store, history } from '../../../store';
import { TOGGLE_LOGIN_DIALOG } from '../../../types/utils';
import './LoginPopUp.css';

export default class LoginPopUp extends React.Component {
    constructor(props) {
        super();
        this.state = {
            open: false,
            email: '',
            password: '',
            errorMessage: '',
            errors: {
                email: '',
                password: ''
            }
        }
    }

    componentDidMount () {
        store.subscribe(()=> {
            this.setState({open: store.getState().utils.loginDialog});
        })
    }

    navigateToRegister = () => {
        history.push('/register');
    }

    login = (e) => {
        e.preventDefault();
        this.props.userLogin(this.state.email, this.state.password);
        store.subscribe(()=> {
            if(store.getState().userLogin.error) {
                this.setState({
                    open: true
                })
                this.setState({
                    errorMessage: store.getState().userLogin.error
                })
            }
            if(store.getState().userLogin.success.status === true) {
                window.localStorage.setItem('token', store.getState().userLogin.success.token);
                this.setState({
                    open: false
                })
                window.localStorage.setItem('userProfile', true);
                window.location.reload(false);
                history.push('/dashboard');
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

    handleClose = () => {
        store.dispatch({
            type: TOGGLE_LOGIN_DIALOG,
            payload: !this.state.open
        })
    }

    render() {
        return(
            <Dialog open={this.state.open} fullWidth={true} onClose={this.handleClose} maxWidth="sm" className="rootDialog">
                <Grid container>
                    <Grid item xs={5}>
                        <img src={require('../../../assets/Login.jpeg')} alt="loginImage" style={{width:250, height:500, display:"block"}}/>
                    </Grid>
                    <Grid item xs={7} style={{alignContent:'center', paddingLeft:30}}>
                        <form noValidate autoCapitalize="off" onSubmit={(e) => this.login(e)} style={{marginTop: 100}}>
                            <TextField
                                id="email"
                                label="Enter your Email Address"
                                name="email"
                                type="email"
                                className="labelRoot"
                                error={this.state.errors.email}
                                helperText={this.state.errors.email}
                                autoFocus
                                required
                                onChange={(e)=> this.change(e)}
                                value={this.state.email}
                                style={{width: 300}}
                            />
                            <TextField
                                id="password"
                                label="Enter your password"
                                name="password"
                                type="password"
                                error={this.state.errors.password}
                                helperText={this.state.errors.password}
                                autoFocus
                                required
                                onChange={(e)=> this.change(e)}
                                style={{marginBottom: 50, width: 300}}
                                value={this.state.password}
                            />
                            <Button 
                                variant="contained" type="submit" 
                                style={{
                                    marginLeft:50, minWidth:200,
                                    backgroundColor: '#fb641b', color:'#fff'
                                }}>Login
                            </Button>
                        </form>
                        <Link href="/register" underline='hover' style={{
                            position:'absolute',
                            bottom:5,
                            marginBottom:10,
                            fontSize: 15,
                            fontWeight: 30
                            }}>New to Yoloj ? Create an account</Link>
                    </Grid>
                </Grid>
        </Dialog>
        )
    }
}
