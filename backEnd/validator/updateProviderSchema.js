const joi = require('joi');

const providerProfileUpdateSchema = joi.object().keys({
    fullName: joi.string().required().exist().min(3),
    password: joi.string().exist().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
    email: joi.string().exist().required().email(),
    mobileNumber: joi.string().exist().required(),
    Fees: joi.string().exist().required(),
    country: joi.string().exist().required(),
    City: joi.string().exist().required(),
    ALine1: joi.string(),
    ALine2: joi.string(),
    PinCode: joi.string(),
    
    OrganizationName: joi.string().required().exist(),
    OrganizationAddress: joi.string().required().exist(),
    OrganizationRegNumber: joi.string().required().exist(),
    idType: joi.string().required().exist(),
    servicesOffered: joi.array().required().exist(),
    providerIdentityImg: joi.string(),//.required().exist(),
    partnerType: joi.array().required().exist(),
    busChecked: joi.array(),
    indChecked: joi.array(),
    role: joi.number().optional().valid(2)
})

module.exports = providerProfileUpdateSchema;