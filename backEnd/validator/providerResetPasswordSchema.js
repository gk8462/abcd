const joi = require('joi');

const providerResetPasswordSchema = joi.object().keys({
    email: joi.string().required().exist().email(),
    password: joi.string().exist().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
    newPassword: joi.string().exist().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
})

module.exports = providerResetPasswordSchema;