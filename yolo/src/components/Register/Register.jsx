import React from 'react';
import HeaderContainer from '../../containers/headerContainer';
import './Register.css';
import { Grid, Container, 
        InputLabel, Card, 
        Select, TextField, 
        MenuItem, CardHeader, 
        CardContent, CardActions, 
        Snackbar, Button, Link
} from '@material-ui/core';
import { history, store } from '../../store';
import log from '../../utils/logger.service';

export default class Register extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            errorMessage: '',
            phone_number: '',
            countries: [],
            formValid: false,
            country_code: '+91',
            open: false,
            errors: {
                name: '',
                email: '',
                password: '',
                confirm_password: '',
                phone_number: '',
                message: ''
            }
        }
    }

    componentDidMount() {
        log('User on Registration Page')
        this.props.getCountries();
        store.subscribe(()=>{
            this.setState({countries: store.getState().getCountries.countries});
        })
    }

    handleAccessCode = (e)=> {
        this.setState({country_code: e.target.getAttribute('data-value')});
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({open: false});
    };

    navigateToLogin = () => {
        history.push('/login');
    }

    signUp = (e) => {
        e.preventDefault();
        this.props.userRegister(this.state.name, this.state.email, this.state.password, this.state.country_code+this.state.phone_number);
        store.subscribe(()=>{
            if(store.getState().userRegister.error) {
                this.setState({open: true});
                this.setState({
                    errorMessage: store.getState().userRegister.error
                })
            } else{ 
                history.push('/');
            }
        })
    }

    change = (e) => {
        const { name, value } = e.target;
        let errors = this.state.errors;
        switch(name) {
            case 'name':
                errors.name = value.length < 3 ? 'Name should be more than 3 characters long': null;
                break;
            case 'email':
                errors.email = value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) ? '' : 'Invalid Email Address';
                break;
            case 'password':
                errors.password = value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/) ? '' : 'Password should be atleast 7 characters with alphanumeric characters';
                break;
            case 'confirm_password':
                errors.confirm_password = (this.state.password === value) ? '' : 'Confirm Password should be equal to password';
                break;
            case 'phone_number':
                errors.phone_number = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) ? '' : 'Invalid phone number.';
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
                <div style={{backgroundColor:'#20ABC7', paddingTop:200, height:'100%', width:'100%', position: 'absolute',top: 0, left: 0}} className="rootCont">
                    <Grid container style={{justifyContent: 'center'}}>
                        <Grid item  style={{marginLeft:100}}>
                        <Card>
                            <CardHeader title="It seems you are new here! Register to Continue" />
                            <CardContent>
                                <form noValidate autoCapitalize="off" onSubmit={(e) => this.signUp(e)}>
                                    <TextField 
                                        id="name"
                                        label="Enter your Name"
                                        name="name"
                                        fullWidth
                                        type="text"
                                        error={this.state.errors.name}
                                        helperText={this.state.errors.name}
                                        autoFocus
                                        required
                                        onChange={(e)=> this.change(e)}
                                    />
                                    <TextField
                                        id="email"
                                        label="Enter your email"
                                        name="email"
                                        fullWidth
                                        type="email"
                                        error={this.state.errors.email}
                                        helperText={this.state.errors.email}
                                        autoFocus
                                        required
                                        onChange={(e)=> this.change(e)}
                                    />
                                    <TextField
                                        id="password"
                                        label="Enter your password"
                                        name="password"
                                        fullWidth
                                        type="password"
                                        error={this.state.errors.password}
                                        helperText={this.state.errors.password}
                                        autoFocus
                                        required
                                        onChange={(e)=> this.change(e)}
                                    />
                                    <TextField 
                                        id="confirm_password"
                                        label="Re-Enter your password"
                                        name="confirm_password"
                                        fullWidth
                                        type="password"
                                        error={this.state.errors.confirm_password}
                                        helperText={this.state.errors.confirm_password}
                                        autoFocus
                                        required
                                        onChange={(e)=> this.change(e)}
                                    />
                                    <Grid item xs={4} style={{display:'flex'}}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.country_code}
                                            style={{minWidth:150}}
                                        >
                                            {
                                                (this.state.countries && this.state.countries.length) ? this.state.countries.map((item, index)=>{
                                                return <MenuItem key={index} value={item.dial_code} autoWidth={true} onClick={(e)=> this.handleAccessCode(e)}>{item.dial_code}</MenuItem>
                                                }) : <span>Loading</span>
                                            }
                                        </Select>
                                        <TextField 
                                            id="phone_number"
                                            label="Enter your Phone number"
                                            name="phone_number"
                                            fullWidth
                                            type="number"
                                            className="phoneNumber"
                                            error={this.state.errors.phone_number}
                                            helperText={this.state.errors.phone_number}
                                            autoFocus
                                            required
                                            style={{minWidth:800}}
                                            onChange={(e)=> this.change(e)}
                                        />
                                    </Grid>
                                    <br />
                                    <Button variant="contained" type="submit" color="primary">Create a Free Account</Button>
                                </form>
                            </CardContent>
                            <CardActions>
                                <label>Already have an account ? </label>
                                <Link href="#" onClick={this.navigateToLogin}>Link</Link>
                            </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
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
