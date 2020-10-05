/**
 * @description Controller for adding new partner
 * @author Jithin Zacharia
 */

const providerModel = require('../../model/providerModel'),
        uniqueIdGenerator = require('../../helpers/generateId'),
        passwordValidator = require('../../helpers/passwordValidations'),
        nameExtractor = require('../../helpers/generatePartnerId');

exports.registerPartner = (req, res) => {
    providerModel.find({email: req.body.email},{mobileNumber: req.body.mobileNumber}, (err, users)=>{
        if(err) {
            res.status(400).json(err);
        } else {
            if(!users.length) {
                console.log("Object Rcvd",req);
                providerModel.create({
                    partnerId: nameExtractor.getPartnerId(req.body.fullName,req.body.mobileNumber),
                    fullName: req.body.fullName,
                    password: passwordValidator.generatePasswordHash(req.body.password),
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
                }, (error, partner)=> {
                    if(error) {
                        res.status(400).json(error);
                    } else {
                        res.status(201).json("Partner successfully created.");   
                    }
                })
            } else {
                res.status(400).json("User alraedy exist. Please try again later.");
            }
        }
    })
}