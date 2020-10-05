const joi = require('joi');

const userLoginSchema = joi.object().keys({
    email: joi.string().exist().normalize().email(),
    password: joi.string().exist().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
    role: joi.number().required().exist().valid([1])
})

module.exports = userLoginSchema;