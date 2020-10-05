const joi = require('joi');

const adminLoginSchema = joi.object().keys({
    email: joi.string().normalize().required().exist().email(),
    password: joi.string().exist().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
})

module.exports = adminLoginSchema;