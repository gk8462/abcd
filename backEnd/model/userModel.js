/**
 * @fileoverview Mongoose model for adding user data.
 */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
    name: { 
		type: String,
		required: true,
		min: [3, "Invalid name passed"],
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
    phone_number: { 
		type: String,
		required: true 
	}, 
	photo: { 
		type: String,
		required: false 
	},
    role: {
		type: Number, 
		required: true,
		default: 1
	},
	verified:{
		type: Boolean,
		required: false,
		default: false
	},
	photo:{
		type: String,
		required: false
	},
	pancard:{
		type:String,
		required:false
	},
	idType:{
		type: String,
		required: false,
		enum: ['PAN', 'SSN', 'ITIN']
	},
	category: {
		type: String,
		required:false
	},
	createdOn : {
		type: Date,
		default: Date.now(),
		required: true
	}
});

module.exports = mongoose.model('users', userSchema);


   