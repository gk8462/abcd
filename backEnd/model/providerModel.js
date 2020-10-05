/**
 * @fileoverview Mongoose model for storing patner data.
 */

const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    partnerId: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
        min: [3, "Invalid name provided"],
        validate: {
            validator: (fullName)=> {
                if(fullName.length > 3) {
                    return true;
                } else {
                    return false;
                }
            },
            message: props => `${props.value} is an invalid name. Please try again.`
        }
    },
    password: { 
		type: String, 
		required: true,
		validate: {
            validator: (password)=>{
                return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);
            },
            message: props => `${props.value} is not a valid password. Please use a valid password.`
        }
	}, 
	email: { 
		type: String,
        required: true,
        unique: true,
		validate: {
            validator: (email) => {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            },
            message: props => `${props.value} is not a valid email. Please use a valid email.`
        }
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true
    },
    Fees: {
        type: String,
        required: true,
        //unique: true
    },
    City: {
        type: String,
        required: true,
        
    },
    role: {
        type: Number,
        required: true,
        default: 2
    },
    country: {
        type: String,
        required: true
    },
    ALineOne: {
        type: String,
        required: true
    },
    ALineTwo: {
        type: String,
        required: true
    },
    PinCode: {
        type: String,
        required: true
    },
    OrganizationName: {
        type: String,
        required: true
    },
    OrganizationAddress: {
        type: String,
        required: true
    },
    OrganizationRegNumber: {
        type: String,
        required: true
    },
    idType: {
        type: String,
        required: true,
    },
    servicesOffered: {
        type: Array,
        required: true
    },
    providerIdentityImg: {
        type: String,
        required: true
    },
    partnerType: {
        type: Array,
        required: true,
        
    },
    busChecked: {
        type: Array,
        required: true,
        
    },
    indChecked: {
        type: Array,
        required: true,
        
    },
    OrganizationLogo: {
        type: String,
        required: false
    },
    approved: {
        type: Boolean,
        required: true,
        default: false
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('providers', partnerSchema);
