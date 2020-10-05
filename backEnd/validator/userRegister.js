const joi = require('joi');

const userRegisterSchema = joi.object().keys({
    name: joi.string().exist().required(),
    email: joi.string().exist().email().required(),
    password: joi.string().exist().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
    phone_number: joi.string().exist().required()
})

module.exports = userRegisterSchema;