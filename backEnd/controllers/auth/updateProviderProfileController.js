const providerModel = require('../../model/providerModel'),
    JWTCertifier = require('../../helpers/JWTCertifier'),
    passwordValidator = require('../../helpers/passwordValidations');

    exports.updateProvider = (req, res) => {
        providerModel.find({partnerId: req.body.partnerId}, (err, users)=> {
            if(err) {
                res.status(400).json(err);
            } else if(!users.length) {
                res.status(400).json("Provider not found. Please register to continue");
            } else {
                providerModel.findOneAndUpdate({partnerId: req.body.partnerId}, {$set: {
                    //partnerId: nameExtractor.getPartnerId(req.body.fullName,req.body.mobileNumber),
                    partnerId:req.body.partnerId,
                    fullName: req.body.fullName,
                   // password: passwordValidator.generatePasswordHash(req.body.password),
                   password: req.body.password,
                    email: req.body.email,
                    mobileNumber: req.body.mobileNumber,
                    Fees: req.body.Fees,
                    City: req.body.City,
                    country: req.body.country,
                    role: 2,
                    ALineOne: req.body.ALine1,
                    ALineTwo: req.body.ALine2,
                    PinCode: req.body.PinCode,
                    OrganizationName: req.body.OrganizationName,
                    OrganizationAddress: req.body.OrganizationAddress,
                    OrganizationRegNumber: req.body.OrganizationRegNumber,
                    idType: req.body.idType,
                    servicesOffered: req.body.servicesOffered,
                    providerIdentityImg: req.body.providerIdentityImg,
                    busChecked: req.body.busChecked,
                    indChecked: req.body.indChecked,
                    partnerType: req.body.partnerType,
                }}, (error, provider) => {
                    if(error) {
                        res.status(400).json(error);
                    } else {
                        res.status(200).json("Profile successfully updated.");
                    }
                })
            }
        })
    }