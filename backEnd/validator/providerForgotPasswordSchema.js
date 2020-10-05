const joi = require('joi');

const providerForgotPasswordSchema = joi.object().keys({
    email: joi.string().required().exist().email(),
    role: joi.number().required().exist().valid([2])
})

module.exports = providerForgotPasswordSchema;