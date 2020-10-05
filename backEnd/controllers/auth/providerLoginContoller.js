/**
 * @description Controller for provider login
 * @author Jithin Zacharia
 */

const providerModel = require('../../model/providerModel'),
    JWTCertifier = require('../../helpers/JWTCertifier'),
    passwordValidator = require('../../helpers/passwordValidations');

exports.partnerLogin = (req, res) => {
    providerModel.find({email: req.body.email}, (err, user)=> {
        if(err) {
            res.status(400).json(err);
        } else {
            if(!user.length) {
                res.status(400).json("User does not exists. Please register to continue");
            } else if(passwordValidator.comparePassword(
                req.body.password,
                user[0].password
            ) === false) {
                res.status(401).json("Passwords does not match. Please try again later.");
            } else {
                let token = JWTCertifier.generateJWT(
                    user[0].email,
                    user[0].fullName,
                    2
                );
                res.status(200).json({
                    token,
                    status: true
                });
            }
        }
    })
}