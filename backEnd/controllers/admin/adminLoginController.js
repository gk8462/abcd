/**
 * @description Controller for admin login
 * @author Jithin Zacharia
 */

const adminModel = require('../../model/adminModel'),
        JWTCertifier = require('../../helpers/JWTCertifier'),
        passwordValidator = require('../../helpers/passwordValidations');

exports.adminLogin = (req, res) => {
    adminModel.find({email: req.body.email},(err, admins) => {
        if(err) {
            res.status(400).json(err);
        } else {
            if(!admins.length) {
                res.status(400).json("Admin does not exist. Please register to continue");
            } else if(passwordValidator.comparePassword(
                req.body.password,
                admins[0].password
            ) === false) {
                res.status(401).json("Passwords does not match. Please try again later.");
            } else {
                let token = JWTCertifier.generateJWT(
                    admins[0].email,
                    admins[0].name,
                    3
                )
                res.status(200).json({
                    token,
                    status: true
                })
            }
        }
    })
}