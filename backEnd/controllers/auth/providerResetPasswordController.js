/**
 * @description Controller for reseting provider password.
 * @author Jithin Zacharia
 */

const providerModel = require('../../model/providerModel'),
    passwordValidator = require('../../helpers/passwordValidations');

exports.providerResetPassword = (req, res) => {
    providerModel.find({email: req.body.email}, (err, users)=> {
        if(err) {
            res.status(400).json(err);
        } else if(!users.length) {
            res.status(400).json('No user found. Please register to continue.');
        } else if(passwordValidator.comparePassword(req.body.password, users[0].password) === false) {
            res.status(400).json('Password does not match. Please try again later.');
        } else {
            providerModel.findOneAndUpdate({email: req.body.email}, {$set: {password: passwordValidator(req.body.newPassword)}}, (error, provider) => {
                if(error) {
                    res.status(400).json(error);
                } else {
                    res.status(200).json("Password successfully updated.")
                }
            })
        }
    })
}