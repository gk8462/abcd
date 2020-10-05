const joi = require('joi');

const providerApproveSchema = joi.object().keys({
    email: joi.string().required().exist(),
    approved: joi.bool().required().exist()
})

module.exports = providerApproveSchema