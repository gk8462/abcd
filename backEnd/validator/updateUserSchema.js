const joi = require('joi');

const userProfileUpdateSchema= joi.object().keys({
    name: joi.string().exist().required(),
    email: joi.string().exist().email().required(),
    phone_number: joi.string().exist().required()
    //country: joi.string().exist().required(),
    //photo: joi.string().exist().required(),
})

module.exports = userProfileUpdateSchema;