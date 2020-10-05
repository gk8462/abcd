import React from 'react';
import {
    Paper, Avatar, Icon,
    Container, Grid, Card, CardHeader, CardContent,
    TextField, Select, MenuItem, CardActions, Link, Button,Snackbar
} from '@material-ui/core';
import { store } from '../../store';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class UserProfile extends React.Component {
    constructor(props) {
        super();
        this.state = {
            tabValue: 0,
            userDetails: [],
            countries: [],
            name: '',
            email: '',
            photo:'',
            password: '',
            confirm_password: '',
            errorMessage: '',
            countries_code:'',
            phone_number: '',
            disableName: true,
            disableEmail: true,
            disableNumber: true,
            open:false,
            errors: {
                name: '',
                email: '',
                password: '',
                confirm_password: '',
                phone_number: '',
                message: ''
            },
            updateDetails:true
        }
    }

    delay = (ms) => new Promise(resolve =>
        setTimeout(resolve, ms)
    );

    componentDidMount() {
        document.title = 'Yoloj - User Profile';
        this.props.getUserDetails();
        this.props.getCountries();
        store.subscribe(() => {
            this.setState({
                userDetails: store.getState().getUserDetails.success
            })
            this.setState({
                countries: store.getState().getCountries.countries
            })
        })
    
        if(localStorage.getItem('userProfile')==='false'){
            setTimeout(() => {
                this.setState({
                    name: this.state.userDetails[0].name,
                    email: this.state.userDetails[0].email,
                    phone_number: this.state.userDetails[0].phone_number.slice(-10,),
                    countries_code:this.state.userDetails[0].phone_number.slice(0,-10),
                })
            }, 1000);
        }
    }

    handleClose = (event, reason) => {
      
        if (reason === 'clickaway') {
          return;
        }
        
        this.setState({open: false});
    
       // window.location.reload();
    };

    change = (e) => {
        const { name, value } = e.target;
        // console.log(this.state.countries_code);
        let errors = this.state.errors;
        switch (name) {
            case 'name':
                // errors.name = value.length < 3 ? 'Name should be more than 3 characters long': null;
                if (value.length < 3) {
                    errors.name = 'Name should be more than 3 characters long'
                } else {
                    this.setState({ name: value });
                    errors.name = '';
                }
                break;
            case 'email':
                // errors.email = value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) ? '' : 'Invalid Email Address';
                if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
                    errors.email = 'Invalid Email Address';
                } else {
                    this.setState({ email: value });
                    errors.email = '';
                }
                break;
            case 'phone_number':
                // errors.phone_number = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) ? '' : 'Invalid phone number.';
                if (!value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
                    errors.phone_number = 'Invalid phone number.';
                } else {
                    this.setState({ phone_number: value });
                    errors.phone_number = '';
                }
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value }, () => {
            return null;
        });
        this.handleUpdate();
    }

    //UI part is done need to work on put and 
    updateProfile=(e)=>{
        e.preventDefault();
        console.log("update profile")
        this.props.userUpdate( this.state.email, this.state.name,this.state.phone_number,this.state.country_code,this.state.photo );
        store.subscribe(()=>{
            if(store.getState().userUpdate.error) {
                this.setState({open: true});
                this.setState({
                    errorMessage: store.getState().userUpdate.error
                })
            } else{ 
                console.log("update profile--->",this.state.userDetails)
                
                this.setState({open: true});
                this.setState({
                    errorMessage: "Successfully Updated ! Bye Bye",
                    disableName:true,
                    disableEmail:true,
                    disableNumber:true,
                    updateDetails: true
                })
            }
        })
    }

    handleUpdate =()=>{
        // console.log('inside func')
        if(this.state.disableName===false || this.state.disableEmail===false || this.state.disableNumber===false){
            
            if(this.state.errors.name == "" && this.state.errors.email == "" && this.state.errors.phone_number == ""){
                
                this.setState({updateDetails:false});
            }else{

                this.setState({updateDetails:true});
            }
        }
       
        
    }


    

    handleAccessCode = (e)=> {
        
        this.setState({countries_code:e.target.value});
    }

    render() {
        return (
            <div style={{ width: 900, marginLeft: 300 }}>
                <Paper square>
                    {
                        !this.state.userDetails.length ? <div>Please wait
                        </div> :
                            <div>
                                <div style={{ paddingTop: 150, height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }} className="rootCont">
                                    <Grid container>
                                        <Grid item style={{ marginLeft: '25%' }}>
                                            <Card style={{ minWidth: 800 }}>
                                                <CardHeader title="Personal Information" >
                                                </CardHeader>
                                                <CardContent>
                                                    <AccountCircleTwoToneIcon
                                                        color="primary"
                                                        style={{ fontSize: 100 }}
                                                    />
                                                    <Form onSubmit={(e)=>{this.updateProfile(e)}}>
                                                    <Form.Group controlId="formGroupName">
                                                        <Row>
                                                            <Col md={1}>
                                                                <Form.Label>Name</Form.Label>
                                                            </Col>
                                                        </Row>
                                                        <Row className="show-grid">
                                                            <Col md={10}>
                                                                <Form.Control type="name"
                                                                    placeholder="Enter Name"
                                                                    name='name'
                                                                    value={this.state.name}
                                                                    disabled={this.state.disableName}
                                                                    onChange={(e) => this.change(e)} />
                                                            </Col>
                                                            <Col md={2}>
                                                                <Button color="secondary" onClick={() => { this.setState({ disableName: false })}}>Edit</Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col className='text-danger'>
                                                                <Form.Label>{this.state.errors.name}</Form.Label>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group controlId="formGroupEmail">
                                                        <Row>
                                                            <Col md={1}>
                                                                <Form.Label>Email</Form.Label>
                                                            </Col>
                                                        </Row>
                                                        <Row className="show-grid">
                                                            <Col md={10}>
                                                                <Form.Control type="email"
                                                                    placeholder="Enter email"
                                                                    name='email'
                                                                    value={this.state.email}
                                                                    disabled={this.state.disableEmail}
                                                                    onChange={(e) => this.change(e)} />
                                                            </Col>
                                                            <Col md={2}>
                                                                <Button color="secondary" onClick={() => { this.setState({ disableEmail: false })}}>Edit</Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col >
                                                                <Form.Label className='text-danger'>{this.state.errors.email}</Form.Label>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group controlId="formGroupPhoneNumber">
                                                        <Row>
                                                            <Col md={2}>
                                                                <Form.Label>Phone number</Form.Label>
                                                                {/* Phone Number */}
                                                            </Col>
                                                        </Row>
                                                        <Row className="show-grid">
                                                            <Col md={10}>
                                                                <Row className="show-grid">
                                                                    <Col md={2}>
                                                                        <Form.Control as="select" custom
                                                                         disabled={this.state.disableNumber}
                                                                         value={this.state.countries_code}
                                                                        onChange={this.handleAccessCode}
                                                                        >
                                                                            {
                                                                                (this.state.countries && this.state.countries.length) ? this.state.countries.map((item, index) => {
                                                                                    return <option key={index} value={item.dial_code} autoWidth={true}>{item.dial_code}</option>
                                                                                }) : <span>Loading</span>
                                                                            }
                                                                        </Form.Control>
                                                                       
                                                                    </Col>
                                                                    <Col md={10}>
                                                                        <Form.Control
                                                                            type="number"
                                                                            name='phone_number'
                                                                            placeholder="Enter phone number"
                                                                            value={this.state.phone_number}
                                                                            disabled={this.state.disableNumber}
                                                                            onChange={(e) => this.change(e)} />
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md={2}>
                                                                <Button color="secondary" onClick={() => { this.setState({ disableNumber: false }) }}>Edit</Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col >
                                                                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                                                <Form.Label className='text-danger'>{this.state.errors.phone_number}</Form.Label>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <br/>
                                                    <Button variant="contained" type="submit" color="primary" disabled={this.state.updateDetails} onClick={()=>{console.log("user  -->",this.state.userDetails)}} >Update</Button>
                                                    </Form>

                                                    {/* <form noValidate autoCapitalize="off"> */}
                                                        {/* <TextField
                                                            id="name"
                                                            label="Enter your Name"
                                                            name="name"
                                                            fullWidth
                                                            type="text"
                                                            autoFocus
                                                            required
                                                            value={this.state.userDetails[0].name}
                                                        /> */}
                                                        {/* <TextField
                                                            id="email"
                                                            label="Enter your email"
                                                            name="email"
                                                            fullWidth
                                                            type="email"
                                                            value={this.state.userDetails[0].email}
                                                            autoFocus
                                                            required
                                                        /> */}
                                                        {/* <Grid item xs={4} style={{ display: 'flex' }}>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={this.state.country_code}
                                                                style={{ minWidth: 150 }}
                                                            >
                                                                {
                                                                    (this.state.countries && this.state.countries.length) ? this.state.countries.map((item, index) => {
                                                                        return <MenuItem key={index} value={item.dial_code} autoWidth={true}>{item.dial_code}</MenuItem>
                                                                    }) : <span>Loading</span>
                                                                }
                                                            </Select>
                                                            <TextField
                                                                id="phone_number"
                                                                label="Enter your Phone number"
                                                                name="phone_number"
                                                                fullWidth
                                                                className="phoneNumber"
                                                                value={this.state.userDetails[0].phone_number}
                                                                autoFocus
                                                                required
                                                                style={{ minWidth: 800 }}
                                                            />
                                                        </Grid> */}
                                                        {/* <br /> */}
                                                        
                                                    {/* </form> */}
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                    }
                </Paper>
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
