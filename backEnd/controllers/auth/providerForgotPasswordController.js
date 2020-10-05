/**
 * @description Controller for providers forgetting passwords
 * @author Jithin Zacharia
 */

const providerModel = require('../../model/providerModel'),
    sendEmailProv = require('../../helpers/sendEmail'),
    generatePassword = require('../../helpers/passwordValidations');

exports.providerForgotPassword = (req, res) => {
    providerModel.find({email: req.body.email, role: req.body.role}, (err, users)=> {
        if(err) {
            res.status(400).json(err);
        } else if(!users.length) {
            res.status(400).json('No user found. Please register user to continue.');
        } else {
            let randPassword = generatePassword.generateRandomStrongPassword();
            providerModel.findOneAndUpdate(
                {email: req.body.email},
                {$set: { password: generatePassword.generatePasswordHash(randPassword) }
                }, (error, providers) => {
                if(error) {
                    res.status(400).json(err);
                } else {
                    sendEmailProv(req.body.email, 'Yoloj password change management system', `<h1>Hi ${users[0].fullName}</h1><p>We have successfully changed your passowrd. Please click on this link to login again</p><a href="#"></a>`);
                    res.status(201).json('We have send email to your registered email address. Please follow instructions in your email');
                }
            })
        }
    })
}