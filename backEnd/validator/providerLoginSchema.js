const joi = require('joi');

const providerLoginSchema = joi.object().keys({
    email: joi.string().exist().required(),
    password: joi.string().exist().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
})

module.exports = providerLoginSchema;