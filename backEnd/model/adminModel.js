/**
 * @fileoverview Mongoose model for admin data.
 */
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminId: {
        type: String,
        required: true
    },
    name: { 
		type: String,
		required: true,
		min: [3, "Invalid name passed. Please try again later."],
        validate: {
            validator: (name)=> {
                if(name.length > 3) {
                    return true;
                } else {
                    return false;
                }
            },
            message: props=> `${props.value} is an invalid lastName`
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
		validate: {
            validator: (email) => {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            },
            message: props => `${props.value} is not a valid email. Please use a valid email.`
        }
    },
    role: {
        type: Number,
        required: true,
        default: 3
    },
    createdOn: {
        type: Date,
        default: Date.now(),
        required: true
    }
});

module.exports = mongoose.model('admin', adminSchema);
