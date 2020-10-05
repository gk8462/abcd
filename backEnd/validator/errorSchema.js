const joi = require('joi');

const errorSchema = joi.object().keys({
    serviceName: joi.string().required().exist(),
    reason: joi.string().required().exist()
})


module.exports = errorSchema;

